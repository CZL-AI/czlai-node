// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as CheckPointsAPI from './check-points';

export class CheckPoints extends APIResource {
  /**
   * 埋点
   */
  create(body: CheckPointCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/check-point', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface CheckPointCreateParams {
  /**
   * 埋点动作
   */
  action?: string;

  /**
   * 微信 code
   */
  code?: string;

  /**
   * 页面路径
   */
  page_path?: string;

  /**
   * 关联 id
   */
  related_id?: string;
}

export namespace CheckPoints {
  export import CheckPointCreateParams = CheckPointsAPI.CheckPointCreateParams;
}
