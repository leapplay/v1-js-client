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
    root.LeapplayJsClient.RequestNewStationSession = factory(root.LeapplayJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RequestNewStationSession model module.
   * @module model/RequestNewStationSession
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RequestNewStationSession</code>.
   * @alias module:model/RequestNewStationSession
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>RequestNewStationSession</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestNewStationSession} obj Optional instance to populate.
   * @return {module:model/RequestNewStationSession} The populated <code>RequestNewStationSession</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reference')) {
        obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} reference
   */
  exports.prototype['reference'] = undefined;
  /**
   * @member {String} duration
   */
  exports.prototype['duration'] = undefined;



  return exports;
}));


