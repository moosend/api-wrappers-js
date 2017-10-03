/**
 * Moosend API
 * TODO: Add a description
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Context89'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Context89'));
  } else {
    // Browser globals (root is window)
    if (!root.MoosendApi) {
      root.MoosendApi = {};
    }
    root.MoosendApi.GettingAllYourSendersResponse = factory(root.MoosendApi.ApiClient, root.MoosendApi.Context89);
  }
}(this, function(ApiClient, Context89) {
  'use strict';




  /**
   * The GettingAllYourSendersResponse model module.
   * @module model/GettingAllYourSendersResponse
   * @version 1.0
   */

  /**
   * Constructs a new <code>GettingAllYourSendersResponse</code>.
   * @alias module:model/GettingAllYourSendersResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>GettingAllYourSendersResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GettingAllYourSendersResponse} obj Optional instance to populate.
   * @return {module:model/GettingAllYourSendersResponse} The populated <code>GettingAllYourSendersResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Code')) {
        obj['Code'] = ApiClient.convertToType(data['Code'], 'Number');
      }
      if (data.hasOwnProperty('Context')) {
        obj['Context'] = ApiClient.convertToType(data['Context'], [Context89]);
      }
      if (data.hasOwnProperty('Error')) {
        obj['Error'] = ApiClient.convertToType(data['Error'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Number} Code
   */
  exports.prototype['Code'] = undefined;
  /**
   * 
   * @member {Array.<module:model/Context89>} Context
   */
  exports.prototype['Context'] = undefined;
  /**
   * 
   * @member {String} Error
   */
  exports.prototype['Error'] = undefined;



  return exports;
}));

