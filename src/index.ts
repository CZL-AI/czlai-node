// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  AICheckup,
  AICheckupIsFirstParams,
  AICheckupIsFirstResponse,
  AICheckupPicResultParams,
  AICheckupQuestionParams,
  AICheckupQuestionResultParams,
  AICheckupReportParams,
  AICheckupReportTaskParams,
  AICheckupSessionStartResponse,
  AICheckupSummaryParams,
  AICheckupSummaryResponse,
  AICheckupUpdateProfileParams,
  AICheckupUpdateProfileResponse,
} from './resources/ai-checkup';
import {
  AIConv,
  AIConvAnswerParams,
  AIConvAnswerResponse,
  AIConvRelationParams,
  AIConvValidateParams,
} from './resources/ai-conv';
import {
  AIMeme,
  AIMemeCreateParams,
  AIMemeCreateResponse,
  AIMemeGenerateParams,
  AIMemeGenerateResponse,
  AIMemeRetrieveParams,
  AIMemeRetrieveResponse,
  AIMemes,
} from './resources/ai-memes';
import {
  AITrial,
  AITrialAnswerParams,
  AITrialAnswerResponse,
  AITrialHistoryParams,
  AITrialRelationParams,
  AITrialReportParams,
  AITrialSessionStartParams,
  AITrialSummaryParams,
} from './resources/ai-trial';
import { AITrialOptionsParams, AITrialQuestionParams, AITrials } from './resources/ai-trials';
import {
  Aidoc,
  AidocIfContinueAskParams,
  AidocIfContinueAskResponse,
  AidocIfNeedImageParams,
  AidocIfNeedImageResponse,
  AidocPicResultParams,
  AidocReportParams,
  AidocReportTaskParams,
} from './resources/aidoc';
import {
  AidocExotic,
  AidocExoticAskContinueParams,
  AidocExoticAskContinueResponse,
  AidocExoticIfNeedImageParams,
  AidocExoticIfNeedImageResponse,
  AidocExoticKeywordsParams,
  AidocExoticKeywordsResponse,
  AidocExoticOptionsParams,
  AidocExoticOptionsResponse,
  AidocExoticPicResultParams,
  AidocExoticQuestionParams,
  AidocExoticQuestionResponse,
  AidocExoticReportParams,
  AidocExoticReportTaskParams,
  AidocExoticSummarizeParams,
} from './resources/aidoc-exotic';
import {
  Aipic,
  AipicOptionsParams,
  AipicPicResultParams,
  AipicQuestionParams,
  AipicReportParams,
  AipicReportTaskParams,
  AipicValidateParams,
} from './resources/aipic';
import {
  AipicExoticOptionsParams,
  AipicExoticPicResultParams,
  AipicExoticQuestionParams,
  AipicExoticReportParams,
  AipicExoticReportTaskParams,
  AipicExoticSummaryParams,
  AipicExoticValidateParams,
  AipicExotics,
} from './resources/aipic-exotics';
import { AipicSummaryParams, Aipics } from './resources/aipics';
import { BuriedpointCreateParams, Buriedpoints } from './resources/buriedpoints';
import { CheckPointCreateParams, CheckPoints } from './resources/check-points';
import { Evaluation, EvaluationPutEvaluationParams } from './resources/evaluation';
import { LoginResponse, LoginSMSParams, LoginWechatParams, Logins } from './resources/logins';
import {
  MagnumKeyGetKeyParams,
  MagnumKeyPictureChoiceParams,
  MagnumKeyPictureQuestionParams,
  MagnumKeyVoiceChoiceParams,
  MagnumKeyVoiceQuestionParams,
  MagnumKeys,
} from './resources/magnum-keys';
import {
  MedicalRecord,
  MedicalRecordCreateListParams,
  MedicalRecordCreateListResponse,
  MedicalRecordOngoingRecordParams,
  MedicalRecordRetrieveParams,
  MedicalRecordRetrieveResponse,
  MedicalRecordUpdateParams,
  MedicalRecords,
} from './resources/medical-records';
import {
  MedicationAnalysis,
  MedicationAnalysisPicResultParams,
  MedicationAnalysisReportParams,
  MedicationAnalysisSummaryParams,
} from './resources/medication-analysis';
import {
  PetProfile,
  PetProfileCreateParams,
  PetProfileDeleteParams,
  PetProfileDeleteResponse,
  PetProfileExInfoParams,
  PetProfileListResponse,
  PetProfileRetrieveParams,
  PetProfileRetrieveResponse,
  PetProfileUpdateParams,
  PetProfileVarietyParams,
  PetProfileVarietyResponse,
  PetProfiles,
} from './resources/pet-profiles';
import {
  PointDetailRetrieveParams,
  PointDetailRetrieveResponse,
  PointDetails,
} from './resources/point-details';
import { PointPriceRetrieveResponse, PointPrices } from './resources/point-prices';
import {
  PointTaskBonusParams,
  PointTaskConfirmParams,
  PointTaskListResponse,
  PointTasks,
} from './resources/point-tasks';
import { Policies, PolicyPolicyInfoParams } from './resources/policies';
import { SessionRecordHistoryParams, SessionRecords } from './resources/session-records';
import { Upload, UploadCreateParams } from './resources/upload';
import { UploadImage, UploadImageCreateParams } from './resources/upload-image';
import { UploadImageOss, UploadImageOssCreateParams } from './resources/upload-image-oss';
import { UserAdviceCreateParams, UserAdvices } from './resources/user-advices';
import { UserPointCostReportParams, UserPointRetrieveResponse, UserPoints } from './resources/user-points';
import { Whitelist, WhitelistFilteringDataParams, WhitelistSaveDataParams } from './resources/whitelist';
import { Pets } from './resources/pets/pets';
import {
  UserModuleUsageGetAddWecomeBonusParams,
  UserModuleUsageGetAddWecomeBonusResponse,
  UserModuleUsageGetWechatMiniQrcodeResponse,
  UserModuleUsages,
} from './resources/user-module-usages/user-module-usages';
import { UserChatVParams, UserSendSMSParams, Users } from './resources/users/users';

