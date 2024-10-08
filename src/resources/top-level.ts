// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as TopLevelAPI from './top-level';

export interface CreateTaskResponse {
  /**
   * The unique identifier of the created task.
   */
  id?: string;
}

export interface GetKeyResponse {
  /**
   * The authentication key to be used in subsequent requests.
   */
  key?: string;
}

export interface GetSmartAccountAddressResponse {
  /**
   * The current nonce of the smart wallet.
   */
  nonce?: string;

  /**
   * The retrieved smart wallet address for the specified owner.
   */
  smart_account_address?: string;
}

export interface ListTasksResponse {
  tasks?: Array<ListTasksResponse.Task>;
}

export namespace ListTasksResponse {
  export interface Task {
    /**
     * The unique identifier of the task.
     */
    id?: string;

    /**
     * The current status of the task.
     */
    status?: 'Active' | 'Completed' | 'Failed' | 'Canceled';
  }
}

export interface CancelTaskParams {
  /**
   * The unique identifier of the task.
   */
  id: string;
}

export interface CreateTaskParams {
  /**
   * Union type for different task actions.
   */
  action: CreateTaskParams.EthTransfer | CreateTaskParams.ContractExecution;

  /**
   * The type of task to create.
   */
  task_type: 'ETHTransferTask' | 'ContractExecutionTask';

  /**
   * Union type for different trigger conditions.
   */
  trigger: CreateTaskParams.Schedule | CreateTaskParams.ContractQuery | CreateTaskParams.Expression;

  /**
   * The epoch time (in seconds) after which the task is no longer valid.
   */
  expired_at?: number;

  /**
   * Optional field to store arbitrary notes or metadata related to the task.
   */
  memo?: string;

  /**
   * The epoch time (in seconds) after which the task becomes valid.
   */
  start_at?: number;
}

export namespace CreateTaskParams {
  export interface EthTransfer {
    /**
     * The hex string of ETH amount.
     */
    amount: string;

    /**
     * The hex string address of the recipient.
     */
    destination: string;
  }

  export interface ContractExecution {
    /**
     * The encoded contract method and its arguments.
     */
    calldata: string;

    /**
     * The target contract address in hex.
     */
    contract_address: string;

    /**
     * Optional - only used for display/format purposes.
     */
    encoded_params?: string;

    /**
     * Optional - only used for display/format purposes.
     */
    method?: string;
  }

  export interface Schedule {
    /**
     * The type of trigger condition.
     */
    trigger_type?: 'TimeCondition' | 'ContractQueryCondition' | 'ExpressionCondition';
  }

  export interface ContractQuery {
    /**
     * The type of trigger condition.
     */
    trigger_type?: 'TimeCondition' | 'ContractQueryCondition' | 'ExpressionCondition';
  }

  export interface Expression {
    /**
     * The type of trigger condition.
     */
    trigger_type?: 'TimeCondition' | 'ContractQueryCondition' | 'ExpressionCondition';
  }
}

export interface DeleteTaskParams {
  /**
   * The unique identifier of the task.
   */
  id: string;
}

export interface GetKeyParams {
  /**
   * The epoch time when your key will expire.
   */
  expired_at: number;

  /**
   * Your wallet address.
   */
  owner: string;

  /**
   * Signature of the message.
   */
  signature: string;
}

export interface GetSmartAccountAddressParams {
  /**
   * The hex address of the account owner whose smart wallet address is being
   * requested.
   */
  owner: string;
}

export namespace TopLevel {
  export import CreateTaskResponse = TopLevelAPI.CreateTaskResponse;
  export import GetKeyResponse = TopLevelAPI.GetKeyResponse;
  export import GetSmartAccountAddressResponse = TopLevelAPI.GetSmartAccountAddressResponse;
  export import ListTasksResponse = TopLevelAPI.ListTasksResponse;
  export import CancelTaskParams = TopLevelAPI.CancelTaskParams;
  export import CreateTaskParams = TopLevelAPI.CreateTaskParams;
  export import DeleteTaskParams = TopLevelAPI.DeleteTaskParams;
  export import GetKeyParams = TopLevelAPI.GetKeyParams;
  export import GetSmartAccountAddressParams = TopLevelAPI.GetSmartAccountAddressParams;
}
