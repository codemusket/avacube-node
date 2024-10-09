import { ethers } from 'ethers';
import Avacube from '../src/index'

interface Window {
    ethereum?: {
      isMetaMask?: boolean;
      request: (...args: any[]) => Promise<any>;
      on: (event: string, handler: (...args: any[]) => void) => void;
    };
  }

var window: Window;

async function signMessage(message: string): Promise<string | null> {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request account access if not already granted
        await window.ethereum.request({ method: 'eth_requestAccounts' });
  
        // Get the user's Ethereum account (first one in the array)
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        const account = accounts[0];
  
        if (!account) {
          console.error('No account is connected.');
          return null;
        }
  
        // Prepare the message to be signed (should be UTF-8 encoded string)
        const msgHex = ethers.hexlify(ethers.toUtf8Bytes(message));
  
        // Ask MetaMask to sign the message
        const signature = await window.ethereum.request({
          method: 'personal_sign',
          params: [msgHex, account]
        });
  
        return signature;
      } catch (error) {
        console.error('Error signing message:', error);
        return null;
      }
    } else {
      console.error('MetaMask is not installed.');
      return null;
    }
  }

  async function getSelectedAddress(): Promise<string | null> {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request access to the user's accounts (if not already granted)
        await window.ethereum.request({ method: 'eth_requestAccounts' });
  
        // Get the list of accounts
        const accounts: string[] = await window.ethereum.request({ method: 'eth_accounts' });
  
        if (accounts.length === 0) {
          console.error('No accounts found.');
          return null;
        }
  
        // The first account in the array is the currently selected account in MetaMask
        const selectedAccount = accounts[0];
        console.log('Selected account:', selectedAccount);
  
        return selectedAccount ?? null;
      } catch (error) {
        console.error('Error fetching account:', error);
        return null;
      }
    } else {
      console.error('MetaMask is not installed.');
      return null;
    }
  }

async function getAuthToken(address: string, expired_at: string): Promise<string | null> {
    const message = `key request for ${address} expired at ${expired_at}`
    return signMessage(message);
}

async function makeHoleskyClient(): Promise<Avacube> {
    const address = await getSelectedAddress()
    if (!address) {
        throw new Error("Address is null!")
    }
    const expired_at = Math.floor(+new Date() / 3600 * 24) // hard coded to 24 hours...
    const walletAuthToken = await getAuthToken(address, String(expired_at))

    if (!walletAuthToken) {
        throw new Error("Could not generate auth token!")
    }

    return new Avacube({
        baseURL: 'grpc://aggregator.avaprotocol.org:2206',
        defaultHeaders: { 'X-My-Default-Header': '2' },
        authKey: walletAuthToken,
      });
}

/** 
 * Sends a specified amount of ETH to a given address on the Sepolia network 
 * via the Avacube SDK at a specified future time.
 * 
 * @param sendAmount - The amount of ETH to send.
 * @param toAddress - The recipient's Ethereum address.
 * @param epochToStartAt - The future time (in milliseconds since epoch) 
 *                         when the transfer should be initiated.
 * @returns A promise that resolves to a boolean indicating the success 
 *          or failure of the task creation.
 */
export async function sendEthSepoliaViaAvacubeAtTime(sendAmount: number, toAddress: string, epochToStartAt: number): Promise<boolean> {
    const client = await makeHoleskyClient();

    try {
        const taskParams = {
            task_type: 'ETHTransferTask' as const,
            action: {
                amount: sendAmount.toString(),
                destination: toAddress
            },
            trigger: {
                trigger_type: 'TimeCondition' as const
            },
            start_at: Math.floor(epochToStartAt / 1000) // Current time in seconds
        };

        const task = await client.tasks.create(taskParams);
        console.log('Task created:', task);
        return true;
    } catch (error) {
        console.error('Error creating task:', error);
        return false;
    }
}
