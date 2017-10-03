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
    define(['ApiClient', 'model/MailingList69'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MailingList69'));
  } else {
    // Browser globals (root is window)
    if (!root.MoosendApi) {
      root.MoosendApi = {};
    }
    root.MoosendApi.MailingList68 = factory(root.MoosendApi.ApiClient, root.MoosendApi.MailingList69);
  }
}(this, function(ApiClient, MailingList69) {
  'use strict';




  /**
   * The MailingList68 model module.
   * @module model/MailingList68
   * @version 1.0
   */

  /**
   * Constructs a new <code>MailingList68</code>.
   * @alias module:model/MailingList68
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>MailingList68</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MailingList68} obj Optional instance to populate.
   * @return {module:model/MailingList68} The populated <code>MailingList68</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Campaign')) {
        obj['Campaign'] = ApiClient.convertToType(data['Campaign'], 'String');
      }
      if (data.hasOwnProperty('MailingList')) {
        obj['MailingList'] = MailingList69.constructFromObject(data['MailingList']);
      }
      if (data.hasOwnProperty('Segment')) {
        obj['Segment'] = ApiClient.convertToType(data['Segment'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} Campaign
   */
  exports.prototype['Campaign'] = undefined;
  /**
   * @member {module:model/MailingList69} MailingList
   */
  exports.prototype['MailingList'] = undefined;
  /**
   * 
   * @member {String} Segment
   */
  exports.prototype['Segment'] = undefined;



  return exports;
}));

