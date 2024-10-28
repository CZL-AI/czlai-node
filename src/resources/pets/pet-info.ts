// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as PetInfoAPI from './pet-info';

export class PetInfo extends APIResource {
  /**
   * 宠物数据
   */
  retrieve(query: PetInfoRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/pets/pet-info', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface PetInfoRetrieveParams {
  /**
   * dog cat
   */
  pets_type: 'dog' | 'cat';

  /**
   * 0-分组 1-不分组
   */
  is_sort?: 0 | 1;
}

export namespace PetInfo {
  export import PetInfoRetrieveParams = PetInfoAPI.PetInfoRetrieveParams;
}
