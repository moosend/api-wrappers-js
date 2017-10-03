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
    define(['ApiClient', 'model/CustomFieldsDefinition', 'model/ImportOperation19'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomFieldsDefinition'), require('./ImportOperation19'));
  } else {
    // Browser globals (root is window)
    if (!root.MoosendApi) {
      root.MoosendApi = {};
    }
    root.MoosendApi.Context17 = factory(root.MoosendApi.ApiClient, root.MoosendApi.CustomFieldsDefinition, root.MoosendApi.ImportOperation19);
  }
}(this, function(ApiClient, CustomFieldsDefinition, ImportOperation19) {
  'use strict';




  /**
   * The Context17 model module.
   * @module model/Context17
   * @version 1.0
   */

  /**
   * Constructs a new <code>Context17</code>.
   * @alias module:model/Context17
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>Context17</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Context17} obj Optional instance to populate.
   * @return {module:model/Context17} The populated <code>Context17</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ActiveMemberCount')) {
        obj['ActiveMemberCount'] = ApiClient.convertToType(data['ActiveMemberCount'], 'Number');
      }
      if (data.hasOwnProperty('BouncedMemberCount')) {
        obj['BouncedMemberCount'] = ApiClient.convertToType(data['BouncedMemberCount'], 'Number');
      }
      if (data.hasOwnProperty('CreatedBy')) {
        obj['CreatedBy'] = ApiClient.convertToType(data['CreatedBy'], 'String');
      }
      if (data.hasOwnProperty('CreatedOn')) {
        obj['CreatedOn'] = ApiClient.convertToType(data['CreatedOn'], 'String');
      }
      if (data.hasOwnProperty('CustomFieldsDefinition')) {
        obj['CustomFieldsDefinition'] = ApiClient.convertToType(data['CustomFieldsDefinition'], [CustomFieldsDefinition]);
      }
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('ImportOperation')) {
        obj['ImportOperation'] = ImportOperation19.constructFromObject(data['ImportOperation']);
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('RemovedMemberCount')) {
        obj['RemovedMemberCount'] = ApiClient.convertToType(data['RemovedMemberCount'], 'Number');
      }
      if (data.hasOwnProperty('Status')) {
        obj['Status'] = ApiClient.convertToType(data['Status'], 'Number');
      }
      if (data.hasOwnProperty('UnsubscribedMemberCount')) {
        obj['UnsubscribedMemberCount'] = ApiClient.convertToType(data['UnsubscribedMemberCount'], 'Number');
      }
      if (data.hasOwnProperty('UpdatedBy')) {
        obj['UpdatedBy'] = ApiClient.convertToType(data['UpdatedBy'], 'String');
      }
      if (data.hasOwnProperty('UpdatedOn')) {
        obj['UpdatedOn'] = ApiClient.convertToType(data['UpdatedOn'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Number} ActiveMemberCount
   */
  exports.prototype['ActiveMemberCount'] = undefined;
  /**
   * 
   * @member {Number} BouncedMemberCount
   */
  exports.prototype['BouncedMemberCount'] = undefined;
  /**
   * 
   * @member {String} CreatedBy
   */
  exports.prototype['CreatedBy'] = undefined;
  /**
   * 
   * @member {String} CreatedOn
   */
  exports.prototype['CreatedOn'] = undefined;
  /**
   * 
   * @member {Array.<module:model/CustomFieldsDefinition>} CustomFieldsDefinition
   */
  exports.prototype['CustomFieldsDefinition'] = undefined;
  /**
   * 
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {module:model/ImportOperation19} ImportOperation
   */
  exports.prototype['ImportOperation'] = undefined;
  /**
   * 
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * 
   * @member {Number} RemovedMemberCount
   */
  exports.prototype['RemovedMemberCount'] = undefined;
  /**
   * 
   * @member {Number} Status
   */
  exports.prototype['Status'] = undefined;
  /**
   * 
   * @member {Number} UnsubscribedMemberCount
   */
  exports.prototype['UnsubscribedMemberCount'] = undefined;
  /**
   * 
   * @member {String} UpdatedBy
   */
  exports.prototype['UpdatedBy'] = undefined;
  /**
   * 
   * @member {String} UpdatedOn
   */
  exports.prototype['UpdatedOn'] = undefined;



  return exports;
}));

