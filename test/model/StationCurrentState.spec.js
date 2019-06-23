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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LeapplayJsClient);
  }
}(this, function(expect, LeapplayJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LeapplayJsClient.StationCurrentState();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('StationCurrentState', function() {
    it('should create an instance of StationCurrentState', function() {
      // uncomment below and update the code to test StationCurrentState
      //var instance = new LeapplayJsClient.StationCurrentState();
      //expect(instance).to.be.a(LeapplayJsClient.StationCurrentState);
    });

    it('should have the property stationId (base name: "stationId")', function() {
      // uncomment below and update the code to test the property stationId
      //var instance = new LeapplayJsClient.StationCurrentState();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "displayName")', function() {
      // uncomment below and update the code to test the property displayName
      //var instance = new LeapplayJsClient.StationCurrentState();
      //expect(instance).to.be();
    });

    it('should have the property controlMode (base name: "controlMode")', function() {
      // uncomment below and update the code to test the property controlMode
      //var instance = new LeapplayJsClient.StationCurrentState();
      //expect(instance).to.be();
    });

    it('should have the property networkState (base name: "networkState")', function() {
      // uncomment below and update the code to test the property networkState
      //var instance = new LeapplayJsClient.StationCurrentState();
      //expect(instance).to.be();
    });

    it('should have the property session (base name: "session")', function() {
      // uncomment below and update the code to test the property session
      //var instance = new LeapplayJsClient.StationCurrentState();
      //expect(instance).to.be();
    });

  });

}));
