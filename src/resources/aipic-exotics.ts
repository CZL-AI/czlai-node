// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class AipicExotics extends APIResource {
  /**
   * 获取问题选项
   */
  options(body: AipicExoticOptionsParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/aipic-exotic/options', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取图片结果(流式)
   */
  picResult(body: AipicExoticPicResultParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/aipic-exotic/pic-result', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取问题(流式)
   */
  question(body: AipicExoticQuestionParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/aipic-exotic/question', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取诊断报告
   */
  report(body: AipicExoticReportParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/aipic-exotic/report', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取诊断报告
   */
  reportTask(body: AipicExoticReportTaskParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/aipic-exotic/report-task', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取小结(流式)
   */
  summary(body: AipicExoticSummaryParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/aipic-exotic/summary', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 验证答案是否有效
   */
  validate(body: AipicExoticValidateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/aipic-exotic/validate', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AipicExoticOptionsParams {
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

export interface AipicExoticPicResultParams {
  /**
   * 图片归属(1:宠物品种分析、2:宠物表情分析)
   */
  img_belong?: number;

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

export interface AipicExoticQuestionParams {
  /**
   * 宠物档案 id
   */
  pet_profile_id?: number;

  /**
   * 会话 id
   */
  session_id?: string;
}

export interface AipicExoticReportParams {
  /**
   * 会话 id
   */
  session_id: string;

  /**
   * 图片 url
   */
  img_url?: string;

  /**
   * 宠物档案 id
   */
  pet_profile_id?: number;

  /**
   * 图片归属(1:宠物体态分析、2:宠物表情分析、3:牙齿分析)
   */
  sub_module_type?: number;
}

export interface AipicExoticReportTaskParams {
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

export interface AipicExoticSummaryParams {
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

  /**
   * 图片归属(1:宠物体态分析、2:宠物表情分析)
   */
  sub_module_type?: number;
}

export interface AipicExoticValidateParams {
  /**
   * 用户回答
   */
  answer?: string;

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

export declare namespace AipicExotics {
  export {
    type AipicExoticOptionsParams as AipicExoticOptionsParams,
    type AipicExoticPicResultParams as AipicExoticPicResultParams,
    type AipicExoticQuestionParams as AipicExoticQuestionParams,
    type AipicExoticReportParams as AipicExoticReportParams,
    type AipicExoticReportTaskParams as AipicExoticReportTaskParams,
    type AipicExoticSummaryParams as AipicExoticSummaryParams,
    type AipicExoticValidateParams as AipicExoticValidateParams,
  };
}
