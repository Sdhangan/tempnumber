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

import ApiClient from '../ApiClient';

/**
 * The Error400 model module.
 * @module model/Error400
 * @version 1.3.8
 */
class Error400 {
    /**
     * Constructs a new <code>Error400</code>.
     * @alias module:model/Error400
     * @param errorName {module:model/Error400.ErrorNameEnum} Error name
     * @param errorMessage {String} Error message
     */
    constructor(errorName, errorMessage) { 
        
        Error400.initialize(this, errorName, errorMessage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, errorName, errorMessage) { 
        obj['errorName'] = errorName;
        obj['errorMessage'] = errorMessage;
    }

    /**
     * Constructs a <code>Error400</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Error400} obj Optional instance to populate.
     * @return {module:model/Error400} The populated <code>Error400</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Error400();

            if (data.hasOwnProperty('errorName')) {
                obj['errorName'] = ApiClient.convertToType(data['errorName'], 'String');
            }
            if (data.hasOwnProperty('errorMessage')) {
                obj['errorMessage'] = ApiClient.convertToType(data['errorMessage'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Error400</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Error400</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Error400.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['errorName'] && !(typeof data['errorName'] === 'string' || data['errorName'] instanceof String)) {
            throw new Error("Expected the field `errorName` to be a primitive type in the JSON string but got " + data['errorName']);
        }
        // ensure the json data is a string
        if (data['errorMessage'] && !(typeof data['errorMessage'] === 'string' || data['errorMessage'] instanceof String)) {
            throw new Error("Expected the field `errorMessage` to be a primitive type in the JSON string but got " + data['errorMessage']);
        }

        return true;
    }


}

Error400.RequiredProperties = ["errorName", "errorMessage"];

/**
 * Error name
 * @member {module:model/Error400.ErrorNameEnum} errorName
 */
Error400.prototype['errorName'] = undefined;

/**
 * Error message
 * @member {String} errorMessage
 */
Error400.prototype['errorMessage'] = undefined;





/**
 * Allowed values for the <code>errorName</code> property.
 * @enum {String}
 * @readonly
 */
Error400['ErrorNameEnum'] = {

    /**
     * value: "InvalidRequestParamsException"
     * @const
     */
    "InvalidRequestParamsException": "InvalidRequestParamsException"
};



export default Error400;

