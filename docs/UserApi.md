# Tempnumber.UserApi

All URIs are relative to *https://tn-api.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserBalance**](UserApi.md#getUserBalance) | **GET** /user/balance | Get user&#39;s balance



## getUserBalance

> UserBalance getUserBalance()

Get user&#39;s balance

Get user&#39;s balance

### Example

```javascript
import Tempnumber from 'tempnumber';
let defaultClient = Tempnumber.ApiClient.instance;
// Configure API key authorization: apikey_auth
let apikey_auth = defaultClient.authentications['apikey_auth'];
apikey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey_auth.apiKeyPrefix = 'Token';

let apiInstance = new Tempnumber.UserApi();
apiInstance.getUserBalance().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UserBalance**](UserBalance.md)

### Authorization

[apikey_auth](../README.md#apikey_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

