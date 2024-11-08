// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as BuriedpointsAPI from './buriedpoints';

export class Buriedpoints extends APIResource {
  /**
   * 保存页埋点
   */
  create(body: BuriedpointCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/page-buriedpoint', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface BuriedpointCreateParams {
  /**
   * 参数
   */
  point: string;

  /**
   * 微信 code
   */
  code?: string;
}

export namespace Buriedpoints {
  export import BuriedpointCreateParams = BuriedpointsAPI.BuriedpointCreateParams;
}
