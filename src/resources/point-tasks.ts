// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as PointTasksAPI from './point-tasks';

export class PointTasks extends APIResource {
  /**
   * 获取积分任务列表
   */
  list(options?: Core.RequestOptions): Core.APIPromise<PointTaskListResponse> {
    return this._client.get('/point-task', options);
  }

  /**
   * 领取奖励
   */
  bonus(body: PointTaskBonusParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/point-task/bonus', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * 确认积分任务
   */
  confirm(body: PointTaskConfirmParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/point-task/confirm', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface PointTaskListResponse {
  data?: Array<PointTaskListResponse.Data>;

  /**
   * message
   */
  message?: string;

  /**
   * success
   */
  success?: boolean;
}

export namespace PointTaskListResponse {
  export interface Data {
    /**
     * id
     */
    id?: number;

    /**
     * 可完成次数
     */
    achieve_count?: number;

    /**
     * 积分奖励
     */
    bonus_point?: string;

    /**
     * 完成条件次数
     */
    condition_count?: number;

    /**
     * 任务说明
     */
    description?: string;

    /**
     * 任务图标
     */
    icon?: string;

    /**
     * 0-未开启 1-开启
     */
    is_open?: number;

    /**
     * 关联模块
     */
    related_module?: string;

    /**
     * 1-未完成 2-未领取
     */
    status?: number;

    /**
     * 任务动作
     */
    task_action?: string;

    /**
     * 任务名称
     */
    task_name?: string;

    /**
     * 跳转页面
     */
    to_page?: string;
  }
}

export interface PointTaskBonusParams {
  /**
   * 任务 id
   */
  task_id?: number;
}

export interface PointTaskConfirmParams {
  /**
   * 任务 id
   */
  task_id?: number;
}

export namespace PointTasks {
  export import PointTaskListResponse = PointTasksAPI.PointTaskListResponse;
  export import PointTaskBonusParams = PointTasksAPI.PointTaskBonusParams;
  export import PointTaskConfirmParams = PointTasksAPI.PointTaskConfirmParams;
}
