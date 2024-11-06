// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class PetProfiles extends APIResource {
  /**
   * 创建宠物档案
   */
  create(body: PetProfileCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/pet-profile', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取宠物档案
   */
  retrieve(
    query: PetProfileRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PetProfileRetrieveResponse> {
    return this._client.get('/pet-profile', { query, ...options });
  }

  /**
   * 更新宠物档案
   */
  update(params: PetProfileUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { pet_profile_id, ...body } = params;
    return this._client.put('/pet-profile', {
      query: { pet_profile_id },
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取宠物档案列表
   */
  list(options?: Core.RequestOptions): Core.APIPromise<PetProfileListResponse> {
    return this._client.get('/pet-profiles', options);
  }

  /**
   * 删除宠物档案
   */
  delete(
    params: PetProfileDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PetProfileDeleteResponse> {
    const { pet_profile_id } = params;
    return this._client.delete('/pet-profile', { query: { pet_profile_id }, ...options });
  }

  /**
   * 获取宠物档案扩展信息
   */
  exInfo(body: PetProfileExInfoParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/pet-profile/ex-info', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取宠物品种
   */
  variety(body: PetProfileVarietyParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/pet-profile/variety', {
      body,
      ...options,
      headers: { Accept: 'text/event-stream', ...options?.headers },
    });
  }
}

export interface PetProfile {
  id?: number;

  /**
   * 过敏史
   */
  allergy_history?: string | null;

  /**
   * 头像
   */
  avatar?: string | null;

  /**
   * 生日
   */
  birthday?: string;

  created_at?: string;

  /**
   * 疾病史
   */
  disease_history?: string | null;

  /**
   * 家族史
   */
  family_history?: string | null;

  /**
   * 性别 1-公 2-母
   */
  gender?: number;

  /**
   * 是否已绝育 0-否 1-是
   */
  is_neutered?: number | null;

  /**
   * 是否已接种疫苗 0-否 1-是
   */
  is_vaccination?: number;

  /**
   * 宠物名字
   */
  name?: string;

  /**
   * 宠物类型
   */
  pet_type?: number;

  /**
   * 宠物品种
   */
  pet_variety?: string | null;

  updated_at?: string;

  /**
   * 疫苗时间
   */
  vaccination_date?: string | null;

  /**
   * 重量
   */
  weight?: string | null;
}

export interface PetProfileRetrieveResponse {
  data?: PetProfile;

  message?: string;

  success?: boolean;
}

export interface PetProfileListResponse {
  data?: Array<PetProfile>;

  message?: string;

  success?: boolean;
}

export interface PetProfileDeleteResponse {
  data?: string;

  message?: string;

  success?: boolean;
}

export type PetProfileVarietyResponse = string;

export interface PetProfileCreateParams {
  /**
   * 过敏史
   */
  allergy_history?: string | null;

  /**
   * 头像
   */
  avatar?: string | null;

  /**
   * 生日
   */
  birthday?: string;

  /**
   * 疾病史
   */
  disease_history?: string | null;

  /**
   * 家族史
   */
  family_history?: string | null;

  /**
   * 性别 1-公 2-母
   */
  gender?: number;

  /**
   * 是否已绝育 0-否 1-是
   */
  is_neutered?: number | null;

  /**
   * 是否已接种疫苗 0-否 1-是
   */
  is_vaccination?: number;

  /**
   * 宠物名字
   */
  name?: string;

  /**
   * 宠物类型
   */
  pet_type?: number;

  /**
   * 宠物品种
   */
  pet_variety?: string | null;

  /**
   * 疫苗时间
   */
  vaccination_date?: string | null;

  /**
   * 重量
   */
  weight?: string | null;
}

export interface PetProfileRetrieveParams {
  pet_profile_id: number;
}

export interface PetProfileUpdateParams {
  /**
   * Query param:
   */
  pet_profile_id: number;

  /**
   * Body param: 过敏史
   */
  allergy_history?: string | null;

  /**
   * Body param: 头像
   */
  avatar?: string | null;

  /**
   * Body param: 生日
   */
  birthday?: string;

  /**
   * Body param: 疾病史
   */
  disease_history?: string | null;

  /**
   * Body param: 家族史
   */
  family_history?: string | null;

  /**
   * Body param: 性别 1-公 2-母
   */
  gender?: number;

  /**
   * Body param: 是否已绝育 0-否 1-是
   */
  is_neutered?: number | null;

  /**
   * Body param: 是否已接种疫苗 0-否 1-是
   */
  is_vaccination?: number;

  /**
   * Body param: 宠物名字
   */
  name?: string;

  /**
   * Body param: 宠物类型
   */
  pet_type?: number;

  /**
   * Body param: 宠物品种
   */
  pet_variety?: string | null;

  /**
   * Body param: 疫苗时间
   */
  vaccination_date?: string | null;

  /**
   * Body param: 重量
   */
  weight?: string | null;
}

export interface PetProfileDeleteParams {
  pet_profile_id: number;
}

export interface PetProfileExInfoParams {
  pet_profile_id?: number;
}

export interface PetProfileVarietyParams {
  user_input?: string;
}

export declare namespace PetProfiles {
  export {
    type PetProfile as PetProfile,
    type PetProfileRetrieveResponse as PetProfileRetrieveResponse,
    type PetProfileListResponse as PetProfileListResponse,
    type PetProfileDeleteResponse as PetProfileDeleteResponse,
    type PetProfileVarietyResponse as PetProfileVarietyResponse,
    type PetProfileCreateParams as PetProfileCreateParams,
    type PetProfileRetrieveParams as PetProfileRetrieveParams,
    type PetProfileUpdateParams as PetProfileUpdateParams,
    type PetProfileDeleteParams as PetProfileDeleteParams,
    type PetProfileExInfoParams as PetProfileExInfoParams,
    type PetProfileVarietyParams as PetProfileVarietyParams,
  };
}
