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
    root.LeapplayJsClient.RequestCreateStation = factory(root.LeapplayJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RequestCreateStation model module.
   * @module model/RequestCreateStation
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RequestCreateStation</code>.
   * @alias module:model/RequestCreateStation
   * @class
   * @param displayName {String} 
   * @param password {String} 
   */
  var exports = function(displayName, password) {
    var _this = this;

    _this['displayName'] = displayName;
    _this['password'] = password;
  };

  /**
   * Constructs a <code>RequestCreateStation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestCreateStation} obj Optional instance to populate.
   * @return {module:model/RequestCreateStation} The populated <code>RequestCreateStation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;



  return exports;
}));


