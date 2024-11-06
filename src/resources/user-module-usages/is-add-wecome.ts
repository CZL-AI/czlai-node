// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class IsAddWecome extends APIResource {
  /**
   * 是否领取过添加企微的奖励
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<IsAddWecomeRetrieveResponse> {
    return this._client.get('/user-module-usage/is-add-wecome', options);
  }
}

export interface IsAddWecomeRetrieveResponse {
  data?: IsAddWecomeRetrieveResponse.Data;

  message?: string;

  success?: boolean;
}

export namespace IsAddWecomeRetrieveResponse {
  export interface Data {
    is_add_wecome?: number;
  }
}

export declare namespace IsAddWecome {
  export { type IsAddWecomeRetrieveResponse as IsAddWecomeRetrieveResponse };
}
