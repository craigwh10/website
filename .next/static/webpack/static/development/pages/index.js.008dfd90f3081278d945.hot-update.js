webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProjectGenerator/ProjectGenerator.tsx":
/*!**********************************************************!*\
  !*** ./components/ProjectGenerator/ProjectGenerator.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container_gitprojects_useGitProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../container/gitprojects/useGitProjects */ "./container/gitprojects/useGitProjects.ts");
/* harmony import */ var _GitProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GitProject */ "./components/ProjectGenerator/GitProject.tsx");


var _this = undefined,
    _jsxFileName = "/Users/craigwhite/Desktop/Typescript/Website/components/ProjectGenerator/ProjectGenerator.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 //



var ProjectGenerator = function ProjectGenerator() {
  var _useGitProjects = Object(_container_gitprojects_useGitProjects__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      gitRepos = _useGitProjects.gitRepos,
      isLoading = _useGitProjects.isLoading;

  if (isLoading) {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 12
      }
    }, "Loading");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, gitRepos && gitRepos.data.map(function (item) {
    __jsx(_GitProject__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectGenerator);

/***/ })

})
//# sourceMappingURL=index.js.008dfd90f3081278d945.hot-update.js.map