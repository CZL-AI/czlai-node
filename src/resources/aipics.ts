// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as AipicsAPI from './aipics';

export class Aipics extends APIResource {
  /**
   * 获取小结(流式)
   */
  summary(body: AipicSummaryParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/aipic/summary', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AipicSummaryParams {
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

export namespace Aipics {
  export import AipicSummaryParams = AipicsAPI.AipicSummaryParams;
}
