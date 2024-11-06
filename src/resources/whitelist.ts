// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Whitelist extends APIResource {
  /**
   * 白名单数据过滤
   */
  filteringData(body: WhitelistFilteringDataParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/whitelist/filtering_data', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 白名单数据保存
   */
  saveData(body: WhitelistSaveDataParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/whitelist/save_data', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface WhitelistFilteringDataParams {
  /**
   * 过滤数据
   */
  filtering_data?: string;
}

export interface WhitelistSaveDataParams {
  /**
   * 保存数据
   */
  save_data?: Array<string>;
}

export declare namespace Whitelist {
  export {
    type WhitelistFilteringDataParams as WhitelistFilteringDataParams,
    type WhitelistSaveDataParams as WhitelistSaveDataParams,
  };
}
