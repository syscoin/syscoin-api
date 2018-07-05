var expect  = require('chai').expect;

var varUtils = require('../varUtils');

describe('VerUtils Helper', function() {

  describe('setArgsArr', function () {
    it('Creates and array out of the arguments passed, in order via GET', function (done) {
      var args = {
        title: { value: 'test' },
        description: { value: 'hello' }
      };

      var requiredArgs = [
        { prop: 'title' },
        { prop: 'description' }
      ];

      var argList = varUtils.getArgsArr(requiredArgs, args);

      expect(argList.length).to.equal(2);
      expect(argList[0]).to.equal('test');
      expect(argList[1]).to.equal('hello');
      done();
    });

    it('Creates and array out of the arguments passed, in order via POST', function (done) {
      var args = {
        request: {
          value: {
            title: 'test',
            description: 'hello'
          }
        }
      };

      var requiredArgs = [
        { prop: 'title' },
        { prop: 'description' }
      ];

      var argList = varUtils.getArgsArr(requiredArgs, args, 'POST');

      expect(argList.length).to.equal(2);
      expect(argList[0]).to.equal('test');
      expect(argList[1]).to.equal('hello');
      done();
    });

    it('Creates and array out of the arguments passed and adds the callback last, in order via POST', function (done) {
      var args = {
        request: {
          value: {
            title: 'test',
            description: 'hello'
          }
        }
      };
      var cb = function() { };

      var requiredArgs = [
        { prop: 'title' },
        { prop: 'description' }
      ];

      var argList = varUtils.getArgsArr(requiredArgs, args, 'POST', cb);

      expect(argList.length).to.equal(3);
      expect(argList[0]).to.equal('test');
      expect(argList[1]).to.equal('hello');
      expect(argList[2]).to.equal(cb);
      done();
    });

    it('Creates and array out of the arguments passed and fills in gap-arguements w default values', function (done) {
      var args = {
        request: {
          value: {
            title: 'test',
            description: 'hello',
            private: false
          }
        }
      };
      var cb = function() { };

      var requiredArgs = [
        { prop: 'title' },
        { prop: 'description' },
        { prop: 'quantity', defaultValue: 1 },
        { prop: 'private', defaultValue: true }
      ];

      var argList = varUtils.getArgsArr(requiredArgs, args, 'POST', cb);

      expect(argList.length).to.equal(5);
      expect(argList[0]).to.equal('test');
      expect(argList[1]).to.equal('hello');
      expect(argList[2]).to.equal(1);
      expect(argList[3]).to.equal(false);

      expect(argList[4]).to.equal(cb);
      done();
    });
  });

  describe('correctTypes', function () {
    it('Converts a number to a string', function (done) {
      var args = {
        title: { value: 1 }
      };

      args.title.value = varUtils.correctTypes(args.title.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

      expect(args.title.value ).to.equal('1');
      done();
    });

    it('Converts a series of number nested in a mixed array to a string', function (done) {
      var args = {
        title: { value: [1, '2', 3, '4'] }
      };

      args.title.value = varUtils.correctTypes(args.title.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

      //for more info on this solution: https://medium.com/@victorleungtw/testing-with-mocha-array-comparison-e9a45b57df27
      expect(args.title.value.toString()).to.equal(['1', '2', '3', '4'].toString());
      done();
    });

    it('Converts a boolean to a string', function (done) {
      var args = {
        title: { value: true }
      };

      args.title.value = varUtils.correctTypes(args.title.value, varUtils.TYPE_CONVERSION.BOOL_TO_STRING);

      expect(args.title.value ).to.equal('true');
      done();
    });

    it('Creates and array out of the arguments passed and adds the callback last, in order via POST', function (done) {
      var args = {
        title: { value: true }
      };

      args.title.value = varUtils.correctTypes(args.title.value, varUtils.TYPE_CONVERSION.BOOL_TO_NUM_STRING);

      expect(args.title.value ).to.equal('1');
      done();
    });
  });

});