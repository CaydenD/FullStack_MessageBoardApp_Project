module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/generated/graphql.tsx":
/*!***********************************!*\
  !*** ./src/generated/graphql.tsx ***!
  \***********************************/
/*! exports provided: RegularUserFragmentDoc, LoginDocument, useLoginMutation, RegisterDocument, useRegisterMutation, MeDocument, useMeQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RegularUserFragmentDoc\", function() { return RegularUserFragmentDoc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginDocument\", function() { return LoginDocument; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useLoginMutation\", function() { return useLoginMutation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RegisterDocument\", function() { return RegisterDocument; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useRegisterMutation\", function() { return useRegisterMutation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MeDocument\", function() { return MeDocument; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useMeQuery\", function() { return useMeQuery; });\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urql */ \"urql\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst RegularUserFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n    fragment RegularUser on User {\n  id\n  username\n}\n    `;\nconst LoginDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n    mutation Login($options: UsernamePasswordInput!) {\n  login(options: $options) {\n    errors {\n      field\n      message\n    }\n    user {\n      ...RegularUser\n    }\n  }\n}\n    ${RegularUserFragmentDoc}`;\nfunction useLoginMutation() {\n  return urql__WEBPACK_IMPORTED_MODULE_1__[\"useMutation\"](LoginDocument);\n}\n;\nconst RegisterDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n    mutation Register($username: String!, $password: String!) {\n  register(options: {username: $username, password: $password}) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      createdAt\n      updatedAt\n      username\n    }\n  }\n}\n    `;\nfunction useRegisterMutation() {\n  return urql__WEBPACK_IMPORTED_MODULE_1__[\"useMutation\"](RegisterDocument);\n}\n;\nconst MeDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n    query Me {\n  me {\n    id\n    username\n  }\n}\n    `;\nfunction useMeQuery(options = {}) {\n  return urql__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"](_objectSpread({\n    query: MeDocument\n  }, options));\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2VuZXJhdGVkL2dyYXBocWwudHN4P2E0N2MiXSwibmFtZXMiOlsiUmVndWxhclVzZXJGcmFnbWVudERvYyIsImdxbCIsIkxvZ2luRG9jdW1lbnQiLCJ1c2VMb2dpbk11dGF0aW9uIiwiVXJxbCIsIlJlZ2lzdGVyRG9jdW1lbnQiLCJ1c2VSZWdpc3Rlck11dGF0aW9uIiwiTWVEb2N1bWVudCIsInVzZU1lUXVlcnkiLCJvcHRpb25zIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUF1Sk8sTUFBTUEsc0JBQXNCLEdBQUdDLGtEQUFJO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FMTztBQU1BLE1BQU1DLGFBQWEsR0FBR0Qsa0RBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1ELHNCQUF1QixFQVp0QjtBQWNBLFNBQVNHLGdCQUFULEdBQTRCO0FBQ2pDLFNBQU9DLGdEQUFBLENBQXdERixhQUF4RCxDQUFQO0FBQ0Q7QUFBQTtBQUNNLE1BQU1HLGdCQUFnQixHQUFHSixrREFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FmTztBQWlCQSxTQUFTSyxtQkFBVCxHQUErQjtBQUNwQyxTQUFPRixnREFBQSxDQUE4REMsZ0JBQTlELENBQVA7QUFDRDtBQUFBO0FBQ00sTUFBTUUsVUFBVSxHQUFHTixrREFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVBPO0FBU0EsU0FBU08sVUFBVCxDQUFvQkMsT0FBMkQsR0FBRyxFQUFsRixFQUFzRjtBQUMzRixTQUFPTCw2Q0FBQTtBQUF5Qk0sU0FBSyxFQUFFSDtBQUFoQyxLQUErQ0UsT0FBL0MsRUFBUDtBQUNEO0FBQUEiLCJmaWxlIjoiLi9zcmMvZ2VuZXJhdGVkL2dyYXBocWwudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgKiBhcyBVcnFsIGZyb20gJ3VycWwnO1xuZXhwb3J0IHR5cGUgTWF5YmU8VD4gPSBUIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEV4YWN0PFQgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4gPSB7IFtLIGluIGtleW9mIFRdOiBUW0tdIH07XG5leHBvcnQgdHlwZSBNYWtlT3B0aW9uYWw8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gT21pdDxULCBLPiAmIHsgW1N1YktleSBpbiBLXT86IE1heWJlPFRbU3ViS2V5XT4gfTtcbmV4cG9ydCB0eXBlIE1ha2VNYXliZTxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBPbWl0PFQsIEs+ICYgeyBbU3ViS2V5IGluIEtdOiBNYXliZTxUW1N1YktleV0+IH07XG5leHBvcnQgdHlwZSBPbWl0PFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IFBpY2s8VCwgRXhjbHVkZTxrZXlvZiBULCBLPj47XG4vKiogQWxsIGJ1aWx0LWluIGFuZCBjdXN0b20gc2NhbGFycywgbWFwcGVkIHRvIHRoZWlyIGFjdHVhbCB2YWx1ZXMgKi9cbmV4cG9ydCB0eXBlIFNjYWxhcnMgPSB7XG4gIElEOiBzdHJpbmc7XG4gIFN0cmluZzogc3RyaW5nO1xuICBCb29sZWFuOiBib29sZWFuO1xuICBJbnQ6IG51bWJlcjtcbiAgRmxvYXQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFF1ZXJ5ID0ge1xuICBfX3R5cGVuYW1lPzogJ1F1ZXJ5JztcbiAgaGVsbG86IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwb3N0czogQXJyYXk8UG9zdD47XG4gIHBvc3Q/OiBNYXliZTxQb3N0PjtcbiAgbWU/OiBNYXliZTxVc2VyPjtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlQb3N0QXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5leHBvcnQgdHlwZSBQb3N0ID0ge1xuICBfX3R5cGVuYW1lPzogJ1Bvc3QnO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGl0bGU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlciA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyJztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uID0ge1xuICBfX3R5cGVuYW1lPzogJ011dGF0aW9uJztcbiAgY3JlYXRlUG9zdDogUG9zdDtcbiAgdXBkYXRlUG9zdD86IE1heWJlPFBvc3Q+O1xuICBkZWxldGVQb3N0OiBTY2FsYXJzWydCb29sZWFuJ107XG4gIHJlZ2lzdGVyOiBVc2VyUmVzcG9uc2U7XG4gIGxvZ2luOiBVc2VyUmVzcG9uc2U7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQ3JlYXRlUG9zdEFyZ3MgPSB7XG4gIHRpdGxlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25VcGRhdGVQb3N0QXJncyA9IHtcbiAgdGl0bGU/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkRlbGV0ZVBvc3RBcmdzID0ge1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25SZWdpc3RlckFyZ3MgPSB7XG4gIG9wdGlvbnM6IFVzZXJuYW1lUGFzc3dvcmRJbnB1dDtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25Mb2dpbkFyZ3MgPSB7XG4gIG9wdGlvbnM6IFVzZXJuYW1lUGFzc3dvcmRJbnB1dDtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJSZXNwb25zZSA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnO1xuICBlcnJvcnM/OiBNYXliZTxBcnJheTxGaWVsZEVycm9yPj47XG4gIHVzZXI/OiBNYXliZTxVc2VyPjtcbn07XG5cbmV4cG9ydCB0eXBlIEZpZWxkRXJyb3IgPSB7XG4gIF9fdHlwZW5hbWU/OiAnRmllbGRFcnJvcic7XG4gIGZpZWxkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbWVzc2FnZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBVc2VybmFtZVBhc3N3b3JkSW5wdXQgPSB7XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgUmVndWxhclVzZXJGcmFnbWVudCA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgJiBQaWNrPFVzZXIsICdpZCcgfCAndXNlcm5hbWUnPlxuKTtcblxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgb3B0aW9uczogVXNlcm5hbWVQYXNzd29yZElucHV0O1xufT47XG5cblxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBsb2dpbjogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgICAmIHsgZXJyb3JzPzogTWF5YmU8QXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InIH1cbiAgICAgICYgUGljazxGaWVsZEVycm9yLCAnZmllbGQnIHwgJ21lc3NhZ2UnPlxuICAgICk+PiwgdXNlcj86IE1heWJlPChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgICAmIFJlZ3VsYXJVc2VyRnJhZ21lbnRcbiAgICApPiB9XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgdXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IHJlZ2lzdGVyOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScgfVxuICAgICYgeyBlcnJvcnM/OiBNYXliZTxBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnRmllbGRFcnJvcicgfVxuICAgICAgJiBQaWNrPEZpZWxkRXJyb3IsICdmaWVsZCcgfCAnbWVzc2FnZSc+XG4gICAgKT4+LCB1c2VyPzogTWF5YmU8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAgICYgUGljazxVc2VyLCAnaWQnIHwgJ2NyZWF0ZWRBdCcgfCAndXBkYXRlZEF0JyB8ICd1c2VybmFtZSc+XG4gICAgKT4gfVxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIE1lUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBNZVF1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IG1lPzogTWF5YmU8KFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgJiBQaWNrPFVzZXIsICdpZCcgfCAndXNlcm5hbWUnPlxuICApPiB9XG4pO1xuXG5leHBvcnQgY29uc3QgUmVndWxhclVzZXJGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBSZWd1bGFyVXNlciBvbiBVc2VyIHtcbiAgaWRcbiAgdXNlcm5hbWVcbn1cbiAgICBgO1xuZXhwb3J0IGNvbnN0IExvZ2luRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gTG9naW4oJG9wdGlvbnM6IFVzZXJuYW1lUGFzc3dvcmRJbnB1dCEpIHtcbiAgbG9naW4ob3B0aW9uczogJG9wdGlvbnMpIHtcbiAgICBlcnJvcnMge1xuICAgICAgZmllbGRcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gICAgdXNlciB7XG4gICAgICAuLi5SZWd1bGFyVXNlclxuICAgIH1cbiAgfVxufVxuICAgICR7UmVndWxhclVzZXJGcmFnbWVudERvY31gO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naW5NdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248TG9naW5NdXRhdGlvbiwgTG9naW5NdXRhdGlvblZhcmlhYmxlcz4oTG9naW5Eb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IFJlZ2lzdGVyRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gUmVnaXN0ZXIoJHVzZXJuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgcmVnaXN0ZXIob3B0aW9uczoge3VzZXJuYW1lOiAkdXNlcm5hbWUsIHBhc3N3b3JkOiAkcGFzc3dvcmR9KSB7XG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgIHVzZXIge1xuICAgICAgaWRcbiAgICAgIGNyZWF0ZWRBdFxuICAgICAgdXBkYXRlZEF0XG4gICAgICB1c2VybmFtZVxuICAgIH1cbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWdpc3Rlck11dGF0aW9uKCkge1xuICByZXR1cm4gVXJxbC51c2VNdXRhdGlvbjxSZWdpc3Rlck11dGF0aW9uLCBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzPihSZWdpc3RlckRvY3VtZW50KTtcbn07XG5leHBvcnQgY29uc3QgTWVEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBNZSB7XG4gIG1lIHtcbiAgICBpZFxuICAgIHVzZXJuYW1lXG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVRdWVyeShvcHRpb25zOiBPbWl0PFVycWwuVXNlUXVlcnlBcmdzPE1lUXVlcnlWYXJpYWJsZXM+LCAncXVlcnknPiA9IHt9KSB7XG4gIHJldHVybiBVcnFsLnVzZVF1ZXJ5PE1lUXVlcnk+KHsgcXVlcnk6IE1lRG9jdW1lbnQsIC4uLm9wdGlvbnMgfSk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/generated/graphql.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @urql/exchange-graphcache */ \"@urql/exchange-graphcache\");\n/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! urql */ \"urql\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme */ \"./src/theme.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n\nvar _jsxFileName = \"/Users/caydendunn/Desktop/lireddit/web/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nfunction betterUpdateQuery(cache, qi, result, fn) {\n  return cache.updateQuery(qi, data => fn(result, data));\n}\n\nconst client = Object(urql__WEBPACK_IMPORTED_MODULE_4__[\"createClient\"])({\n  url: \"http://localhost:4000/graphql\",\n  fetchOptions: {\n    credentials: \"include\"\n  },\n  exchanges: [urql__WEBPACK_IMPORTED_MODULE_4__[\"dedupExchange\"], Object(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_2__[\"cacheExchange\"])({\n    updates: {\n      Mutation: {\n        login: (_result, args, cache, info) => {\n          betterUpdateQuery(cache, {\n            query: _generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"MeDocument\"]\n          }, _result, (result, query) => {\n            if (result.login.errors) {\n              return query;\n            } else {\n              return {\n                me: result.login.user\n              };\n            }\n          });\n        },\n        register: (_result, args, cache, info) => {\n          betterUpdateQuery(cache, {\n            query: _generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"MeDocument\"]\n          }, _result, (result, query) => {\n            if (result.register.errors) {\n              return query;\n            } else {\n              return {\n                me: result.register.user\n              };\n            }\n          });\n        }\n      }\n    }\n  }), urql__WEBPACK_IMPORTED_MODULE_4__[\"fetchExchange\"]]\n});\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(urql__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n    value: client,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ChakraProvider\"], {\n      resetCSS: true,\n      theme: _theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ColorModeProvider\"], {\n        options: {\n          useSystemColorMode: true\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJiZXR0ZXJVcGRhdGVRdWVyeSIsImNhY2hlIiwicWkiLCJyZXN1bHQiLCJmbiIsInVwZGF0ZVF1ZXJ5IiwiZGF0YSIsImNsaWVudCIsImNyZWF0ZUNsaWVudCIsInVybCIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiZXhjaGFuZ2VzIiwiZGVkdXBFeGNoYW5nZSIsImNhY2hlRXhjaGFuZ2UiLCJ1cGRhdGVzIiwiTXV0YXRpb24iLCJsb2dpbiIsIl9yZXN1bHQiLCJhcmdzIiwiaW5mbyIsInF1ZXJ5IiwiTWVEb2N1bWVudCIsImVycm9ycyIsIm1lIiwidXNlciIsInJlZ2lzdGVyIiwiZmV0Y2hFeGNoYW5nZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsU0FBU0EsaUJBQVQsQ0FDRUMsS0FERixFQUVFQyxFQUZGLEVBR0VDLE1BSEYsRUFJRUMsRUFKRixFQUtFO0FBQ0EsU0FBT0gsS0FBSyxDQUFDSSxXQUFOLENBQWtCSCxFQUFsQixFQUF1QkksSUFBRCxJQUFVRixFQUFFLENBQUNELE1BQUQsRUFBU0csSUFBVCxDQUFsQyxDQUFQO0FBQ0Q7O0FBRUQsTUFBTUMsTUFBTSxHQUFHQyx5REFBWSxDQUFDO0FBQzFCQyxLQUFHLEVBQUUsK0JBRHFCO0FBRTFCQyxjQUFZLEVBQUU7QUFDWkMsZUFBVyxFQUFFO0FBREQsR0FGWTtBQUsxQkMsV0FBUyxFQUFFLENBQ1RDLGtEQURTLEVBRVRDLCtFQUFhLENBQUM7QUFDWkMsV0FBTyxFQUFFO0FBQ1BDLGNBQVEsRUFBRTtBQUNSQyxhQUFLLEVBQUUsQ0FBQ0MsT0FBRCxFQUFVQyxJQUFWLEVBQWdCbEIsS0FBaEIsRUFBdUJtQixJQUF2QixLQUFnQztBQUNyQ3BCLDJCQUFpQixDQUNmQyxLQURlLEVBRWY7QUFBRW9CLGlCQUFLLEVBQUVDLDZEQUFVQTtBQUFuQixXQUZlLEVBR2ZKLE9BSGUsRUFJZixDQUFDZixNQUFELEVBQVNrQixLQUFULEtBQW1CO0FBQ2pCLGdCQUFJbEIsTUFBTSxDQUFDYyxLQUFQLENBQWFNLE1BQWpCLEVBQXlCO0FBQ3ZCLHFCQUFPRixLQUFQO0FBQ0QsYUFGRCxNQUVPO0FBQ0wscUJBQU87QUFDTEcsa0JBQUUsRUFBRXJCLE1BQU0sQ0FBQ2MsS0FBUCxDQUFhUTtBQURaLGVBQVA7QUFHRDtBQUNGLFdBWmMsQ0FBakI7QUFjRCxTQWhCTztBQWtCUkMsZ0JBQVEsRUFBRSxDQUFDUixPQUFELEVBQVVDLElBQVYsRUFBZ0JsQixLQUFoQixFQUF1Qm1CLElBQXZCLEtBQWdDO0FBQ3hDcEIsMkJBQWlCLENBQ2ZDLEtBRGUsRUFFZjtBQUFFb0IsaUJBQUssRUFBRUMsNkRBQVVBO0FBQW5CLFdBRmUsRUFHZkosT0FIZSxFQUlmLENBQUNmLE1BQUQsRUFBU2tCLEtBQVQsS0FBbUI7QUFDakIsZ0JBQUlsQixNQUFNLENBQUN1QixRQUFQLENBQWdCSCxNQUFwQixFQUE0QjtBQUMxQixxQkFBT0YsS0FBUDtBQUNELGFBRkQsTUFFTztBQUNMLHFCQUFPO0FBQ0xHLGtCQUFFLEVBQUVyQixNQUFNLENBQUN1QixRQUFQLENBQWdCRDtBQURmLGVBQVA7QUFHRDtBQUNGLFdBWmMsQ0FBakI7QUFjRDtBQWpDTztBQURIO0FBREcsR0FBRCxDQUZKLEVBeUNURSxrREF6Q1M7QUFMZSxDQUFELENBQTNCOztBQWtEQSxTQUFTQyxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBOEM7QUFDNUMsc0JBQ0UscUVBQUMsNkNBQUQ7QUFBVSxTQUFLLEVBQUV2QixNQUFqQjtBQUFBLDJCQUNFLHFFQUFDLCtEQUFEO0FBQWdCLGNBQVEsTUFBeEI7QUFBeUIsV0FBSyxFQUFFd0IsOENBQWhDO0FBQUEsNkJBQ0UscUVBQUMsa0VBQUQ7QUFDRSxlQUFPLEVBQUU7QUFDUEMsNEJBQWtCLEVBQUU7QUFEYixTQURYO0FBQUEsK0JBS0UscUVBQUMsU0FBRCxvQkFBZUYsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDs7QUFFY0Ysb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFrcmFQcm92aWRlciwgQ29sb3JNb2RlUHJvdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgY2FjaGVFeGNoYW5nZSwgUXVlcnlJbnB1dCB9IGZyb20gXCJAdXJxbC9leGNoYW5nZS1ncmFwaGNhY2hlXCI7XG5pbXBvcnQgeyBhc3RGcm9tVmFsdWUgfSBmcm9tIFwiZ3JhcGhxbFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIsIGNyZWF0ZUNsaWVudCwgZmV0Y2hFeGNoYW5nZSwgZGVkdXBFeGNoYW5nZSB9IGZyb20gXCJ1cnFsXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3RoZW1lXCI7XG5pbXBvcnQge1xuICBMb2dpbk11dGF0aW9uLFxuICBNZURvY3VtZW50LFxuICBNZVF1ZXJ5LFxuICBSZWdpc3Rlck11dGF0aW9uLFxufSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcblxuZnVuY3Rpb24gYmV0dGVyVXBkYXRlUXVlcnk8UmVzdWx0LCBRdWVyeT4oXG4gIGNhY2hlOiBDYWNoZSxcbiAgcWk6IFF1ZXJ5SW5wdXQsXG4gIHJlc3VsdDogYW55LFxuICBmbjogKHI6IFJlc3VsdCwgcTogUXVlcnkpID0+IFF1ZXJ5XG4pIHtcbiAgcmV0dXJuIGNhY2hlLnVwZGF0ZVF1ZXJ5KHFpLCAoZGF0YSkgPT4gZm4ocmVzdWx0LCBkYXRhIGFzIGFueSkgYXMgYW55KTtcbn1cblxuY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsXCIsXG4gIGZldGNoT3B0aW9uczoge1xuICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbiAgfSxcbiAgZXhjaGFuZ2VzOiBbXG4gICAgZGVkdXBFeGNoYW5nZSxcbiAgICBjYWNoZUV4Y2hhbmdlKHtcbiAgICAgIHVwZGF0ZXM6IHtcbiAgICAgICAgTXV0YXRpb246IHtcbiAgICAgICAgICBsb2dpbjogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XG4gICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dpbk11dGF0aW9uLCBNZVF1ZXJ5PihcbiAgICAgICAgICAgICAgY2FjaGUsXG4gICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcbiAgICAgICAgICAgICAgX3Jlc3VsdCxcbiAgICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmxvZ2luLmVycm9ycykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBtZTogcmVzdWx0LmxvZ2luLnVzZXIsXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgcmVnaXN0ZXI6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8UmVnaXN0ZXJNdXRhdGlvbiwgTWVRdWVyeT4oXG4gICAgICAgICAgICAgIGNhY2hlLFxuICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXG4gICAgICAgICAgICAgIF9yZXN1bHQsXG4gICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZWdpc3Rlci5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbWU6IHJlc3VsdC5yZWdpc3Rlci51c2VyLFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgZmV0Y2hFeGNoYW5nZSxcbiAgXSxcbn0pO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciB2YWx1ZT17Y2xpZW50fT5cbiAgICAgIDxDaGFrcmFQcm92aWRlciByZXNldENTUyB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Q29sb3JNb2RlUHJvdmlkZXJcbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICB1c2VTeXN0ZW1Db2xvck1vZGU6IHRydWUsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9Db2xvck1vZGVQcm92aWRlcj5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/theme.tsx":
/*!***********************!*\
  !*** ./src/theme.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"@chakra-ui/theme-tools\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/caydendunn/Desktop/lireddit/web/src/theme.tsx\";\n\n\nconst fonts = {\n  mono: `'Menlo', monospace`\n};\nconst breakpoints = Object(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2__[\"createBreakpoints\"])({\n  sm: '40em',\n  md: '52em',\n  lg: '64em',\n  xl: '80em'\n});\nconst theme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"extendTheme\"])({\n  colors: {\n    black: '#16161D'\n  },\n  fonts,\n  breakpoints,\n  icons: {\n    logo: {\n      path: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n        width: \"3000\",\n        height: \"3163\",\n        viewBox: \"0 0 3000 3163\",\n        fill: \"none\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"rect\", {\n          width: \"3000\",\n          height: \"3162.95\",\n          fill: \"none\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n          d: \"M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z\",\n          fill: \"currentColor\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, undefined),\n      viewBox: '0 0 3000 3163'\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUudHN4P2NhNzYiXSwibmFtZXMiOlsiZm9udHMiLCJtb25vIiwiYnJlYWtwb2ludHMiLCJjcmVhdGVCcmVha3BvaW50cyIsInNtIiwibWQiLCJsZyIsInhsIiwidGhlbWUiLCJleHRlbmRUaGVtZSIsImNvbG9ycyIsImJsYWNrIiwiaWNvbnMiLCJsb2dvIiwicGF0aCIsInZpZXdCb3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxLQUFLLEdBQUc7QUFBRUMsTUFBSSxFQUFHO0FBQVQsQ0FBZDtBQUVBLE1BQU1DLFdBQVcsR0FBR0MsZ0ZBQWlCLENBQUM7QUFDcENDLElBQUUsRUFBRSxNQURnQztBQUVwQ0MsSUFBRSxFQUFFLE1BRmdDO0FBR3BDQyxJQUFFLEVBQUUsTUFIZ0M7QUFJcENDLElBQUUsRUFBRTtBQUpnQyxDQUFELENBQXJDO0FBT0EsTUFBTUMsS0FBSyxHQUFHQyxvRUFBVyxDQUFDO0FBQ3hCQyxRQUFNLEVBQUU7QUFDTkMsU0FBSyxFQUFFO0FBREQsR0FEZ0I7QUFJeEJYLE9BSndCO0FBS3hCRSxhQUx3QjtBQU14QlUsT0FBSyxFQUFFO0FBQ0xDLFFBQUksRUFBRTtBQUNKQyxVQUFJLGVBQ0Y7QUFDRSxhQUFLLEVBQUMsTUFEUjtBQUVFLGNBQU0sRUFBQyxNQUZUO0FBR0UsZUFBTyxFQUFDLGVBSFY7QUFJRSxZQUFJLEVBQUMsTUFKUDtBQUtFLGFBQUssRUFBQyw0QkFMUjtBQUFBLGdDQU9FO0FBQU0sZUFBSyxFQUFDLE1BQVo7QUFBbUIsZ0JBQU0sRUFBQyxTQUExQjtBQUFvQyxjQUFJLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixlQVFFO0FBQ0UsV0FBQyxFQUFDLGlJQURKO0FBRUUsY0FBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkU7QUFnQkpDLGFBQU8sRUFBRTtBQWhCTDtBQUREO0FBTmlCLENBQUQsQ0FBekI7QUE0QmVQLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3RoZW1lLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IGNyZWF0ZUJyZWFrcG9pbnRzIH0gZnJvbSAnQGNoYWtyYS11aS90aGVtZS10b29scydcblxuY29uc3QgZm9udHMgPSB7IG1vbm86IGAnTWVubG8nLCBtb25vc3BhY2VgIH1cblxuY29uc3QgYnJlYWtwb2ludHMgPSBjcmVhdGVCcmVha3BvaW50cyh7XG4gIHNtOiAnNDBlbScsXG4gIG1kOiAnNTJlbScsXG4gIGxnOiAnNjRlbScsXG4gIHhsOiAnODBlbScsXG59KVxuXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcbiAgY29sb3JzOiB7XG4gICAgYmxhY2s6ICcjMTYxNjFEJyxcbiAgfSxcbiAgZm9udHMsXG4gIGJyZWFrcG9pbnRzLFxuICBpY29uczoge1xuICAgIGxvZ286IHtcbiAgICAgIHBhdGg6IChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHdpZHRoPVwiMzAwMFwiXG4gICAgICAgICAgaGVpZ2h0PVwiMzE2M1wiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAzMDAwIDMxNjNcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMzAwMFwiIGhlaWdodD1cIjMxNjIuOTVcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNMTQ3MC44OSAxNDQ4LjgxTDIxNzAgMjQ4OC4xOUg4MjBWNzA2LjM5MkgyMTcwTDE0NzAuODkgMTQ0OC44MVpNMTQwOC4yMSAxNTE1LjM3TDkwOS4xOTYgMjA0NS4zVjIzOTMuNDZIMTk5OC44NEwxNDA4LjIxIDE1MTUuMzdaXCJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgKSxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMzAwMCAzMTYzJyxcbiAgICB9LFxuICB9LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/theme.tsx\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCI/M2I2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAY2hha3JhLXVpL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/react\n");

/***/ }),

/***/ "@chakra-ui/theme-tools":
/*!*****************************************!*\
  !*** external "@chakra-ui/theme-tools" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/theme-tools\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3RoZW1lLXRvb2xzXCI/ZTYxNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAY2hha3JhLXVpL3RoZW1lLXRvb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS90aGVtZS10b29sc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/theme-tools\n");

/***/ }),

/***/ "@urql/exchange-graphcache":
/*!********************************************!*\
  !*** external "@urql/exchange-graphcache" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@urql/exchange-graphcache\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAdXJxbC9leGNoYW5nZS1ncmFwaGNhY2hlXCI/NGRmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAdXJxbC9leGNoYW5nZS1ncmFwaGNhY2hlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@urql/exchange-graphcache\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "urql":
/*!***********************!*\
  !*** external "urql" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"urql\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cnFsXCI/YTY2NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ1cnFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJxbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///urql\n");

/***/ })

/******/ });