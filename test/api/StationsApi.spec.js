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
    instance = new LeapplayJsClient.StationsApi();
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

  describe('StationsApi', function() {
    describe('createStation', function() {
      it('should call createStation successfully', function(done) {
        //uncomment below and update the code to test createStation
        //instance.createStation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSessionLogsAll', function() {
      it('should call getSessionLogsAll successfully', function(done) {
        //uncomment below and update the code to test getSessionLogsAll
        //instance.getSessionLogsAll(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSessionLogsByStationId', function() {
      it('should call getSessionLogsByStationId successfully', function(done) {
        //uncomment below and update the code to test getSessionLogsByStationId
        //instance.getSessionLogsByStationId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSettings', function() {
      it('should call getSettings successfully', function(done) {
        //uncomment below and update the code to test getSettings
        //instance.getSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSettingsByStationId', function() {
      it('should call getSettingsByStationId successfully', function(done) {
        //uncomment below and update the code to test getSettingsByStationId
        //instance.getSettingsByStationId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getState', function() {
      it('should call getState successfully', function(done) {
        //uncomment below and update the code to test getState
        //instance.getState(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStates', function() {
      it('should call getStates successfully', function(done) {
        //uncomment below and update the code to test getStates
        //instance.getStates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sessionCreate', function() {
      it('should call sessionCreate successfully', function(done) {
        //uncomment below and update the code to test sessionCreate
        //instance.sessionCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sessionStop', function() {
      it('should call sessionStop successfully', function(done) {
        //uncomment below and update the code to test sessionStop
        //instance.sessionStop(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sessionUpdate', function() {
      it('should call sessionUpdate successfully', function(done) {
        //uncomment below and update the code to test sessionUpdate
        //instance.sessionUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setSettings', function() {
      it('should call setSettings successfully', function(done) {
        //uncomment below and update the code to test setSettings
        //instance.setSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setStationMode', function() {
      it('should call setStationMode successfully', function(done) {
        //uncomment below and update the code to test setStationMode
        //instance.setStationMode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setStationPassword', function() {
      it('should call setStationPassword successfully', function(done) {
        //uncomment below and update the code to test setStationPassword
        //instance.setStationPassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setStationQrCode', function() {
      it('should call setStationQrCode successfully', function(done) {
        //uncomment below and update the code to test setStationQrCode
        //instance.setStationQrCode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));