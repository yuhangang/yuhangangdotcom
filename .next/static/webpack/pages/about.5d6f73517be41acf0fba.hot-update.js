webpackHotUpdate_N_E("pages/about",{

/***/ "./components/aboutContainer/timeLine.tsx":
/*!************************************************!*\
  !*** ./components/aboutContainer/timeLine.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimeLine; });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _timeLine_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeLine.module.scss */ "./components/aboutContainer/timeLine.module.scss");
/* harmony import */ var _timeLine_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_timeLine_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tl_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tl.module.scss */ "./components/aboutContainer/tl.module.scss");
/* harmony import */ var _tl_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tl_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\User\\Documents\\1DEV\\yuhangangdotcom\\components\\aboutContainer\\timeLine.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






function TimeLineItem(data) {
  var detail = data.link ? __jsx("div", {
    className: _timeLine_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.timeLineLink,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 42
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: data.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 79
    }
  }, __jsx("div", {
    className: _tl_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.timeLineLinkFont,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 102
    }
  }, "Explore")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 159
    }
  })) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 175
    }
  }); //let detail :JSX.Element =data.link ?   <div className={tl.timeLineLink}>{data.detail}</div>:<div className={tl.timeLineLink}></div>;

  return __jsx("li", {
    className: _tl_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.timeline_item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _tl_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.timeline_info,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, data.dateTime)), __jsx("div", {
    className: _tl_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.timeline_marker,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _tl_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.timeline_content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: _tl_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.timeline_title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, data.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, data.detail ? data.detail : ""), detail));
} // export default function TimeLine(input:{title:string,items:TimeLineData[]}) {


_c = TimeLineItem;
function TimeLine(_ref) {
  var title = _ref.title,
      items = _ref.items;
  // const timeLine = <Timeline align="left" className={styles.timeLine}>
  //{timeLinesItems.map(timeLineItem)}</Timeline>;
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__["motion"].div, {
    initial: "pageInitial",
    animate: "pageAnimate",
    variants: {
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 1
    }
  }, __jsx("div", {
    className: _timeLine_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.work,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 1
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 1
    }
  }, title), __jsx("ul", {
    className: "".concat(_tl_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.timeline).concat(_timeLine_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.timeline),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 1
    }
  }, items ? items.map(TimeLineItem) : [])));
}
_c2 = TimeLine;

var _c, _c2;

