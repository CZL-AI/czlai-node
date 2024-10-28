// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Industry extends APIResource {
  /**
   * 行业列表
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/industry', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}
