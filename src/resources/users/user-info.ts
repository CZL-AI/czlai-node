// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class UserInfo extends APIResource {
  /**
   * 获取用户信息
   */
  retrieve(query: UserInfoRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/user-info', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface UserInfoRetrieveParams {
  /**
   * 用户 UUID
   */
  uuid: string;
}

export declare namespace UserInfo {
  export { type UserInfoRetrieveParams as UserInfoRetrieveParams };
}
