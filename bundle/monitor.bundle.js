/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/bundle/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _condition = __webpack_require__(1);\n\nvar _condition2 = _interopRequireDefault(_condition);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ReaderWriter = function () {\n\tfunction ReaderWriter() {\n\t\t_classCallCheck(this, ReaderWriter);\n\n\t\tthis.data = 'init';\n\t\tthis._readersCount = 0;\n\t\tthis._busy = false;\n\t\tthis.OkToWrite = new _condition2.default();\n\t\tthis.OkToRead = new _condition2.default();\n\t}\n\n\t_createClass(ReaderWriter, [{\n\t\tkey: 'read',\n\t\tvalue: function read(reader) {\n\t\t\tif (this._busy) {\n\t\t\t\tOkToRead.wait(reader);\n\t\t\t}\n\t\t\tconsole.log(this.data);\n\t\t}\n\t}]);\n\n\treturn ReaderWriter;\n}();\n\nalert(\"test\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzI4YTIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NvbmRpdGlvbiA9IHJlcXVpcmUoJy4vY29uZGl0aW9uJyk7XG5cbnZhciBfY29uZGl0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbmRpdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSZWFkZXJXcml0ZXIgPSBmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIFJlYWRlcldyaXRlcigpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVhZGVyV3JpdGVyKTtcblxuXHRcdHRoaXMuZGF0YSA9ICdpbml0Jztcblx0XHR0aGlzLl9yZWFkZXJzQ291bnQgPSAwO1xuXHRcdHRoaXMuX2J1c3kgPSBmYWxzZTtcblx0XHR0aGlzLk9rVG9Xcml0ZSA9IG5ldyBfY29uZGl0aW9uMi5kZWZhdWx0KCk7XG5cdFx0dGhpcy5Pa1RvUmVhZCA9IG5ldyBfY29uZGl0aW9uMi5kZWZhdWx0KCk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoUmVhZGVyV3JpdGVyLCBbe1xuXHRcdGtleTogJ3JlYWQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZWFkKHJlYWRlcikge1xuXHRcdFx0aWYgKHRoaXMuX2J1c3kpIHtcblx0XHRcdFx0T2tUb1JlYWQud2FpdChyZWFkZXIpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc29sZS5sb2codGhpcy5kYXRhKTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gUmVhZGVyV3JpdGVyO1xufSgpO1xuXG5hbGVydChcInRlc3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Condition = function () {\n\tfunction Condition() {\n\t\t_classCallCheck(this, Condition);\n\n\t\tthis._queue = [];\n\t}\n\n\t_createClass(Condition, [{\n\t\tkey: \"wait\",\n\t\tvalue: function wait(name) {\n\t\t\tvar p = new Promise(function (res, rej) {});\n\t\t\tthis._queue.push(p);\n\t\t}\n\t}, {\n\t\tkey: \"signal\",\n\t\tvalue: function signal() {\n\t\t\tvar p = this._queue.pop();\n\t\t\tif (p) {\n\t\t\t\tPromise.resolve(p);\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: \"queue\",\n\t\tvalue: function queue() {\n\t\t\treturn this._queue.length;\n\t\t}\n\t}]);\n\n\treturn Condition;\n}();\n\nexports.default = Condition;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbmRpdGlvbi5qcz9kZjU5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQ29uZGl0aW9uID0gZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBDb25kaXRpb24oKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbmRpdGlvbik7XG5cblx0XHR0aGlzLl9xdWV1ZSA9IFtdO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKENvbmRpdGlvbiwgW3tcblx0XHRrZXk6IFwid2FpdFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB3YWl0KG5hbWUpIHtcblx0XHRcdHZhciBwID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlcywgcmVqKSB7fSk7XG5cdFx0XHR0aGlzLl9xdWV1ZS5wdXNoKHApO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJzaWduYWxcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gc2lnbmFsKCkge1xuXHRcdFx0dmFyIHAgPSB0aGlzLl9xdWV1ZS5wb3AoKTtcblx0XHRcdGlmIChwKSB7XG5cdFx0XHRcdFByb21pc2UucmVzb2x2ZShwKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwicXVldWVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gcXVldWUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fcXVldWUubGVuZ3RoO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBDb25kaXRpb247XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENvbmRpdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbmRpdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);