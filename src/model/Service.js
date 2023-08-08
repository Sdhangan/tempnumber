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
 * The Service model module.
 * @module model/Service
 * @version 1.3.8
 */
class Service {
    /**
     * Constructs a new <code>Service</code>.
     * @alias module:model/Service
     */
    constructor() { 
        
        Service.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Service</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Service} obj Optional instance to populate.
     * @return {module:model/Service} The populated <code>Service</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Service();

            if (data.hasOwnProperty('serviceId')) {
                obj['serviceId'] = ApiClient.convertToType(data['serviceId'], 'String');
            }
            if (data.hasOwnProperty('serviceName')) {
                obj['serviceName'] = ApiClient.convertToType(data['serviceName'], 'String');
            }
            if (data.hasOwnProperty('serviceIconPath')) {
                obj['serviceIconPath'] = ApiClient.convertToType(data['serviceIconPath'], 'String');
            }
            if (data.hasOwnProperty('countryId')) {
                obj['countryId'] = ApiClient.convertToType(data['countryId'], 'String');
            }
            if (data.hasOwnProperty('countryName')) {
                obj['countryName'] = ApiClient.convertToType(data['countryName'], 'String');
            }
            if (data.hasOwnProperty('countryIconPath')) {
                obj['countryIconPath'] = ApiClient.convertToType(data['countryIconPath'], 'String');
            }
            if (data.hasOwnProperty('isVirtual')) {
                obj['isVirtual'] = ApiClient.convertToType(data['isVirtual'], 'Boolean');
            }
            if (data.hasOwnProperty('snippet')) {
                obj['snippet'] = ApiClient.convertToType(data['snippet'], 'String');
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = ApiClient.convertToType(data['warning'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('hasNumbers')) {
                obj['hasNumbers'] = ApiClient.convertToType(data['hasNumbers'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Service</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Service</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['serviceId'] && !(typeof data['serviceId'] === 'string' || data['serviceId'] instanceof String)) {
            throw new Error("Expected the field `serviceId` to be a primitive type in the JSON string but got " + data['serviceId']);
        }
        // ensure the json data is a string
        if (data['serviceName'] && !(typeof data['serviceName'] === 'string' || data['serviceName'] instanceof String)) {
            throw new Error("Expected the field `serviceName` to be a primitive type in the JSON string but got " + data['serviceName']);
        }
        // ensure the json data is a string
        if (data['serviceIconPath'] && !(typeof data['serviceIconPath'] === 'string' || data['serviceIconPath'] instanceof String)) {
            throw new Error("Expected the field `serviceIconPath` to be a primitive type in the JSON string but got " + data['serviceIconPath']);
        }
        // ensure the json data is a string
        if (data['countryId'] && !(typeof data['countryId'] === 'string' || data['countryId'] instanceof String)) {
            throw new Error("Expected the field `countryId` to be a primitive type in the JSON string but got " + data['countryId']);
        }
        // ensure the json data is a string
        if (data['countryName'] && !(typeof data['countryName'] === 'string' || data['countryName'] instanceof String)) {
            throw new Error("Expected the field `countryName` to be a primitive type in the JSON string but got " + data['countryName']);
        }
        // ensure the json data is a string
        if (data['countryIconPath'] && !(typeof data['countryIconPath'] === 'string' || data['countryIconPath'] instanceof String)) {
            throw new Error("Expected the field `countryIconPath` to be a primitive type in the JSON string but got " + data['countryIconPath']);
        }
        // ensure the json data is a string
        if (data['snippet'] && !(typeof data['snippet'] === 'string' || data['snippet'] instanceof String)) {
            throw new Error("Expected the field `snippet` to be a primitive type in the JSON string but got " + data['snippet']);
        }
        // ensure the json data is a string
        if (data['warning'] && !(typeof data['warning'] === 'string' || data['warning'] instanceof String)) {
            throw new Error("Expected the field `warning` to be a primitive type in the JSON string but got " + data['warning']);
        }

        return true;
    }


}



/**
 * Service Id
 * @member {String} serviceId
 */
Service.prototype['serviceId'] = undefined;

/**
 * Service display name
 * @member {String} serviceName
 */
Service.prototype['serviceName'] = undefined;

/**
 * Relative to iconBaseUrl service icon filepath
 * @member {String} serviceIconPath
 */
Service.prototype['serviceIconPath'] = undefined;

/**
 * Country id
 * @member {String} countryId
 */
Service.prototype['countryId'] = undefined;

/**
 * Country display name
 * @member {String} countryName
 */
Service.prototype['countryName'] = undefined;

/**
 * Relative to iconBaseUrl country icon filepath
 * @member {String} countryIconPath
 */
Service.prototype['countryIconPath'] = undefined;

/**
 * True for virtual number
 * @member {Boolean} isVirtual
 */
Service.prototype['isVirtual'] = undefined;

/**
 * Snippet description of a service
 * @member {String} snippet
 */
Service.prototype['snippet'] = undefined;

/**
 * Warning message for a service
 * @member {String} warning
 */
Service.prototype['warning'] = undefined;

/**
 * Price
 * @member {Number} price
 */
Service.prototype['price'] = undefined;

/**
 * True, if there is at least one country with numbers available
 * @member {Boolean} hasNumbers
 */
Service.prototype['hasNumbers'] = undefined;






export default Service;

