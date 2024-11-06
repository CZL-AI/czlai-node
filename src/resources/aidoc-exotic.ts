// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class AidocExotic extends APIResource {
  /**
   * 判断是否需要继续提问
   */
  askContinue(body: AidocExoticAskContinueParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/aidoc-exotic/if-continue-ask', {
      body,
      ...options,
      headers: { Accept: 'text/event-stream', ...options?.headers },
    });
  }

  /**
   * 判断是否需要传图
   */
  ifNeedImage(body: AidocExoticIfNeedImageParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/aidoc-exotic/if-need-image', { body, ...options });
  }

  /**
   * 获取关键词,科室
   */
  keywords(
    body: AidocExoticKeywordsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AidocExoticKeywordsResponse> {
    return this._client.post('/aidoc-exotic/keywords', { body, ...options });
  }

  /**
   * 获取问题选项
   */
  options(body: AidocExoticOptionsParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/aidoc-exotic/options', {
      body,
      ...options,
      headers: { Accept: 'text/event-stream', ...options?.headers },
    });
  }

  /**
   * 获取图片结果(流式)
   */
  picResult(body: AidocExoticPicResultParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/aidoc-exotic/pic-result', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取问题(流式)
   */
  question(body: AidocExoticQuestionParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/aidoc-exotic/question', {
      body,
      ...options,
      headers: { Accept: 'text/event-stream', ...options?.headers },
    });
  }

  /**
   * 发布获取诊断报告任务
   */
  report(body: AidocExoticReportParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/aidoc-exotic/report', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取诊断报告
   */
  reportTask(body: AidocExoticReportTaskParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/aidoc-exotic/report-task', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取病情小结(流式)
   */
  summarize(body: AidocExoticSummarizeParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/aidoc-exotic/summary', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export type AidocExoticAskContinueResponse = string;

export type AidocExoticIfNeedImageResponse = unknown;

export interface AidocExoticKeywordsResponse {
  data?: AidocExoticKeywordsResponse.Data;

  message?: string;

  success?: boolean;
}

export namespace AidocExoticKeywordsResponse {
  export interface Data {
    /**
     * 关键词
     */
    keywords?: string;

    /**
     * 科室
     */
    unit?: string;
  }
}

export type AidocExoticOptionsResponse = string;

export type AidocExoticQuestionResponse = string;

export interface AidocExoticAskContinueParams {
  /**
   * 宠物档案 id
   */
  pet_profile_id?: number;

  /**
   * 会话 id
   */
  session_id?: string;
}

export interface AidocExoticIfNeedImageParams {
  /**
   * 宠物档案 id
   */
  pet_profile_id?: number;

  /**
   * 会话 id
   */
  session_id?: string;
}

export interface AidocExoticKeywordsParams {
  /**
   * 用户主诉
   */
  content?: string;

  /**
   * 宠物档案 id
   */
  pet_profile_id?: number;

  /**
   * 会话 id
   */
  session_id?: string;
}

export interface AidocExoticOptionsParams {
  /**
   * 宠物档案 id
   */
  pet_profile_id?: number;

  /**
   * 问题
   */
  question?: string;

  /**
   * 会话 id
   */
  session_id?: string;
}

export interface AidocExoticPicResultParams {
  /**
   * 图片 url
   */
  img_url?: string;

  /**
   * 宠物档案 id
   */
  pet_profile_id?: number;

  /**
   * 会话 id
   */
  session_id?: string;
}

export interface AidocExoticQuestionParams {
  /**
   * 宠物档案 id
   */
  pet_profile_id?: number;

  /**
   * 会话 id
   */
  session_id?: string;
}

export interface AidocExoticReportParams {
  /**
   * 会话 id
   */
  session_id: string;
}

export interface AidocExoticReportTaskParams {
  /**
   * 会话 id
   */
  session_id: string;

  /**
   * 报告类型
   */
  report_type?: number;
}

export interface AidocExoticSummarizeParams {
  /**
   * 图片地址
   */
  image_url?: string;

  /**
   * 宠物档案 id
   */
  pet_profile_id?: number;

  /**
   * 会话 id
   */
  session_id?: string;
}

export declare namespace AidocExotic {
  export {
    type AidocExoticAskContinueResponse as AidocExoticAskContinueResponse,
    type AidocExoticIfNeedImageResponse as AidocExoticIfNeedImageResponse,
    type AidocExoticKeywordsResponse as AidocExoticKeywordsResponse,
    type AidocExoticOptionsResponse as AidocExoticOptionsResponse,
    type AidocExoticQuestionResponse as AidocExoticQuestionResponse,
    type AidocExoticAskContinueParams as AidocExoticAskContinueParams,
    type AidocExoticIfNeedImageParams as AidocExoticIfNeedImageParams,
    type AidocExoticKeywordsParams as AidocExoticKeywordsParams,
    type AidocExoticOptionsParams as AidocExoticOptionsParams,
    type AidocExoticPicResultParams as AidocExoticPicResultParams,
    type AidocExoticQuestionParams as AidocExoticQuestionParams,
    type AidocExoticReportParams as AidocExoticReportParams,
    type AidocExoticReportTaskParams as AidocExoticReportTaskParams,
    type AidocExoticSummarizeParams as AidocExoticSummarizeParams,
  };
}
