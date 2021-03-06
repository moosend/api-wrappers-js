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
    define(['ApiClient', 'model/Criterion'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Criterion'));
  } else {
    // Browser globals (root is window)
    if (!root.MoosendApi) {
      root.MoosendApi = {};
    }
    root.MoosendApi.Segment = factory(root.MoosendApi.ApiClient, root.MoosendApi.Criterion);
  }
}(this, function(ApiClient, Criterion) {
  'use strict';




  /**
   * The Segment model module.
   * @module model/Segment
   * @version 1.0
   */

  /**
   * Constructs a new <code>Segment</code>.
   * @alias module:model/Segment
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>Segment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Segment} obj Optional instance to populate.
   * @return {module:model/Segment} The populated <code>Segment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CreatedBy')) {
        obj['CreatedBy'] = ApiClient.convertToType(data['CreatedBy'], 'String');
      }
      if (data.hasOwnProperty('CreatedOn')) {
        obj['CreatedOn'] = ApiClient.convertToType(data['CreatedOn'], 'String');
      }
      if (data.hasOwnProperty('Criteria')) {
        obj['Criteria'] = ApiClient.convertToType(data['Criteria'], [Criterion]);
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('FetchType')) {
        obj['FetchType'] = ApiClient.convertToType(data['FetchType'], 'Number');
      }
      if (data.hasOwnProperty('FetchValue')) {
        obj['FetchValue'] = ApiClient.convertToType(data['FetchValue'], 'Number');
      }
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
      }
      if (data.hasOwnProperty('MatchType')) {
        obj['MatchType'] = ApiClient.convertToType(data['MatchType'], 'Number');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
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
   * @member {Array.<module:model/Criterion>} Criteria
   */
  exports.prototype['Criteria'] = undefined;
  /**
   * 
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * 
   * @member {Number} FetchType
   */
  exports.prototype['FetchType'] = undefined;
  /**
   * 
   * @member {Number} FetchValue
   */
  exports.prototype['FetchValue'] = undefined;
  /**
   * 
   * @member {Number} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * 
   * @member {Number} MatchType
   */
  exports.prototype['MatchType'] = undefined;
  /**
   * 
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
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


