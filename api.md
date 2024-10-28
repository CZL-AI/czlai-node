# Aidoc

Types:

- <code><a href="./src/resources/aidoc.ts">AidocIfContinueAskResponse</a></code>
- <code><a href="./src/resources/aidoc.ts">AidocIfNeedImageResponse</a></code>

Methods:

- <code title="post /aidoc/if-continue-ask">client.aidoc.<a href="./src/resources/aidoc.ts">ifContinueAsk</a>({ ...params }) -> string</code>
- <code title="post /aidoc/if-need-image">client.aidoc.<a href="./src/resources/aidoc.ts">ifNeedImage</a>({ ...params }) -> unknown</code>
- <code title="post /aidoc/pic-result">client.aidoc.<a href="./src/resources/aidoc.ts">picResult</a>({ ...params }) -> void</code>
- <code title="post /aidoc/report">client.aidoc.<a href="./src/resources/aidoc.ts">report</a>({ ...params }) -> void</code>
- <code title="post /aidoc/report-task">client.aidoc.<a href="./src/resources/aidoc.ts">reportTask</a>({ ...params }) -> void</code>

# AidocExotic

Types:

- <code><a href="./src/resources/aidoc-exotic.ts">AidocExoticAskContinueResponse</a></code>
- <code><a href="./src/resources/aidoc-exotic.ts">AidocExoticIfNeedImageResponse</a></code>
- <code><a href="./src/resources/aidoc-exotic.ts">AidocExoticKeywordsResponse</a></code>
- <code><a href="./src/resources/aidoc-exotic.ts">AidocExoticOptionsResponse</a></code>
- <code><a href="./src/resources/aidoc-exotic.ts">AidocExoticQuestionResponse</a></code>

Methods:

- <code title="post /aidoc-exotic/if-continue-ask">client.aidocExotic.<a href="./src/resources/aidoc-exotic.ts">askContinue</a>({ ...params }) -> string</code>
- <code title="post /aidoc-exotic/if-need-image">client.aidocExotic.<a href="./src/resources/aidoc-exotic.ts">ifNeedImage</a>({ ...params }) -> unknown</code>
- <code title="post /aidoc-exotic/keywords">client.aidocExotic.<a href="./src/resources/aidoc-exotic.ts">keywords</a>({ ...params }) -> AidocExoticKeywordsResponse</code>
- <code title="post /aidoc-exotic/options">client.aidocExotic.<a href="./src/resources/aidoc-exotic.ts">options</a>({ ...params }) -> string</code>
- <code title="post /aidoc-exotic/pic-result">client.aidocExotic.<a href="./src/resources/aidoc-exotic.ts">picResult</a>({ ...params }) -> void</code>
- <code title="post /aidoc-exotic/question">client.aidocExotic.<a href="./src/resources/aidoc-exotic.ts">question</a>({ ...params }) -> string</code>
- <code title="post /aidoc-exotic/report">client.aidocExotic.<a href="./src/resources/aidoc-exotic.ts">report</a>({ ...params }) -> void</code>
- <code title="post /aidoc-exotic/report-task">client.aidocExotic.<a href="./src/resources/aidoc-exotic.ts">reportTask</a>({ ...params }) -> void</code>
- <code title="post /aidoc-exotic/summary">client.aidocExotic.<a href="./src/resources/aidoc-exotic.ts">summarize</a>({ ...params }) -> void</code>

# SessionRecords

Methods:

- <code title="post /session-record/history">client.sessionRecords.<a href="./src/resources/session-records.ts">history</a>({ ...params }) -> void</code>

# MedicalRecords

Types:

- <code><a href="./src/resources/medical-records.ts">MedicalRecord</a></code>
- <code><a href="./src/resources/medical-records.ts">MedicalRecordRetrieveResponse</a></code>
- <code><a href="./src/resources/medical-records.ts">MedicalRecordCreateListResponse</a></code>

Methods:

- <code title="get /medical-record">client.medicalRecords.<a href="./src/resources/medical-records.ts">retrieve</a>({ ...params }) -> MedicalRecordRetrieveResponse</code>
- <code title="put /medical-record">client.medicalRecords.<a href="./src/resources/medical-records.ts">update</a>({ ...params }) -> void</code>
- <code title="post /medical-record-list">client.medicalRecords.<a href="./src/resources/medical-records.ts">createList</a>({ ...params }) -> MedicalRecordCreateListResponse</code>
- <code title="get /medical-record/ongoing-record">client.medicalRecords.<a href="./src/resources/medical-records.ts">ongoingRecord</a>({ ...params }) -> void</code>

