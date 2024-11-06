// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as IsAddWecomeAPI from './is-add-wecome';
import { IsAddWecome, IsAddWecomeRetrieveResponse } from './is-add-wecome';

export class UserModuleUsages extends APIResource {
  isAddWecome: IsAddWecomeAPI.IsAddWecome = new IsAddWecomeAPI.IsAddWecome(this._client);

  /**
   * 签到
   */
  checkin(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/user-module-usage/checkin', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 领取添加企微的奖励
   */
  getAddWecomeBonus(
    body: UserModuleUsageGetAddWecomeBonusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserModuleUsageGetAddWecomeBonusResponse> {
    return this._client.post('/user-module-usage/get-add-wecome-bonus', { body, ...options });
  }

  /**
   * 获取微信小程序二维码
   */
  getWechatMiniQrcode(
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserModuleUsageGetWechatMiniQrcodeResponse> {
    return this._client.post('/user-module-usage/get-wechat-mini-qrcode', options);
  }
}

export interface UserModuleUsageGetAddWecomeBonusResponse {
  data?: UserModuleUsageGetAddWecomeBonusResponse.Data;

  message?: string;

  success?: boolean;
}

export namespace UserModuleUsageGetAddWecomeBonusResponse {
  export interface Data {
    is_add_wecome?: number;
  }
}

export interface UserModuleUsageGetWechatMiniQrcodeResponse {
  data?: UserModuleUsageGetWechatMiniQrcodeResponse.Data;

  message?: string;

  success?: boolean;
}

export namespace UserModuleUsageGetWechatMiniQrcodeResponse {
  export interface Data {
    code_url?: string;
  }
}

export interface UserModuleUsageGetAddWecomeBonusParams {
  /**
   * 1-智能问诊 2-健康检测 3-用药分析 4-知识问答 5-图像识别
   */
  module_type?: number;
}

UserModuleUsages.IsAddWecome = IsAddWecome;

export declare namespace UserModuleUsages {
  export {
    type UserModuleUsageGetAddWecomeBonusResponse as UserModuleUsageGetAddWecomeBonusResponse,
    type UserModuleUsageGetWechatMiniQrcodeResponse as UserModuleUsageGetWechatMiniQrcodeResponse,
    type UserModuleUsageGetAddWecomeBonusParams as UserModuleUsageGetAddWecomeBonusParams,
  };

  export { IsAddWecome as IsAddWecome, type IsAddWecomeRetrieveResponse as IsAddWecomeRetrieveResponse };
}
