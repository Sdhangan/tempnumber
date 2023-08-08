/**
 * Temp Number API
 * # About Get temporary mobile numbers and receive SMS with API for online accounts verification and QA tests.     - Temporary phone number in more than 150 countries. - Thousands of listed services.  - Get SMS for not listed services as well.   Most of TempNumber phone numbers are real mobile numbers (not virtual) coming from physical SIM cards. This greatly increases chances to receive SMS for online account verification. You can find out more about the service at [https://temp-number.org](https://temp-number.org).  [**API docs and OpenAPI specs**](https://privatix-public.gitlab.io/tempnumber-api/)  - [About](#about)   - [Basic usage](#basic-usage)     - [Get number and receive SMS](#get-number-and-receive-sms)     - [Balance management](#balance-management)     - [Pricing](#pricing)   - [Authentication](#authentication)   - [Servers](#servers)   - [Rate limits](#rate-limits)     - [Delivery rate limit](#delivery-rate-limit)     - [API requests rate limit](#api-requests-rate-limit)   - [Client SDK](#client-sdk)     - [Official](#official)     - [Community contributed clients](#community-contributed-clients)   ## Basic usage ### Get number and receive SMS 1. Get temporary mobile phone number by sending      **POST** request to `/activations` while passing both **service** and **country** as request parameters.     For example, in order to request activation code for Facebook using Germany phone number set:      ```json     {         \"serviceId\": \"facebook\",         \"countryId\": \"us\"     }     ```      In response you will get:     - activation id     - phone number          ```json     {         \"id\": 12312,         \"number\": 18454123223     }     ```  2. Use phone number to send SMS from service 3. Get SMS by sending **GET** request to `/acivations/<activation_id>`. Continue polling endpoint while `status=smsRequested or retryRequested` until you get sms. Please, note that rate limits applies (see below).     ```json     {         \"id\": 12312,         \"status\": \"smsReceived\",         \"message\": \"Thanks for activation. Your activation code is: 5678\",         \"code\": 5678     }     ```  ### Balance management 1. Top up your funds balance through UI:     - [https://temp-number.org](https://temp-number.org/app)     - [Apple App Store](https://apps.apple.com/app/id1589908420)     - [Google Play](https://play.google.com/store/apps/details?id=com.receive.sms_second.number) 2. Check balance by sending request to **GET**  `/user/balance`  ### Pricing Get price list by sending **GET** request to either: - `/pricelistByService` OR  - `/pricelistByCountry`  In response you will get price for each service in each country.  ## Authentication  You must send your API key in `x-api-key` header for each request. To get your API key  1. [Login](https://temp-number.org/app/create-account) into your account. 2. In side menu, click on API button. 3. Generate your API key.  ## Servers  All requests are relative to following base URLs:  |  Base URL                                 |  Environment name | Description                                                               | |  ---                                      |  ---              |  ---                                                                      | | https://tn-api.com/api/v1                 | production        |                                                                           | | https://mock.temp-number.org/v1           | mock              | Free of charge. No funds required. Currently only GET requests supported. |  ## Rate limits We have two types of rate limits: 1. SMS delivery per service per country 2. API requests per endpoint  ### Delivery rate limit We require at least 7% from all activations per service per country to receive sms. We start to calculate delivery rate limit after 5-th activation. This limit is required to guard against all numbers being \"burned\" without actually being used. Delivery Rate limit resets each 24 hours.      **Example:** 100 activations requested for Whatsapp in Germany but only 1 activation got sms. This is 1% delivery success rate. No more activations allowed in 24 hours to Whatsapp in Netherland.  ### API requests rate limit In order to protect service from excessive use whether intended or unintended we are rate limiting request to API endpoints to maintain service availability. Rates apply to each endpoint separately.  <details><summary>See API rate limits</summary>  |  endpoint                                 |  method |  rate                       | |  ---                                      |  ---    |  ---                        | | /activations                              |  GET    |   10 request per minute     | | /activations                              |  POST   |   80 requests per 2 minutes | | /activations/:activation_id               |  GET    |   80 requests per 2 minutes | | /activations                              |  PUT    |   10 requests per minute    | | /services/:serviceId/countries/:countryId |  GET    |   80 requests per 2 minutes | | /services/pricelistByService              |  GET    |   3 requests per minute     | | /services/pricelistByCountry              |  GET    |   3 requests per minute     | | /user/balance                             |  GET    |   10 requests per minute    |  </details>  ## Client SDK ### Official - [Javascript client](https://gitlab.com/privatix-public/tempnumber-sdk-js) on [available through NPM](https://www.npmjs.com/package/tempnumber)  ### Community contributed clients - [PHP client](https://github.com/ahmedghanem00/tempnumber-api-client)  *** 
 *
 * The version of the OpenAPI document: 1.3.8
 * Contact: support@temp-number.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import ActivationData from './model/ActivationData';
import ActivationUpdate from './model/ActivationUpdate';
import ActivationsHistory from './model/ActivationsHistory';
import Error400 from './model/Error400';
import Error401 from './model/Error401';
import Error402 from './model/Error402';
import Error403 from './model/Error403';
import Error404 from './model/Error404';
import Error409 from './model/Error409';
import Error410 from './model/Error410';
import Error503 from './model/Error503';
import ExpectedPriceErrorException from './model/ExpectedPriceErrorException';
import LowSuccessRateException from './model/LowSuccessRateException';
import NewActivation from './model/NewActivation';
import PriceByCountry from './model/PriceByCountry';
import Response200 from './model/Response200';
import Service from './model/Service';
import ServicePrice from './model/ServicePrice';
import SingleService from './model/SingleService';
import TooManyActivationsPendingException from './model/TooManyActivationsPendingException';
import UserBalance from './model/UserBalance';
import ActivationApi from './api/ActivationApi';
import ServicesApi from './api/ServicesApi';
import UserApi from './api/UserApi';


/**
* # About Get temporary mobile numbers and receive SMS with API for online accounts verification and QA tests.     - Temporary phone number in more than 150 countries. - Thousands of listed services.  - Get SMS for not listed services as well.   Most of TempNumber phone numbers are real mobile numbers (not virtual) coming from physical SIM cards. This greatly increases chances to receive SMS for online account verification. You can find out more about the service at [https://temp-number.org](https://temp-number.org).  [**API docs and OpenAPI specs**](https://privatix-public.gitlab.io/tempnumber-api/)  - [About](#about)   - [Basic usage](#basic-usage)     - [Get number and receive SMS](#get-number-and-receive-sms)     - [Balance management](#balance-management)     - [Pricing](#pricing)   - [Authentication](#authentication)   - [Servers](#servers)   - [Rate limits](#rate-limits)     - [Delivery rate limit](#delivery-rate-limit)     - [API requests rate limit](#api-requests-rate-limit)   - [Client SDK](#client-sdk)     - [Official](#official)     - [Community contributed clients](#community-contributed-clients)   ## Basic usage ### Get number and receive SMS 1. Get temporary mobile phone number by sending      **POST** request to &#x60;/activations&#x60; while passing both **service** and **country** as request parameters.     For example, in order to request activation code for Facebook using Germany phone number set:      &#x60;&#x60;&#x60;json     {         \&quot;serviceId\&quot;: \&quot;facebook\&quot;,         \&quot;countryId\&quot;: \&quot;us\&quot;     }     &#x60;&#x60;&#x60;      In response you will get:     - activation id     - phone number          &#x60;&#x60;&#x60;json     {         \&quot;id\&quot;: 12312,         \&quot;number\&quot;: 18454123223     }     &#x60;&#x60;&#x60;  2. Use phone number to send SMS from service 3. Get SMS by sending **GET** request to &#x60;/acivations/&lt;activation_id&gt;&#x60;. Continue polling endpoint while &#x60;status&#x3D;smsRequested or retryRequested&#x60; until you get sms. Please, note that rate limits applies (see below).     &#x60;&#x60;&#x60;json     {         \&quot;id\&quot;: 12312,         \&quot;status\&quot;: \&quot;smsReceived\&quot;,         \&quot;message\&quot;: \&quot;Thanks for activation. Your activation code is: 5678\&quot;,         \&quot;code\&quot;: 5678     }     &#x60;&#x60;&#x60;  ### Balance management 1. Top up your funds balance through UI:     - [https://temp-number.org](https://temp-number.org/app)     - [Apple App Store](https://apps.apple.com/app/id1589908420)     - [Google Play](https://play.google.com/store/apps/details?id&#x3D;com.receive.sms_second.number) 2. Check balance by sending request to **GET**  &#x60;/user/balance&#x60;  ### Pricing Get price list by sending **GET** request to either: - &#x60;/pricelistByService&#x60; OR  - &#x60;/pricelistByCountry&#x60;  In response you will get price for each service in each country.  ## Authentication  You must send your API key in &#x60;x-api-key&#x60; header for each request. To get your API key  1. [Login](https://temp-number.org/app/create-account) into your account. 2. In side menu, click on API button. 3. Generate your API key.  ## Servers  All requests are relative to following base URLs:  |  Base URL                                 |  Environment name | Description                                                               | |  ---                                      |  ---              |  ---                                                                      | | https://tn-api.com/api/v1                 | production        |                                                                           | | https://mock.temp-number.org/v1           | mock              | Free of charge. No funds required. Currently only GET requests supported. |  ## Rate limits We have two types of rate limits: 1. SMS delivery per service per country 2. API requests per endpoint  ### Delivery rate limit We require at least 7% from all activations per service per country to receive sms. We start to calculate delivery rate limit after 5-th activation. This limit is required to guard against all numbers being \&quot;burned\&quot; without actually being used. Delivery Rate limit resets each 24 hours.      **Example:** 100 activations requested for Whatsapp in Germany but only 1 activation got sms. This is 1% delivery success rate. No more activations allowed in 24 hours to Whatsapp in Netherland.  ### API requests rate limit In order to protect service from excessive use whether intended or unintended we are rate limiting request to API endpoints to maintain service availability. Rates apply to each endpoint separately.  &lt;details&gt;&lt;summary&gt;See API rate limits&lt;/summary&gt;  |  endpoint                                 |  method |  rate                       | |  ---                                      |  ---    |  ---                        | | /activations                              |  GET    |   10 request per minute     | | /activations                              |  POST   |   80 requests per 2 minutes | | /activations/:activation_id               |  GET    |   80 requests per 2 minutes | | /activations                              |  PUT    |   10 requests per minute    | | /services/:serviceId/countries/:countryId |  GET    |   80 requests per 2 minutes | | /services/pricelistByService              |  GET    |   3 requests per minute     | | /services/pricelistByCountry              |  GET    |   3 requests per minute     | | /user/balance                             |  GET    |   10 requests per minute    |  &lt;/details&gt;  ## Client SDK ### Official - [Javascript client](https://gitlab.com/privatix-public/tempnumber-sdk-js) on [available through NPM](https://www.npmjs.com/package/tempnumber)  ### Community contributed clients - [PHP client](https://github.com/ahmedghanem00/tempnumber-api-client)  *** .<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Tempnumber = require('index'); // See note below*.
* var xxxSvc = new Tempnumber.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Tempnumber.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Tempnumber.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Tempnumber.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.3.8
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ActivationData model constructor.
     * @property {module:model/ActivationData}
     */
    ActivationData,

    /**
     * The ActivationUpdate model constructor.
     * @property {module:model/ActivationUpdate}
     */
    ActivationUpdate,

    /**
     * The ActivationsHistory model constructor.
     * @property {module:model/ActivationsHistory}
     */
    ActivationsHistory,

    /**
     * The Error400 model constructor.
     * @property {module:model/Error400}
     */
    Error400,

    /**
     * The Error401 model constructor.
     * @property {module:model/Error401}
     */
    Error401,

    /**
     * The Error402 model constructor.
     * @property {module:model/Error402}
     */
    Error402,

    /**
     * The Error403 model constructor.
     * @property {module:model/Error403}
     */
    Error403,

    /**
     * The Error404 model constructor.
     * @property {module:model/Error404}
     */
    Error404,

    /**
     * The Error409 model constructor.
     * @property {module:model/Error409}
     */
    Error409,

    /**
     * The Error410 model constructor.
     * @property {module:model/Error410}
     */
    Error410,

    /**
     * The Error503 model constructor.
     * @property {module:model/Error503}
     */
    Error503,

    /**
     * The ExpectedPriceErrorException model constructor.
     * @property {module:model/ExpectedPriceErrorException}
     */
    ExpectedPriceErrorException,

    /**
     * The LowSuccessRateException model constructor.
     * @property {module:model/LowSuccessRateException}
     */
    LowSuccessRateException,

    /**
     * The NewActivation model constructor.
     * @property {module:model/NewActivation}
     */
    NewActivation,

    /**
     * The PriceByCountry model constructor.
     * @property {module:model/PriceByCountry}
     */
    PriceByCountry,

    /**
     * The Response200 model constructor.
     * @property {module:model/Response200}
     */
    Response200,

    /**
     * The Service model constructor.
     * @property {module:model/Service}
     */
    Service,

    /**
     * The ServicePrice model constructor.
     * @property {module:model/ServicePrice}
     */
    ServicePrice,

    /**
     * The SingleService model constructor.
     * @property {module:model/SingleService}
     */
    SingleService,

    /**
     * The TooManyActivationsPendingException model constructor.
     * @property {module:model/TooManyActivationsPendingException}
     */
    TooManyActivationsPendingException,

    /**
     * The UserBalance model constructor.
     * @property {module:model/UserBalance}
     */
    UserBalance,

    /**
    * The ActivationApi service constructor.
    * @property {module:api/ActivationApi}
    */
    ActivationApi,

    /**
    * The ServicesApi service constructor.
    * @property {module:api/ServicesApi}
    */
    ServicesApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi
};
