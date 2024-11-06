// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class AIConv extends APIResource {
  /**
   * AI 聊天
   */
  answer(body: AIConvAnswerParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/ai-conv/answer', {
      body,
      ...options,
      headers: { Accept: 'text/event-stream', ...options?.headers },
    });
  }

  /**
   * 获取联想
   */
  relation(body: AIConvRelationParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/ai-conv/relation', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * AI 聊天校验
   */
  validate(body: AIConvValidateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/ai-conv/validate', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export type AIConvAnswerResponse = string;

export interface AIConvAnswerParams {
  /**
   * 会话 id
   */
  session_id?: string;

  /**
   * 用户输入
   */
  user_input?: string;
}

export interface AIConvRelationParams {
  /**
   * 会话 id
   */
  session_id?: string;

  /**
   * 用户输入
   */
  user_input?: string;
}

export interface AIConvValidateParams {
  /**
   * 会话 id
   */
  session_id?: string;

  /**
   * 用户输入
   */
  user_input?: string;
}

export declare namespace AIConv {
  export {
    type AIConvAnswerResponse as AIConvAnswerResponse,
    type AIConvAnswerParams as AIConvAnswerParams,
    type AIConvRelationParams as AIConvRelationParams,
    type AIConvValidateParams as AIConvValidateParams,
  };
}
