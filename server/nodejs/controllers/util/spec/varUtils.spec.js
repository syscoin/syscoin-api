var expect  = require("chai").expect;

var varUtils = require("../varUtils");

describe("VerUtils Helper", function() {

  describe("setDefaultArgs", function () {
    it("Sets default arguments in GET mode when no method is supplied", function (done) {
      var args = {};
      var defaultArgs = {
        privatevalue: "",
        password: "",
        safesearch: "Yes"
      };

      args = varUtils.setDefaultArgs(defaultArgs, args);

      expect(args.privatevalue.value).to.exist;
      expect(args.privatevalue.value).to.equal("");
      expect(args.password.value).to.exist;
      expect(args.password.value).to.equal("");
      expect(args.safesearch.value).to.exist;
      expect(args.safesearch.value).to.equal("Yes");
      done();
    });

    it("Sets default arguments in GET mode when no method is supplied but does not overwrite supplied args", function (done) {
      var args = {
        privatevalue: {
          value: "Hello"
        }
      };
      var defaultArgs = {
        privatevalue: "",
        password: "",
        safesearch: "Yes"
      };

      args = varUtils.setDefaultArgs(defaultArgs, args);

      expect(args.privatevalue.value).to.exist;
      expect(args.privatevalue.value).to.equal("Hello");
      expect(args.password.value).to.exist;
      expect(args.password.value).to.equal("");
      expect(args.safesearch.value).to.exist;
      expect(args.safesearch.value).to.equal("Yes");
      done();
    });

    it("Sets default arguments in POST mode when no method is supplied", function (done) {
      var args = {
        request: {
          value: {}
        }
      };
      var defaultArgs = {
        privatevalue: "",
        password: "",
        safesearch: "Yes"
      };

      args = varUtils.setDefaultArgs(defaultArgs, args, "POST");

      expect(args.request.value.privatevalue).to.exist;
      expect(args.request.value.privatevalue).to.equal("");
      expect(args.request.value.password).to.exist;
      expect(args.request.value.password).to.equal("");
      expect(args.request.value.safesearch).to.exist;
      expect(args.request.value.safesearch).to.equal("Yes");
      done();
    });

    it("Sets default arguments in POST mode when no method is supplied but does not overwrite supplied args", function (done) {
      var args = {
        request: {
          value: {
            privatevalue: "Hello"
          }
        }
      };
      var defaultArgs = {
        privatevalue: "",
        password: "",
        safesearch: "Yes"
      };

      args = varUtils.setDefaultArgs(defaultArgs, args, "POST");

      expect(args.request.value.privatevalue).to.exist;
      expect(args.request.value.privatevalue).to.equal("Hello");
      expect(args.request.value.password).to.exist;
      expect(args.request.value.password).to.equal("");
      expect(args.request.value.safesearch).to.exist;
      expect(args.request.value.safesearch).to.equal("Yes");
      done();
    });
  });

  describe("setArgsArr", function () {
    it("Creates and array out of the arguments passed, in order via GET", function (done) {
      var args = {
        title: { value: "test" },
        description: { value: "hello" }
      };

      var requiredArgs = ["title", "description"];

      var argList = varUtils.getArgsArr(requiredArgs, args);

      expect(argList.length).to.equal(2);
      expect(argList[0]).to.equal("test");
      expect(argList[1]).to.equal("hello");
      done();
    });

    it("Creates and array out of the arguments passed, in order via POST", function (done) {
      var args = {
        request: {
          value: {
            title: "test",
            description: "hello"
          }
        }
      };

      var requiredArgs = ["title", "description"];

      var argList = varUtils.getArgsArr(requiredArgs, args, "POST");

      expect(argList.length).to.equal(2);
      expect(argList[0]).to.equal("test");
      expect(argList[1]).to.equal("hello");
      done();
    });

    it("Creates and array out of the arguments passed and adds the callback last, in order via POST", function (done) {
      var args = {
        request: {
          value: {
            title: "test",
            description: "hello"
          }
        }
      };
      var cb = function() { };
      var requiredArgs = ["title", "description"];

      var argList = varUtils.getArgsArr(requiredArgs, args, "POST", cb);

      expect(argList.length).to.equal(3);
      expect(argList[0]).to.equal("test");
      expect(argList[1]).to.equal("hello");
      expect(argList[2]).to.equal(cb);
      done();
    });
  });

  describe("correctTypes", function () {
    it("Converts a number to a string", function (done) {
      var args = {
        title: { value: 1 }
      };

      args.title.value = varUtils.correctTypes(args.title.value, varUtils.TYPE_CONVERSION.NUM_TO_STRING);

      expect(args.title.value ).to.equal("1");
      done();
    });

    it("Converts a boolean to a string", function (done) {
      var args = {
        title: { value: true }
      };

      args.title.value = varUtils.correctTypes(args.title.value, varUtils.TYPE_CONVERSION.BOOL_TO_STRING);

      expect(args.title.value ).to.equal("true");
      done();
    });

    it("Creates and array out of the arguments passed and adds the callback last, in order via POST", function (done) {
      var args = {
        title: { value: true }
      };

      args.title.value = varUtils.correctTypes(args.title.value, varUtils.TYPE_CONVERSION.BOOL_TO_NUM_STRING);

      expect(args.title.value ).to.equal("1");
      done();
    });
  });

});