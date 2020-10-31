webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/content/skills/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/content/skills/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_data_index_yml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/data/index.yml */ "./src/data/index.yml");
/* harmony import */ var _src_data_index_yml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_data_index_yml__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\Youssef\\Documents\\ylahssini\\src\\components\\content\\skills\\index.tsx",
    _this = undefined;


;

var Skills = function Skills() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
    className: "pt-12",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
      className: "text-sm text-blue-400 font-hairline uppercase",
      children: "Skills"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "text-base text-justify pb-4",
      dangerouslySetInnerHTML: {
        __html: _src_data_index_yml__WEBPACK_IMPORTED_MODULE_1___default.a.skills.description
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "flex list-none",
      children: _src_data_index_yml__WEBPACK_IMPORTED_MODULE_1___default.a.skills.categories.map(function (category) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-1/".concat(_src_data_index_yml__WEBPACK_IMPORTED_MODULE_1___default.a.skills.categories.length),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "text-xs text-blue-900 font-hairline uppercase",
            children: category.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {
            className: "list-disc list-inside",
            children: category.list.map(function (item) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "text-sm",
                children: item
              }, item, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, _this)]
        }, category.name, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, _this);
};

_c = Skills;
/* harmony default export */ __webpack_exports__["default"] = (Skills);

var _c;

$RefreshReg$(_c, "Skills");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29udGVudC9za2lsbHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNraWxscyIsIl9faHRtbCIsImRhdGEiLCJza2lsbHMiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3JpZXMiLCJtYXAiLCJjYXRlZ29yeSIsImxlbmd0aCIsIm5hbWUiLCJsaXN0IiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUtDOztBQUVELElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakIsc0JBQ0k7QUFBUyxhQUFTLEVBQUMsT0FBbkI7QUFBQSw0QkFDSTtBQUFJLGVBQVMsRUFBQywrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFDSSxlQUFTLEVBQUMsNkJBRGQ7QUFFSSw2QkFBdUIsRUFBRTtBQUFFQyxjQUFNLEVBQUVDLDBEQUFJLENBQUNDLE1BQUwsQ0FBWUM7QUFBdEI7QUFGN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBT0k7QUFBSSxlQUFTLEVBQUMsZ0JBQWQ7QUFBQSxnQkFDS0YsMERBQUksQ0FBQ0MsTUFBTCxDQUFZRSxVQUFaLENBQXVCQyxHQUF2QixDQUEyQixVQUFDQyxRQUFEO0FBQUEsNEJBQ3hCO0FBQXlCLG1CQUFTLGdCQUFTTCwwREFBSSxDQUFDQyxNQUFMLENBQVlFLFVBQVosQ0FBdUJHLE1BQWhDLENBQWxDO0FBQUEsa0NBQ0k7QUFBSSxxQkFBUyxFQUFDLCtDQUFkO0FBQUEsc0JBQStERCxRQUFRLENBQUNFO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFHSTtBQUFJLHFCQUFTLEVBQUMsdUJBQWQ7QUFBQSxzQkFDS0YsUUFBUSxDQUFDRyxJQUFULENBQWNKLEdBQWQsQ0FBa0IsVUFBQ0ssSUFBRDtBQUFBLGtDQUNmO0FBQWUseUJBQVMsRUFBQyxTQUF6QjtBQUFBLDBCQUFvQ0E7QUFBcEMsaUJBQVNBLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEZTtBQUFBLGFBQWxCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISjtBQUFBLFdBQVVKLFFBQVEsQ0FBQ0UsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEd0I7QUFBQSxPQUEzQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVCSCxDQXhCRDs7S0FBTVQsTTtBQTBCU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmZkOWIzMTRmNjhhZGU1MjhjM2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXRhIGZyb20gJ0BzcmMvZGF0YS9pbmRleC55bWwnO1xuXG5pbnRlcmZhY2UgQ2F0ZWdvcnkge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBsaXN0OiBzdHJpbmdbXTtcbn07XG5cbmNvbnN0IFNraWxscyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJwdC0xMlwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ibHVlLTQwMCBmb250LWhhaXJsaW5lIHVwcGVyY2FzZVwiPlNraWxsczwvaDQ+XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWp1c3RpZnkgcGItNFwiXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkYXRhLnNraWxscy5kZXNjcmlwdGlvbiB9fVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggbGlzdC1ub25lXCI+XG4gICAgICAgICAgICAgICAge2RhdGEuc2tpbGxzLmNhdGVnb3JpZXMubWFwKChjYXRlZ29yeTogQ2F0ZWdvcnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NhdGVnb3J5Lm5hbWV9IGNsYXNzTmFtZT17YHctMS8ke2RhdGEuc2tpbGxzLmNhdGVnb3JpZXMubGVuZ3RofWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ibHVlLTkwMCBmb250LWhhaXJsaW5lIHVwcGVyY2FzZVwiPntjYXRlZ29yeS5uYW1lfTwvaDU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgbGlzdC1pbnNpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubGlzdC5tYXAoKGl0ZW06IHN0cmluZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtfSBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+e2l0ZW19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==