$RefreshReg$(_c, "TimeLineItem");
$RefreshReg$(_c2, "TimeLine");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dENvbnRhaW5lci90aW1lTGluZS50c3giXSwibmFtZXMiOlsiVGltZUxpbmVJdGVtIiwiZGF0YSIsImRldGFpbCIsImxpbmsiLCJzdHlsZXMiLCJ0aW1lTGluZUxpbmsiLCJ0bCIsInRpbWVMaW5lTGlua0ZvbnQiLCJ0aW1lbGluZV9pdGVtIiwidGltZWxpbmVfaW5mbyIsImRhdGVUaW1lIiwidGltZWxpbmVfbWFya2VyIiwidGltZWxpbmVfY29udGVudCIsInRpbWVsaW5lX3RpdGxlIiwidGl0bGUiLCJUaW1lTGluZSIsIml0ZW1zIiwicGFnZUluaXRpYWwiLCJvcGFjaXR5IiwicGFnZUFuaW1hdGUiLCJ3b3JrIiwidGltZWxpbmUiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFjQSxTQUFTQSxZQUFULENBQXNCQyxJQUF0QixFQUFxRDtBQUNuRCxNQUFJQyxNQUFtQixHQUFFRCxJQUFJLENBQUNFLElBQUwsR0FBYztBQUFLLGFBQVMsRUFBRUMsNERBQU0sQ0FBQ0MsWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFSixJQUFJLENBQUNFLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUI7QUFBSyxhQUFTLEVBQUVHLHNEQUFFLENBQUNDLGdCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXZCLENBQXJDLEVBQXFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBckgsQ0FBZCxHQUFtSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTVLLENBRG1ELENBSW5EOztBQUdBLFNBQ0U7QUFBSSxhQUFTLEVBQUVELHNEQUFFLENBQUNFLGFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBRUYsc0RBQUUsQ0FBQ0csYUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT1IsSUFBSSxDQUFDUyxRQUFaLENBREosQ0FEQSxFQUlBO0FBQUssYUFBUyxFQUFFSixzREFBRSxDQUFDSyxlQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkEsRUFLQTtBQUFLLGFBQVMsRUFBRUwsc0RBQUUsQ0FBQ00sZ0JBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBRU4sc0RBQUUsQ0FBQ08sY0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQ1osSUFBSSxDQUFDYSxLQUF4QyxDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJYixJQUFJLENBQUNDLE1BQUwsR0FBYUQsSUFBSSxDQUFDQyxNQUFsQixHQUF5QixFQUE3QixDQUZKLEVBR0NBLE1BSEQsQ0FMQSxDQURGO0FBY0QsQyxDQUdEOzs7S0F4QlNGLFk7QUF5Qk0sU0FBU2UsUUFBVCxPQUEwRTtBQUFBLE1BQXZERCxLQUF1RCxRQUF2REEsS0FBdUQ7QUFBQSxNQUFoREUsS0FBZ0QsUUFBaERBLEtBQWdEO0FBS3hGO0FBQ0Q7QUFDRSxTQUNGLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksV0FBTyxFQUFDLGFBQXBCO0FBQWtDLFdBQU8sRUFBQyxhQUExQztBQUF3RCxZQUFRLEVBQUU7QUFDaEVDLGlCQUFXLEVBQUU7QUFDWEMsZUFBTyxFQUFFO0FBREUsT0FEbUQ7QUFJaEVDLGlCQUFXLEVBQUU7QUFDWEQsZUFBTyxFQUFFO0FBREU7QUFKbUQsS0FBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNBO0FBQUssYUFBUyxFQUFFZCw0REFBTSxDQUFDZ0IsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS04sS0FBTCxDQURBLEVBR0E7QUFBSSxhQUFTLFlBQUtSLHNEQUFFLENBQUNlLFFBQVIsU0FBbUJqQiw0REFBTSxDQUFDaUIsUUFBMUIsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUNMLEtBQUssR0FBR0EsS0FBSyxDQUFDTSxHQUFOLENBQVV0QixZQUFWLENBQUgsR0FBMkIsRUFGakMsQ0FIQSxDQVRBLENBREU7QUE0QkQ7TUFuQ3VCZSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LjVkNmY3MzUxN2JlNDFhY2YwZmJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi90aW1lTGluZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgdGwgZnJvbSBcIi4vdGwubW9kdWxlLnNjc3NcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuaW50ZXJmYWNlIFRpbWVMaW5lRGF0YXtcclxuICBkYXRlVGltZSA6c3RyaW5nO1xyXG4gIHRpdGxlIDogc3RyaW5nO1xyXG4gIGRldGFpbD86c3RyaW5nfCBKU1guRWxlbWVudDtcclxuICBsaW5rPyA6IHN0cmluZyA7IFxyXG59IFxyXG5cclxuZnVuY3Rpb24gVGltZUxpbmVJdGVtKGRhdGE6VGltZUxpbmVEYXRhKTpKU1guRWxlbWVudCB7XHJcbiAgbGV0IGRldGFpbCA6SlNYLkVsZW1lbnQgPWRhdGEubGluayA/ICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lTGluZUxpbmt9PjxMaW5rIGhyZWY9e2RhdGEubGlua30+PGRpdiBjbGFzc05hbWU9e3RsLnRpbWVMaW5lTGlua0ZvbnR9PkV4cGxvcmU8L2Rpdj48L0xpbms+PGJyPjwvYnI+PC9kaXY+OjxkaXY+PC9kaXY+O1xyXG5cclxuXHJcbiAgLy9sZXQgZGV0YWlsIDpKU1guRWxlbWVudCA9ZGF0YS5saW5rID8gICA8ZGl2IGNsYXNzTmFtZT17dGwudGltZUxpbmVMaW5rfT57ZGF0YS5kZXRhaWx9PC9kaXY+OjxkaXYgY2xhc3NOYW1lPXt0bC50aW1lTGluZUxpbmt9PjwvZGl2PjtcclxuIFxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8bGkgY2xhc3NOYW1lPXt0bC50aW1lbGluZV9pdGVtfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXt0bC50aW1lbGluZV9pbmZvfT5cclxuICAgICAgICA8c3Bhbj57ZGF0YS5kYXRlVGltZX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXt0bC50aW1lbGluZV9tYXJrZXJ9PjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3RsLnRpbWVsaW5lX2NvbnRlbnR9PlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9e3RsLnRpbWVsaW5lX3RpdGxlfT57ZGF0YS50aXRsZX08L2gzPlxyXG4gICAgICAgIDxwPntkYXRhLmRldGFpbD8gZGF0YS5kZXRhaWw6XCJcIn08L3A+XHJcbiAgICB7ZGV0YWlsfVxyXG4gICAgICAgICAgICBcclxuICAgIDwvZGl2PlxyXG48L2xpPlxyXG4gICk7XHJcbn1cclxuXHJcbiBcclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGltZUxpbmUoaW5wdXQ6e3RpdGxlOnN0cmluZyxpdGVtczpUaW1lTGluZURhdGFbXX0pIHtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGltZUxpbmUoe3RpdGxlLCBpdGVtc306IHt0aXRsZTogc3RyaW5nLCBpdGVtczogVGltZUxpbmVEYXRhW119KSB7XHJcblxyXG5cclxuIFxyXG5cclxuIC8vIGNvbnN0IHRpbWVMaW5lID0gPFRpbWVsaW5lIGFsaWduPVwibGVmdFwiIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVMaW5lfT5cclxuLy97dGltZUxpbmVzSXRlbXMubWFwKHRpbWVMaW5lSXRlbSl9PC9UaW1lbGluZT47XHJcbiAgcmV0dXJuIChcclxuPG1vdGlvbi5kaXYgaW5pdGlhbD1cInBhZ2VJbml0aWFsXCIgYW5pbWF0ZT1cInBhZ2VBbmltYXRlXCIgdmFyaWFudHM9e3tcclxuICBwYWdlSW5pdGlhbDoge1xyXG4gICAgb3BhY2l0eTogMFxyXG4gIH0sXHJcbiAgcGFnZUFuaW1hdGU6IHtcclxuICAgIG9wYWNpdHk6IDFcclxuICB9LFxyXG4gIFxyXG59fT5cclxuPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53b3JrfT5cclxuPGgyPnt0aXRsZX08L2gyPlxyXG4gICAgICBcclxuPHVsIGNsYXNzTmFtZT17YCR7dGwudGltZWxpbmV9JHtzdHlsZXMudGltZWxpbmV9YH0+XHJcblxyXG57aXRlbXMgPyBpdGVtcy5tYXAoVGltZUxpbmVJdGVtKTpbXX1cclxuXHJcblxyXG48L3VsPlxyXG4gICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcblxyXG4gICAgXHJcbiAgICAgXHJcbjwvbW90aW9uLmRpdj5cclxuXHJcbiAgKTtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==