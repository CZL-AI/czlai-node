// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as UserInfoAPI from './user-info';

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

export namespace UserInfo {
  export import UserInfoRetrieveParams = UserInfoAPI.UserInfoRetrieveParams;
}
