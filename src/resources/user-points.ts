// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as UserPointsAPI from './user-points';

export class UserPoints extends APIResource {
  /**
   * 获取用户积分
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<UserPointRetrieveResponse> {
    return this._client.get('/user-point', options);
  }

  /**
   * 积分消耗报表
   */
  costReport(body: UserPointCostReportParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/user-point/cost-report', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface UserPointRetrieveResponse {
  data?: UserPointRetrieveResponse.Data;
}

export namespace UserPointRetrieveResponse {
  export interface Data {
    /**
     * 赠送的积分余额
     */
    bonus_point?: string;

    /**
     * 购买的积分余额
     */
    purchase_point?: string;

    /**
     * 总积分余额
     */
    total_point?: string;
  }
}

export interface UserPointCostReportParams {
  item_key?: string;

  /**
   * 病历 id
   */
  medical_record_id?: number;
}

export namespace UserPoints {
  export import UserPointRetrieveResponse = UserPointsAPI.UserPointRetrieveResponse;
  export import UserPointCostReportParams = UserPointsAPI.UserPointCostReportParams;
}
