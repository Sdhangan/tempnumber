/**
 * temp-number.org API
 * Get temporary mobile numbers and receive SMS with API for online accounts verification and QA tests. Most of TempNumber phone numbers are real mobile numbers (not virtual) coming from physical SIM cards. This greatly increases chances to receive SMS for online account verification. You can find out more about the service at [https://temp-number.org](https://temp-number.org).  ## Basic usage ### Get number and receive SMS 1. Get temporary mobile phone number by sending      **POST** request to `/activations` while passing both **service** and **country** as request parameters.     For example, in order to request activation code for Facebook using Germany phone number set:     - \"serviceId\": \"facebook\"     - \"countryId\": \"de\"      In response you will get:     - phone number     - activation id  2. Use phone number 3. Get SMS by sending **GET** request to `/acivations/<activation_id>`. Continue polling endpoint while `status=smsRequested or retryRequested` until you get sms. Please, note that rate limits applies (see below).  ### Balance management 1. Top up your funds balance through UI:   - [https://temp-number.org](https://temp-number.org/app)   - [Apple App Store](https://apps.apple.com/app/id1589908420)   - [Google Play](https://play.google.com/store/apps/details?id=com.receive.sms_second.number) 2. Check balance by sending request to **GET**  `/user/balance`  ### Pricing Get price list by sending **GET** request to either: - `/pricelistByService` OR  - `/pricelistByCountry`  In response you will get price for each service in each country.  ## Authentication  You must send your API key in `x-api-key` header for each request. To get your API key  1. [Login](https://temp-number.org/app/create-account) into your account. 2. In side menu, click on API button. 3. Generate your API key.  ## Servers  All requests are relative to following base URLs:  |  Base URL                                 |  Environment              | |  ---                                      |  ---                      | | https://tn-api.com/api/v1                 | production                | | https://mock.temp-number.org/v1           | mock (no funds required)  |  ## Rate limits We have two types of rate limits: 1. SMS delivery per service per country 2. API requests per endpoint  ### Delivery rate limit We require at least 7% from all activations per service per country to receive sms. We start to calculate delivery rate limit after 5-th activation. This limit is required to guard against all numbers being \"burned\" without actually being used. Delivery Rate limit resets each 24 hours.      **Example:** 100 activations requested for Whatsapp in Germany but only 1 activation got sms. This is 1% delivery success rate. No more activations allowed in 24 hours to Whatsapp in Netherland.  ### API requests rate limit In order to protect service from excessive use whether intended or unintended we are rate limiting request to API endpoints to maintain service availability. Rates apply to each endpoint separately.  <details><summary>See API rate limits</summary>  |  endpoint                                 |  method |  rate                       | |  ---                                      |  ---    |  ---                        | | /activations                              |  GET    |   10 request per minute     | | /activations                              |  POST   |   80 requests per 2 minutes | | /activations/:activation_id               |  GET    |   80 requests per 2 minutes | | /activations                              |  PUT    |   10 requests per minute    | | /services/:serviceId/countries/:countryId |  GET    |   80 requests per 2 minutes | | /services/pricelistByService              |  GET    |   3 requests per minute     | | /services/pricelistByCountry              |  GET    |   3 requests per minute     | | /user/balance                             |  GET    |   10 requests per minute    |  </details> 
 *
 * The version of the OpenAPI document: 1.2.7
 * Contact: support@temp-number.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The BadRequest model module.
 * @module model/BadRequest
 * @version 1.2.7
 */
class BadRequest {
    /**
     * Constructs a new <code>BadRequest</code>.
     * @alias module:model/BadRequest
     * @param errorMessage {String} Invalid request params
     * @param errorName {module:model/BadRequest.ErrorNameEnum} 
     */
    constructor(errorMessage, errorName) { 
        
        BadRequest.initialize(this, errorMessage, errorName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, errorMessage, errorName) { 
        obj['errorMessage'] = errorMessage;
        obj['errorName'] = errorName;
    }

    /**
     * Constructs a <code>BadRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BadRequest} obj Optional instance to populate.
     * @return {module:model/BadRequest} The populated <code>BadRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BadRequest();

            if (data.hasOwnProperty('errorMessage')) {
                obj['errorMessage'] = ApiClient.convertToType(data['errorMessage'], 'String');
            }
            if (data.hasOwnProperty('errorName')) {
                obj['errorName'] = ApiClient.convertToType(data['errorName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Invalid request params
 * @member {String} errorMessage
 */
BadRequest.prototype['errorMessage'] = undefined;

/**
 * @member {module:model/BadRequest.ErrorNameEnum} errorName
 */
BadRequest.prototype['errorName'] = undefined;





/**
 * Allowed values for the <code>errorName</code> property.
 * @enum {String}
 * @readonly
 */
BadRequest['ErrorNameEnum'] = {

    /**
     * value: "InvalidRequestParamsException"
     * @const
     */
    "InvalidRequestParamsException": "InvalidRequestParamsException"
};



export default BadRequest;

