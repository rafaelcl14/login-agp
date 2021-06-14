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



var _jsxFileName = "C:\\Users\\Rafael Carvalho\\Desktop\\Login Alex\\login-agp\\src\\components\\HomeLogin\\index.tsx",
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
          console.log(elemento);

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
            lineNumber: 42,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
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
              lineNumber: 47,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              children: "Senha"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
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
              lineNumber: 60,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
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
            lineNumber: 71,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSG9tZUxvZ2luL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lTG9naW4iLCJkYXRhIiwidXNlU3RhdGUiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImRyaXZlIiwic2V0RHJpdmUiLCJsaXN0YUNsaWVudGVzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9zdGEiLCJjb25zb2xlIiwibG9nIiwianNvbiIsIm1lc3NhZ2VJbmZvIiwiZm9yRWFjaCIsImVsZW1lbnRvIiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBS0EsSUFBTUEsU0FBOEIsR0FBRyxTQUFqQ0EsU0FBaUMsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDbkJDLCtDQUFRLENBQUMsRUFBRCxDQURXO0FBQUEsTUFDNUNDLFFBRDRDO0FBQUEsTUFDbENDLFdBRGtDOztBQUFBLG1CQUVuQkYsK0NBQVEsQ0FBQyxFQUFELENBRlc7QUFBQSxNQUU1Q0csUUFGNEM7QUFBQSxNQUVsQ0MsV0FGa0M7O0FBQUEsbUJBRzNCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FIbUI7QUFBQSxNQUc5Q0ssS0FIOEM7QUFBQSxNQUd2Q0MsUUFIdUM7O0FBT25ELE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixXQUFPQyxLQUFLLGdDQUFMLENBQ05DLElBRE0sQ0FDQSxVQUFBQyxRQUFRLEVBQUk7QUFDZkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFFQSxhQUFPQSxRQUFRLENBQUNHLElBQVQsRUFBUDtBQUNILEtBTE0sQ0FBUDtBQU1ELEdBUEQ7O0FBU0EsV0FBU0MsV0FBVCxHQUF1QjtBQUVyQixRQUFJLENBQUNULEtBQUwsRUFBVztBQUNURSxtQkFBYSxHQUFHRSxJQUFoQixDQUFxQixVQUFBVixJQUFJLEVBQUk7QUFDM0JBLFlBQUksQ0FBQ2dCLE9BQUwsQ0FBYSxVQUFBQyxRQUFRLEVBQUk7QUFDdkJMLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUksUUFBWjs7QUFDSSxjQUFHQSxRQUFRLENBQUNmLFFBQVQsSUFBcUJBLFFBQXJCLElBQWlDZSxRQUFRLENBQUNiLFFBQVQsSUFBcUJBLFFBQXpELEVBQWtFO0FBQ2hFUSxtQkFBTyxDQUFDQyxHQUFSLENBQVlJLFFBQVEsQ0FBQ2YsUUFBckIsRUFBK0JlLFFBQVEsQ0FBQ2IsUUFBeEMsRUFBa0RhLFFBQVEsQ0FBQ1gsS0FBM0Q7QUFDQVksa0JBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0JILFFBQVEsQ0FBQ1gsS0FBakM7QUFDRDtBQUNKLFNBTkg7QUFPRCxPQVJEO0FBU0Q7QUFDRjs7QUFDRCxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsUUFBZjtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFDLG1CQUFUO0FBQTZCLGVBQUcsRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQUEsa0NBQ0U7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQ0Usa0JBQUksRUFBQyxNQURQO0FBRUUsZ0JBQUUsRUFBQyxVQUZMLENBRWdCO0FBRmhCO0FBR0Usa0JBQUksRUFBQyxVQUhQLENBR2tCO0FBSGxCO0FBSUUseUJBQVcsRUFBQyxnQkFKZDtBQUtFLHNCQUFRLEVBQUUsa0JBQUNlLENBQUQ7QUFBQSx1QkFBT2xCLFdBQVcsQ0FBQ2tCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUEsZUFMWjtBQU1FLG1CQUFLLEVBQUVyQixRQU5UO0FBT0Usc0JBQVE7QUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQWNFO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUNFLGtCQUFJLEVBQUMsVUFEUDtBQUVFLGdCQUFFLEVBQUMsT0FGTDtBQUdFLGtCQUFJLEVBQUMsVUFIUDtBQUlFLHlCQUFXLEVBQUMsV0FKZDtBQUtFLHNCQUFRLEVBQUUsa0JBQUNtQixDQUFEO0FBQUEsdUJBQU9oQixXQUFXLENBQUNnQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBLGVBTFo7QUFNRSxtQkFBSyxFQUFFbkIsUUFOVDtBQU9FLHNCQUFRO0FBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEYsZUEyQkU7QUFDRSxxQkFBUyxFQUFDLE9BRFo7QUFFRSxnQkFBSSxFQUFDLFFBRlA7QUFHRSxnQkFBSSxFQUFFRSxLQUhSO0FBSUUsbUJBQU8sRUFBRTtBQUFBLHFCQUFNUyxXQUFXLEVBQWpCO0FBQUEsYUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQStDRCxDQTdFRDs7R0FBTWhCLFM7O0tBQUFBLFM7QUErRU4sK0RBQWVBLFNBQWYsRSxDQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc2Y2M2Njg4MzZjOGQyYmI3MjYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXJMb2dpbiB9IGZyb20gXCIuL3N0eWxlXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRMb2dpbnMgfSBmcm9tIFwiLi4vLi4vcGFnZXMvaW5kZXhcIjtcclxuXHJcblxyXG5jb25zdCBIb21lTG9naW46IFJlYWN0LkZDPGdldExvZ2lucz4gPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgbGV0IFtkcml2ZSwgc2V0RHJpdmVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIFxyXG5cclxuICBjb25zdCBsaXN0YUNsaWVudGVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGBodHRwOi8vMTQzLjE5OC4xNzAuOTYvbG9naW5zYClcclxuICAgIC50aGVuKCByZXNwb3N0YSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9zdGEpO1xyXG4gICAgICBcclxuICAgICAgICByZXR1cm4gcmVzcG9zdGEuanNvbigpXHJcbiAgICB9IClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lc3NhZ2VJbmZvKCkge1xyXG4gICAgXHJcbiAgICBpZiAoIWRyaXZlKXtcclxuICAgICAgbGlzdGFDbGllbnRlcygpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGVsZW1lbnRvID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRvKVxyXG4gICAgICAgICAgICAgIGlmKGVsZW1lbnRvLnVzZXJOYW1lID09IHVzZXJOYW1lICYmIGVsZW1lbnRvLnBhc3N3b3JkID09IHBhc3N3b3JkKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRvLnVzZXJOYW1lLCBlbGVtZW50by5wYXNzd29yZCwgZWxlbWVudG8uZHJpdmUpXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShlbGVtZW50by5kcml2ZSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgIH0gXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29udGFpbmVyTG9naW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGb3JtdWxhcmlvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlbVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vbG9nb1ByZW1pdW0uc3ZnXCIgYWx0PVwiTG9nbyBBZ8OqbmNpYSBwcmVtaXVtXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkxvZ2luPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGlkPVwidXNlck5hbWVcIiAvLyBcIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyTmFtZVwiIC8vZS1tYWlsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4ZW1wbG86IERpZWdvXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlck5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlNlbmhhPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInNlbmhhXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIioqKioqKioqKlwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvdGFvXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBocmVmPXtkcml2ZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtZXNzYWdlSW5mbygpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRW50cmFyXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXJMb2dpbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lTG9naW47XHJcblxyXG4vLyBzZGZqYXNrZmpcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==