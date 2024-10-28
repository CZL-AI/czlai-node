// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as UploadImageOssAPI from './upload-image-oss';

export class UploadImageOss extends APIResource {
  /**
   * 允许用户上传一张图片
   */
  create(params: UploadImageOssCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { upload_type, upload_to_local, ...body } = params;
    return this._client.post(
      '/upload-image-oss',
      Core.multipartFormRequestOptions({
        query: { upload_type, upload_to_local },
        body,
        ...options,
        headers: { Accept: '*/*', ...options?.headers },
      }),
    );
  }
}

export interface UploadImageOssCreateParams {
  /**
   * Query param: 图片上传类型 1-头像 2-图片识别模块 3-表情包 4-其他
   */
  upload_type: 1 | 2 | 3 | 4;

  /**
   * Body param: 要上传的图片文件
   */
  image: Core.Uploadable;

  /**
   * Query param: 是否上传到本地服务器
   */
  upload_to_local?: number;
}

export namespace UploadImageOss {
  export import UploadImageOssCreateParams = UploadImageOssAPI.UploadImageOssCreateParams;
}
