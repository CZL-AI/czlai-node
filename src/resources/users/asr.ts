// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AsrAPI from './asr';

export class Asr extends APIResource {
  /**
   * 语音识别
   */
  create(body: AsrCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/asr', { body, ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}

export interface AsrCreateParams {
  length?: number;

  speech?: string;
}

export namespace Asr {
  export import AsrCreateParams = AsrAPI.AsrCreateParams;
}
