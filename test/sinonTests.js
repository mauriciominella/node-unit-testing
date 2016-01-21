'use strict';

var chai = require('chai'),
  sinon = require('sinon'),
  expect = chai.expect;
chai.should();

describe('sinon tests', function(){
  var student;

  beforeEach(function(){
    student = {
        dropClass: function(classId, cb){
          //do stuff
          cb();
        }
    };
  });

  describe('student.dropClass', function(){
    it('should call the callback', function(){
        student.dropClass();
    });
  });

});
