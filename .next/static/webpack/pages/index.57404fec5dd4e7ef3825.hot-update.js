self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/HomeLogin/index.tsx":
/*!********************************************!*\
  !*** ./src/components/HomeLogin/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/components/HomeLogin/style.ts");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Rafael Carvalho\\Documents\\Teste\\loginclientepremium\\src\\components\\HomeLogin\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var HomeLogin = function HomeLogin(_ref) {
  _s();

  var data = _ref.data;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      userName = _useState[0],
      setUserName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      drive = _useState3[0],
      setDrive = _useState3[1];

  var listaClientes = function listaClientes() {
    return fetch("http://143.198.170.96/logins").then(function (resposta) {
      console.log(resposta);
      return resposta.json();
    });
  };

  function messageInfo() {
    if (!drive) {
      listaClientes().then(function (data) {
        data.forEach(function (elemento) {
          if (elemento.userName == userName && elemento.password == password) {
            console.log(elemento.userName, elemento.password, elemento.drive);
            window.location.replace(elemento.drive);
          }
        });
      });
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.ContainerLogin, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "Formulario",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "Imagem",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "./logoPremium.svg",
            alt: "Logo Ag\xEAncia premium"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              id: "userName" // "Email"
              ,
              name: "userName" //e-mail
              ,
              placeholder: "Exemplo: Diego",
              onChange: function onChange(e) {
                return setUserName(e.target.value);
              },
              value: userName,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              children: "Senha"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "password",
              id: "senha",
              name: "password",
              placeholder: "*********",
              onChange: function onChange(e) {
                return setPassword(e.target.value);
              },
              value: password,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "botao",
            type: "submit",
            href: drive,
            onClick: function onClick() {
              return messageInfo();
            },
            children: "Entrar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(HomeLogin, "bPVut6n+O2Dsk42WeEgHaBk91e8=");

_c = HomeLogin;
/* harmony default export */ __webpack_exports__["default"] = (HomeLogin); // sdfjaskfj

var _c;

