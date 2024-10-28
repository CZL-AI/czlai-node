// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as UploadAPI from './upload';

export class Upload extends APIResource {
  /**
   * 允许用户上传一张图片
   */
  create(params: UploadCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { is_to_cloud, ...body } = params;
    return this._client.post(
      '/upload',
      Core.multipartFormRequestOptions({
        query: { is_to_cloud },
        body,
        ...options,
        headers: { Accept: '*/*', ...options?.headers },
      }),
    );
  }
}

export interface UploadCreateParams {
  /**
   * Body param: 要上传的图片文件
   */
  image: Core.Uploadable;

  /**
   * Query param: 是否上传到图床
   */
  is_to_cloud?: number;
}

export namespace Upload {
  export import UploadCreateParams = UploadAPI.UploadCreateParams;
}
