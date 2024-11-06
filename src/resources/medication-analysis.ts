// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class MedicationAnalysis extends APIResource {
  /**
   * 获取图片结果(流式)
   */
  picResult(body: MedicationAnalysisPicResultParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/medication_analysis/pic-result', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取诊断报告
   */
  report(body: MedicationAnalysisReportParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/medication_analysis/report', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取病情小结(流式)
   */
  summary(body: MedicationAnalysisSummaryParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/medication_analysis/summary', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface MedicationAnalysisPicResultParams {
  /**
   * 图片归属(1:宠物体态分析、2:宠物表情分析、3:牙齿分析)
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

export interface MedicationAnalysisReportParams {
  /**
   * 宠物档案 id
   */
  pet_profile_id?: number;

  /**
   * 会话 id
   */
  session_id?: string;
}

export interface MedicationAnalysisSummaryParams {
  /**
   * 宠物档案 id
   */
  pet_profile_id?: number;

  /**
   * 会话 id
   */
  session_id?: string;
}

export declare namespace MedicationAnalysis {
  export {
    type MedicationAnalysisPicResultParams as MedicationAnalysisPicResultParams,
    type MedicationAnalysisReportParams as MedicationAnalysisReportParams,
    type MedicationAnalysisSummaryParams as MedicationAnalysisSummaryParams,
  };
}
