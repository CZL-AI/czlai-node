// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Evaluation extends APIResource {
  /**
   * 修改评价
   */
  putEvaluation(body: EvaluationPutEvaluationParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/evaluation/put_evaluation', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface EvaluationPutEvaluationParams {
  /**
   * 文本内容
   */
  content: string;

  /**
   * 评价 id
   */
  evaluation: number;

  /**
   * 会话 id
   */
  session_id: string;
}

export declare namespace Evaluation {
  export { type EvaluationPutEvaluationParams as EvaluationPutEvaluationParams };
}
