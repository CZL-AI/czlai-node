// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class PointDetails extends APIResource {
  /**
   * 获取积分明细
   */
  retrieve(
    query?: PointDetailRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PointDetailRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<PointDetailRetrieveResponse>;
  retrieve(
    query: PointDetailRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PointDetailRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/point-detail', { query, ...options });
  }
}

export interface PointDetailRetrieveResponse {
  data?: Array<PointDetailRetrieveResponse.Data>;
}

export namespace PointDetailRetrieveResponse {
  export interface Data {
    /**
     * id
     */
    id?: number;

    /**
     * 明细说明
     */
    description?: string;

    /**
     * 明细类型 1-购买增加积分 2-活动增加积分 3-模块核销积分
     */
    detail_type?: number;

    /**
     * 0-减少 1-增加
     */
    is_add?: 0 | 1;

    /**
     * 0-非购买积分 1-购买积分
     */
    is_purchase_point?: number;

    /**
     * 积分数量
     */
    point_num?: string;

    /**
     * 会话 id
     */
    session_id?: string;

    /**
     * 用户 uuid
     */
    user_uuid?: string;
  }
}

export interface PointDetailRetrieveParams {
  /**
   * 0-支出 1-收入 2-全部
   */
  is_add?: 0 | 1 | 2;

  /**
   * 每页数量
   */
  limit?: number;

  /**
   * 页数
   */
  page?: number;
}

export declare namespace PointDetails {
  export {
    type PointDetailRetrieveResponse as PointDetailRetrieveResponse,
    type PointDetailRetrieveParams as PointDetailRetrieveParams,
  };
}