# AICheckup

Types:

- <code><a href="./src/resources/ai-checkup.ts">AICheckupIsFirstResponse</a></code>
- <code><a href="./src/resources/ai-checkup.ts">AICheckupSessionStartResponse</a></code>
- <code><a href="./src/resources/ai-checkup.ts">AICheckupSummaryResponse</a></code>
- <code><a href="./src/resources/ai-checkup.ts">AICheckupUpdateProfileResponse</a></code>

Methods:

- <code title="get /ai-checkup/is-first">client.aiCheckup.<a href="./src/resources/ai-checkup.ts">isFirst</a>({ ...params }) -> AICheckupIsFirstResponse</code>
- <code title="post /ai-checkup/pic-result">client.aiCheckup.<a href="./src/resources/ai-checkup.ts">picResult</a>({ ...params }) -> void</code>
- <code title="post /ai-checkup/question">client.aiCheckup.<a href="./src/resources/ai-checkup.ts">question</a>({ ...params }) -> void</code>
- <code title="post /ai-checkup/question-result">client.aiCheckup.<a href="./src/resources/ai-checkup.ts">questionResult</a>({ ...params }) -> void</code>
- <code title="post /ai-checkup/report">client.aiCheckup.<a href="./src/resources/ai-checkup.ts">report</a>({ ...params }) -> void</code>
- <code title="post /ai-checkup/report-task">client.aiCheckup.<a href="./src/resources/ai-checkup.ts">reportTask</a>({ ...params }) -> void</code>
- <code title="get /ai-checkup/session-start">client.aiCheckup.<a href="./src/resources/ai-checkup.ts">sessionStart</a>() -> AICheckupSessionStartResponse</code>
- <code title="post /ai-checkup/summary">client.aiCheckup.<a href="./src/resources/ai-checkup.ts">summary</a>({ ...params }) -> string</code>
- <code title="post /ai-checkup/update-profile">client.aiCheckup.<a href="./src/resources/ai-checkup.ts">updateProfile</a>({ ...params }) -> AICheckupUpdateProfileResponse</code>

# AIConv

Types:

- <code><a href="./src/resources/ai-conv.ts">AIConvAnswerResponse</a></code>

Methods:

- <code title="post /ai-conv/answer">client.aiConv.<a href="./src/resources/ai-conv.ts">answer</a>({ ...params }) -> string</code>
- <code title="post /ai-conv/relation">client.aiConv.<a href="./src/resources/ai-conv.ts">relation</a>({ ...params }) -> void</code>
- <code title="post /ai-conv/validate">client.aiConv.<a href="./src/resources/ai-conv.ts">validate</a>({ ...params }) -> void</code>

# Users

Methods:

- <code title="post /chat-v">client.users.<a href="./src/resources/users/users.ts">chatV</a>({ ...params }) -> void</code>
- <code title="post /logout">client.users.<a href="./src/resources/users/users.ts">logout</a>() -> void</code>
- <code title="post /send-sms">client.users.<a href="./src/resources/users/users.ts">sendSMS</a>({ ...params }) -> void</code>

## UserInfo

Methods:

- <code title="get /user-info">client.users.userInfo.<a href="./src/resources/users/user-info.ts">retrieve</a>({ ...params }) -> void</code>

## Contact

Methods:

- <code title="post /contact">client.users.contact.<a href="./src/resources/users/contact.ts">create</a>({ ...params }) -> void</code>

## Summary

Methods:

- <code title="post /summary">client.users.summary.<a href="./src/resources/users/summary.ts">create</a>({ ...params }) -> void</code>

## Asr

Methods:

- <code title="post /asr">client.users.asr.<a href="./src/resources/users/asr.ts">create</a>({ ...params }) -> void</code>

## Industry

Methods:

- <code title="get /industry">client.users.industry.<a href="./src/resources/users/industry.ts">retrieve</a>() -> void</code>

# Upload

Methods:

- <code title="post /upload">client.upload.<a href="./src/resources/upload.ts">create</a>({ ...params }) -> void</code>

# UploadImage

Methods:

