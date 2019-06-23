# leapplay-js-client

LeapplayJsClient - JavaScript client for leapplay-js-client
Learn more at https://www.leap-play.com
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: v1
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install leapplay-js-client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your leapplay-js-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('leapplay-js-client')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/leapplay-js-client
then install it via:

```shell
    npm install YOUR_USERNAME/leapplay-js-client --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var LeapplayJsClient = require('leapplay-js-client');

var defaultClient = LeapplayJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix['Authorization'] = "Token"

var api = new LeapplayJsClient.AccountsApi()

var changePasswordRequest = new LeapplayJsClient.RequestChangePassword(); // {RequestChangePassword} The change password request.

api.changePassword(changePasswordRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.leap-play.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*LeapplayJsClient.AccountsApi* | [**changePassword**](docs/AccountsApi.md#changePassword) | **POST** /api/v1/accounts/password/change | Changes the Password and provides a new Refresh Token (Auth)
*LeapplayJsClient.AccountsApi* | [**confirmEmail**](docs/AccountsApi.md#confirmEmail) | **POST** /api/v1/accounts/email/confirmation | Confirms ownership of an E-Mail Address by an E-Mail Confirmation Token
*LeapplayJsClient.AccountsApi* | [**register**](docs/AccountsApi.md#register) | **POST** /api/v1/accounts/register | Registers a User Account
*LeapplayJsClient.AccountsApi* | [**requestPassword**](docs/AccountsApi.md#requestPassword) | **POST** /api/v1/accounts/password/forgot | Receives a Reset Token that is required to reset the Password
*LeapplayJsClient.AccountsApi* | [**resendEMailConfirmation**](docs/AccountsApi.md#resendEMailConfirmation) | **POST** /api/v1/accounts/email/confirmation/send | Re-sends a message with a EMail Confirmation Token.
*LeapplayJsClient.AccountsApi* | [**resetPassword**](docs/AccountsApi.md#resetPassword) | **POST** /api/v1/accounts/password/reset | Resets the Password with an Reset Token
*LeapplayJsClient.AuthApi* | [**login**](docs/AuthApi.md#login) | **POST** /api/v1/auth/login | Receive an Access and Refresh Token
*LeapplayJsClient.AuthApi* | [**logout**](docs/AuthApi.md#logout) | **POST** /api/v1/auth/logout | Invalidate the Refresh token (Auth)
*LeapplayJsClient.AuthApi* | [**refreshToken**](docs/AuthApi.md#refreshToken) | **POST** /api/v1/auth/refreshtoken | Receive a new Access token
*LeapplayJsClient.StationsApi* | [**createStation**](docs/StationsApi.md#createStation) | **PUT** /api/v1/stations | Creates a Station (Auth)
*LeapplayJsClient.StationsApi* | [**getSessionLogsAll**](docs/StationsApi.md#getSessionLogsAll) | **GET** /api/v1/stations/sessions | Gets closed Sessions from all stations (Auth)
*LeapplayJsClient.StationsApi* | [**getSessionLogsByStationId**](docs/StationsApi.md#getSessionLogsByStationId) | **GET** /api/v1/stations/{stationId}/sessions | Gets closed Sessions (Auth)
*LeapplayJsClient.StationsApi* | [**getSettings**](docs/StationsApi.md#getSettings) | **GET** /api/v1/stations/settings | Gets the Settings of all Stations (Auth)
*LeapplayJsClient.StationsApi* | [**getSettingsByStationId**](docs/StationsApi.md#getSettingsByStationId) | **GET** /api/v1/stations/{stationId}/settings | Get the Settings of an Station (Auth)
*LeapplayJsClient.StationsApi* | [**getState**](docs/StationsApi.md#getState) | **GET** /api/v1/stations/{stationId} | Get the Station&#39;s State (Auth)
*LeapplayJsClient.StationsApi* | [**getStates**](docs/StationsApi.md#getStates) | **GET** /api/v1/stations | Gets Collection of Station States (Auth)
*LeapplayJsClient.StationsApi* | [**sessionCreate**](docs/StationsApi.md#sessionCreate) | **PUT** /api/v1/stations/{stationId}/sessions | Creates a Session (Auth)
*LeapplayJsClient.StationsApi* | [**sessionStop**](docs/StationsApi.md#sessionStop) | **POST** /api/v1/stations/{stationId}/sessions/current/stop | Stops the running Session (Auth)
*LeapplayJsClient.StationsApi* | [**sessionUpdate**](docs/StationsApi.md#sessionUpdate) | **POST** /api/v1/stations/{stationId}/sessions/current/update | Updates the running Session. (Auth)
*LeapplayJsClient.StationsApi* | [**setSettings**](docs/StationsApi.md#setSettings) | **POST** /api/v1/stations/{stationId}/settings | Sets the Settings for an Station (Auth)
*LeapplayJsClient.StationsApi* | [**setStationMode**](docs/StationsApi.md#setStationMode) | **POST** /api/v1/stations/{stationId}/settings/mode | Sets the Operation Mode (Auth)
*LeapplayJsClient.StationsApi* | [**setStationPassword**](docs/StationsApi.md#setStationPassword) | **POST** /api/v1/stations/{stationId}/settings/password | Changes the Password (Auth)
*LeapplayJsClient.StationsApi* | [**setStationQrCode**](docs/StationsApi.md#setStationQrCode) | **POST** /api/v1/stations/{stationId}/settings/qrcode | Sets the QrCode (Auth)


## Documentation for Models

 - [LeapplayJsClient.AccessToken](docs/AccessToken.md)
 - [LeapplayJsClient.ChangeRequest](docs/ChangeRequest.md)
 - [LeapplayJsClient.ChangedPasswordUser](docs/ChangedPasswordUser.md)
 - [LeapplayJsClient.CreatedSession](docs/CreatedSession.md)
 - [LeapplayJsClient.LoginResponse](docs/LoginResponse.md)
 - [LeapplayJsClient.RequestChangePassword](docs/RequestChangePassword.md)
 - [LeapplayJsClient.RequestCreateStation](docs/RequestCreateStation.md)
 - [LeapplayJsClient.RequestEmailConfirmation](docs/RequestEmailConfirmation.md)
 - [LeapplayJsClient.RequestForgotPassword](docs/RequestForgotPassword.md)
 - [LeapplayJsClient.RequestLoginModel](docs/RequestLoginModel.md)
 - [LeapplayJsClient.RequestNewStationSession](docs/RequestNewStationSession.md)
 - [LeapplayJsClient.RequestRegisterUser](docs/RequestRegisterUser.md)
 - [LeapplayJsClient.RequestResendConfirmationEmail](docs/RequestResendConfirmationEmail.md)
 - [LeapplayJsClient.RequestResetPassword](docs/RequestResetPassword.md)
 - [LeapplayJsClient.RequestSessionUpdate](docs/RequestSessionUpdate.md)
 - [LeapplayJsClient.RequestSetStationPassword](docs/RequestSetStationPassword.md)
 - [LeapplayJsClient.RequestStationMode](docs/RequestStationMode.md)
 - [LeapplayJsClient.RequestStationQrCode](docs/RequestStationQrCode.md)
 - [LeapplayJsClient.RequestStationSettings](docs/RequestStationSettings.md)
 - [LeapplayJsClient.RequestTokenRefresh](docs/RequestTokenRefresh.md)
 - [LeapplayJsClient.Session](docs/Session.md)
 - [LeapplayJsClient.SessionLog](docs/SessionLog.md)
 - [LeapplayJsClient.StationCurrentState](docs/StationCurrentState.md)
 - [LeapplayJsClient.StationSettings](docs/StationSettings.md)
 - [LeapplayJsClient.StoppedSession](docs/StoppedSession.md)
 - [LeapplayJsClient.UpdatedSession](docs/UpdatedSession.md)


## Documentation for Authorization


### Bearer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

