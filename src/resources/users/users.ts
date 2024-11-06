// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AsrAPI from './asr';
import { Asr, AsrCreateParams } from './asr';
import * as ContactAPI from './contact';
import { Contact, ContactCreateParams } from './contact';
import * as IndustryAPI from './industry';
import { Industry } from './industry';
import * as SummaryAPI from './summary';
import { Summary, SummaryCreateParams } from './summary';
import * as UserInfoAPI from './user-info';
import { UserInfo, UserInfoRetrieveParams } from './user-info';

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

Users.UserInfo = UserInfo;
Users.Contact = Contact;
Users.Summary = Summary;
Users.Asr = Asr;
Users.Industry = Industry;

export declare namespace Users {
  export { type UserChatVParams as UserChatVParams, type UserSendSMSParams as UserSendSMSParams };

  export { UserInfo as UserInfo, type UserInfoRetrieveParams as UserInfoRetrieveParams };

  export { Contact as Contact, type ContactCreateParams as ContactCreateParams };

  export { Summary as Summary, type SummaryCreateParams as SummaryCreateParams };

  export { Asr as Asr, type AsrCreateParams as AsrCreateParams };

  export { Industry as Industry };
}
