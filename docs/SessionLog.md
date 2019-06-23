# LeapplayJsClient.SessionLog

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stationId** | **String** |  | [optional] 
**sessionId** | **String** |  | [optional] 
**requestedBy** | **String** |  | [optional] 
**latestState** | **String** |  | [optional] 
**startedUtc** | **Date** |  | [optional] 
**reference** | **String** |  | [optional] 
**maxDurationLimit** | **String** |  | [optional] 
**endedUtc** | **Date** |  | [optional] 
**stoppedBy** | **String** |  | [optional] 
**changeRequests** | [**[ChangeRequest]**](ChangeRequest.md) |  | [optional] 


<a name="RequestedByEnum"></a>
## Enum: RequestedByEnum


* `Undefined` (value: `"Undefined"`)

* `ShellClient` (value: `"ShellClient"`)

* `WebApi` (value: `"WebApi"`)




<a name="LatestStateEnum"></a>
## Enum: LatestStateEnum


* `Requested` (value: `"Requested"`)

* `Delivered` (value: `"Delivered"`)

* `Started` (value: `"Started"`)

* `Ended` (value: `"Ended"`)

* `Canceled` (value: `"Canceled"`)

* `DeliveryTimeout` (value: `"DeliveryTimeout"`)

* `ResponseTimeout` (value: `"ResponseTimeout"`)




<a name="StoppedByEnum"></a>
## Enum: StoppedByEnum


* `Unknown` (value: `"Unknown"`)

* `UserLogout` (value: `"UserLogout"`)

* `RemoteLogout` (value: `"RemoteLogout"`)

* `Inactivity` (value: `"Inactivity"`)

* `StationShutdown` (value: `"StationShutdown"`)

* `LimitReached` (value: `"LimitReached"`)

* `ConnectionLoss` (value: `"ConnectionLoss"`)

* `SubscriptionEnded` (value: `"SubscriptionEnded"`)




