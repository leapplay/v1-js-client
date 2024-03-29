/**
 * Leap Play
 * Learn more at https://www.leap-play.com
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccessToken', 'model/ChangeRequest', 'model/ChangedPasswordUser', 'model/CreatedSession', 'model/LoginResponse', 'model/RequestChangePassword', 'model/RequestCreateStation', 'model/RequestEmailConfirmation', 'model/RequestForgotPassword', 'model/RequestLoginModel', 'model/RequestNewStationSession', 'model/RequestRegisterUser', 'model/RequestResendConfirmationEmail', 'model/RequestResetPassword', 'model/RequestSessionUpdate', 'model/RequestSetStationPassword', 'model/RequestStationMode', 'model/RequestStationQrCode', 'model/RequestStationSettings', 'model/RequestTokenRefresh', 'model/Session', 'model/SessionLog', 'model/StationCurrentState', 'model/StationSettings', 'model/StoppedSession', 'model/UpdatedSession', 'api/AccountsApi', 'api/AuthApi', 'api/StationsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AccessToken'), require('./model/ChangeRequest'), require('./model/ChangedPasswordUser'), require('./model/CreatedSession'), require('./model/LoginResponse'), require('./model/RequestChangePassword'), require('./model/RequestCreateStation'), require('./model/RequestEmailConfirmation'), require('./model/RequestForgotPassword'), require('./model/RequestLoginModel'), require('./model/RequestNewStationSession'), require('./model/RequestRegisterUser'), require('./model/RequestResendConfirmationEmail'), require('./model/RequestResetPassword'), require('./model/RequestSessionUpdate'), require('./model/RequestSetStationPassword'), require('./model/RequestStationMode'), require('./model/RequestStationQrCode'), require('./model/RequestStationSettings'), require('./model/RequestTokenRefresh'), require('./model/Session'), require('./model/SessionLog'), require('./model/StationCurrentState'), require('./model/StationSettings'), require('./model/StoppedSession'), require('./model/UpdatedSession'), require('./api/AccountsApi'), require('./api/AuthApi'), require('./api/StationsApi'));
  }
}(function(ApiClient, AccessToken, ChangeRequest, ChangedPasswordUser, CreatedSession, LoginResponse, RequestChangePassword, RequestCreateStation, RequestEmailConfirmation, RequestForgotPassword, RequestLoginModel, RequestNewStationSession, RequestRegisterUser, RequestResendConfirmationEmail, RequestResetPassword, RequestSessionUpdate, RequestSetStationPassword, RequestStationMode, RequestStationQrCode, RequestStationSettings, RequestTokenRefresh, Session, SessionLog, StationCurrentState, StationSettings, StoppedSession, UpdatedSession, AccountsApi, AuthApi, StationsApi) {
  'use strict';

  /**
   * Leap Play Client library .<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var LeapplayJsClient = require('index'); // See note below*.
   * var xxxSvc = new LeapplayJsClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new LeapplayJsClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new LeapplayJsClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new LeapplayJsClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AccessToken model constructor.
     * @property {module:model/AccessToken}
     */
    AccessToken: AccessToken,
    /**
     * The ChangeRequest model constructor.
     * @property {module:model/ChangeRequest}
     */
    ChangeRequest: ChangeRequest,
    /**
     * The ChangedPasswordUser model constructor.
     * @property {module:model/ChangedPasswordUser}
     */
    ChangedPasswordUser: ChangedPasswordUser,
    /**
     * The CreatedSession model constructor.
     * @property {module:model/CreatedSession}
     */
    CreatedSession: CreatedSession,
    /**
     * The LoginResponse model constructor.
     * @property {module:model/LoginResponse}
     */
    LoginResponse: LoginResponse,
    /**
     * The RequestChangePassword model constructor.
     * @property {module:model/RequestChangePassword}
     */
    RequestChangePassword: RequestChangePassword,
    /**
     * The RequestCreateStation model constructor.
     * @property {module:model/RequestCreateStation}
     */
    RequestCreateStation: RequestCreateStation,
    /**
     * The RequestEmailConfirmation model constructor.
     * @property {module:model/RequestEmailConfirmation}
     */
    RequestEmailConfirmation: RequestEmailConfirmation,
    /**
     * The RequestForgotPassword model constructor.
     * @property {module:model/RequestForgotPassword}
     */
    RequestForgotPassword: RequestForgotPassword,
    /**
     * The RequestLoginModel model constructor.
     * @property {module:model/RequestLoginModel}
     */
    RequestLoginModel: RequestLoginModel,
    /**
     * The RequestNewStationSession model constructor.
     * @property {module:model/RequestNewStationSession}
     */
    RequestNewStationSession: RequestNewStationSession,
    /**
     * The RequestRegisterUser model constructor.
     * @property {module:model/RequestRegisterUser}
     */
    RequestRegisterUser: RequestRegisterUser,
    /**
     * The RequestResendConfirmationEmail model constructor.
     * @property {module:model/RequestResendConfirmationEmail}
     */
    RequestResendConfirmationEmail: RequestResendConfirmationEmail,
    /**
     * The RequestResetPassword model constructor.
     * @property {module:model/RequestResetPassword}
     */
    RequestResetPassword: RequestResetPassword,
    /**
     * The RequestSessionUpdate model constructor.
     * @property {module:model/RequestSessionUpdate}
     */
    RequestSessionUpdate: RequestSessionUpdate,
    /**
     * The RequestSetStationPassword model constructor.
     * @property {module:model/RequestSetStationPassword}
     */
    RequestSetStationPassword: RequestSetStationPassword,
    /**
     * The RequestStationMode model constructor.
     * @property {module:model/RequestStationMode}
     */
    RequestStationMode: RequestStationMode,
    /**
     * The RequestStationQrCode model constructor.
     * @property {module:model/RequestStationQrCode}
     */
    RequestStationQrCode: RequestStationQrCode,
    /**
     * The RequestStationSettings model constructor.
     * @property {module:model/RequestStationSettings}
     */
    RequestStationSettings: RequestStationSettings,
    /**
     * The RequestTokenRefresh model constructor.
     * @property {module:model/RequestTokenRefresh}
     */
    RequestTokenRefresh: RequestTokenRefresh,
    /**
     * The Session model constructor.
     * @property {module:model/Session}
     */
    Session: Session,
    /**
     * The SessionLog model constructor.
     * @property {module:model/SessionLog}
     */
    SessionLog: SessionLog,
    /**
     * The StationCurrentState model constructor.
     * @property {module:model/StationCurrentState}
     */
    StationCurrentState: StationCurrentState,
    /**
     * The StationSettings model constructor.
     * @property {module:model/StationSettings}
     */
    StationSettings: StationSettings,
    /**
     * The StoppedSession model constructor.
     * @property {module:model/StoppedSession}
     */
    StoppedSession: StoppedSession,
    /**
     * The UpdatedSession model constructor.
     * @property {module:model/UpdatedSession}
     */
    UpdatedSession: UpdatedSession,
    /**
     * The AccountsApi service constructor.
     * @property {module:api/AccountsApi}
     */
    AccountsApi: AccountsApi,
    /**
     * The AuthApi service constructor.
     * @property {module:api/AuthApi}
     */
    AuthApi: AuthApi,
    /**
     * The StationsApi service constructor.
     * @property {module:api/StationsApi}
     */
    StationsApi: StationsApi
  };

  return exports;
}));
