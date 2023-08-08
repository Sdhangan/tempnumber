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
 * The ActivationData model module.
 * @module model/ActivationData
 * @version 1.3.8
 */
class ActivationData {
    /**
     * Constructs a new <code>ActivationData</code>.
     * @alias module:model/ActivationData
     */
    constructor() { 
        
        ActivationData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActivationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivationData} obj Optional instance to populate.
     * @return {module:model/ActivationData} The populated <code>ActivationData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivationData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
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
            if (data.hasOwnProperty('serviceId')) {
                obj['serviceId'] = ApiClient.convertToType(data['serviceId'], 'String');
            }
            if (data.hasOwnProperty('serviceName')) {
                obj['serviceName'] = ApiClient.convertToType(data['serviceName'], 'String');
            }
            if (data.hasOwnProperty('serviceIconPath')) {
                obj['serviceIconPath'] = ApiClient.convertToType(data['serviceIconPath'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('countryCode')) {
                obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'Number');
            }
            if (data.hasOwnProperty('formatNumber')) {
                obj['formatNumber'] = ApiClient.convertToType(data['formatNumber'], 'String');
            }
            if (data.hasOwnProperty('nationalNumber')) {
                obj['nationalNumber'] = ApiClient.convertToType(data['nationalNumber'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Number');
            }
            if (data.hasOwnProperty('numberExpireAt')) {
                obj['numberExpireAt'] = ApiClient.convertToType(data['numberExpireAt'], 'Number');
            }
            if (data.hasOwnProperty('utc')) {
                obj['utc'] = ApiClient.convertToType(data['utc'], 'Number');
            }
            if (data.hasOwnProperty('retryAvailable')) {
                obj['retryAvailable'] = ApiClient.convertToType(data['retryAvailable'], 'Boolean');
            }
            if (data.hasOwnProperty('iconBaseUrl')) {
                obj['iconBaseUrl'] = ApiClient.convertToType(data['iconBaseUrl'], 'String');
            }
            if (data.hasOwnProperty('rating')) {
                obj['rating'] = ApiClient.convertToType(data['rating'], 'Number');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ActivationData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActivationData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
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
        if (data['formatNumber'] && !(typeof data['formatNumber'] === 'string' || data['formatNumber'] instanceof String)) {
            throw new Error("Expected the field `formatNumber` to be a primitive type in the JSON string but got " + data['formatNumber']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['iconBaseUrl'] && !(typeof data['iconBaseUrl'] === 'string' || data['iconBaseUrl'] instanceof String)) {
            throw new Error("Expected the field `iconBaseUrl` to be a primitive type in the JSON string but got " + data['iconBaseUrl']);
        }

        return true;
    }


}



/**
 * Activation id
 * @member {Number} id
 */
ActivationData.prototype['id'] = undefined;

/**
 * Status of activation:<br> <b>numberRequested</b> - phone number is requested, but still not received<br> <b>numberReceived</b> - phone number is received<br> <b>smsRequested</b> - sms data is requested, but still not received<br> <b>smsReceived</b> - sms data received<br> <b>retryRequested</b> - additional sms data is requested, but still not received<br> <b>retryReceived</b> - additional sms data received<br> <b>error</b> - permanent error has occurred<br> <b>refunded</b> - activation cancelled and user refunded
 * @member {module:model/ActivationData.StatusEnum} status
 */
ActivationData.prototype['status'] = undefined;

/**
 * Country id (ISO-3166-1-alpha-2)
 * @member {String} countryId
 */
ActivationData.prototype['countryId'] = undefined;

/**
 * Display name of a country
 * @member {String} countryName
 */
ActivationData.prototype['countryName'] = undefined;

/**
 * relative to iconBaseUrl icon filename
 * @member {String} countryIconPath
 */
ActivationData.prototype['countryIconPath'] = undefined;

/**
 * Service id
 * @member {String} serviceId
 */
ActivationData.prototype['serviceId'] = undefined;

/**
 * Service display name
 * @member {String} serviceName
 */
ActivationData.prototype['serviceName'] = undefined;

/**
 * Relative to iconBaseUrl icon filename
 * @member {String} serviceIconPath
 */
ActivationData.prototype['serviceIconPath'] = undefined;

/**
 * Phone number
 * @member {Number} number
 */
ActivationData.prototype['number'] = undefined;

/**
 * Phone number country code
 * @member {Number} countryCode
 */
ActivationData.prototype['countryCode'] = undefined;

/**
 * Formatted phone number
 * @member {String} formatNumber
 */
ActivationData.prototype['formatNumber'] = undefined;

/**
 * Phone number in national format
 * @member {Number} nationalNumber
 */
ActivationData.prototype['nationalNumber'] = undefined;

/**
 * Full SMS message text
 * @member {String} message
 */
ActivationData.prototype['message'] = undefined;

/**
 * Activation code derived from full SMS message text
 * @member {String} code
 */
ActivationData.prototype['code'] = undefined;

/**
 * Price of activation
 * @member {Number} price
 */
ActivationData.prototype['price'] = undefined;

/**
 * Unix timestamp, when activation initiated
 * @member {Number} createdAt
 */
ActivationData.prototype['createdAt'] = undefined;

/**
 * Unix timestamp, when number will expire
 * @member {Number} numberExpireAt
 */
ActivationData.prototype['numberExpireAt'] = undefined;

/**
 * Present UTC time
 * @member {Number} utc
 */
ActivationData.prototype['utc'] = undefined;

/**
 * Retry available status
 * @member {Boolean} retryAvailable
 */
ActivationData.prototype['retryAvailable'] = undefined;

/**
 * Base URL of icons
 * @member {String} iconBaseUrl
 */
ActivationData.prototype['iconBaseUrl'] = undefined;

/**
 * Rating of activation (0 - if rating not specified)
 * @member {Number} rating
 */
ActivationData.prototype['rating'] = undefined;

/**
 * Reason of problem with activation (0 - if reason not specified)
 * @member {Number} reason
 */
ActivationData.prototype['reason'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
ActivationData['StatusEnum'] = {

    /**
     * value: "numberRequested"
     * @const
     */
    "numberRequested": "numberRequested",

    /**
     * value: "numberReceived"
     * @const
     */
    "numberReceived": "numberReceived",

    /**
     * value: "smsRequested"
     * @const
     */
    "smsRequested": "smsRequested",

    /**
     * value: "smsReceived"
     * @const
     */
    "smsReceived": "smsReceived",

    /**
     * value: "retryRequested"
     * @const
     */
    "retryRequested": "retryRequested",

    /**
     * value: "retryReceived"
     * @const
     */
    "retryReceived": "retryReceived",

    /**
     * value: "error"
     * @const
     */
    "error": "error",

    /**
     * value: "refunded"
     * @const
     */
    "refunded": "refunded"
};



export default ActivationData;

