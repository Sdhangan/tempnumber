# Tempnumber.ActivationApi

All URIs are relative to *https://tn-api.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getActivation**](ActivationApi.md#getActivation) | **GET** /activations/{activation_id} | Get activation data
[**getActivationsHistory**](ActivationApi.md#getActivationsHistory) | **GET** /activations | Get activations history
[**newActivation**](ActivationApi.md#newActivation) | **POST** /activations | Request new activation
[**updateActivation**](ActivationApi.md#updateActivation) | **PUT** /activations/{activation_id} | Retry activation with new sms



## getActivation

> ActivationData getActivation(activationId)

Get activation data

Get activation data and status

### Example

```javascript
import Tempnumber from 'tempnumber';
let defaultClient = Tempnumber.ApiClient.instance;
// Configure API key authorization: apikey_auth
let apikey_auth = defaultClient.authentications['apikey_auth'];
apikey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey_auth.apiKeyPrefix = 'Token';

let apiInstance = new Tempnumber.ActivationApi();
let activationId = 25687; // Number | ID of activation
apiInstance.getActivation(activationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **Number**| ID of activation | 

### Return type

[**ActivationData**](ActivationData.md)

### Authorization

[apikey_auth](../README.md#apikey_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActivationsHistory

> ActivationsHistory getActivationsHistory(opts)

Get activations history

See historical activations

### Example

```javascript
import Tempnumber from 'tempnumber';
let defaultClient = Tempnumber.ApiClient.instance;
// Configure API key authorization: apikey_auth
let apikey_auth = defaultClient.authentications['apikey_auth'];
apikey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey_auth.apiKeyPrefix = 'Token';

let apiInstance = new Tempnumber.ActivationApi();
let opts = {
  'page': 2, // Number | Selected page number
  'limit': 10 // Number | Items limit per page
};
apiInstance.getActivationsHistory(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Selected page number | [optional] [default to 1]
 **limit** | **Number**| Items limit per page | [optional] [default to 10]

### Return type

[**ActivationsHistory**](ActivationsHistory.md)

### Authorization

[apikey_auth](../README.md#apikey_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## newActivation

> ActivationData newActivation(opts)

Request new activation

Request new activation for service X in country Y

### Example

```javascript
import Tempnumber from 'tempnumber';
let defaultClient = Tempnumber.ApiClient.instance;
// Configure API key authorization: apikey_auth
let apikey_auth = defaultClient.authentications['apikey_auth'];
apikey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey_auth.apiKeyPrefix = 'Token';

let apiInstance = new Tempnumber.ActivationApi();
let opts = {
  'newActivation': new Tempnumber.NewActivation() // NewActivation | 
};
apiInstance.newActivation(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newActivation** | [**NewActivation**](NewActivation.md)|  | [optional] 

### Return type

[**ActivationData**](ActivationData.md)

### Authorization

[apikey_auth](../README.md#apikey_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateActivation

> Response200 updateActivation(activationId, opts)

Retry activation with new sms

Retry activation by receiving new sms. Free of charge.  Particularly useful, if wrong sms received. Previous sms message/code cannot be retrieved after starting retry. 

### Example

```javascript
import Tempnumber from 'tempnumber';
let defaultClient = Tempnumber.ApiClient.instance;
// Configure API key authorization: apikey_auth
let apikey_auth = defaultClient.authentications['apikey_auth'];
apikey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey_auth.apiKeyPrefix = 'Token';

let apiInstance = new Tempnumber.ActivationApi();
let activationId = 25687; // Number | ID of activation
let opts = {
  'activationUpdate': new Tempnumber.ActivationUpdate() // ActivationUpdate | 
};
apiInstance.updateActivation(activationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationId** | **Number**| ID of activation | 
 **activationUpdate** | [**ActivationUpdate**](ActivationUpdate.md)|  | [optional] 

### Return type

[**Response200**](Response200.md)

### Authorization

[apikey_auth](../README.md#apikey_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

