// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class MedicalRecords extends APIResource {
  /**
   * 获取单个病例报告
   */
  retrieve(
    query: MedicalRecordRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MedicalRecordRetrieveResponse> {
    return this._client.get('/medical-record', { query, ...options });
  }

  /**
   * 修改状态和记录对话进行阶段
   */
  update(body: MedicalRecordUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put('/medical-record', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取医疗报告列表
   */
  createList(
    body: MedicalRecordCreateListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MedicalRecordCreateListResponse> {
    return this._client.post('/medical-record-list', { body, ...options });
  }

  /**
   * 获取进行中的医疗报告
   */
  ongoingRecord(
    query: MedicalRecordOngoingRecordParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.get('/medical-record/ongoing-record', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface MedicalRecord {
  /**
   * 主键 ID
   */
  id?: number;

  /**
   * 创建时间
   */
  created_at?: string | null;

  /**
   * 模块 1-智能问诊 2-健康检测
   */
  module_type?: number | null;

  /**
   * 报告
   */
  report?: string | null;

  /**
   * 对应的 session_id
   */
  session_id?: string | null;

  /**
   * 小结
   */
  summary?: string | null;

  /**
   * 用户 uuid
   */
  user_uuid?: string | null;
}

export interface MedicalRecordRetrieveResponse {
  data?: MedicalRecord;

  message?: string;

  success?: boolean;
}

export interface MedicalRecordCreateListResponse {
  data?: Array<MedicalRecord>;

  message?: string;

  success?: boolean;
}

export interface MedicalRecordRetrieveParams {
  /**
   * 报告 ID
   */
  report_id: number;
}

export interface MedicalRecordUpdateParams {
  is_read?: number;

  /**
   * 医疗报告 ID
   */
  report_id?: number;

  report_time?: string;

  /**
   * 阶段存档
   */
  stage?: string;

  /**
   * 1-进行中 2-已完成 3-手动结束 4-自动结束
   */
  status?: number;
}

export interface MedicalRecordCreateListParams {
  /**
   * 每页数量
   */
  limit?: number;

  module_type?: Array<number>;

  /**
   * 页码
   */
  page?: number;

  /**
   * 宠物档案 id
   */
  pet_profile_id?: Array<number>;
}

export interface MedicalRecordOngoingRecordParams {
  /**
   * 模块类型 1-智能问诊 2-健康检测 3-用药分析 4-知识问答 5-图像识别
   */
  module_type: number;

  /**
   * 宠物档案 id
   */
  pet_profile_id: number;
}

export declare namespace MedicalRecords {
  export {
    type MedicalRecord as MedicalRecord,
    type MedicalRecordRetrieveResponse as MedicalRecordRetrieveResponse,
    type MedicalRecordCreateListResponse as MedicalRecordCreateListResponse,
    type MedicalRecordRetrieveParams as MedicalRecordRetrieveParams,
    type MedicalRecordUpdateParams as MedicalRecordUpdateParams,
    type MedicalRecordCreateListParams as MedicalRecordCreateListParams,
    type MedicalRecordOngoingRecordParams as MedicalRecordOngoingRecordParams,
  };
}
