// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class MagnumKeys extends APIResource {
  /**
   * 获取 key_usage_id
   */
  getKey(body: MagnumKeyGetKeyParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/magnumkey/get-key', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取图片选项
   */
  pictureChoice(body: MagnumKeyPictureChoiceParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/magnumkey/picture-choice', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取图片问题
   */
  pictureQuestion(
    body: MagnumKeyPictureQuestionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/magnumkey/picture-question', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取声音选项
   */
  voiceChoice(body: MagnumKeyVoiceChoiceParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/magnumkey/voice-choice', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 获取声音问题
   */
  voiceQuestion(body: MagnumKeyVoiceQuestionParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/magnumkey/voice-question', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface MagnumKeyGetKeyParams {
  /**
   * 文本
   */
  context?: string;
}

export interface MagnumKeyPictureChoiceParams {
  /**
   * 图片 url
   */
  img_url: string;

  /**
   * 会话 id
   */
  key_usage_id?: string | null;

  /**
   * 用户 uuid
   */
  user_uuid?: string | null;
}

export interface MagnumKeyPictureQuestionParams {
  /**
   * 图片 url
   */
  img_url: string;

  /**
   * 会话 id
   */
  key_usage_id?: string | null;

  /**
   * 用户 uuid
   */
  user_uuid?: string | null;
}

export interface MagnumKeyVoiceChoiceParams {
  /**
   * 获取声音选项
   */
  message: string;

  /**
   * 会话 id
   */
  key_usage_id?: string | null;

  /**
   * 用户 uuid
   */
  user_uuid?: string | null;
}

export interface MagnumKeyVoiceQuestionParams {
  /**
   * 语音文本
   */
  message: string;

  /**
   * 会话 id
   */
  key_usage_id?: string | null;

  /**
   * 宠物 id
   */
  pet_id?: number;

  /**
   * 用户 uuid
   */
  user_uuid?: string | null;
}

export declare namespace MagnumKeys {
  export {
    type MagnumKeyGetKeyParams as MagnumKeyGetKeyParams,
    type MagnumKeyPictureChoiceParams as MagnumKeyPictureChoiceParams,
    type MagnumKeyPictureQuestionParams as MagnumKeyPictureQuestionParams,
    type MagnumKeyVoiceChoiceParams as MagnumKeyVoiceChoiceParams,
    type MagnumKeyVoiceQuestionParams as MagnumKeyVoiceQuestionParams,
  };
}
