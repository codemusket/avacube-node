// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as TasksAPI from './tasks';

export class Tasks extends APIResource {
  /**
   * List Tasks
   */
  list(options?: Core.RequestOptions): Core.APIPromise<TaskListResponse> {
    return this._client.get('/ListTasks', options);
  }
}

export interface BoolValue {
  /**
   * Indicates whether the operation was successful (true) or not (false).
   */
  value?: boolean;
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

export namespace Tasks {
  export import BoolValue = TasksAPI.BoolValue;
  export import TaskListResponse = TasksAPI.TaskListResponse;
}
