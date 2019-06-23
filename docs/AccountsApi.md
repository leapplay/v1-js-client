# LeapplayJsClient.AccountsApi

All URIs are relative to *https://api.leap-play.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changePassword**](AccountsApi.md#changePassword) | **POST** /api/v1/accounts/password/change | Changes the Password and provides a new Refresh Token (Auth)
[**confirmEmail**](AccountsApi.md#confirmEmail) | **POST** /api/v1/accounts/email/confirmation | Confirms ownership of an E-Mail Address by an E-Mail Confirmation Token
[**register**](AccountsApi.md#register) | **POST** /api/v1/accounts/register | Registers a User Account
[**requestPassword**](AccountsApi.md#requestPassword) | **POST** /api/v1/accounts/password/forgot | Receives a Reset Token that is required to reset the Password
[**resendEMailConfirmation**](AccountsApi.md#resendEMailConfirmation) | **POST** /api/v1/accounts/email/confirmation/send | Re-sends a message with a EMail Confirmation Token.
[**resetPassword**](AccountsApi.md#resetPassword) | **POST** /api/v1/accounts/password/reset | Resets the Password with an Reset Token


<a name="changePassword"></a>
# **changePassword**
> ChangedPasswordUser changePassword(changePasswordRequest)

Changes the Password and provides a new Refresh Token (Auth)

### Example
```javascript
var LeapplayJsClient = require('leapplay-js-client');
var defaultClient = LeapplayJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LeapplayJsClient.AccountsApi();

var changePasswordRequest = new LeapplayJsClient.RequestChangePassword(); // RequestChangePassword | The change password request.

apiInstance.changePassword(changePasswordRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changePasswordRequest** | [**RequestChangePassword**](RequestChangePassword.md)| The change password request. | 

### Return type

[**ChangedPasswordUser**](ChangedPasswordUser.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="confirmEmail"></a>
# **confirmEmail**
> confirmEmail(emailConfirmationRequest)

Confirms ownership of an E-Mail Address by an E-Mail Confirmation Token

### Example
```javascript
var LeapplayJsClient = require('leapplay-js-client');

var apiInstance = new LeapplayJsClient.AccountsApi();

var emailConfirmationRequest = new LeapplayJsClient.RequestEmailConfirmation(); // RequestEmailConfirmation | The request email confirmation.

apiInstance.confirmEmail(emailConfirmationRequest).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailConfirmationRequest** | [**RequestEmailConfirmation**](RequestEmailConfirmation.md)| The request email confirmation. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="register"></a>
# **register**
> register(registerRequest)

Registers a User Account

### Example
```javascript
var LeapplayJsClient = require('leapplay-js-client');

var apiInstance = new LeapplayJsClient.AccountsApi();

var registerRequest = new LeapplayJsClient.RequestRegisterUser(); // RequestRegisterUser | 

apiInstance.register(registerRequest).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registerRequest** | [**RequestRegisterUser**](RequestRegisterUser.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="requestPassword"></a>
# **requestPassword**
> requestPassword(forgotPasswordRequest)

Receives a Reset Token that is required to reset the Password

### Example
```javascript
var LeapplayJsClient = require('leapplay-js-client');

var apiInstance = new LeapplayJsClient.AccountsApi();

var forgotPasswordRequest = new LeapplayJsClient.RequestForgotPassword(); // RequestForgotPassword | Request object holding the required parameter

apiInstance.requestPassword(forgotPasswordRequest).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forgotPasswordRequest** | [**RequestForgotPassword**](RequestForgotPassword.md)| Request object holding the required parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="resendEMailConfirmation"></a>
# **resendEMailConfirmation**
> resendEMailConfirmation(resendConfirmationEmailRequest)

Re-sends a message with a EMail Confirmation Token.

### Example
```javascript
var LeapplayJsClient = require('leapplay-js-client');

var apiInstance = new LeapplayJsClient.AccountsApi();

var resendConfirmationEmailRequest = new LeapplayJsClient.RequestResendConfirmationEmail(); // RequestResendConfirmationEmail | The resend email confirmation request.

apiInstance.resendEMailConfirmation(resendConfirmationEmailRequest).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resendConfirmationEmailRequest** | [**RequestResendConfirmationEmail**](RequestResendConfirmationEmail.md)| The resend email confirmation request. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="resetPassword"></a>
# **resetPassword**
> resetPassword(resetPasswordRequest)

Resets the Password with an Reset Token

### Example
```javascript
var LeapplayJsClient = require('leapplay-js-client');

var apiInstance = new LeapplayJsClient.AccountsApi();

var resetPasswordRequest = new LeapplayJsClient.RequestResetPassword(); // RequestResetPassword | The request reset password.

apiInstance.resetPassword(resetPasswordRequest).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetPasswordRequest** | [**RequestResetPassword**](RequestResetPassword.md)| The request reset password. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: application/json

