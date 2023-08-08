# Tempnumber.ServicesApi

All URIs are relative to *https://tn-api.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPricelistByCountry**](ServicesApi.md#getPricelistByCountry) | **GET** /services/pricelistByCountry | Get pricelist by countries
[**getPricelistByService**](ServicesApi.md#getPricelistByService) | **GET** /services/pricelistByService | Get pricelist by services
[**getSingleService**](ServicesApi.md#getSingleService) | **GET** /services/{service_id}/countries/{country_id} | Get single service price and availability in specific country



## getPricelistByCountry

> [PriceByCountry] getPricelistByCountry()

Get pricelist by countries

Get pricelist by countries.

### Example

```javascript
import Tempnumber from 'tempnumber';
let defaultClient = Tempnumber.ApiClient.instance;
// Configure API key authorization: apikey_auth
let apikey_auth = defaultClient.authentications['apikey_auth'];
apikey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey_auth.apiKeyPrefix = 'Token';

let apiInstance = new Tempnumber.ServicesApi();
apiInstance.getPricelistByCountry().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[PriceByCountry]**](PriceByCountry.md)

### Authorization

[apikey_auth](../README.md#apikey_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPricelistByService

> [PriceByCountry] getPricelistByService()

Get pricelist by services

Get pricelist by services.

### Example

```javascript
import Tempnumber from 'tempnumber';
let defaultClient = Tempnumber.ApiClient.instance;
// Configure API key authorization: apikey_auth
let apikey_auth = defaultClient.authentications['apikey_auth'];
apikey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey_auth.apiKeyPrefix = 'Token';

let apiInstance = new Tempnumber.ServicesApi();
apiInstance.getPricelistByService().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[PriceByCountry]**](PriceByCountry.md)

### Authorization

[apikey_auth](../README.md#apikey_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSingleService

> SingleService getSingleService(serviceId, countryId, opts)

Get single service price and availability in specific country

Get single service price and availability in specific country.

### Example

```javascript
import Tempnumber from 'tempnumber';
let defaultClient = Tempnumber.ApiClient.instance;
// Configure API key authorization: apikey_auth
let apikey_auth = defaultClient.authentications['apikey_auth'];
apikey_auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey_auth.apiKeyPrefix = 'Token';

let apiInstance = new Tempnumber.ServicesApi();
let serviceId = twitter; // String | Service id
let countryId = us; // String | Country id
let opts = {
  'prxLang': ru // String | User's language
};
apiInstance.getSingleService(serviceId, countryId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**| Service id | 
 **countryId** | **String**| Country id | 
 **prxLang** | **String**| User&#39;s language | [optional] [default to &#39;en&#39;]

### Return type

[**SingleService**](SingleService.md)

### Authorization

[apikey_auth](../README.md#apikey_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

