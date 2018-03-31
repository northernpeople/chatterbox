(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
  _classCallCheck(this, ChatApp);

  console.log("hello es6");
};

var ChatMessage = function () {
  function ChatMessage(_ref) {
    var message = _ref.message,
        _ref$user = _ref.user,
        user = _ref$user === undefined ? "batman" : _ref$user,
        _ref$timestamp = _ref.timestamp,
        timestamp = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

    _classCallCheck(this, ChatMessage);

    this.message = message;
    this.user = user;
    this.timestamp = timestamp;
  }

  _createClass(ChatMessage, [{
    key: "serialize",
    value: function serialize() {
      return { user: this.user, message: this.message, timestamp: this.timestamp };
    }
  }]);

  return ChatMessage;
}();

exports.default = ChatApp;
exports.ChatMessage = ChatMessage;

},{}],2:[function(require,module,exports){
"use strict";

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

var message = new _app.ChatMessage("message text").serialize();
console.log(message);

},{"./app":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQU0sTyxHQUNKLG1CQUFhO0FBQUE7O0FBQ1gsVUFBUSxHQUFSLENBQVksV0FBWjtBQUNELEM7O0lBR0csVztBQUNKLDZCQUF1RTtBQUFBLFFBQTFELE9BQTBELFFBQTFELE9BQTBEO0FBQUEseUJBQWpELElBQWlEO0FBQUEsUUFBakQsSUFBaUQsNkJBQTVDLFFBQTRDO0FBQUEsOEJBQWxDLFNBQWtDO0FBQUEsUUFBbEMsU0FBa0Msa0NBQXZCLElBQUksSUFBSixFQUFELENBQWEsT0FBYixFQUF3Qjs7QUFBQTs7QUFDckUsU0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLFNBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxTQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFDRDs7OztnQ0FDVTtBQUNULGFBQU8sRUFBQyxNQUFNLEtBQUssSUFBWixFQUFrQixTQUFTLEtBQUssT0FBaEMsRUFBeUMsV0FBVyxLQUFLLFNBQXpELEVBQVA7QUFDRDs7Ozs7O2tCQUdZLE87UUFDUCxXLEdBQUEsVzs7Ozs7QUNsQlI7Ozs7OztBQUlBOztBQUVBLElBQUksVUFBVSxxQkFBZ0IsY0FBaEIsRUFBZ0MsU0FBaEMsRUFBZDtBQUNBLFFBQVEsR0FBUixDQUFZLE9BQVoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjbGFzcyBDaGF0QXBwe1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gZXM2XCIpO1xuICB9XG59XG5cbmNsYXNzIENoYXRNZXNzYWdle1xuICBjb25zdHJ1Y3Rvcih7bWVzc2FnZSwgdXNlcj1cImJhdG1hblwiLCB0aW1lc3RhbXA9KG5ldyBEYXRlKCkpLmdldFRpbWUoKX0pe1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICB0aGlzLnRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgfVxuICBzZXJpYWxpemUoKXtcbiAgICByZXR1cm4ge3VzZXI6IHRoaXMudXNlciwgbWVzc2FnZTogdGhpcy5tZXNzYWdlLCB0aW1lc3RhbXA6IHRoaXMudGltZXN0YW1wfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0QXBwO1xuZXhwb3J0IHtDaGF0TWVzc2FnZX07XG4iLCJpbXBvcnQgQ2hhdEFwcCBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCB7Q2hhdE1lc3NhZ2V9IGZyb20gXCIuL2FwcFwiO1xuXG5cbm5ldyBDaGF0QXBwKCk7XG5cbmxldCBtZXNzYWdlID0gbmV3IENoYXRNZXNzYWdlKFwibWVzc2FnZSB0ZXh0XCIpLnNlcmlhbGl6ZSgpO1xuY29uc29sZS5sb2cobWVzc2FnZSk7XG4iXX0=
