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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ChangedPasswordUser', 'model/RequestChangePassword', 'model/RequestEmailConfirmation', 'model/RequestForgotPassword', 'model/RequestRegisterUser', 'model/RequestResendConfirmationEmail', 'model/RequestResetPassword'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ChangedPasswordUser'), require('../model/RequestChangePassword'), require('../model/RequestEmailConfirmation'), require('../model/RequestForgotPassword'), require('../model/RequestRegisterUser'), require('../model/RequestResendConfirmationEmail'), require('../model/RequestResetPassword'));
  } else {
    // Browser globals (root is window)
    if (!root.LeapplayJsClient) {
      root.LeapplayJsClient = {};
    }
    root.LeapplayJsClient.AccountsApi = factory(root.LeapplayJsClient.ApiClient, root.LeapplayJsClient.ChangedPasswordUser, root.LeapplayJsClient.RequestChangePassword, root.LeapplayJsClient.RequestEmailConfirmation, root.LeapplayJsClient.RequestForgotPassword, root.LeapplayJsClient.RequestRegisterUser, root.LeapplayJsClient.RequestResendConfirmationEmail, root.LeapplayJsClient.RequestResetPassword);
  }
}(this, function(ApiClient, ChangedPasswordUser, RequestChangePassword, RequestEmailConfirmation, RequestForgotPassword, RequestRegisterUser, RequestResendConfirmationEmail, RequestResetPassword) {
  'use strict';

  /**
   * Accounts service.
   * @module api/AccountsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountsApi. 
   * @alias module:api/AccountsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Changes the Password and provides a new Refresh Token (Auth)
     * @param {module:model/RequestChangePassword} changePasswordRequest The change password request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ChangedPasswordUser} and HTTP response
     */
    this.changePasswordWithHttpInfo = function(changePasswordRequest) {
      var postBody = changePasswordRequest;

      // verify the required parameter 'changePasswordRequest' is set
      if (changePasswordRequest === undefined || changePasswordRequest === null) {
        throw new Error("Missing the required parameter 'changePasswordRequest' when calling changePassword");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['application/json'];
      var returnType = ChangedPasswordUser;

      return this.apiClient.callApi(
        '/api/v1/accounts/password/change', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Changes the Password and provides a new Refresh Token (Auth)
     * @param {module:model/RequestChangePassword} changePasswordRequest The change password request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ChangedPasswordUser}
     */
    this.changePassword = function(changePasswordRequest) {
      return this.changePasswordWithHttpInfo(changePasswordRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Confirms ownership of an E-Mail Address by an E-Mail Confirmation Token
     * @param {module:model/RequestEmailConfirmation} emailConfirmationRequest The request email confirmation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.confirmEmailWithHttpInfo = function(emailConfirmationRequest) {
      var postBody = emailConfirmationRequest;

      // verify the required parameter 'emailConfirmationRequest' is set
      if (emailConfirmationRequest === undefined || emailConfirmationRequest === null) {
        throw new Error("Missing the required parameter 'emailConfirmationRequest' when calling confirmEmail");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/accounts/email/confirmation', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Confirms ownership of an E-Mail Address by an E-Mail Confirmation Token
     * @param {module:model/RequestEmailConfirmation} emailConfirmationRequest The request email confirmation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.confirmEmail = function(emailConfirmationRequest) {
      return this.confirmEmailWithHttpInfo(emailConfirmationRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Registers a User Account
     * @param {module:model/RequestRegisterUser} registerRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.registerWithHttpInfo = function(registerRequest) {
      var postBody = registerRequest;

      // verify the required parameter 'registerRequest' is set
      if (registerRequest === undefined || registerRequest === null) {
        throw new Error("Missing the required parameter 'registerRequest' when calling register");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/accounts/register', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Registers a User Account
     * @param {module:model/RequestRegisterUser} registerRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.register = function(registerRequest) {
      return this.registerWithHttpInfo(registerRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Receives a Reset Token that is required to reset the Password
     * @param {module:model/RequestForgotPassword} forgotPasswordRequest Request object holding the required parameter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.requestPasswordWithHttpInfo = function(forgotPasswordRequest) {
      var postBody = forgotPasswordRequest;

      // verify the required parameter 'forgotPasswordRequest' is set
      if (forgotPasswordRequest === undefined || forgotPasswordRequest === null) {
        throw new Error("Missing the required parameter 'forgotPasswordRequest' when calling requestPassword");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/accounts/password/forgot', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Receives a Reset Token that is required to reset the Password
     * @param {module:model/RequestForgotPassword} forgotPasswordRequest Request object holding the required parameter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.requestPassword = function(forgotPasswordRequest) {
      return this.requestPasswordWithHttpInfo(forgotPasswordRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Re-sends a message with a EMail Confirmation Token.
     * @param {module:model/RequestResendConfirmationEmail} resendConfirmationEmailRequest The resend email confirmation request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.resendEMailConfirmationWithHttpInfo = function(resendConfirmationEmailRequest) {
      var postBody = resendConfirmationEmailRequest;

      // verify the required parameter 'resendConfirmationEmailRequest' is set
      if (resendConfirmationEmailRequest === undefined || resendConfirmationEmailRequest === null) {
        throw new Error("Missing the required parameter 'resendConfirmationEmailRequest' when calling resendEMailConfirmation");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/accounts/email/confirmation/send', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Re-sends a message with a EMail Confirmation Token.
     * @param {module:model/RequestResendConfirmationEmail} resendConfirmationEmailRequest The resend email confirmation request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.resendEMailConfirmation = function(resendConfirmationEmailRequest) {
      return this.resendEMailConfirmationWithHttpInfo(resendConfirmationEmailRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Resets the Password with an Reset Token
     * @param {module:model/RequestResetPassword} resetPasswordRequest The request reset password.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.resetPasswordWithHttpInfo = function(resetPasswordRequest) {
      var postBody = resetPasswordRequest;

      // verify the required parameter 'resetPasswordRequest' is set
      if (resetPasswordRequest === undefined || resetPasswordRequest === null) {
        throw new Error("Missing the required parameter 'resetPasswordRequest' when calling resetPassword");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/accounts/password/reset', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Resets the Password with an Reset Token
     * @param {module:model/RequestResetPassword} resetPasswordRequest The request reset password.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.resetPassword = function(resetPasswordRequest) {
      return this.resetPasswordWithHttpInfo(resetPasswordRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));