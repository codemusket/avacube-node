// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as API from './resources/index';

const environments = {
  production: 'grpc://aggregator.avaprotocol.org:2206',
  environment_1: 'grpc://aggregator-holesky.avaprotocol.org:2206',
  environment_2: 'grpc://127.0.0.1:2206',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Authentication key required for accessing the API
   */
  authKey?: string | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `grpc://aggregator.avaprotocol.org:2206`
   * - `environment_1` corresponds to `grpc://aggregator-holesky.avaprotocol.org:2206`
   * - `environment_2` corresponds to `grpc://127.0.0.1:2206`
   */
  environment?: Environment;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['AVACUBE_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Avacube API.
 */
export class Avacube extends Core.APIClient {
  authKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Avacube API.
   *
   * @param {string | undefined} [opts.authKey=process.env['AUTH_KEY'] ?? undefined]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['AVACUBE_BASE_URL'] ?? grpc://aggregator.avaprotocol.org:2206] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('AVACUBE_BASE_URL'),
    authKey = Core.readEnv('AUTH_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (authKey === undefined) {
      throw new Errors.AvacubeError(
        "The AUTH_KEY environment variable is missing or empty; either provide it, or instantiate the Avacube client with an authKey option, like new Avacube({ authKey: 'My Auth Key' }).",
      );
    }

    const options: ClientOptions = {
      authKey,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.AvacubeError(
        'Ambiguous URL; The `baseURL` option (or AVACUBE_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.authKey = authKey;
  }

  smartAccountAddress: API.SmartAccountAddress = new API.SmartAccountAddress(this);
  tasks: API.Tasks = new API.Tasks(this);
  key: API.Key = new API.Key(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { authkey: this.authKey };
  }

  static Avacube = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static AvacubeError = Errors.AvacubeError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  AvacubeError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Avacube {
  export import RequestOptions = Core.RequestOptions;

  export import SmartAccountAddress = API.SmartAccountAddress;
  export import AddressResp = API.AddressResp;
  export import SmartAccountAddressRetrieveParams = API.SmartAccountAddressRetrieveParams;

  export import Tasks = API.Tasks;
  export import BoolValue = API.BoolValue;
  export import TaskCreateResponse = API.TaskCreateResponse;
  export import TaskListResponse = API.TaskListResponse;
  export import TaskCreateParams = API.TaskCreateParams;
  export import TaskDeleteParams = API.TaskDeleteParams;
  export import TaskCancelParams = API.TaskCancelParams;

  export import Key = API.Key;
  export import KeyRetrieveResponse = API.KeyRetrieveResponse;
  export import KeyRetrieveParams = API.KeyRetrieveParams;
}

export default Avacube;
