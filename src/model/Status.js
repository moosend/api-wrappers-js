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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MoosendApi) {
      root.MoosendApi = {};
    }
    root.MoosendApi.Status = factory(root.MoosendApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class Status.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "Subscribed"
     * @const
     */
    "Subscribed": "Subscribed",
    /**
     * value: "Unsubscribed"
     * @const
     */
    "Unsubscribed": "Unsubscribed",
    /**
     * value: "Bounced"
     * @const
     */
    "Bounced": "Bounced",
    /**
     * value: "Removed"
     * @const
     */
    "Removed": "Removed"  };

  /**
   * Returns a <code>Status</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/Status} The enum <code>Status</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


