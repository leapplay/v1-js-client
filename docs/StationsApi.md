# LeapplayJsClient.StationsApi

All URIs are relative to *https://api.leap-play.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createStation**](StationsApi.md#createStation) | **PUT** /api/v1/stations | Creates a Station (Auth)
[**getSessionLogsAll**](StationsApi.md#getSessionLogsAll) | **GET** /api/v1/stations/sessions | Gets closed Sessions from all stations (Auth)
[**getSessionLogsByStationId**](StationsApi.md#getSessionLogsByStationId) | **GET** /api/v1/stations/{stationId}/sessions | Gets closed Sessions (Auth)
[**getSettings**](StationsApi.md#getSettings) | **GET** /api/v1/stations/settings | Gets the Settings of all Stations (Auth)
[**getSettingsByStationId**](StationsApi.md#getSettingsByStationId) | **GET** /api/v1/stations/{stationId}/settings | Get the Settings of an Station (Auth)
[**getState**](StationsApi.md#getState) | **GET** /api/v1/stations/{stationId} | Get the Station&#39;s State (Auth)
[**getStates**](StationsApi.md#getStates) | **GET** /api/v1/stations | Gets Collection of Station States (Auth)
[**sessionCreate**](StationsApi.md#sessionCreate) | **PUT** /api/v1/stations/{stationId}/sessions | Creates a Session (Auth)
[**sessionStop**](StationsApi.md#sessionStop) | **POST** /api/v1/stations/{stationId}/sessions/current/stop | Stops the running Session (Auth)
[**sessionUpdate**](StationsApi.md#sessionUpdate) | **POST** /api/v1/stations/{stationId}/sessions/current/update | Updates the running Session. (Auth)
[**setSettings**](StationsApi.md#setSettings) | **POST** /api/v1/stations/{stationId}/settings | Sets the Settings for an Station (Auth)
[**setStationMode**](StationsApi.md#setStationMode) | **POST** /api/v1/stations/{stationId}/settings/mode | Sets the Operation Mode (Auth)
[**setStationPassword**](StationsApi.md#setStationPassword) | **POST** /api/v1/stations/{stationId}/settings/password | Changes the Password (Auth)
[**setStationQrCode**](StationsApi.md#setStationQrCode) | **POST** /api/v1/stations/{stationId}/settings/qrcode | Sets the QrCode (Auth)


<a name="createStation"></a>
# **createStation**
> StationSettings createStation(opts)

Creates a Station (Auth)

### Example
```javascript
var LeapplayJsClient = require('leapplay-js-client');
var defaultClient = LeapplayJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LeapplayJsClient.StationsApi();

var opts = { 
  'createStation': new LeapplayJsClient.RequestCreateStation() // RequestCreateStation | Create Station Dto
};
apiInstance.createStation(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createStation** | [**RequestCreateStation**](RequestCreateStation.md)| Create Station Dto | [optional] 

### Return type

[**StationSettings**](StationSettings.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="getSessionLogsAll"></a>
# **getSessionLogsAll**
> [SessionLog] getSessionLogsAll(opts)

Gets closed Sessions from all stations (Auth)

### Example
```javascript
var LeapplayJsClient = require('leapplay-js-client');
var defaultClient = LeapplayJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LeapplayJsClient.StationsApi();

var opts = { 
  'take': 50, // Number | Entries to return
  'skip': 0 // Number | Entries to skip
};
apiInstance.getSessionLogsAll(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **take** | **Number**| Entries to return | [optional] [default to 50]
 **skip** | **Number**| Entries to skip | [optional] [default to 0]

### Return type

[**[SessionLog]**](SessionLog.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSessionLogsByStationId"></a>
# **getSessionLogsByStationId**
> [SessionLog] getSessionLogsByStationId(stationId, opts)

Gets closed Sessions (Auth)

### Example
```javascript
var LeapplayJsClient = require('leapplay-js-client');
var defaultClient = LeapplayJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LeapplayJsClient.StationsApi();

var stationId = "stationId_example"; // String | Station Id

var opts = { 
  'take': 50, // Number | Entries to return
  'skip': 0 // Number | Entries to skip
};
apiInstance.getSessionLogsByStationId(stationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stationId** | [**String**](.md)| Station Id | 
 **take** | **Number**| Entries to return | [optional] [default to 50]
 **skip** | **Number**| Entries to skip | [optional] [default to 0]

### Return type

[**[SessionLog]**](SessionLog.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSettings"></a>
# **getSettings**
> [StationSettings] getSettings()

Gets the Settings of all Stations (Auth)

### Example
```javascript
var LeapplayJsClient = require('leapplay-js-client');
var defaultClient = LeapplayJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LeapplayJsClient.StationsApi();
apiInstance.getSettings().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[StationSettings]**](StationSettings.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSettingsByStationId"></a>
# **getSettingsByStationId**
> StationSettings getSettingsByStationId(stationId)

Get the Settings of an Station (Auth)

### Example
```javascript
var LeapplayJsClient = require('leapplay-js-client');
var defaultClient = LeapplayJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LeapplayJsClient.StationsApi();

var stationId = "stationId_example"; // String | Station Id

apiInstance.getSettingsByStationId(stationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stationId** | [**String**](.md)| Station Id | 

### Return type

[**StationSettings**](StationSettings.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getState"></a>
# **getState**
> StationCurrentState getState(stationId)

Get the Station&#39;s State (Auth)

### Example
```javascript
var LeapplayJsClient = require('leapplay-js-client');
var defaultClient = LeapplayJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LeapplayJsClient.StationsApi();

var stationId = "stationId_example"; // String | Station Id

apiInstance.getState(stationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stationId** | [**String**](.md)| Station Id | 

### Return type

[**StationCurrentState**](StationCurrentState.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStates"></a>
# **getStates**
> [StationCurrentState] getStates(opts)

Gets Collection of Station States (Auth)

### Example
```javascript
var LeapplayJsClient = require('leapplay-js-client');
var defaultClient = LeapplayJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LeapplayJsClient.StationsApi();

var opts = { 
  'networkStateFilter': "networkStateFilter_example" // String | Optional Network State Filter
};
apiInstance.getStates(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkStateFilter** | **String**| Optional Network State Filter | [optional] 

### Return type

[**[StationCurrentState]**](StationCurrentState.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="sessionCreate"></a>
# **sessionCreate**
> CreatedSession sessionCreate(stationId, opts)

Creates a Session (Auth)

### Example
```javascript
var LeapplayJsClient = require('leapplay-js-client');
var defaultClient = LeapplayJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LeapplayJsClient.StationsApi();

var stationId = "stationId_example"; // String | Station Id

var opts = { 
  'createSessionRequest': new LeapplayJsClient.RequestNewStationSession() // RequestNewStationSession | New Session Request Dto
};
apiInstance.sessionCreate(stationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stationId** | [**String**](.md)| Station Id | 
 **createSessionRequest** | [**RequestNewStationSession**](RequestNewStationSession.md)| New Session Request Dto | [optional] 

### Return type

[**CreatedSession**](CreatedSession.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="sessionStop"></a>
# **sessionStop**
> StoppedSession sessionStop(stationId)

Stops the running Session (Auth)

### Example
```javascript
var LeapplayJsClient = require('leapplay-js-client');
var defaultClient = LeapplayJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LeapplayJsClient.StationsApi();

var stationId = "stationId_example"; // String | Station Id

apiInstance.sessionStop(stationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stationId** | [**String**](.md)| Station Id | 

### Return type

[**StoppedSession**](StoppedSession.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="sessionUpdate"></a>
# **sessionUpdate**
> UpdatedSession sessionUpdate(stationId, opts)

Updates the running Session. (Auth)

### Example
```javascript
var LeapplayJsClient = require('leapplay-js-client');
var defaultClient = LeapplayJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LeapplayJsClient.StationsApi();

var stationId = "stationId_example"; // String | Station Id

var opts = { 
  'updateSessionRequest': new LeapplayJsClient.RequestSessionUpdate() // RequestSessionUpdate | The Update Request Dto
};
apiInstance.sessionUpdate(stationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stationId** | [**String**](.md)| Station Id | 
 **updateSessionRequest** | [**RequestSessionUpdate**](RequestSessionUpdate.md)| The Update Request Dto | [optional] 

### Return type

[**UpdatedSession**](UpdatedSession.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="setSettings"></a>
# **setSettings**
> setSettings(stationId, opts)

Sets the Settings for an Station (Auth)

### Example
```javascript
var LeapplayJsClient = require('leapplay-js-client');
var defaultClient = LeapplayJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LeapplayJsClient.StationsApi();

var stationId = "stationId_example"; // String | Station Id

var opts = { 
  'setSettingsRequest': new LeapplayJsClient.RequestStationSettings() // RequestStationSettings | Settings Dto
};
apiInstance.setSettings(stationId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stationId** | [**String**](.md)| Station Id | 
 **setSettingsRequest** | [**RequestStationSettings**](RequestStationSettings.md)| Settings Dto | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="setStationMode"></a>
# **setStationMode**
> setStationMode(stationId, opts)

Sets the Operation Mode (Auth)

### Example
```javascript
var LeapplayJsClient = require('leapplay-js-client');
var defaultClient = LeapplayJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LeapplayJsClient.StationsApi();

var stationId = "stationId_example"; // String | Station Id

var opts = { 
  'setModeRequest': new LeapplayJsClient.RequestStationMode() // RequestStationMode | The Operation Mode
};
apiInstance.setStationMode(stationId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stationId** | [**String**](.md)| Station Id | 
 **setModeRequest** | [**RequestStationMode**](RequestStationMode.md)| The Operation Mode | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="setStationPassword"></a>
# **setStationPassword**
> setStationPassword(stationId, opts)

Changes the Password (Auth)

### Example
```javascript
var LeapplayJsClient = require('leapplay-js-client');
var defaultClient = LeapplayJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LeapplayJsClient.StationsApi();

var stationId = "stationId_example"; // String | Station Id

var opts = { 
  'setPasswordRequest': new LeapplayJsClient.RequestSetStationPassword() // RequestSetStationPassword | New Password
};
apiInstance.setStationPassword(stationId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stationId** | [**String**](.md)| Station Id | 
 **setPasswordRequest** | [**RequestSetStationPassword**](RequestSetStationPassword.md)| New Password | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="setStationQrCode"></a>
# **setStationQrCode**
> setStationQrCode(stationId, opts)

Sets the QrCode (Auth)

### Example
```javascript
var LeapplayJsClient = require('leapplay-js-client');
var defaultClient = LeapplayJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LeapplayJsClient.StationsApi();

var stationId = "stationId_example"; // String | Station Id

var opts = { 
  'setQrCodeRequest': new LeapplayJsClient.RequestStationQrCode() // RequestStationQrCode | QrCode
};
apiInstance.setStationQrCode(stationId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stationId** | [**String**](.md)| Station Id | 
 **setQrCodeRequest** | [**RequestStationQrCode**](RequestStationQrCode.md)| QrCode | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: application/json

