// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

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

export declare namespace CheckPoints {
  export { type CheckPointCreateParams as CheckPointCreateParams };
}