- <code title="post /upload-image">client.uploadImage.<a href="./src/resources/upload-image.ts">create</a>({ ...params }) -> void</code>

# UploadImageOss

Methods:

- <code title="post /upload-image-oss">client.uploadImageOss.<a href="./src/resources/upload-image-oss.ts">create</a>({ ...params }) -> void</code>

# PetProfiles

Types:

- <code><a href="./src/resources/pet-profiles.ts">PetProfile</a></code>
- <code><a href="./src/resources/pet-profiles.ts">PetProfileRetrieveResponse</a></code>
- <code><a href="./src/resources/pet-profiles.ts">PetProfileListResponse</a></code>
- <code><a href="./src/resources/pet-profiles.ts">PetProfileDeleteResponse</a></code>
- <code><a href="./src/resources/pet-profiles.ts">PetProfileVarietyResponse</a></code>

Methods:

- <code title="post /pet-profile">client.petProfiles.<a href="./src/resources/pet-profiles.ts">create</a>({ ...params }) -> void</code>
- <code title="get /pet-profile">client.petProfiles.<a href="./src/resources/pet-profiles.ts">retrieve</a>({ ...params }) -> PetProfileRetrieveResponse</code>
- <code title="put /pet-profile">client.petProfiles.<a href="./src/resources/pet-profiles.ts">update</a>({ ...params }) -> void</code>
- <code title="get /pet-profiles">client.petProfiles.<a href="./src/resources/pet-profiles.ts">list</a>() -> PetProfileListResponse</code>
- <code title="delete /pet-profile">client.petProfiles.<a href="./src/resources/pet-profiles.ts">delete</a>({ ...params }) -> PetProfileDeleteResponse</code>
- <code title="post /pet-profile/ex-info">client.petProfiles.<a href="./src/resources/pet-profiles.ts">exInfo</a>({ ...params }) -> void</code>
- <code title="post /pet-profile/variety">client.petProfiles.<a href="./src/resources/pet-profiles.ts">variety</a>({ ...params }) -> string</code>

# AIMemes

Types:

- <code><a href="./src/resources/ai-memes.ts">AIMeme</a></code>
- <code><a href="./src/resources/ai-memes.ts">AIMemeCreateResponse</a></code>
- <code><a href="./src/resources/ai-memes.ts">AIMemeRetrieveResponse</a></code>
- <code><a href="./src/resources/ai-memes.ts">AIMemeGenerateResponse</a></code>

Methods:

- <code title="post /ai-meme">client.aiMemes.<a href="./src/resources/ai-memes.ts">create</a>({ ...params }) -> AIMemeCreateResponse</code>
- <code title="get /ai-meme">client.aiMemes.<a href="./src/resources/ai-memes.ts">retrieve</a>({ ...params }) -> AIMemeRetrieveResponse</code>
- <code title="post /ai-meme/generate">client.aiMemes.<a href="./src/resources/ai-memes.ts">generate</a>({ ...params }) -> AIMemeGenerateResponse</code>

# MedicationAnalysis

Methods:

- <code title="post /medication_analysis/pic-result">client.medicationAnalysis.<a href="./src/resources/medication-analysis.ts">picResult</a>({ ...params }) -> void</code>
- <code title="post /medication_analysis/report">client.medicationAnalysis.<a href="./src/resources/medication-analysis.ts">report</a>({ ...params }) -> void</code>
- <code title="post /medication_analysis/summary">client.medicationAnalysis.<a href="./src/resources/medication-analysis.ts">summary</a>({ ...params }) -> void</code>

# Aipic

Methods:

- <code title="post /aipic/options">client.aipic.<a href="./src/resources/aipic.ts">options</a>({ ...params }) -> void</code>
- <code title="post /aipic/pic-result">client.aipic.<a href="./src/resources/aipic.ts">picResult</a>({ ...params }) -> void</code>
- <code title="post /aipic/question">client.aipic.<a href="./src/resources/aipic.ts">question</a>({ ...params }) -> void</code>
- <code title="post /aipic/report">client.aipic.<a href="./src/resources/aipic.ts">report</a>({ ...params }) -> void</code>
- <code title="post /aipic/report-task">client.aipic.<a href="./src/resources/aipic.ts">reportTask</a>({ ...params }) -> void</code>
- <code title="post /aipic/validate">client.aipic.<a href="./src/resources/aipic.ts">validate</a>({ ...params }) -> void</code>

