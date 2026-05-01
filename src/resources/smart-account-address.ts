// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class SmartAccountAddress extends APIResource {
  /**
   * Retrieve Smart Account Address
   */
  retrieve(
    body: SmartAccountAddressRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressResp> {
    return this._client.post('/GetSmartAccountAddress', { body, ...options });
  }
}

export interface AddressResp {
  /**
   * The current nonce of the smart wallet.
   */
  nonce?: string;

  /**
   * The retrieved smart wallet address for the specified owner.
   */
  smart_account_address?: string;
}

export interface SmartAccountAddressRetrieveParams {
  /**
   * The hex address of the account owner whose smart wallet address is being
   * requested.
   */
  owner: string;
}

export declare namespace SmartAccountAddress {
  export {
    type AddressResp as AddressResp,
    type SmartAccountAddressRetrieveParams as SmartAccountAddressRetrieveParams,
  };
}
