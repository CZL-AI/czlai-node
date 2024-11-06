// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class AITrials extends APIResource {
  /**
   * 获取问题选项
   */
  options(body: AITrialOptionsParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/ai-trial/options', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取问题(流式)
   */
  question(body: AITrialQuestionParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/ai-trial/question', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AITrialOptionsParams {
  /**
   * 问题
   */
  question?: string;

  /**
   * 1-猫狗 2-异宠
   */
  service_type?: number;

  /**
   * 会话 id
   */
  session_id?: string;
}

export interface AITrialQuestionParams {
  /**
   * 1-猫狗 2-异宠
   */
  service_type?: number;

  /**
   * 会话 id
   */
  session_id?: string;
}

export declare namespace AITrials {
  export {
    type AITrialOptionsParams as AITrialOptionsParams,
    type AITrialQuestionParams as AITrialQuestionParams,
  };
}
