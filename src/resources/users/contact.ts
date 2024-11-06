// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Contact extends APIResource {
  /**
   * 合作交流信息保存
   */
  create(body: ContactCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/contact', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ContactCreateParams {
  company_name?: string;

  contact_name?: string;

  mobile?: string;
}

export declare namespace Contact {
  export { type ContactCreateParams as ContactCreateParams };
}
