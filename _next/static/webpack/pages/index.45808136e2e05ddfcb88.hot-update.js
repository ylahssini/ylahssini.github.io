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



var Skills = function Skills() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
    className: "pt-12",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
      className: "text-sm text-gray-900 font-hairline uppercase",
      children: "Skills"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "text-lg text-justify p-0",
      dangerouslySetInnerHTML: {
        __html: _src_data_index_yml__WEBPACK_IMPORTED_MODULE_1___default.a.skills.description
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "flex list-none",
      children: _src_data_index_yml__WEBPACK_IMPORTED_MODULE_1___default.a.skills.categories.map(function (category) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: category.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {
            className: "list-none",
            children: category.list.map(function (item) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: item
              }, item, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, _this)]
        }, category.name, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29udGVudC9za2lsbHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNraWxscyIsIl9faHRtbCIsImRhdGEiLCJza2lsbHMiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3JpZXMiLCJtYXAiLCJjYXRlZ29yeSIsIm5hbWUiLCJsaXN0IiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCLHNCQUNJO0FBQVMsYUFBUyxFQUFDLE9BQW5CO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUMsK0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQ0ksZUFBUyxFQUFDLDBCQURkO0FBRUksNkJBQXVCLEVBQUU7QUFBRUMsY0FBTSxFQUFFQywwREFBSSxDQUFDQyxNQUFMLENBQVlDO0FBQXRCO0FBRjdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQU9JO0FBQUksZUFBUyxFQUFDLGdCQUFkO0FBQUEsZ0JBQ0tGLDBEQUFJLENBQUNDLE1BQUwsQ0FBWUUsVUFBWixDQUF1QkMsR0FBdkIsQ0FBMkIsVUFBQ0MsUUFBRDtBQUFBLDRCQUN4QjtBQUFBLGtDQUNJO0FBQUEsc0JBQUtBLFFBQVEsQ0FBQ0M7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBR0k7QUFBSSxxQkFBUyxFQUFDLFdBQWQ7QUFBQSxzQkFDS0QsUUFBUSxDQUFDRSxJQUFULENBQWNILEdBQWQsQ0FBa0IsVUFBQ0ksSUFBRDtBQUFBLGtDQUNmO0FBQUEsMEJBQWdCQTtBQUFoQixpQkFBU0EsSUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURlO0FBQUEsYUFBbEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKO0FBQUEsV0FBVUgsUUFBUSxDQUFDQyxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUR3QjtBQUFBLE9BQTNCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdUJILENBeEJEOztLQUFNUixNO0FBMEJTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NTgwODEzNmUyZTA1ZGRmY2I4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRhdGEgZnJvbSAnQHNyYy9kYXRhL2luZGV4LnltbCc7XG5cbmNvbnN0IFNraWxscyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJwdC0xMlwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMCBmb250LWhhaXJsaW5lIHVwcGVyY2FzZVwiPlNraWxsczwvaDQ+XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1qdXN0aWZ5IHAtMFwiXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkYXRhLnNraWxscy5kZXNjcmlwdGlvbiB9fVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggbGlzdC1ub25lXCI+XG4gICAgICAgICAgICAgICAge2RhdGEuc2tpbGxzLmNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y2F0ZWdvcnkubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2NhdGVnb3J5Lm5hbWV9PC9oNT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImxpc3Qtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5saXN0Lm1hcCgoaXRlbTogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW19PntpdGVtfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNraWxscztcbiJdLCJzb3VyY2VSb290IjoiIn0=