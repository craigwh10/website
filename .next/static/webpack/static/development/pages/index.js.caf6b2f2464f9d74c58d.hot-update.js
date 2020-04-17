webpackHotUpdate("static/development/pages/index.js",{

/***/ "./container/gitprojects/gitProjectCalculator.ts":
/*!*******************************************************!*\
  !*** ./container/gitprojects/gitProjectCalculator.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

 // type AxiosResponse = object[] | null;

var useGitProjectCalculator = function useGitProjectCalculator() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      gitLangFreq = _useState[0],
      setGitLangFreq = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://api.github.com/users/Haar/repos").then(function (response) {
      setGitLangFreq(response.data.reduce(function (acc, it) {
        acc[it.language] = acc[it.language] + 1 || 1;
        return acc;
      }, {}));
      setLoading(false);
    })["catch"](function (error) {
      console.log(error);
    });
  }, []);
  return {
    gitLangFreq: gitLangFreq,
    isLoading: isLoading
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useGitProjectCalculator);

/***/ })

})
//# sourceMappingURL=index.js.caf6b2f2464f9d74c58d.hot-update.js.map