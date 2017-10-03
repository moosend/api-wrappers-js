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
    define(['ApiClient', 'model/Context17'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Context17'));
  } else {
    // Browser globals (root is window)
    if (!root.MoosendApi) {
      root.MoosendApi = {};
    }
    root.MoosendApi.GettingMailingListDetailsResponse = factory(root.MoosendApi.ApiClient, root.MoosendApi.Context17);
  }
}(this, function(ApiClient, Context17) {
  'use strict';




  /**
   * The GettingMailingListDetailsResponse model module.
   * @module model/GettingMailingListDetailsResponse
   * @version 1.0
   */

  /**
   * Constructs a new <code>GettingMailingListDetailsResponse</code>.
   * @alias module:model/GettingMailingListDetailsResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>GettingMailingListDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GettingMailingListDetailsResponse} obj Optional instance to populate.
   * @return {module:model/GettingMailingListDetailsResponse} The populated <code>GettingMailingListDetailsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Code')) {
        obj['Code'] = ApiClient.convertToType(data['Code'], 'Number');
      }
      if (data.hasOwnProperty('Context')) {
        obj['Context'] = Context17.constructFromObject(data['Context']);
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
   * @member {module:model/Context17} Context
   */
  exports.prototype['Context'] = undefined;
  /**
   * 
   * @member {String} Error
   */
  exports.prototype['Error'] = undefined;



  return exports;
}));

