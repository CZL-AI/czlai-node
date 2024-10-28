// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as PoliciesAPI from './policies';

export class Policies extends APIResource {
  /**
   * 政策类型
   */
  policyInfo(body: PolicyPolicyInfoParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/policy/policy_info', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface PolicyPolicyInfoParams {
  /**
   * 密钥
   */
  keys?: string;

  /**
   * 1-用户协议 2-免责条款 3-隐私政策
   */
  policy_type?: number;
}

export namespace Policies {
  export import PolicyPolicyInfoParams = PoliciesAPI.PolicyPolicyInfoParams;
}
