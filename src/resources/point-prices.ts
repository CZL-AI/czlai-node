// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as PointPricesAPI from './point-prices';

export class PointPrices extends APIResource {
  /**
   * 获取积分价格
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<PointPriceRetrieveResponse> {
    return this._client.get('/point-price', options);
  }
}

export interface PointPriceRetrieveResponse {
  data?: PointPriceRetrieveResponse.Data;
}

export namespace PointPriceRetrieveResponse {
  export interface Data {
    /**
     * 是否为模块项目
     */
    is_module_item?: number;

    /**
     * 积分类型
     */
    item_key?: string;

    /**
     * 项目名
     */
    item_name?: string;

    /**
     * 项目 key 名
     */
    price?: string;

    /**
     * 关联模块
     */
    related_module?: string;
  }
}

export namespace PointPrices {
  export import PointPriceRetrieveResponse = PointPricesAPI.PointPriceRetrieveResponse;
}
