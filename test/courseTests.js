'use strict';

var Student = require('../Student')
    ,Course = require('../Course')
    ,chai = require('chai')
    ,should = chai.should()
    ,expect = chai.expect;

  describe('Course', function(){
    var courseName = 'Introduction to Awesomeness',
        courseCode = 'AWE 101',
        courseDescription = 'This course will make you awesome!';

        it('should save data correctly', function(){
          var course = Course.create(courseName, courseCode, courseDescription);

          should.exist(course.name);
          should.exist(course.code);
          should.exist(course.description);

          should.exist(course.students);
          course.students.should.eql([]);

          should.exist(course.times);
          course.times.should.eql([]);
        });
  });
