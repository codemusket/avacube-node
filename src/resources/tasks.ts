// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as TasksAPI from './tasks';

export class Tasks extends APIResource {
  /**
   * Create a New Task
   */
  create(body: TaskCreateParams, options?: Core.RequestOptions): Core.APIPromise<TaskCreateResponse> {
    return this._client.post('/CreateTask', { body, ...options });
  }

  /**
   * List Tasks
   */
  list(options?: Core.RequestOptions): Core.APIPromise<TaskListResponse> {
    return this._client.get('/ListTasks', options);
  }

  /**
   * Delete a Task
   */
  delete(body: TaskDeleteParams, options?: Core.RequestOptions): Core.APIPromise<BoolValue> {
    return this._client.post('/DeleteTask', { body, ...options });
  }

  /**
   * Cancel a Task
   */
  cancel(body: TaskCancelParams, options?: Core.RequestOptions): Core.APIPromise<BoolValue> {
    return this._client.post('/CancelTask', { body, ...options });
  }
}

export interface BoolValue {
  /**
   * Indicates whether the operation was successful (true) or not (false).
   */
  value?: boolean;
}

export interface TaskCreateResponse {
  /**
   * The unique identifier of the created task.
   */
  id?: string;
}

export interface TaskListResponse {
  tasks?: Array<TaskListResponse.Task>;
}

export namespace TaskListResponse {
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

export interface TaskCreateParams {
  /**
   * Union type for different task actions.
   */
  action: TaskCreateParams.EthTransfer | TaskCreateParams.ContractExecution;

  /**
   * The type of task to create.
   */
  task_type: 'ETHTransferTask' | 'ContractExecutionTask';

  /**
   * Union type for different trigger conditions.
   */
  trigger: TaskCreateParams.Schedule | TaskCreateParams.ContractQuery | TaskCreateParams.Expression;

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

export namespace TaskCreateParams {
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
     * A crontab expression representing when the task can be triggered.
     */
    cron?: string;

    /**
     * A list of epoch timestamps when the task can be triggered.
     */
    fixed?: Array<number>;

    /**
     * The type of trigger condition.
     */
    trigger_type?: 'TimeCondition' | 'ContractQueryCondition' | 'ExpressionCondition';
  }

  export interface ContractQuery {
    /**
     * Encoded payload in hex format to send to the contract.
     */
    callmsg: string;

    /**
     * Target contract address in hex format.
     */
    contract_address: string;

    /**
     * The type of trigger condition.
     */
    trigger_type?: 'TimeCondition' | 'ContractQueryCondition' | 'ExpressionCondition';
  }

  export interface Expression {
    /**
     * The raw expression to be evaluated.
     */
    expression?: string;

    /**
     * The type of trigger condition.
     */
    trigger_type?: 'TimeCondition' | 'ContractQueryCondition' | 'ExpressionCondition';
  }
}

export interface TaskDeleteParams {
  /**
   * The unique identifier of the task.
   */
  id: string;
}

export interface TaskCancelParams {
  /**
   * The unique identifier of the task.
   */
  id: string;
}

export namespace Tasks {
  export import BoolValue = TasksAPI.BoolValue;
  export import TaskCreateResponse = TasksAPI.TaskCreateResponse;
  export import TaskListResponse = TasksAPI.TaskListResponse;
  export import TaskCreateParams = TasksAPI.TaskCreateParams;
  export import TaskDeleteParams = TasksAPI.TaskDeleteParams;
  export import TaskCancelParams = TasksAPI.TaskCancelParams;
}
