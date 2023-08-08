# Tempnumber.ActivationData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Activation id | [optional] 
**status** | **String** | Status of activation:&lt;br&gt; &lt;b&gt;numberRequested&lt;/b&gt; - phone number is requested, but still not received&lt;br&gt; &lt;b&gt;numberReceived&lt;/b&gt; - phone number is received&lt;br&gt; &lt;b&gt;smsRequested&lt;/b&gt; - sms data is requested, but still not received&lt;br&gt; &lt;b&gt;smsReceived&lt;/b&gt; - sms data received&lt;br&gt; &lt;b&gt;retryRequested&lt;/b&gt; - additional sms data is requested, but still not received&lt;br&gt; &lt;b&gt;retryReceived&lt;/b&gt; - additional sms data received&lt;br&gt; &lt;b&gt;error&lt;/b&gt; - permanent error has occurred&lt;br&gt; &lt;b&gt;refunded&lt;/b&gt; - activation cancelled and user refunded | [optional] 
**countryId** | **String** | Country id (ISO-3166-1-alpha-2) | [optional] 
**countryName** | **String** | Display name of a country | [optional] 
**countryIconPath** | **String** | relative to iconBaseUrl icon filename | [optional] 
**serviceId** | **String** | Service id | [optional] 
**serviceName** | **String** | Service display name | [optional] 
**serviceIconPath** | **String** | Relative to iconBaseUrl icon filename | [optional] 
**number** | **Number** | Phone number | [optional] 
**countryCode** | **Number** | Phone number country code | [optional] 
**formatNumber** | **String** | Formatted phone number | [optional] 
**nationalNumber** | **Number** | Phone number in national format | [optional] 
**message** | **String** | Full SMS message text | [optional] 
**code** | **String** | Activation code derived from full SMS message text | [optional] 
**price** | **Number** | Price of activation | [optional] 
**createdAt** | **Number** | Unix timestamp, when activation initiated | [optional] 
**numberExpireAt** | **Number** | Unix timestamp, when number will expire | [optional] 
**utc** | **Number** | Present UTC time | [optional] 
**retryAvailable** | **Boolean** | Retry available status | [optional] 
**iconBaseUrl** | **String** | Base URL of icons | [optional] 
**rating** | **Number** | Rating of activation (0 - if rating not specified) | [optional] 
**reason** | **Number** | Reason of problem with activation (0 - if reason not specified) | [optional] 



## Enum: StatusEnum


* `numberRequested` (value: `"numberRequested"`)

* `numberReceived` (value: `"numberReceived"`)

* `smsRequested` (value: `"smsRequested"`)

* `smsReceived` (value: `"smsReceived"`)

* `retryRequested` (value: `"retryRequested"`)

* `retryReceived` (value: `"retryReceived"`)

* `error` (value: `"error"`)

* `refunded` (value: `"refunded"`)




