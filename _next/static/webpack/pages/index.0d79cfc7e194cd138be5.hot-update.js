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
      className: "text-sm text-gray-900 font-hairline uppercase",
      children: "Skills"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "text-lg text-justify p-0",
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
            children: category.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {
            className: "list-none",
            children: category.list.map(function (item) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29udGVudC9za2lsbHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNraWxscyIsIl9faHRtbCIsImRhdGEiLCJza2lsbHMiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3JpZXMiLCJtYXAiLCJjYXRlZ29yeSIsImxlbmd0aCIsIm5hbWUiLCJsaXN0IiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUtDOztBQUVELElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakIsc0JBQ0k7QUFBUyxhQUFTLEVBQUMsT0FBbkI7QUFBQSw0QkFDSTtBQUFJLGVBQVMsRUFBQywrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFDSSxlQUFTLEVBQUMsMEJBRGQ7QUFFSSw2QkFBdUIsRUFBRTtBQUFFQyxjQUFNLEVBQUVDLDBEQUFJLENBQUNDLE1BQUwsQ0FBWUM7QUFBdEI7QUFGN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBT0k7QUFBSSxlQUFTLEVBQUMsZ0JBQWQ7QUFBQSxnQkFDS0YsMERBQUksQ0FBQ0MsTUFBTCxDQUFZRSxVQUFaLENBQXVCQyxHQUF2QixDQUEyQixVQUFDQyxRQUFEO0FBQUEsNEJBQ3hCO0FBQXlCLG1CQUFTLGdCQUFTTCwwREFBSSxDQUFDQyxNQUFMLENBQVlFLFVBQVosQ0FBdUJHLE1BQWhDLENBQWxDO0FBQUEsa0NBQ0k7QUFBQSxzQkFBS0QsUUFBUSxDQUFDRTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFHSTtBQUFJLHFCQUFTLEVBQUMsV0FBZDtBQUFBLHNCQUNLRixRQUFRLENBQUNHLElBQVQsQ0FBY0osR0FBZCxDQUFrQixVQUFDSyxJQUFEO0FBQUEsa0NBQ2Y7QUFBQSwwQkFBZ0JBO0FBQWhCLGlCQUFTQSxJQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGU7QUFBQSxhQUFsQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEo7QUFBQSxXQUFVSixRQUFRLENBQUNFLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHdCO0FBQUEsT0FBM0I7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF1QkgsQ0F4QkQ7O0tBQU1ULE07QUEwQlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBkNzljZmM3ZTE5NGNkMTM4YmU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF0YSBmcm9tICdAc3JjL2RhdGEvaW5kZXgueW1sJztcblxuaW50ZXJmYWNlIENhdGVnb3J5IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbGlzdDogc3RyaW5nW107XG59O1xuXG5jb25zdCBTa2lsbHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicHQtMTJcIj5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS05MDAgZm9udC1oYWlybGluZSB1cHBlcmNhc2VcIj5Ta2lsbHM8L2g0PlxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtanVzdGlmeSBwLTBcIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGF0YS5za2lsbHMuZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGxpc3Qtbm9uZVwiPlxuICAgICAgICAgICAgICAgIHtkYXRhLnNraWxscy5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnk6IENhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjYXRlZ29yeS5uYW1lfSBjbGFzc05hbWU9e2B3LTEvJHtkYXRhLnNraWxscy5jYXRlZ29yaWVzLmxlbmd0aH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57Y2F0ZWdvcnkubmFtZX08L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwibGlzdC1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5Lmxpc3QubWFwKChpdGVtOiBzdHJpbmcpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbX0+e2l0ZW19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==