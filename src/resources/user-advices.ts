// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class UserAdvices extends APIResource {
  /**
   * 用户反馈
   */
  create(body: UserAdviceCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/user-advice', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface UserAdviceCreateParams {
  /**
   * 反馈类型
   */
  advice_type: string;

  /**
   * 反馈内容
   */
  description: string;

  image_list: Array<string>;
}

export declare namespace UserAdvices {
  export { type UserAdviceCreateParams as UserAdviceCreateParams };
}
