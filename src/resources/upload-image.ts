// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class UploadImage extends APIResource {
  /**
   * 允许用户上传一张图片
   */
  create(params: UploadImageCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { is_to_cloud, upload_type, ...body } = params;
    return this._client.post(
      '/upload-image',
      Core.multipartFormRequestOptions({
        query: { is_to_cloud, upload_type },
        body,
        ...options,
        headers: { Accept: '*/*', ...options?.headers },
      }),
    );
  }
}

export interface UploadImageCreateParams {
  /**
   * Body param: 要上传的图片文件
   */
  image: Core.Uploadable;

  /**
   * Query param: 是否上传到图床
   */
  is_to_cloud?: number;

  /**
   * Query param: 图片上传类型 1-头像 2-图片识别模块 3-表情包 4-其他
   */
  upload_type?: 1 | 2 | 3 | 4;
}

export declare namespace UploadImage {
  export { type UploadImageCreateParams as UploadImageCreateParams };
}
