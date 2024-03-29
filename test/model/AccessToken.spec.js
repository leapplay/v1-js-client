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
    instance = new LeapplayJsClient.AccessToken();
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

  describe('AccessToken', function() {
    it('should create an instance of AccessToken', function() {
      // uncomment below and update the code to test AccessToken
      //var instance = new LeapplayJsClient.AccessToken();
      //expect(instance).to.be.a(LeapplayJsClient.AccessToken);
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new LeapplayJsClient.AccessToken();
      //expect(instance).to.be();
    });

    it('should have the property expiresIn (base name: "expiresIn")', function() {
      // uncomment below and update the code to test the property expiresIn
      //var instance = new LeapplayJsClient.AccessToken();
      //expect(instance).to.be();
    });

  });

}));
