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


import ApiClient from "../ApiClient";
import ActivationData from '../model/ActivationData';
import ActivationUpdate from '../model/ActivationUpdate';
import ActivationsHistory from '../model/ActivationsHistory';
import Error400 from '../model/Error400';
import Error401 from '../model/Error401';
import Error402 from '../model/Error402';
import Error403 from '../model/Error403';
import Error404 from '../model/Error404';
import Error409 from '../model/Error409';
import Error410 from '../model/Error410';
import Error503 from '../model/Error503';
import ExpectedPriceErrorException from '../model/ExpectedPriceErrorException';
import LowSuccessRateException from '../model/LowSuccessRateException';
import NewActivation from '../model/NewActivation';
import Response200 from '../model/Response200';
import TooManyActivationsPendingException from '../model/TooManyActivationsPendingException';

/**
* Activation service.
* @module api/ActivationApi
* @version 1.3.8
*/
export default class ActivationApi {

    /**
    * Constructs a new ActivationApi. 
    * @alias module:api/ActivationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get activation data
     * Get activation data and status
     * @param {Number} activationId ID of activation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActivationData} and HTTP response
     */
    getActivationWithHttpInfo(activationId) {
      let postBody = null;
      // verify the required parameter 'activationId' is set
      if (activationId === undefined || activationId === null) {
        throw new Error("Missing the required parameter 'activationId' when calling getActivation");
      }

      let pathParams = {
        'activation_id': activationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ActivationData;
      return this.apiClient.callApi(
        '/activations/{activation_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get activation data
     * Get activation data and status
     * @param {Number} activationId ID of activation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActivationData}
     */
    getActivation(activationId) {
      return this.getActivationWithHttpInfo(activationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get activations history
     * See historical activations
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Selected page number (default to 1)
     * @param {Number} opts.limit Items limit per page (default to 10)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActivationsHistory} and HTTP response
     */
    getActivationsHistoryWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ActivationsHistory;
      return this.apiClient.callApi(
        '/activations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get activations history
     * See historical activations
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Selected page number (default to 1)
     * @param {Number} opts.limit Items limit per page (default to 10)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActivationsHistory}
     */
    getActivationsHistory(opts) {
      return this.getActivationsHistoryWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Request new activation
     * Request new activation for service X in country Y
     * @param {Object} opts Optional parameters
     * @param {module:model/NewActivation} opts.newActivation 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActivationData} and HTTP response
     */
    newActivationWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['newActivation'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey_auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ActivationData;
      return this.apiClient.callApi(
        '/activations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Request new activation
     * Request new activation for service X in country Y
     * @param {Object} opts Optional parameters
     * @param {module:model/NewActivation} opts.newActivation 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActivationData}
     */
    newActivation(opts) {
      return this.newActivationWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retry activation with new sms
     * Retry activation by receiving new sms. Free of charge.  Particularly useful, if wrong sms received. Previous sms message/code cannot be retrieved after starting retry. 
     * @param {Number} activationId ID of activation
     * @param {Object} opts Optional parameters
     * @param {module:model/ActivationUpdate} opts.activationUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response200} and HTTP response
     */
    updateActivationWithHttpInfo(activationId, opts) {
      opts = opts || {};
      let postBody = opts['activationUpdate'];
      // verify the required parameter 'activationId' is set
      if (activationId === undefined || activationId === null) {
        throw new Error("Missing the required parameter 'activationId' when calling updateActivation");
      }

      let pathParams = {
        'activation_id': activationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikey_auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Response200;
      return this.apiClient.callApi(
        '/activations/{activation_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retry activation with new sms
     * Retry activation by receiving new sms. Free of charge.  Particularly useful, if wrong sms received. Previous sms message/code cannot be retrieved after starting retry. 
     * @param {Number} activationId ID of activation
     * @param {Object} opts Optional parameters
     * @param {module:model/ActivationUpdate} opts.activationUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response200}
     */
    updateActivation(activationId, opts) {
      return this.updateActivationWithHttpInfo(activationId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
