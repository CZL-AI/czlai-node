// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as AIMemesAPI from './ai-memes';

export class AIMemes extends APIResource {
  /**
   * 获取表情包数据
   */
  create(body: AIMemeCreateParams, options?: Core.RequestOptions): Core.APIPromise<AIMemeCreateResponse> {
    return this._client.post('/ai-meme', { body, ...options });
  }

  /**
   * 获取用户历史表情包数据列表
   */
  retrieve(
    query?: AIMemeRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AIMemeRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<AIMemeRetrieveResponse>;
  retrieve(
    query: AIMemeRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AIMemeRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/ai-meme', { query, ...options });
  }

  /**
   * 获取 AI 表情包
   */
  generate(
    body: AIMemeGenerateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AIMemeGenerateResponse> {
    return this._client.post('/ai-meme/generate', { body, ...options });
  }
}

export interface AIMeme {
  id?: number;

  context?: AIMeme.Context;

  created_at?: string;

  /**
   * 表情包 url 列表
   */
  meme_image?: unknown;

  /**
   * 原始图片列表
   */
  origin_image?: string;

  updated_at?: string;
}

export namespace AIMeme {
  export interface Context {
    caption_list?: Array<string>;

    /**
     * 1 表示是猫或狗，2 表示非猫狗的动植物，0 表示不是动植物。
     */
    is_cat_or_dog?: number;

    /**
     * 1 表示是合法的，0 表示不合法。
     */
    is_legal?: number;
  }
}

export interface AIMemeCreateResponse {
  data?: AIMeme;

  message?: string;

  success?: boolean;
}

export interface AIMemeRetrieveResponse {
  data?: Array<AIMeme>;

  message?: string;

  success?: boolean;
}

export interface AIMemeGenerateResponse {
  data?: AIMemeGenerateResponse.Data;

  message?: string;

  success?: boolean;
}

export namespace AIMemeGenerateResponse {
  export interface Data {
    /**
     * 表情包地址
     */
    meme_url?: string;
  }
}

export interface AIMemeCreateParams {
  /**
   * 图片地址
   */
  image_url?: string;

  /**
   * 会话 id
   */
  session_id?: string;
}

export interface AIMemeRetrieveParams {
  /**
   * 每页数量
   */
  limit?: number;

  /**
   * 页数
   */
  page?: number;
}

export interface AIMemeGenerateParams {
  /**
   * 文案序号
   */
  context_index?: number;

  /**
   * 表情包 id
   */
  meme_id?: number;
}

export namespace AIMemes {
  export import AIMeme = AIMemesAPI.AIMeme;
  export import AIMemeCreateResponse = AIMemesAPI.AIMemeCreateResponse;
  export import AIMemeRetrieveResponse = AIMemesAPI.AIMemeRetrieveResponse;
  export import AIMemeGenerateResponse = AIMemesAPI.AIMemeGenerateResponse;
  export import AIMemeCreateParams = AIMemesAPI.AIMemeCreateParams;
  export import AIMemeRetrieveParams = AIMemesAPI.AIMemeRetrieveParams;
  export import AIMemeGenerateParams = AIMemesAPI.AIMemeGenerateParams;
}
