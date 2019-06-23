/**
 * Leap Play
 * Learn more at https://www.leap-play.com
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
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
    if (!root.LeapplayJsClient) {
      root.LeapplayJsClient = {};
    }
    root.LeapplayJsClient.UpdatedSession = factory(root.LeapplayJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdatedSession model module.
   * @module model/UpdatedSession
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UpdatedSession</code>.
   * @alias module:model/UpdatedSession
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>UpdatedSession</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdatedSession} obj Optional instance to populate.
   * @return {module:model/UpdatedSession} The populated <code>UpdatedSession</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('stationId')) {
        obj['stationId'] = ApiClient.convertToType(data['stationId'], 'String');
      }
      if (data.hasOwnProperty('sessionId')) {
        obj['sessionId'] = ApiClient.convertToType(data['sessionId'], 'String');
      }
      if (data.hasOwnProperty('changeRequestId')) {
        obj['changeRequestId'] = ApiClient.convertToType(data['changeRequestId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} stationId
   */
  exports.prototype['stationId'] = undefined;
  /**
   * @member {String} sessionId
   */
  exports.prototype['sessionId'] = undefined;
  /**
   * @member {String} changeRequestId
   */
  exports.prototype['changeRequestId'] = undefined;



  return exports;
}));


