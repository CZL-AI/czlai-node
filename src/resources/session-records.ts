// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SessionRecordsAPI from './session-records';

export class SessionRecords extends APIResource {
  /**
   * 保存聊天记录
   */
  history(body: SessionRecordHistoryParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/session-record/history', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface SessionRecordHistoryParams {
  /**
   * 内容
   */
  content: string;

  /**
   * 1-智能问诊 2-健康检测 3-用药分析 4-知识问答 5-图像识别
   */
  module_type: number;

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
   * 1-用户主诉 2-用户回答 3-AI 提问 4-AI 病情小结 5-AI 病例报告 6-AI 输出 7-用户补充
   */
  stage?: number;
}

export namespace SessionRecords {
  export import SessionRecordHistoryParams = SessionRecordsAPI.SessionRecordHistoryParams;
}
