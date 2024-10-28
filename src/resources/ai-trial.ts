// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as AITrialAPI from './ai-trial';

export class AITrial extends APIResource {
  /**
   * AI 聊天
   */
  answer(body: AITrialAnswerParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/ai-trial/answer', {
      body,
      ...options,
      headers: { Accept: 'text/event-stream', ...options?.headers },
    });
  }

  /**
   * 保存聊天记录
   */
  history(body: AITrialHistoryParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/ai-trial/history', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取问答联想
   */
  relation(body: AITrialRelationParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/ai-trial/relation', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 发布获取诊断报告任务
   */
  report(body: AITrialReportParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/ai-trial/report', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 流程开始
   */
  sessionStart(body: AITrialSessionStartParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/ai-trial/session-start', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取病情小结(流式)
   */
  summary(body: AITrialSummaryParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/ai-trial/summary', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export type AITrialAnswerResponse = string;

export interface AITrialAnswerParams {
  /**
   * 1-猫狗 2-异宠
   */
  service_type?: number;

  /**
   * 会话 id
   */
  session_id?: string;

  /**
   * 用户输入
   */
  user_input?: string;
}

export interface AITrialHistoryParams {
  /**
   * 内容
   */
  content: string;

  /**
   * 角色, 取值为其中之一 ==>[user, ai]
   */
  role: string;

  /**
   * 会话 id
   */
  session_id: string;

  /**
   * 1-文字 2-图文
   */
  content_type?: number;

  /**
   * 1-智能问诊 2-健康检测 3-用药分析 4-知识问答 5-图像识别
   */
  module_type?: number;

  /**
   * 1-用户主诉 2-用户回答 3-AI 提问 4-AI 病情小结 5-AI 病例报告 6-AI 输出 7-用户补充
   */
  stage?: number;
}

export interface AITrialRelationParams {
  /**
   * 1-猫狗 2-异宠
   */
  service_type?: 1 | 2;

  /**
   * 会话 id
   */
  session_id?: string;
}

export interface AITrialReportParams {
  /**
   * 1-猫狗 2-异宠
   */
  service_type: number;

  /**
   * 会话 id
   */
  session_id: string;
}

export interface AITrialSessionStartParams {
  /**
   * 用户主诉
   */
  content?: string;

  /**
   * 1-猫狗 2-异宠
   */
  service_type?: number;
}

export interface AITrialSummaryParams {
  /**
   * 1-猫狗 2-异宠
   */
  service_type?: number;

  /**
   * 会话 id
   */
  session_id?: string;
}

export namespace AITrial {
  export import AITrialAnswerResponse = AITrialAPI.AITrialAnswerResponse;
  export import AITrialAnswerParams = AITrialAPI.AITrialAnswerParams;
  export import AITrialHistoryParams = AITrialAPI.AITrialHistoryParams;
  export import AITrialRelationParams = AITrialAPI.AITrialRelationParams;
  export import AITrialReportParams = AITrialAPI.AITrialReportParams;
  export import AITrialSessionStartParams = AITrialAPI.AITrialSessionStartParams;
  export import AITrialSummaryParams = AITrialAPI.AITrialSummaryParams;
}