# Aipics

Methods:

- <code title="post /aipic/summary">client.aipics.<a href="./src/resources/aipics.ts">summary</a>({ ...params }) -> void</code>

# AipicExotics

Methods:

- <code title="post /aipic-exotic/options">client.aipicExotics.<a href="./src/resources/aipic-exotics.ts">options</a>({ ...params }) -> void</code>
- <code title="post /aipic-exotic/pic-result">client.aipicExotics.<a href="./src/resources/aipic-exotics.ts">picResult</a>({ ...params }) -> void</code>
- <code title="post /aipic-exotic/question">client.aipicExotics.<a href="./src/resources/aipic-exotics.ts">question</a>({ ...params }) -> void</code>
- <code title="post /aipic-exotic/report">client.aipicExotics.<a href="./src/resources/aipic-exotics.ts">report</a>({ ...params }) -> void</code>
- <code title="post /aipic-exotic/report-task">client.aipicExotics.<a href="./src/resources/aipic-exotics.ts">reportTask</a>({ ...params }) -> void</code>
- <code title="post /aipic-exotic/summary">client.aipicExotics.<a href="./src/resources/aipic-exotics.ts">summary</a>({ ...params }) -> void</code>
- <code title="post /aipic-exotic/validate">client.aipicExotics.<a href="./src/resources/aipic-exotics.ts">validate</a>({ ...params }) -> void</code>

# AITrials

Methods:

- <code title="post /ai-trial/options">client.aiTrials.<a href="./src/resources/ai-trials.ts">options</a>({ ...params }) -> void</code>
- <code title="post /ai-trial/question">client.aiTrials.<a href="./src/resources/ai-trials.ts">question</a>({ ...params }) -> void</code>

# AITrial

Types:

- <code><a href="./src/resources/ai-trial.ts">AITrialAnswerResponse</a></code>

Methods:

- <code title="post /ai-trial/answer">client.aiTrial.<a href="./src/resources/ai-trial.ts">answer</a>({ ...params }) -> string</code>
- <code title="post /ai-trial/history">client.aiTrial.<a href="./src/resources/ai-trial.ts">history</a>({ ...params }) -> void</code>
- <code title="post /ai-trial/relation">client.aiTrial.<a href="./src/resources/ai-trial.ts">relation</a>({ ...params }) -> void</code>
- <code title="post /ai-trial/report">client.aiTrial.<a href="./src/resources/ai-trial.ts">report</a>({ ...params }) -> void</code>
- <code title="post /ai-trial/session-start">client.aiTrial.<a href="./src/resources/ai-trial.ts">sessionStart</a>({ ...params }) -> void</code>
- <code title="post /ai-trial/summary">client.aiTrial.<a href="./src/resources/ai-trial.ts">summary</a>({ ...params }) -> void</code>

# Policies

Methods:

- <code title="post /policy/policy_info">client.policies.<a href="./src/resources/policies.ts">policyInfo</a>({ ...params }) -> void</code>

# MagnumKeys

Methods:

- <code title="post /magnumkey/get-key">client.magnumKeys.<a href="./src/resources/magnum-keys.ts">getKey</a>({ ...params }) -> void</code>
- <code title="post /magnumkey/picture-choice">client.magnumKeys.<a href="./src/resources/magnum-keys.ts">pictureChoice</a>({ ...params }) -> void</code>
- <code title="post /magnumkey/picture-question">client.magnumKeys.<a href="./src/resources/magnum-keys.ts">pictureQuestion</a>({ ...params }) -> void</code>
- <code title="post /magnumkey/voice-choice">client.magnumKeys.<a href="./src/resources/magnum-keys.ts">voiceChoice</a>({ ...params }) -> void</code>
- <code title="post /magnumkey/voice-question">client.magnumKeys.<a href="./src/resources/magnum-keys.ts">voiceQuestion</a>({ ...params }) -> void</code>

# Buriedpoints

Methods:

- <code title="post /page-buriedpoint">client.buriedpoints.<a href="./src/resources/buriedpoints.ts">create</a>({ ...params }) -> void</code>

# Whitelist

Methods:

- <code title="post /whitelist/filtering_data">client.whitelist.<a href="./src/resources/whitelist.ts">filteringData</a>({ ...params }) -> void</code>
- <code title="post /whitelist/save_data">client.whitelist.<a href="./src/resources/whitelist.ts">saveData</a>({ ...params }) -> void</code>

