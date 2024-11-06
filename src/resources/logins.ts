// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Logins extends APIResource {
  /**
   * 短信登录
   */
  sms(body: LoginSMSParams, options?: Core.RequestOptions): Core.APIPromise<LoginResponse> {
    return this._client.post('/sms-login', { body, ...options });
  }

  /**
   * Logs in the user by WeChat
   */
  wechat(body: LoginWechatParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/wechat-login', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface LoginResponse {
  authTokens?: LoginResponse.AuthTokens;

  message?: string;

  success?: boolean;
}

export namespace LoginResponse {
  export interface AuthTokens {
    accessToken: string;

    refreshToken: string;
  }
}

export interface LoginSMSParams {
  code: string;

  phone: string;

  /**
   * 1-微信小程序 2-安卓 APP 3-IOS APP
   */
  login_from?: number;
}

export interface LoginWechatParams {
  /**
   * 会话 id
   */
  wechat_code: string;

  /**
   * 加密数据
   */
  encryptedData?: string;

  /**
   * 加密初始向量
   */
  iv?: string;

  /**
   * 模块类型 1-智能问诊 2-健康检测 3-用药分析 4-知识问答 5-图片识别
   */
  module_type?: number;

  /**
   * 手机号
   */
  phone_number?: string;

  /**
   * 推广人 sid
   */
  spread_id?: number;
}

export declare namespace Logins {
  export {
    type LoginResponse as LoginResponse,
    type LoginSMSParams as LoginSMSParams,
    type LoginWechatParams as LoginWechatParams,
  };
}
