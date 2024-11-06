// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Summary extends APIResource {
  /**
   * 合作交流信息保存
   */
  create(body: SummaryCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/summary', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface SummaryCreateParams {
  session_id?: string;
}

export declare namespace Summary {
  export { type SummaryCreateParams as SummaryCreateParams };
}
