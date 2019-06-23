# LeapplayJsClient.AuthApi

All URIs are relative to *https://api.leap-play.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](AuthApi.md#login) | **POST** /api/v1/auth/login | Receive an Access and Refresh Token
[**logout**](AuthApi.md#logout) | **POST** /api/v1/auth/logout | Invalidate the Refresh token (Auth)
[**refreshToken**](AuthApi.md#refreshToken) | **POST** /api/v1/auth/refreshtoken | Receive a new Access token


<a name="login"></a>
# **login**
> LoginResponse login(opts)

Receive an Access and Refresh Token

### Example
```javascript
var LeapplayJsClient = require('leapplay-js-client');

var apiInstance = new LeapplayJsClient.AuthApi();

var opts = { 
  'loginRequest': new LeapplayJsClient.RequestLoginModel() // RequestLoginModel | Login Request Dto
};
apiInstance.login(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginRequest** | [**RequestLoginModel**](RequestLoginModel.md)| Login Request Dto | [optional] 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="logout"></a>
# **logout**
> logout()

Invalidate the Refresh token (Auth)

### Example
```javascript
var LeapplayJsClient = require('leapplay-js-client');
var defaultClient = LeapplayJsClient.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new LeapplayJsClient.AuthApi();
apiInstance.logout().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="refreshToken"></a>
# **refreshToken**
> AccessToken refreshToken(opts)

Receive a new Access token

### Example
```javascript
var LeapplayJsClient = require('leapplay-js-client');

var apiInstance = new LeapplayJsClient.AuthApi();

var opts = { 
  'requestTokenRefresh': new LeapplayJsClient.RequestTokenRefresh(), // RequestTokenRefresh | Refresh Token Dto
  'authorization': "authorization_example" // String | Any previous Access Token.
};
apiInstance.refreshToken(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestTokenRefresh** | [**RequestTokenRefresh**](RequestTokenRefresh.md)| Refresh Token Dto | [optional] 
 **authorization** | **String**| Any previous Access Token. | [optional] 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: application/json

