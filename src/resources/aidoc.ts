// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as AidocAPI from './aidoc';

export class Aidoc extends APIResource {
  /**
   * 判断是否需要继续提问
   */
  ifContinueAsk(body: AidocIfContinueAskParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/aidoc/if-continue-ask', {
      body,
      ...options,
      headers: { Accept: 'text/event-stream', ...options?.headers },
    });
  }

  /**
   * 判断是否需要传图
   */
  ifNeedImage(body: AidocIfNeedImageParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/aidoc/if-need-image', { body, ...options });
  }

  /**
   * 获取图片结果(流式)
   */
  picResult(body: AidocPicResultParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/aidoc/pic-result', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 发布获取诊断报告任务
   */
  report(body: AidocReportParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/aidoc/report', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取诊断报告
   */
  reportTask(body: AidocReportTaskParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/aidoc/report-task', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export type AidocIfContinueAskResponse = string;

export type AidocIfNeedImageResponse = unknown;

export interface AidocIfContinueAskParams {
  /**
   * 宠物档案 id
   */
  pet_profile_id?: number;

  /**
   * 会话 id
   */
  session_id?: string;
}

export interface AidocIfNeedImageParams {
  /**
   * 宠物档案 id
   */
  pet_profile_id?: number;

  /**
   * 会话 id
   */
  session_id?: string;
}

export interface AidocPicResultParams {
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

export interface AidocReportParams {
  /**
   * 会话 id
   */
  session_id: string;
}

export interface AidocReportTaskParams {
  /**
   * 会话 id
   */
  session_id: string;

  /**
   * 报告类型
   */
  report_type?: number;
}

export namespace Aidoc {
  export import AidocIfContinueAskResponse = AidocAPI.AidocIfContinueAskResponse;
  export import AidocIfNeedImageResponse = AidocAPI.AidocIfNeedImageResponse;
  export import AidocIfContinueAskParams = AidocAPI.AidocIfContinueAskParams;
  export import AidocIfNeedImageParams = AidocAPI.AidocIfNeedImageParams;
  export import AidocPicResultParams = AidocAPI.AidocPicResultParams;
  export import AidocReportParams = AidocAPI.AidocReportParams;
  export import AidocReportTaskParams = AidocAPI.AidocReportTaskParams;
}
