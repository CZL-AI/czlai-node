// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as UsersAPI from './users';
import * as AsrAPI from './asr';
import * as ContactAPI from './contact';
import * as IndustryAPI from './industry';
import * as SummaryAPI from './summary';
import * as UserInfoAPI from './user-info';

export class Users extends APIResource {
  userInfo: UserInfoAPI.UserInfo = new UserInfoAPI.UserInfo(this._client);
  contact: ContactAPI.Contact = new ContactAPI.Contact(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  asr: AsrAPI.Asr = new AsrAPI.Asr(this._client);
  industry: IndustryAPI.Industry = new IndustryAPI.Industry(this._client);

  /**
   * AI 图片聊天
   */
  chatV(body: UserChatVParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/chat-v', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Logs out the user
   */
  logout(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/logout', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }

  /**
   * 发验证短信
   */
  sendSMS(body: UserSendSMSParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/send-sms', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface UserChatVParams {
  content?: string;

  session_id?: string;
}

export interface UserSendSMSParams {
  phone?: string;
}

export namespace Users {
  export import UserChatVParams = UsersAPI.UserChatVParams;
  export import UserSendSMSParams = UsersAPI.UserSendSMSParams;
  export import UserInfo = UserInfoAPI.UserInfo;
  export import UserInfoRetrieveParams = UserInfoAPI.UserInfoRetrieveParams;
  export import Contact = ContactAPI.Contact;
  export import ContactCreateParams = ContactAPI.ContactCreateParams;
  export import Summary = SummaryAPI.Summary;
  export import SummaryCreateParams = SummaryAPI.SummaryCreateParams;
  export import Asr = AsrAPI.Asr;
  export import AsrCreateParams = AsrAPI.AsrCreateParams;
  export import Industry = IndustryAPI.Industry;
}
