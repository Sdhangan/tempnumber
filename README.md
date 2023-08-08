# tempnumber

Tempnumber - JavaScript client for tempnumber
# About
Get temporary mobile numbers and receive SMS with API for online accounts verification and QA tests.    
- Temporary phone number in more than 150 countries.
- Thousands of listed services. 
- Get SMS for not listed services as well. 

Most of TempNumber phone numbers are real mobile numbers (not virtual) coming from physical SIM cards.
This greatly increases chances to receive SMS for online account verification.
You can find out more about the service at
[https://temp-number.org](https://temp-number.org).

[**API docs and OpenAPI specs**](https://privatix-public.gitlab.io/tempnumber-api/)

- [About](#about)
  - [Basic usage](#basic-usage)
    - [Get number and receive SMS](#get-number-and-receive-sms)
    - [Balance management](#balance-management)
    - [Pricing](#pricing)
  - [Authentication](#authentication)
  - [Servers](#servers)
  - [Rate limits](#rate-limits)
    - [Delivery rate limit](#delivery-rate-limit)
    - [API requests rate limit](#api-requests-rate-limit)
  - [Client SDK](#client-sdk)
    - [Official](#official)
    - [Community contributed clients](#community-contributed-clients)


## Basic usage
### Get number and receive SMS
1. Get temporary mobile phone number by sending 
    **POST** request to `/activations` while passing both **service** and **country** as request parameters.
    For example, in order to request activation code for Facebook using Germany phone number set:

    ```json
    {
        \"serviceId\": \"facebook\",
        \"countryId\": \"us\"
    }
    ```

    In response you will get:
    - activation id
    - phone number
    
    ```json
    {
        \"id\": 12312,
        \"number\": 18454123223
    }
    ```

2. Use phone number to send SMS from service
3. Get SMS by sending **GET** request to `/acivations/<activation_id>`.
Continue polling endpoint while `status=smsRequested or retryRequested` until you get sms.
Please, note that rate limits applies (see below).
    ```json
    {
        \"id\": 12312,
        \"status\": \"smsReceived\",
        \"message\": \"Thanks for activation. Your activation code is: 5678\",
        \"code\": 5678
    }
    ```

### Balance management
1. Top up your funds balance through UI:
    - [https://temp-number.org](https://temp-number.org/app)
    - [Apple App Store](https://apps.apple.com/app/id1589908420)
    - [Google Play](https://play.google.com/store/apps/details?id=com.receive.sms_second.number)
2. Check balance by sending request to **GET**  `/user/balance`

### Pricing
Get price list by sending **GET** request to either:
- `/pricelistByService` OR 
- `/pricelistByCountry`

In response you will get price for each service in each country.

## Authentication

You must send your API key in `x-api-key` header for each request. To get your API key 
1. [Login](https://temp-number.org/app/create-account) into your account.
2. In side menu, click on API button.
3. Generate your API key.

## Servers

All requests are relative to following base URLs:

|  Base URL                                 |  Environment name | Description                                                               |
|  ---                                      |  ---              |  ---                                                                      |
| https://tn-api.com/api/v1                 | production        |                                                                           |
| https://mock.temp-number.org/v1           | mock              | Free of charge. No funds required. Currently only GET requests supported. |

## Rate limits
We have two types of rate limits:
1. SMS delivery per service per country
2. API requests per endpoint

### Delivery rate limit
We require at least 7% from all activations per service per country to receive sms. We start to calculate delivery rate limit after 5-th activation. This limit is required to guard against all numbers being \"burned\" without actually being used. Delivery Rate limit resets each 24 hours.    

**Example:** 100 activations requested for Whatsapp in Germany but only 1 activation got sms. This is 1% delivery success rate. No more activations allowed in 24 hours to Whatsapp in Netherland. 
### API requests rate limit
In order to protect service from excessive use whether intended or unintended we are rate limiting request to API endpoints to maintain service availability.
Rates apply to each endpoint separately.

<details><summary>See API rate limits</summary>

|  endpoint                                 |  method |  rate                       |
|  ---                                      |  ---    |  ---                        |
| /activations                              |  GET    |   10 request per minute     |
| /activations                              |  POST   |   80 requests per 2 minutes |
| /activations/:activation_id               |  GET    |   80 requests per 2 minutes |
| /activations                              |  PUT    |   10 requests per minute    |
| /services/:serviceId/countries/:countryId |  GET    |   80 requests per 2 minutes |
| /services/pricelistByService              |  GET    |   3 requests per minute     |
| /services/pricelistByCountry              |  GET    |   3 requests per minute     |
| /user/balance                             |  GET    |   10 requests per minute    |

</details>

## Client SDK
### Official
- [Javascript client](https://gitlab.com/privatix-public/tempnumber-sdk-js) on [available through NPM](https://www.npmjs.com/package/tempnumber)

### Community contributed clients
- [PHP client](https://github.com/ahmedghanem00/tempnumber-api-client)

***

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.3.8
- Package version: 1.3.8
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://temp-number.org/app/contact-us](https://temp-number.org/app/contact-us)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install tempnumber --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your tempnumber from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

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
var Tempnumber = require('tempnumber');

var defaultClient = Tempnumber.ApiClient.instance;
// Configure API key authorization: apikey_auth
var apikey_auth = defaultClient.authentications['apikey_auth'];
apikey_auth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey_auth.apiKeyPrefix['x-api-key'] = "Token"

var api = new Tempnumber.ActivationApi()
var activationId = 25687; // {Number} ID of activation
api.getActivation(activationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://tn-api.com/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Tempnumber.ActivationApi* | [**getActivation**](docs/ActivationApi.md#getActivation) | **GET** /activations/{activation_id} | Get activation data
*Tempnumber.ActivationApi* | [**getActivationsHistory**](docs/ActivationApi.md#getActivationsHistory) | **GET** /activations | Get activations history
*Tempnumber.ActivationApi* | [**newActivation**](docs/ActivationApi.md#newActivation) | **POST** /activations | Request new activation
*Tempnumber.ActivationApi* | [**updateActivation**](docs/ActivationApi.md#updateActivation) | **PUT** /activations/{activation_id} | Retry activation with new sms
*Tempnumber.ServicesApi* | [**getPricelistByCountry**](docs/ServicesApi.md#getPricelistByCountry) | **GET** /services/pricelistByCountry | Get pricelist by countries
*Tempnumber.ServicesApi* | [**getPricelistByService**](docs/ServicesApi.md#getPricelistByService) | **GET** /services/pricelistByService | Get pricelist by services
*Tempnumber.ServicesApi* | [**getSingleService**](docs/ServicesApi.md#getSingleService) | **GET** /services/{service_id}/countries/{country_id} | Get single service price and availability in specific country
*Tempnumber.UserApi* | [**getUserBalance**](docs/UserApi.md#getUserBalance) | **GET** /user/balance | Get user&#39;s balance


## Documentation for Models

 - [Tempnumber.ActivationData](docs/ActivationData.md)
 - [Tempnumber.ActivationUpdate](docs/ActivationUpdate.md)
 - [Tempnumber.ActivationsHistory](docs/ActivationsHistory.md)
 - [Tempnumber.Error400](docs/Error400.md)
 - [Tempnumber.Error401](docs/Error401.md)
 - [Tempnumber.Error402](docs/Error402.md)
 - [Tempnumber.Error403](docs/Error403.md)
 - [Tempnumber.Error404](docs/Error404.md)
 - [Tempnumber.Error409](docs/Error409.md)
 - [Tempnumber.Error410](docs/Error410.md)
 - [Tempnumber.Error503](docs/Error503.md)
 - [Tempnumber.ExpectedPriceErrorException](docs/ExpectedPriceErrorException.md)
 - [Tempnumber.LowSuccessRateException](docs/LowSuccessRateException.md)
 - [Tempnumber.NewActivation](docs/NewActivation.md)
 - [Tempnumber.PriceByCountry](docs/PriceByCountry.md)
 - [Tempnumber.Response200](docs/Response200.md)
 - [Tempnumber.Service](docs/Service.md)
 - [Tempnumber.ServicePrice](docs/ServicePrice.md)
 - [Tempnumber.SingleService](docs/SingleService.md)
 - [Tempnumber.TooManyActivationsPendingException](docs/TooManyActivationsPendingException.md)
 - [Tempnumber.UserBalance](docs/UserBalance.md)


## Documentation for Authorization



### apikey_auth


- **Type**: API key
- **API key parameter name**: x-api-key
- **Location**: HTTP header

