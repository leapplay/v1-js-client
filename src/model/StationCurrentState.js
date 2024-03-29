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
    define(['ApiClient', 'model/Session'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Session'));
  } else {
    // Browser globals (root is window)
    if (!root.LeapplayJsClient) {
      root.LeapplayJsClient = {};
    }
    root.LeapplayJsClient.StationCurrentState = factory(root.LeapplayJsClient.ApiClient, root.LeapplayJsClient.Session);
  }
}(this, function(ApiClient, Session) {
  'use strict';




  /**
   * The StationCurrentState model module.
   * @module model/StationCurrentState
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>StationCurrentState</code>.
   * @alias module:model/StationCurrentState
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>StationCurrentState</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StationCurrentState} obj Optional instance to populate.
   * @return {module:model/StationCurrentState} The populated <code>StationCurrentState</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('stationId')) {
        obj['stationId'] = ApiClient.convertToType(data['stationId'], 'String');
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('controlMode')) {
        obj['controlMode'] = ApiClient.convertToType(data['controlMode'], 'String');
      }
      if (data.hasOwnProperty('networkState')) {
        obj['networkState'] = ApiClient.convertToType(data['networkState'], 'String');
      }
      if (data.hasOwnProperty('session')) {
        obj['session'] = Session.constructFromObject(data['session']);
      }
    }
    return obj;
  }

  /**
   * @member {String} stationId
   */
  exports.prototype['stationId'] = undefined;
  /**
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * @member {module:model/StationCurrentState.ControlModeEnum} controlMode
   */
  exports.prototype['controlMode'] = undefined;
  /**
   * @member {module:model/StationCurrentState.NetworkStateEnum} networkState
   */
  exports.prototype['networkState'] = undefined;
  /**
   * @member {module:model/Session} session
   */
  exports.prototype['session'] = undefined;


  /**
   * Allowed values for the <code>controlMode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ControlModeEnum = {
    /**
     * value: "Undefined"
     * @const
     */
    "Undefined": "Undefined",
    /**
     * value: "Local"
     * @const
     */
    "Local": "Local",
    /**
     * value: "Remote"
     * @const
     */
    "Remote": "Remote",
    /**
     * value: "RemoteWithQrCode"
     * @const
     */
    "RemoteWithQrCode": "RemoteWithQrCode"  };

  /**
   * Allowed values for the <code>networkState</code> property.
   * @enum {String}
   * @readonly
   */
  exports.NetworkStateEnum = {
    /**
     * value: "Disconnected"
     * @const
     */
    "Disconnected": "Disconnected",
    /**
     * value: "Connecting"
     * @const
     */
    "Connecting": "Connecting",
    /**
     * value: "Connected"
     * @const
     */
    "Connected": "Connected"  };


  return exports;
}));


