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
    instance = new LeapplayJsClient.ChangeRequest();
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

  describe('ChangeRequest', function() {
    it('should create an instance of ChangeRequest', function() {
      // uncomment below and update the code to test ChangeRequest
      //var instance = new LeapplayJsClient.ChangeRequest();
      //expect(instance).to.be.a(LeapplayJsClient.ChangeRequest);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new LeapplayJsClient.ChangeRequest();
      //expect(instance).to.be();
    });

    it('should have the property createdOnUtc (base name: "createdOnUtc")', function() {
      // uncomment below and update the code to test the property createdOnUtc
      //var instance = new LeapplayJsClient.ChangeRequest();
      //expect(instance).to.be();
    });

    it('should have the property reference (base name: "reference")', function() {
      // uncomment below and update the code to test the property reference
      //var instance = new LeapplayJsClient.ChangeRequest();
      //expect(instance).to.be();
    });

    it('should have the property timeChange (base name: "timeChange")', function() {
      // uncomment below and update the code to test the property timeChange
      //var instance = new LeapplayJsClient.ChangeRequest();
      //expect(instance).to.be();
    });

  });

}));