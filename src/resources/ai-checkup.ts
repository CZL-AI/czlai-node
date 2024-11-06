// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class AICheckup extends APIResource {
  /**
   * 检查是否为当月首检
   */
  isFirst(
    query: AICheckupIsFirstParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AICheckupIsFirstResponse> {
    return this._client.get('/ai-checkup/is-first', { query, ...options });
  }

  /**
   * 获取图片结果
   */
  picResult(body: AICheckupPicResultParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/ai-checkup/pic-result', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取问题
   */
  question(body: AICheckupQuestionParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/ai-checkup/question', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取问题
   */
  questionResult(body: AICheckupQuestionResultParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/ai-checkup/question-result', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取诊断报告
   */
  report(body: AICheckupReportParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/ai-checkup/report', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取诊断报告
   */
  reportTask(body: AICheckupReportTaskParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/ai-checkup/report-task', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 开始一个新的会话
   */
  sessionStart(options?: Core.RequestOptions): Core.APIPromise<AICheckupSessionStartResponse> {
    return this._client.get('/ai-checkup/session-start', options);
  }

  /**
   * 生成总结
   */
  summary(body: AICheckupSummaryParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/ai-checkup/summary', {
      body,
      ...options,
      headers: { Accept: 'text/event-stream', ...options?.headers },
    });
  }

  /**
   * 更新宠物档案的体检参数
   */
  updateProfile(
    body: AICheckupUpdateProfileParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AICheckupUpdateProfileResponse> {
    return this._client.post('/ai-checkup/update-profile', { body, ...options });
  }
}

export interface AICheckupIsFirstResponse {
  data?: AICheckupIsFirstResponse.Data;

  message?: string;

  success?: boolean;
}

export namespace AICheckupIsFirstResponse {
  export interface Data {
    /**
     * 是否为当月首检
     */
    is_first?: boolean;
  }
}

export interface AICheckupSessionStartResponse {
  data?: AICheckupSessionStartResponse.Data;

  message?: string;

  success?: boolean;
}

export namespace AICheckupSessionStartResponse {
  export interface Data {
    session_id?: string;
  }
}

export type AICheckupSummaryResponse = string;

export interface AICheckupUpdateProfileResponse {
  data?: unknown;

  message?: string;

  success?: boolean;
}

export interface AICheckupIsFirstParams {
  /**
   * 宠物档案 ID
   */
  pet_profile_id: number;
}

export interface AICheckupPicResultParams {
  /**
   * 图片 url
   */
  img_url: string;

  /**
   * 宠物档案 id
   */
  pet_profile_id: number;

  /**
   * 会话 id
   */
  session_id: string;
}

export interface AICheckupQuestionParams {
  /**
   * 宠物档案 id
   */
  pet_profile_id: number;

  /**
   * 会话 id
   */
  session_id: string;
}

export interface AICheckupQuestionResultParams {
  /**
   * 宠物档案 id
   */
  index: number;

  /**
   * 宠物档案 id
   */
  pet_profile_id: number;

  /**
   * 回答 id
   */
  question_id: string;

  /**
   * 题目轮次
   */
  round: string;

  /**
   * 会话 id
   */
  session_id: string;
}

export interface AICheckupReportParams {
  /**
   * 宠物档案 id
   */
  pet_profile_id: number;

  /**
   * 会话 id
   */
  session_id: string;
}

export interface AICheckupReportTaskParams {
  /**
   * 会话 id
   */
  session_id: string;

  /**
   * 图片 url
   */
  img_url?: string;

  /**
   * 报告类型
   */
  report_type?: number;
}

export interface AICheckupSummaryParams {
  /**
   * 宠物档案 id
   */
  pet_profile_id?: number;

  /**
   * 会话 id
   */
  session_id?: string;
}

export interface AICheckupUpdateProfileParams {
  /**
   * 宠物档案 id
   */
  pet_profile_id?: number;

  /**
   * 会话 id
   */
  session_id?: string;

  /**
   * 更新类型, 可选 1,2,3
   */
  update_type?: number;
}

export declare namespace AICheckup {
  export {
    type AICheckupIsFirstResponse as AICheckupIsFirstResponse,
    type AICheckupSessionStartResponse as AICheckupSessionStartResponse,
    type AICheckupSummaryResponse as AICheckupSummaryResponse,
    type AICheckupUpdateProfileResponse as AICheckupUpdateProfileResponse,
    type AICheckupIsFirstParams as AICheckupIsFirstParams,
    type AICheckupPicResultParams as AICheckupPicResultParams,
    type AICheckupQuestionParams as AICheckupQuestionParams,
    type AICheckupQuestionResultParams as AICheckupQuestionResultParams,
    type AICheckupReportParams as AICheckupReportParams,
    type AICheckupReportTaskParams as AICheckupReportTaskParams,
    type AICheckupSummaryParams as AICheckupSummaryParams,
    type AICheckupUpdateProfileParams as AICheckupUpdateProfileParams,
  };
}