$RefreshReg$(_c, "HomeLogin");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSG9tZUxvZ2luL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lTG9naW4iLCJkYXRhIiwidXNlU3RhdGUiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImRyaXZlIiwic2V0RHJpdmUiLCJsaXN0YUNsaWVudGVzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9zdGEiLCJjb25zb2xlIiwibG9nIiwianNvbiIsIm1lc3NhZ2VJbmZvIiwiZm9yRWFjaCIsImVsZW1lbnRvIiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBS0EsSUFBTUEsU0FBOEIsR0FBRyxTQUFqQ0EsU0FBaUMsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDbkJDLCtDQUFRLENBQUMsRUFBRCxDQURXO0FBQUEsTUFDNUNDLFFBRDRDO0FBQUEsTUFDbENDLFdBRGtDOztBQUFBLG1CQUVuQkYsK0NBQVEsQ0FBQyxFQUFELENBRlc7QUFBQSxNQUU1Q0csUUFGNEM7QUFBQSxNQUVsQ0MsV0FGa0M7O0FBQUEsbUJBRzNCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FIbUI7QUFBQSxNQUc5Q0ssS0FIOEM7QUFBQSxNQUd2Q0MsUUFIdUM7O0FBT25ELE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixXQUFPQyxLQUFLLGdDQUFMLENBQ05DLElBRE0sQ0FDQSxVQUFBQyxRQUFRLEVBQUk7QUFDZkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFFQSxhQUFPQSxRQUFRLENBQUNHLElBQVQsRUFBUDtBQUNILEtBTE0sQ0FBUDtBQU1ELEdBUEQ7O0FBU0EsV0FBU0MsV0FBVCxHQUF1QjtBQUNyQixRQUFJLENBQUNULEtBQUwsRUFBVztBQUNURSxtQkFBYSxHQUFHRSxJQUFoQixDQUFxQixVQUFBVixJQUFJLEVBQUk7QUFDM0JBLFlBQUksQ0FBQ2dCLE9BQUwsQ0FBYSxVQUFBQyxRQUFRLEVBQUk7QUFDbkIsY0FBR0EsUUFBUSxDQUFDZixRQUFULElBQXFCQSxRQUFyQixJQUFpQ2UsUUFBUSxDQUFDYixRQUFULElBQXFCQSxRQUF6RCxFQUFrRTtBQUNoRVEsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZSSxRQUFRLENBQUNmLFFBQXJCLEVBQStCZSxRQUFRLENBQUNiLFFBQXhDLEVBQWtEYSxRQUFRLENBQUNYLEtBQTNEO0FBQ0FZLGtCQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCSCxRQUFRLENBQUNYLEtBQWpDO0FBQ0Q7QUFDSixTQUxIO0FBTUQsT0FQRDtBQVFEO0FBQ0Y7O0FBQ0Qsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLFFBQWY7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBQyxtQkFBVDtBQUE2QixlQUFHLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFBLGtDQUNFO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUNFLGtCQUFJLEVBQUMsTUFEUDtBQUVFLGdCQUFFLEVBQUMsVUFGTCxDQUVnQjtBQUZoQjtBQUdFLGtCQUFJLEVBQUMsVUFIUCxDQUdrQjtBQUhsQjtBQUlFLHlCQUFXLEVBQUMsZ0JBSmQ7QUFLRSxzQkFBUSxFQUFFLGtCQUFDZSxDQUFEO0FBQUEsdUJBQU9sQixXQUFXLENBQUNrQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBLGVBTFo7QUFNRSxtQkFBSyxFQUFFckIsUUFOVDtBQU9FLHNCQUFRO0FBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFjRTtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFDRSxrQkFBSSxFQUFDLFVBRFA7QUFFRSxnQkFBRSxFQUFDLE9BRkw7QUFHRSxrQkFBSSxFQUFDLFVBSFA7QUFJRSx5QkFBVyxFQUFDLFdBSmQ7QUFLRSxzQkFBUSxFQUFFLGtCQUFDbUIsQ0FBRDtBQUFBLHVCQUFPaEIsV0FBVyxDQUFDZ0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQSxlQUxaO0FBTUUsbUJBQUssRUFBRW5CLFFBTlQ7QUFPRSxzQkFBUTtBQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWRGLGVBMkJFO0FBQ0UscUJBQVMsRUFBQyxPQURaO0FBRUUsZ0JBQUksRUFBQyxRQUZQO0FBR0UsZ0JBQUksRUFBRUUsS0FIUjtBQUlFLG1CQUFPLEVBQUU7QUFBQSxxQkFBTVMsV0FBVyxFQUFqQjtBQUFBLGFBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUErQ0QsQ0EzRUQ7O0dBQU1oQixTOztLQUFBQSxTO0FBNkVOLCtEQUFlQSxTQUFmLEUsQ0FFQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NzQwNGZlYzVkZDRlN2VmMzgyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyTG9naW4gfSBmcm9tIFwiLi9zdHlsZVwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0TG9naW5zIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL2luZGV4XCI7XHJcblxyXG5cclxuY29uc3QgSG9tZUxvZ2luOiBSZWFjdC5GQzxnZXRMb2dpbnM+ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXJOYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGxldCBbZHJpdmUsIHNldERyaXZlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBcclxuXHJcbiAgY29uc3QgbGlzdGFDbGllbnRlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiBmZXRjaChgaHR0cDovLzE0My4xOTguMTcwLjk2L2xvZ2luc2ApXHJcbiAgICAudGhlbiggcmVzcG9zdGEgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3Bvc3RhKTtcclxuICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3Bvc3RhLmpzb24oKVxyXG4gICAgfSApXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZXNzYWdlSW5mbygpIHtcclxuICAgIGlmICghZHJpdmUpe1xyXG4gICAgICBsaXN0YUNsaWVudGVzKCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICBkYXRhLmZvckVhY2goZWxlbWVudG8gPT4ge1xyXG4gICAgICAgICAgICAgIGlmKGVsZW1lbnRvLnVzZXJOYW1lID09IHVzZXJOYW1lICYmIGVsZW1lbnRvLnBhc3N3b3JkID09IHBhc3N3b3JkKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRvLnVzZXJOYW1lLCBlbGVtZW50by5wYXNzd29yZCwgZWxlbWVudG8uZHJpdmUpXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShlbGVtZW50by5kcml2ZSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgIH0gXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29udGFpbmVyTG9naW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGb3JtdWxhcmlvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlbVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vbG9nb1ByZW1pdW0uc3ZnXCIgYWx0PVwiTG9nbyBBZ8OqbmNpYSBwcmVtaXVtXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkxvZ2luPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGlkPVwidXNlck5hbWVcIiAvLyBcIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyTmFtZVwiIC8vZS1tYWlsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4ZW1wbG86IERpZWdvXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlck5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlNlbmhhPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInNlbmhhXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIioqKioqKioqKlwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvdGFvXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBocmVmPXtkcml2ZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtZXNzYWdlSW5mbygpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRW50cmFyXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXJMb2dpbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lTG9naW47XHJcblxyXG4vLyBzZGZqYXNrZmpcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==