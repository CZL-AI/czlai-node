// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Aipic extends APIResource {
  /**
   * 获取问题选项
   */
  options(body: AipicOptionsParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/aipic/options', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取图片结果(流式)
   */
  picResult(body: AipicPicResultParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/aipic/pic-result', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取问题(流式)
   */
  question(body: AipicQuestionParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/aipic/question', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取诊断报告
   */
  report(body: AipicReportParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/aipic/report', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取诊断报告
   */
  reportTask(body: AipicReportTaskParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/aipic/report-task', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 验证答案是否有效
   */
  validate(body: AipicValidateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/aipic/validate', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AipicOptionsParams {
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

export interface AipicPicResultParams {
  /**
   * 图片归属(1:宠物体态分析、2:宠物表情分析)
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

export interface AipicQuestionParams {
  /**
   * 宠物档案 id
   */
  pet_profile_id?: number;

  /**
   * 会话 id
   */
  session_id?: string;
}

export interface AipicReportParams {
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

export interface AipicReportTaskParams {
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

export interface AipicValidateParams {
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

export declare namespace Aipic {
  export {
    type AipicOptionsParams as AipicOptionsParams,
    type AipicPicResultParams as AipicPicResultParams,
    type AipicQuestionParams as AipicQuestionParams,
    type AipicReportParams as AipicReportParams,
    type AipicReportTaskParams as AipicReportTaskParams,
    type AipicValidateParams as AipicValidateParams,
  };
}
