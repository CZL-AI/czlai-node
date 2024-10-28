// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as API from './resources/index';

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

export const {
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
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Czlai {
  export import RequestOptions = Core.RequestOptions;

  export import Aidoc = API.Aidoc;
  export import AidocIfContinueAskResponse = API.AidocIfContinueAskResponse;
  export import AidocIfNeedImageResponse = API.AidocIfNeedImageResponse;
  export import AidocIfContinueAskParams = API.AidocIfContinueAskParams;
  export import AidocIfNeedImageParams = API.AidocIfNeedImageParams;
  export import AidocPicResultParams = API.AidocPicResultParams;
  export import AidocReportParams = API.AidocReportParams;
  export import AidocReportTaskParams = API.AidocReportTaskParams;

  export import AidocExotic = API.AidocExotic;
  export import AidocExoticAskContinueResponse = API.AidocExoticAskContinueResponse;
  export import AidocExoticIfNeedImageResponse = API.AidocExoticIfNeedImageResponse;
  export import AidocExoticKeywordsResponse = API.AidocExoticKeywordsResponse;
  export import AidocExoticOptionsResponse = API.AidocExoticOptionsResponse;
  export import AidocExoticQuestionResponse = API.AidocExoticQuestionResponse;
  export import AidocExoticAskContinueParams = API.AidocExoticAskContinueParams;
  export import AidocExoticIfNeedImageParams = API.AidocExoticIfNeedImageParams;
  export import AidocExoticKeywordsParams = API.AidocExoticKeywordsParams;
  export import AidocExoticOptionsParams = API.AidocExoticOptionsParams;
  export import AidocExoticPicResultParams = API.AidocExoticPicResultParams;
  export import AidocExoticQuestionParams = API.AidocExoticQuestionParams;
  export import AidocExoticReportParams = API.AidocExoticReportParams;
  export import AidocExoticReportTaskParams = API.AidocExoticReportTaskParams;
  export import AidocExoticSummarizeParams = API.AidocExoticSummarizeParams;

  export import SessionRecords = API.SessionRecords;
  export import SessionRecordHistoryParams = API.SessionRecordHistoryParams;

  export import MedicalRecords = API.MedicalRecords;
  export import MedicalRecord = API.MedicalRecord;
  export import MedicalRecordRetrieveResponse = API.MedicalRecordRetrieveResponse;
  export import MedicalRecordCreateListResponse = API.MedicalRecordCreateListResponse;
  export import MedicalRecordRetrieveParams = API.MedicalRecordRetrieveParams;
  export import MedicalRecordUpdateParams = API.MedicalRecordUpdateParams;
  export import MedicalRecordCreateListParams = API.MedicalRecordCreateListParams;
  export import MedicalRecordOngoingRecordParams = API.MedicalRecordOngoingRecordParams;

  export import AICheckup = API.AICheckup;
  export import AICheckupIsFirstResponse = API.AICheckupIsFirstResponse;
  export import AICheckupSessionStartResponse = API.AICheckupSessionStartResponse;
  export import AICheckupSummaryResponse = API.AICheckupSummaryResponse;
  export import AICheckupUpdateProfileResponse = API.AICheckupUpdateProfileResponse;
  export import AICheckupIsFirstParams = API.AICheckupIsFirstParams;
  export import AICheckupPicResultParams = API.AICheckupPicResultParams;
  export import AICheckupQuestionParams = API.AICheckupQuestionParams;
  export import AICheckupQuestionResultParams = API.AICheckupQuestionResultParams;
  export import AICheckupReportParams = API.AICheckupReportParams;
  export import AICheckupReportTaskParams = API.AICheckupReportTaskParams;
  export import AICheckupSummaryParams = API.AICheckupSummaryParams;
  export import AICheckupUpdateProfileParams = API.AICheckupUpdateProfileParams;

  export import AIConv = API.AIConv;
  export import AIConvAnswerResponse = API.AIConvAnswerResponse;
  export import AIConvAnswerParams = API.AIConvAnswerParams;
  export import AIConvRelationParams = API.AIConvRelationParams;
  export import AIConvValidateParams = API.AIConvValidateParams;

  export import Users = API.Users;
  export import UserChatVParams = API.UserChatVParams;
  export import UserSendSMSParams = API.UserSendSMSParams;

  export import Upload = API.Upload;
  export import UploadCreateParams = API.UploadCreateParams;

  export import UploadImage = API.UploadImage;
  export import UploadImageCreateParams = API.UploadImageCreateParams;

  export import UploadImageOss = API.UploadImageOss;
  export import UploadImageOssCreateParams = API.UploadImageOssCreateParams;

  export import PetProfiles = API.PetProfiles;
  export import PetProfile = API.PetProfile;
  export import PetProfileRetrieveResponse = API.PetProfileRetrieveResponse;
  export import PetProfileListResponse = API.PetProfileListResponse;
  export import PetProfileDeleteResponse = API.PetProfileDeleteResponse;
  export import PetProfileVarietyResponse = API.PetProfileVarietyResponse;
  export import PetProfileCreateParams = API.PetProfileCreateParams;
  export import PetProfileRetrieveParams = API.PetProfileRetrieveParams;
  export import PetProfileUpdateParams = API.PetProfileUpdateParams;
  export import PetProfileDeleteParams = API.PetProfileDeleteParams;
  export import PetProfileExInfoParams = API.PetProfileExInfoParams;
  export import PetProfileVarietyParams = API.PetProfileVarietyParams;

  export import AIMemes = API.AIMemes;
  export import AIMeme = API.AIMeme;
  export import AIMemeCreateResponse = API.AIMemeCreateResponse;
  export import AIMemeRetrieveResponse = API.AIMemeRetrieveResponse;
  export import AIMemeGenerateResponse = API.AIMemeGenerateResponse;
  export import AIMemeCreateParams = API.AIMemeCreateParams;
  export import AIMemeRetrieveParams = API.AIMemeRetrieveParams;
  export import AIMemeGenerateParams = API.AIMemeGenerateParams;

  export import MedicationAnalysis = API.MedicationAnalysis;
  export import MedicationAnalysisPicResultParams = API.MedicationAnalysisPicResultParams;
  export import MedicationAnalysisReportParams = API.MedicationAnalysisReportParams;
  export import MedicationAnalysisSummaryParams = API.MedicationAnalysisSummaryParams;

  export import Aipic = API.Aipic;
  export import AipicOptionsParams = API.AipicOptionsParams;
  export import AipicPicResultParams = API.AipicPicResultParams;
  export import AipicQuestionParams = API.AipicQuestionParams;
  export import AipicReportParams = API.AipicReportParams;
  export import AipicReportTaskParams = API.AipicReportTaskParams;
  export import AipicValidateParams = API.AipicValidateParams;

  export import Aipics = API.Aipics;
  export import AipicSummaryParams = API.AipicSummaryParams;

  export import AipicExotics = API.AipicExotics;
  export import AipicExoticOptionsParams = API.AipicExoticOptionsParams;
  export import AipicExoticPicResultParams = API.AipicExoticPicResultParams;
  export import AipicExoticQuestionParams = API.AipicExoticQuestionParams;
  export import AipicExoticReportParams = API.AipicExoticReportParams;
  export import AipicExoticReportTaskParams = API.AipicExoticReportTaskParams;
  export import AipicExoticSummaryParams = API.AipicExoticSummaryParams;
  export import AipicExoticValidateParams = API.AipicExoticValidateParams;

  export import AITrials = API.AITrials;
  export import AITrialOptionsParams = API.AITrialOptionsParams;
  export import AITrialQuestionParams = API.AITrialQuestionParams;

  export import AITrial = API.AITrial;
  export import AITrialAnswerResponse = API.AITrialAnswerResponse;
  export import AITrialAnswerParams = API.AITrialAnswerParams;
  export import AITrialHistoryParams = API.AITrialHistoryParams;
  export import AITrialRelationParams = API.AITrialRelationParams;
  export import AITrialReportParams = API.AITrialReportParams;
  export import AITrialSessionStartParams = API.AITrialSessionStartParams;
  export import AITrialSummaryParams = API.AITrialSummaryParams;

  export import Policies = API.Policies;
  export import PolicyPolicyInfoParams = API.PolicyPolicyInfoParams;

  export import MagnumKeys = API.MagnumKeys;
  export import MagnumKeyGetKeyParams = API.MagnumKeyGetKeyParams;
  export import MagnumKeyPictureChoiceParams = API.MagnumKeyPictureChoiceParams;
  export import MagnumKeyPictureQuestionParams = API.MagnumKeyPictureQuestionParams;
  export import MagnumKeyVoiceChoiceParams = API.MagnumKeyVoiceChoiceParams;
  export import MagnumKeyVoiceQuestionParams = API.MagnumKeyVoiceQuestionParams;

  export import Buriedpoints = API.Buriedpoints;
  export import BuriedpointCreateParams = API.BuriedpointCreateParams;

  export import Whitelist = API.Whitelist;
  export import WhitelistFilteringDataParams = API.WhitelistFilteringDataParams;
  export import WhitelistSaveDataParams = API.WhitelistSaveDataParams;

  export import Pets = API.Pets;

  export import UserModuleUsages = API.UserModuleUsages;
  export import UserModuleUsageGetAddWecomeBonusResponse = API.UserModuleUsageGetAddWecomeBonusResponse;
  export import UserModuleUsageGetWechatMiniQrcodeResponse = API.UserModuleUsageGetWechatMiniQrcodeResponse;
  export import UserModuleUsageGetAddWecomeBonusParams = API.UserModuleUsageGetAddWecomeBonusParams;

  export import Logins = API.Logins;
  export import LoginResponse = API.LoginResponse;
  export import LoginSMSParams = API.LoginSMSParams;
  export import LoginWechatParams = API.LoginWechatParams;

  export import UserPoints = API.UserPoints;
  export import UserPointRetrieveResponse = API.UserPointRetrieveResponse;
  export import UserPointCostReportParams = API.UserPointCostReportParams;

  export import PointPrices = API.PointPrices;
  export import PointPriceRetrieveResponse = API.PointPriceRetrieveResponse;

  export import PointDetails = API.PointDetails;
  export import PointDetailRetrieveResponse = API.PointDetailRetrieveResponse;
  export import PointDetailRetrieveParams = API.PointDetailRetrieveParams;

  export import PointTasks = API.PointTasks;
  export import PointTaskListResponse = API.PointTaskListResponse;
  export import PointTaskBonusParams = API.PointTaskBonusParams;
  export import PointTaskConfirmParams = API.PointTaskConfirmParams;

  export import CheckPoints = API.CheckPoints;
  export import CheckPointCreateParams = API.CheckPointCreateParams;

  export import UserAdvices = API.UserAdvices;
  export import UserAdviceCreateParams = API.UserAdviceCreateParams;

  export import Evaluation = API.Evaluation;
  export import EvaluationPutEvaluationParams = API.EvaluationPutEvaluationParams;
}

export default Czlai;
