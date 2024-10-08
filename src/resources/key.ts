// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as KeyAPI from './key';

export class Key extends APIResource {
  /**
   * Exchange for an Auth Token
   */
  retrieve(body: KeyRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<KeyRetrieveResponse> {
    return this._client.post('/GetKey', { body, ...options });
  }
}

export interface KeyRetrieveResponse {
  /**
   * The authentication key to be used in subsequent requests.
   */
  key?: string;
}

export interface KeyRetrieveParams {
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

export namespace Key {
  export import KeyRetrieveResponse = KeyAPI.KeyRetrieveResponse;
  export import KeyRetrieveParams = KeyAPI.KeyRetrieveParams;
}