export interface ClientOptions {
  /**
   * JWT token for Bearer authentication
   */
  bearerToken?: string | undefined;

  /**
   * Username for Basic authentication
   */
  username?: string | undefined;

  /**
   * Password for Basic authentication
   */
  password?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['CZLAI_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Czlai API.
 */
export class Czlai extends Core.APIClient {
  bearerToken: string;
  username: string;
  password: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Czlai API.
   *
   * @param {string | undefined} [opts.bearerToken=process.env['BEARER_TOKEN'] ?? undefined]
   * @param {string | undefined} [opts.username=process.env['BASIC_AUTH_USERNAME'] ?? undefined]
   * @param {string | undefined} [opts.password=process.env['BASIC_AUTH_PASSWORD'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['CZLAI_BASE_URL'] ?? /api/v1.0/ai-b] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('CZLAI_BASE_URL'),
    bearerToken = Core.readEnv('BEARER_TOKEN'),
    username = Core.readEnv('BASIC_AUTH_USERNAME'),
    password = Core.readEnv('BASIC_AUTH_PASSWORD'),
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.CzlaiError(
        "The BEARER_TOKEN environment variable is missing or empty; either provide it, or instantiate the Czlai client with an bearerToken option, like new Czlai({ bearerToken: 'My Bearer Token' }).",
      );
    }
    if (username === undefined) {
      throw new Errors.CzlaiError(
        "The BASIC_AUTH_USERNAME environment variable is missing or empty; either provide it, or instantiate the Czlai client with an username option, like new Czlai({ username: 'My Username' }).",
      );
    }
    if (password === undefined) {
      throw new Errors.CzlaiError(
        "The BASIC_AUTH_PASSWORD environment variable is missing or empty; either provide it, or instantiate the Czlai client with an password option, like new Czlai({ password: 'My Password' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
      username,
      password,
      ...opts,
      baseURL: baseURL || `/api/v1.0/ai-b`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.bearerToken = bearerToken;
    this.username = username;
    this.password = password;
  }

  aidoc: API.Aidoc = new API.Aidoc(this);
  aidocExotic: API.AidocExotic = new API.AidocExotic(this);
  sessionRecords: API.SessionRecords = new API.SessionRecords(this);
  medicalRecords: API.MedicalRecords = new API.MedicalRecords(this);
  aiCheckup: API.AICheckup = new API.AICheckup(this);
  aiConv: API.AIConv = new API.AIConv(this);
  users: API.Users = new API.Users(this);
  upload: API.Upload = new API.Upload(this);
  uploadImage: API.UploadImage = new API.UploadImage(this);
  uploadImageOss: API.UploadImageOss = new API.UploadImageOss(this);
  petProfiles: API.PetProfiles = new API.PetProfiles(this);
  aiMemes: API.AIMemes = new API.AIMemes(this);
  medicationAnalysis: API.MedicationAnalysis = new API.MedicationAnalysis(this);
  aipic: API.Aipic = new API.Aipic(this);
  aipics: API.Aipics = new API.Aipics(this);
  aipicExotics: API.AipicExotics = new API.AipicExotics(this);
  aiTrials: API.AITrials = new API.AITrials(this);
  aiTrial: API.AITrial = new API.AITrial(this);
  policies: API.Policies = new API.Policies(this);
  magnumKeys: API.MagnumKeys = new API.MagnumKeys(this);
  buriedpoints: API.Buriedpoints = new API.Buriedpoints(this);
  whitelist: API.Whitelist = new API.Whitelist(this);
  pets: API.Pets = new API.Pets(this);
  userModuleUsages: API.UserModuleUsages = new API.UserModuleUsages(this);
  logins: API.Logins = new API.Logins(this);
  userPoints: API.UserPoints = new API.UserPoints(this);
  pointPrices: API.PointPrices = new API.PointPrices(this);
  pointDetails: API.PointDetails = new API.PointDetails(this);
  pointTasks: API.PointTasks = new API.PointTasks(this);
  checkPoints: API.CheckPoints = new API.CheckPoints(this);
  userAdvices: API.UserAdvices = new API.UserAdvices(this);
  evaluation: API.Evaluation = new API.Evaluation(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    const jwtAuth = this.jwtAuth(opts);
    const basicAuth = this.basicAuth(opts);
    return {};
  }

  protected jwtAuth(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.bearerToken}` };
  }

  protected basicAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (!this.username) {
      return {};
    }

    if (!this.password) {
      return {};
    }

    const credentials = `${this.username}:${this.password}`;
    const Authorization = `Basic ${Core.toBase64(credentials)}`;
    return { Authorization };
  }

  static Czlai = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static CzlaiError = Errors.CzlaiError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export {
  CzlaiError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

Czlai.Aidoc = Aidoc;
Czlai.AidocExotic = AidocExotic;
Czlai.SessionRecords = SessionRecords;
Czlai.MedicalRecords = MedicalRecords;
Czlai.AICheckup = AICheckup;
Czlai.AIConv = AIConv;
Czlai.Users = Users;
Czlai.Upload = Upload;
Czlai.UploadImage = UploadImage;
Czlai.UploadImageOss = UploadImageOss;
Czlai.PetProfiles = PetProfiles;
Czlai.AIMemes = AIMemes;
Czlai.MedicationAnalysis = MedicationAnalysis;
Czlai.Aipic = Aipic;
Czlai.Aipics = Aipics;
Czlai.AipicExotics = AipicExotics;
Czlai.AITrials = AITrials;
Czlai.AITrial = AITrial;
Czlai.Policies = Policies;
Czlai.MagnumKeys = MagnumKeys;
Czlai.Buriedpoints = Buriedpoints;
Czlai.Whitelist = Whitelist;
Czlai.Pets = Pets;
Czlai.UserModuleUsages = UserModuleUsages;
Czlai.Logins = Logins;
Czlai.UserPoints = UserPoints;
Czlai.PointPrices = PointPrices;
Czlai.PointDetails = PointDetails;
Czlai.PointTasks = PointTasks;
Czlai.CheckPoints = CheckPoints;
Czlai.UserAdvices = UserAdvices;
Czlai.Evaluation = Evaluation;

export declare namespace Czlai {
  export type RequestOptions = Core.RequestOptions;

  export {
    Aidoc as Aidoc,
    type AidocIfContinueAskResponse as AidocIfContinueAskResponse,
    type AidocIfNeedImageResponse as AidocIfNeedImageResponse,
    type AidocIfContinueAskParams as AidocIfContinueAskParams,
    type AidocIfNeedImageParams as AidocIfNeedImageParams,
    type AidocPicResultParams as AidocPicResultParams,
    type AidocReportParams as AidocReportParams,
    type AidocReportTaskParams as AidocReportTaskParams,
  };

  export {
    AidocExotic as AidocExotic,
    type AidocExoticAskContinueResponse as AidocExoticAskContinueResponse,
    type AidocExoticIfNeedImageResponse as AidocExoticIfNeedImageResponse,
    type AidocExoticKeywordsResponse as AidocExoticKeywordsResponse,
    type AidocExoticOptionsResponse as AidocExoticOptionsResponse,
    type AidocExoticQuestionResponse as AidocExoticQuestionResponse,
    type AidocExoticAskContinueParams as AidocExoticAskContinueParams,
    type AidocExoticIfNeedImageParams as AidocExoticIfNeedImageParams,
    type AidocExoticKeywordsParams as AidocExoticKeywordsParams,
    type AidocExoticOptionsParams as AidocExoticOptionsParams,
    type AidocExoticPicResultParams as AidocExoticPicResultParams,
    type AidocExoticQuestionParams as AidocExoticQuestionParams,
    type AidocExoticReportParams as AidocExoticReportParams,
    type AidocExoticReportTaskParams as AidocExoticReportTaskParams,
    type AidocExoticSummarizeParams as AidocExoticSummarizeParams,
  };

  export { SessionRecords as SessionRecords, type SessionRecordHistoryParams as SessionRecordHistoryParams };

  export {
    MedicalRecords as MedicalRecords,
    type MedicalRecord as MedicalRecord,
    type MedicalRecordRetrieveResponse as MedicalRecordRetrieveResponse,
    type MedicalRecordCreateListResponse as MedicalRecordCreateListResponse,
    type MedicalRecordRetrieveParams as MedicalRecordRetrieveParams,
    type MedicalRecordUpdateParams as MedicalRecordUpdateParams,
    type MedicalRecordCreateListParams as MedicalRecordCreateListParams,
    type MedicalRecordOngoingRecordParams as MedicalRecordOngoingRecordParams,
  };

  export {
    AICheckup as AICheckup,
    type AICheckupIsFirstResponse as AICheckupIsFirstResponse,
    type AICheckupSessionStartResponse as AICheckupSessionStartResponse,
    type AICheckupSummaryResponse as AICheckupSummaryResponse,
    type AICheckupUpdateProfileResponse as AICheckupUpdateProfileResponse,
    type AICheckupIsFirstParams as AICheckupIsFirstParams,
    type AICheckupPicResultParams as AICheckupPicResultParams,
    type AICheckupQuestionParams as AICheckupQuestionParams,
    type AICheckupQuestionResultParams as AICheckupQuestionResultParams,
    type AICheckupReportParams as AICheckupReportParams,
    type AICheckupReportTaskParams as AICheckupReportTaskParams,
    type AICheckupSummaryParams as AICheckupSummaryParams,
    type AICheckupUpdateProfileParams as AICheckupUpdateProfileParams,
  };

  export {
    AIConv as AIConv,
    type AIConvAnswerResponse as AIConvAnswerResponse,
    type AIConvAnswerParams as AIConvAnswerParams,
    type AIConvRelationParams as AIConvRelationParams,
    type AIConvValidateParams as AIConvValidateParams,
  };

  export {
    Users as Users,
    type UserChatVParams as UserChatVParams,
    type UserSendSMSParams as UserSendSMSParams,
  };

  export { Upload as Upload, type UploadCreateParams as UploadCreateParams };

  export { UploadImage as UploadImage, type UploadImageCreateParams as UploadImageCreateParams };

  export { UploadImageOss as UploadImageOss, type UploadImageOssCreateParams as UploadImageOssCreateParams };

  export {
    PetProfiles as PetProfiles,
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

  export {
    AIMemes as AIMemes,
    type AIMeme as AIMeme,
    type AIMemeCreateResponse as AIMemeCreateResponse,
    type AIMemeRetrieveResponse as AIMemeRetrieveResponse,
    type AIMemeGenerateResponse as AIMemeGenerateResponse,
    type AIMemeCreateParams as AIMemeCreateParams,
    type AIMemeRetrieveParams as AIMemeRetrieveParams,
    type AIMemeGenerateParams as AIMemeGenerateParams,
  };

  export {
    MedicationAnalysis as MedicationAnalysis,
    type MedicationAnalysisPicResultParams as MedicationAnalysisPicResultParams,
    type MedicationAnalysisReportParams as MedicationAnalysisReportParams,
    type MedicationAnalysisSummaryParams as MedicationAnalysisSummaryParams,
  };

  export {
    Aipic as Aipic,
    type AipicOptionsParams as AipicOptionsParams,
    type AipicPicResultParams as AipicPicResultParams,
    type AipicQuestionParams as AipicQuestionParams,
    type AipicReportParams as AipicReportParams,
    type AipicReportTaskParams as AipicReportTaskParams,
    type AipicValidateParams as AipicValidateParams,
  };

  export { Aipics as Aipics, type AipicSummaryParams as AipicSummaryParams };

  export {
    AipicExotics as AipicExotics,
    type AipicExoticOptionsParams as AipicExoticOptionsParams,
    type AipicExoticPicResultParams as AipicExoticPicResultParams,
    type AipicExoticQuestionParams as AipicExoticQuestionParams,
    type AipicExoticReportParams as AipicExoticReportParams,
    type AipicExoticReportTaskParams as AipicExoticReportTaskParams,
    type AipicExoticSummaryParams as AipicExoticSummaryParams,
    type AipicExoticValidateParams as AipicExoticValidateParams,
  };

  export {
    AITrials as AITrials,
    type AITrialOptionsParams as AITrialOptionsParams,
    type AITrialQuestionParams as AITrialQuestionParams,
  };

  export {
    AITrial as AITrial,
    type AITrialAnswerResponse as AITrialAnswerResponse,
    type AITrialAnswerParams as AITrialAnswerParams,
    type AITrialHistoryParams as AITrialHistoryParams,
    type AITrialRelationParams as AITrialRelationParams,
    type AITrialReportParams as AITrialReportParams,
    type AITrialSessionStartParams as AITrialSessionStartParams,
    type AITrialSummaryParams as AITrialSummaryParams,
  };

  export { Policies as Policies, type PolicyPolicyInfoParams as PolicyPolicyInfoParams };

  export {
    MagnumKeys as MagnumKeys,
    type MagnumKeyGetKeyParams as MagnumKeyGetKeyParams,
    type MagnumKeyPictureChoiceParams as MagnumKeyPictureChoiceParams,
    type MagnumKeyPictureQuestionParams as MagnumKeyPictureQuestionParams,
    type MagnumKeyVoiceChoiceParams as MagnumKeyVoiceChoiceParams,
    type MagnumKeyVoiceQuestionParams as MagnumKeyVoiceQuestionParams,
  };

  export { Buriedpoints as Buriedpoints, type BuriedpointCreateParams as BuriedpointCreateParams };

  export {
    Whitelist as Whitelist,
    type WhitelistFilteringDataParams as WhitelistFilteringDataParams,
    type WhitelistSaveDataParams as WhitelistSaveDataParams,
  };

  export { Pets as Pets };

  export {
    UserModuleUsages as UserModuleUsages,
    type UserModuleUsageGetAddWecomeBonusResponse as UserModuleUsageGetAddWecomeBonusResponse,
    type UserModuleUsageGetWechatMiniQrcodeResponse as UserModuleUsageGetWechatMiniQrcodeResponse,
    type UserModuleUsageGetAddWecomeBonusParams as UserModuleUsageGetAddWecomeBonusParams,
  };

  export {
    Logins as Logins,
    type LoginResponse as LoginResponse,
    type LoginSMSParams as LoginSMSParams,
    type LoginWechatParams as LoginWechatParams,
  };

  export {
    UserPoints as UserPoints,
    type UserPointRetrieveResponse as UserPointRetrieveResponse,
    type UserPointCostReportParams as UserPointCostReportParams,
  };

  export { PointPrices as PointPrices, type PointPriceRetrieveResponse as PointPriceRetrieveResponse };

  export {
    PointDetails as PointDetails,
    type PointDetailRetrieveResponse as PointDetailRetrieveResponse,
    type PointDetailRetrieveParams as PointDetailRetrieveParams,
  };

  export {
    PointTasks as PointTasks,
    type PointTaskListResponse as PointTaskListResponse,
    type PointTaskBonusParams as PointTaskBonusParams,
    type PointTaskConfirmParams as PointTaskConfirmParams,
  };

  export { CheckPoints as CheckPoints, type CheckPointCreateParams as CheckPointCreateParams };

  export { UserAdvices as UserAdvices, type UserAdviceCreateParams as UserAdviceCreateParams };

  export { Evaluation as Evaluation, type EvaluationPutEvaluationParams as EvaluationPutEvaluationParams };
}

export default Czlai;