# Pets

## PetInfo

Methods:

- <code title="get /pets/pet-info">client.pets.petInfo.<a href="./src/resources/pets/pet-info.ts">retrieve</a>({ ...params }) -> void</code>

# UserModuleUsages

Types:

- <code><a href="./src/resources/user-module-usages/user-module-usages.ts">UserModuleUsageGetAddWecomeBonusResponse</a></code>
- <code><a href="./src/resources/user-module-usages/user-module-usages.ts">UserModuleUsageGetWechatMiniQrcodeResponse</a></code>

Methods:

- <code title="post /user-module-usage/checkin">client.userModuleUsages.<a href="./src/resources/user-module-usages/user-module-usages.ts">checkin</a>() -> void</code>
- <code title="post /user-module-usage/get-add-wecome-bonus">client.userModuleUsages.<a href="./src/resources/user-module-usages/user-module-usages.ts">getAddWecomeBonus</a>({ ...params }) -> UserModuleUsageGetAddWecomeBonusResponse</code>
- <code title="post /user-module-usage/get-wechat-mini-qrcode">client.userModuleUsages.<a href="./src/resources/user-module-usages/user-module-usages.ts">getWechatMiniQrcode</a>() -> UserModuleUsageGetWechatMiniQrcodeResponse</code>

## IsAddWecome

Types:

- <code><a href="./src/resources/user-module-usages/is-add-wecome.ts">IsAddWecomeRetrieveResponse</a></code>

Methods:

- <code title="get /user-module-usage/is-add-wecome">client.userModuleUsages.isAddWecome.<a href="./src/resources/user-module-usages/is-add-wecome.ts">retrieve</a>() -> IsAddWecomeRetrieveResponse</code>

# Logins

Types:

- <code><a href="./src/resources/logins.ts">LoginResponse</a></code>

Methods:

- <code title="post /sms-login">client.logins.<a href="./src/resources/logins.ts">sms</a>({ ...params }) -> LoginResponse</code>
- <code title="post /wechat-login">client.logins.<a href="./src/resources/logins.ts">wechat</a>({ ...params }) -> void</code>

# UserPoints

Types:

- <code><a href="./src/resources/user-points.ts">UserPointRetrieveResponse</a></code>

Methods:

- <code title="get /user-point">client.userPoints.<a href="./src/resources/user-points.ts">retrieve</a>() -> UserPointRetrieveResponse</code>
- <code title="post /user-point/cost-report">client.userPoints.<a href="./src/resources/user-points.ts">costReport</a>({ ...params }) -> void</code>

# PointPrices

Types:

- <code><a href="./src/resources/point-prices.ts">PointPriceRetrieveResponse</a></code>

Methods:

- <code title="get /point-price">client.pointPrices.<a href="./src/resources/point-prices.ts">retrieve</a>() -> PointPriceRetrieveResponse</code>

# PointDetails

Types:

- <code><a href="./src/resources/point-details.ts">PointDetailRetrieveResponse</a></code>

Methods:

- <code title="get /point-detail">client.pointDetails.<a href="./src/resources/point-details.ts">retrieve</a>({ ...params }) -> PointDetailRetrieveResponse</code>

# PointTasks

Types:

- <code><a href="./src/resources/point-tasks.ts">PointTaskListResponse</a></code>

Methods:

- <code title="get /point-task">client.pointTasks.<a href="./src/resources/point-tasks.ts">list</a>() -> PointTaskListResponse</code>
- <code title="post /point-task/bonus">client.pointTasks.<a href="./src/resources/point-tasks.ts">bonus</a>({ ...params }) -> void</code>
- <code title="post /point-task/confirm">client.pointTasks.<a href="./src/resources/point-tasks.ts">confirm</a>({ ...params }) -> void</code>

# CheckPoints

Methods:

- <code title="post /check-point">client.checkPoints.<a href="./src/resources/check-points.ts">create</a>({ ...params }) -> void</code>

# UserAdvices

Methods:

- <code title="post /user-advice">client.userAdvices.<a href="./src/resources/user-advices.ts">create</a>({ ...params }) -> void</code>

# Evaluation

Methods:

- <code title="post /evaluation/put_evaluation">client.evaluation.<a href="./src/resources/evaluation.ts">putEvaluation</a>({ ...params }) -> void</code>
