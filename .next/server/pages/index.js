(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Footer/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer/style */ "./src/components/Footer/style.ts");


var _jsxFileName = "C:\\Users\\Rafael Carvalho\\Desktop\\Login Alex\\login-agp\\src\\components\\Footer\\index.tsx";



const Footer = ({}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer_style__WEBPACK_IMPORTED_MODULE_2__.ContainerFooter, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "Circulo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "containerSocial",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://br.linkedin.com/company/agencia-premium-marketing",
          target: "_blank",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "./linkeding.svg",
            alt: "Rede social LinkedIn"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://www.facebook.com/agenciapremiumro/",
          target: "_blank",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "./facebook.svg",
            alt: "Rede social Facebook"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://www.instagram.com/agenciapremiumro/",
          target: "_blank",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "./instagram.svg",
            alt: "Rede social Instagram"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Footer/style.ts":
/*!****************************************!*\
  !*** ./src/components/Footer/style.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContainerFooter": function() { return /* binding */ ContainerFooter; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ContainerFooter = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: blue; */
  position: relative;
  margin-top: 12rem;

  .Circulo {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 250px;
    height: 250px;
    clip-path: circle(128px at 230px 230px);
    background: #333333;
  }

  .containerSocial {
    display: flex;
    width: 100%;
    height: 100%;
    /* margin-top: 15rem; */
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
    margin-bottom: 18.4rem;
    background: transparent;
  }

  @media screen and (max-width: 940px) {
    margin-top: 4.6rem;
    .containerSocial {
      /* margin-top: 15rem; */
      margin: 17.61rem !important;
    }
  }

  
  @media screen and (max-width: 360px) {
    margin-top: 4.6rem;
    .Circulo {
      clip-path: circle(81px at 252px 230px);
    }
    .containerSocial {
      /* margin-bottom: 8rem; */
      margin: 7.61rem !important;
    }
  }
`;

/***/ }),

/***/ "./src/components/HomeLogin/index.tsx":
/*!********************************************!*\
  !*** ./src/components/HomeLogin/index.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/components/HomeLogin/style.ts");


var _jsxFileName = "C:\\Users\\Rafael Carvalho\\Desktop\\Login Alex\\login-agp\\src\\components\\HomeLogin\\index.tsx";



const HomeLogin = ({
  data
}) => {
  const {
    0: userName,
    1: setUserName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  let {
    0: drive,
    1: setDrive
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  const listaClientes = () => {
    return fetch(`https://cms.agenciapremium.com.br/logins`).then(resposta => {
      console.log(resposta);
      return resposta.json();
    });
  };

  function messageInfo() {
    if (!drive) {
      listaClientes().then(data => {
        data.forEach(elemento => {
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
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              id: "userName" // "Email"
              ,
              name: "userName" //e-mail
              ,
              placeholder: "Exemplo: Diego",
              onChange: e => setUserName(e.target.value),
              value: userName,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              children: "Senha"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "password",
              id: "senha",
              name: "password",
              placeholder: "*********",
              onChange: e => setPassword(e.target.value),
              value: password,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "botao",
            type: "submit",
            href: drive,
            onClick: () => messageInfo(),
            children: "Entrar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (HomeLogin); // sdfjaskfj

/***/ }),

/***/ "./src/components/HomeLogin/style.ts":
/*!*******************************************!*\
  !*** ./src/components/HomeLogin/style.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContainerLogin": function() { return /* binding */ ContainerLogin; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ContainerLogin = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 940px) {
    .Formulario {
      .Imagem {
        padding-top: 3rem;
        img {
          width: 50%;
        }
      }
      form {
        padding-top: 2rem;
        gap: 6rem !important;
        div {
          height: 3.3rem !important;
          width: 30.5rem !important;
          label {
            font-size: 12px !important;
          }
          input {
          }
        }
      }
      .botao {
        margin-top: 1.5rem !important;
      }
    }
  }
  /* @media screen and (max-width:840px){
        .Formulario {
            .Imagem {
                img {
                    
                }
            }
            form {
                div {
                    width: 35.5rem !important;
                    
                }
            }
        }
    } */

  .Formulario {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .Imagem {
      display: flex;
      justify-content: center;
      margin: 5.3rem 0;
    }

    form {
      display: flex;
      align-items: center;
      width: 100%;
      gap: 8.8rem;
      flex-direction: column;

      div {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 55.4rem;
        height: 6.6rem;
        position: relative;

        label {
          position: absolute;
          top: -20px;
          left: 0;
          font-size: 16px;
          font-weight: 600;
        }

        input {
          display: flex;
          width: 100%;
          height: 6.6rem;
          background: transparent;
          border: none;
          color: #ffffff;
          font-size: 16px;
          border-bottom: 1px solid #ffffff;
        }
      }
      .botao {
        width: 25.4rem;
        height: 5.2rem;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 8.1rem;
       
        border-radius: 8px;
        border: none;
        box-shadow: none;
        background: #fdd028;
        color: #333333;

        font-size: 26px;
        font-weight: 700;
        cursor: pointer;
      }
    }
  }
`;

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals */ "./src/styles/globals.ts");
/* harmony import */ var _components_HomeLogin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HomeLogin */ "./src/components/HomeLogin/index.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer/index.tsx");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api */ "./src/services/api.ts");


var _jsxFileName = "C:\\Users\\Rafael Carvalho\\Desktop\\Login Alex\\login-agp\\src\\pages\\index.tsx";






function Home({
  data
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_globals__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width = device-width, initial-scale = 1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Login Premium"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HomeLogin__WEBPACK_IMPORTED_MODULE_4__.default, {
        data: data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
async function getStaticProps() {
  const {
    data
  } = await _services_api__WEBPACK_IMPORTED_MODULE_6__.default.get("/logins");
  return {
    props: {
      data
    }
  };
}

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: 'http://143.198.170.96'
});
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./src/styles/globals.ts":
/*!*******************************!*\
  !*** ./src/styles/globals.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`

html,
body {
  /* width: 100%;
  height: 100%; */
  font-family: 'Ubuntu';
  /* background: linear-gradient(180deg, rgba(17, 17, 17, 0.8) 0%, #111111 100%); */
  background-repeat: no-repeat;
  color: #e1e1e6;
  font: 400 16px Montserrat, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  background: linear-gradient(180deg, rgba(17, 17, 17, 0.8) 0%, #111111 100%);
  background-repeat: no-repeat;
  /* padding: 0;
  margin: 0; */
  box-sizing: border-box;
}

:root{
  width: 100%;
  height: 100%;
  font-size: 62.5%; //converte o valor de rem em 1:100 exemplo um 1rem é equivalente a 10px;
  /* background-color: linear-gradient(180deg, rgba(17, 17, 17, 0.8) 0%, #111111 100%); */
  font-family: 'Ubuntu', sans-serif;
}

html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      /* font-family: "Roboto"; */
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    } 
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
   

`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2dpbmRlY2xpZW50ZXMvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2xvZ2luZGVjbGllbnRlcy8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9zdHlsZS50cyIsIndlYnBhY2s6Ly9sb2dpbmRlY2xpZW50ZXMvLi9zcmMvY29tcG9uZW50cy9Ib21lTG9naW4vaW5kZXgudHN4Iiwid2VicGFjazovL2xvZ2luZGVjbGllbnRlcy8uL3NyYy9jb21wb25lbnRzL0hvbWVMb2dpbi9zdHlsZS50cyIsIndlYnBhY2s6Ly9sb2dpbmRlY2xpZW50ZXMvLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL2xvZ2luZGVjbGllbnRlcy8uL3NyYy9zZXJ2aWNlcy9hcGkudHMiLCJ3ZWJwYWNrOi8vbG9naW5kZWNsaWVudGVzLy4vc3JjL3N0eWxlcy9nbG9iYWxzLnRzIiwid2VicGFjazovL2xvZ2luZGVjbGllbnRlcy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbG9naW5kZWNsaWVudGVzL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbG9naW5kZWNsaWVudGVzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9sb2dpbmRlY2xpZW50ZXMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9sb2dpbmRlY2xpZW50ZXMvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkZvb3RlciIsIkNvbnRhaW5lckZvb3RlciIsInN0eWxlZCIsIkhvbWVMb2dpbiIsImRhdGEiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwidXNlU3RhdGUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZHJpdmUiLCJzZXREcml2ZSIsImxpc3RhQ2xpZW50ZXMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb3N0YSIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwibWVzc2FnZUluZm8iLCJmb3JFYWNoIiwiZWxlbWVudG8iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJDb250YWluZXJMb2dpbiIsIkhvbWUiLCJnZXRTdGF0aWNQcm9wcyIsImFwaSIsInByb3BzIiwiYXhpb3MiLCJiYXNlVVJMIiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBZ0IsR0FBRyxDQUFDLEVBQUQsS0FBUTtBQUMvQixzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDBEQUFEO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLGdDQUNFO0FBQUcsY0FBSSxFQUFDLDJEQUFSO0FBQW9FLGdCQUFNLEVBQUMsUUFBM0U7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBQyxpQkFBVDtBQUEyQixlQUFHLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRTtBQUFHLGNBQUksRUFBQyw0Q0FBUjtBQUFxRCxnQkFBTSxFQUFDLFFBQTVEO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUMsZ0JBQVQ7QUFBMEIsZUFBRyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLGVBT0U7QUFBRyxjQUFJLEVBQUMsNkNBQVI7QUFBc0QsZ0JBQU0sRUFBQyxRQUE3RDtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFDLGlCQUFUO0FBQTJCLGVBQUcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7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Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lckZvb3RlciB9IGZyb20gXCIuLi9Gb290ZXIvc3R5bGVcIjtcclxuXHJcbmNvbnN0IEZvb3RlcjogUmVhY3QuRkMgPSAoe30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbnRhaW5lckZvb3Rlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNpcmN1bG9cIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclNvY2lhbFwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYnIubGlua2VkaW4uY29tL2NvbXBhbnkvYWdlbmNpYS1wcmVtaXVtLW1hcmtldGluZ1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vbGlua2VkaW5nLnN2Z1wiIGFsdD1cIlJlZGUgc29jaWFsIExpbmtlZEluXCIgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vYWdlbmNpYXByZW1pdW1yby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ZhY2Vib29rLnN2Z1wiIGFsdD1cIlJlZGUgc29jaWFsIEZhY2Vib29rXCIgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FnZW5jaWFwcmVtaXVtcm8vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbnN0YWdyYW0uc3ZnXCIgYWx0PVwiUmVkZSBzb2NpYWwgSW5zdGFncmFtXCIgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXJGb290ZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyRm9vdGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC8qIGJhY2tncm91bmQ6IGJsdWU7ICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDEycmVtO1xyXG5cclxuICAuQ2lyY3VsbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgxMjhweCBhdCAyMzBweCAyMzBweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lclNvY2lhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAxNXJlbTsgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMS40cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTguNHJlbTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTQwcHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDQuNnJlbTtcclxuICAgIC5jb250YWluZXJTb2NpYWwge1xyXG4gICAgICAvKiBtYXJnaW4tdG9wOiAxNXJlbTsgKi9cclxuICAgICAgbWFyZ2luOiAxNy42MXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDQuNnJlbTtcclxuICAgIC5DaXJjdWxvIHtcclxuICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoODFweCBhdCAyNTJweCAyMzBweCk7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyU29jaWFsIHtcclxuICAgICAgLyogbWFyZ2luLWJvdHRvbTogOHJlbTsgKi9cclxuICAgICAgbWFyZ2luOiA3LjYxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXJMb2dpbiB9IGZyb20gXCIuL3N0eWxlXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRMb2dpbnMgfSBmcm9tIFwiLi4vLi4vcGFnZXMvaW5kZXhcIjtcclxuXHJcblxyXG5jb25zdCBIb21lTG9naW46IFJlYWN0LkZDPGdldExvZ2lucz4gPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgbGV0IFtkcml2ZSwgc2V0RHJpdmVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIFxyXG5cclxuICBjb25zdCBsaXN0YUNsaWVudGVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGBodHRwczovL2Ntcy5hZ2VuY2lhcHJlbWl1bS5jb20uYnIvbG9naW5zYClcclxuICAgIC50aGVuKCByZXNwb3N0YSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9zdGEpO1xyXG4gICAgICBcclxuICAgICAgICByZXR1cm4gcmVzcG9zdGEuanNvbigpXHJcbiAgICB9IClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lc3NhZ2VJbmZvKCkge1xyXG4gICAgXHJcbiAgICBpZiAoIWRyaXZlKXtcclxuICAgICAgbGlzdGFDbGllbnRlcygpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGVsZW1lbnRvID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRvKVxyXG4gICAgICAgICAgICAgIGlmKGVsZW1lbnRvLnVzZXJOYW1lID09IHVzZXJOYW1lICYmIGVsZW1lbnRvLnBhc3N3b3JkID09IHBhc3N3b3JkKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRvLnVzZXJOYW1lLCBlbGVtZW50by5wYXNzd29yZCwgZWxlbWVudG8uZHJpdmUpXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShlbGVtZW50by5kcml2ZSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgIH0gXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29udGFpbmVyTG9naW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGb3JtdWxhcmlvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlbVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vbG9nb1ByZW1pdW0uc3ZnXCIgYWx0PVwiTG9nbyBBZ8OqbmNpYSBwcmVtaXVtXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkxvZ2luPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGlkPVwidXNlck5hbWVcIiAvLyBcIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyTmFtZVwiIC8vZS1tYWlsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4ZW1wbG86IERpZWdvXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlck5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlNlbmhhPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInNlbmhhXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIioqKioqKioqKlwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvdGFvXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBocmVmPXtkcml2ZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtZXNzYWdlSW5mbygpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRW50cmFyXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXJMb2dpbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lTG9naW47XHJcblxyXG4vLyBzZGZqYXNrZmpcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXJMb2dpbiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk0MHB4KSB7XHJcbiAgICAuRm9ybXVsYXJpbyB7XHJcbiAgICAgIC5JbWFnZW0ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmb3JtIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgICAgICBnYXA6IDZyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgaGVpZ2h0OiAzLjNyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgIHdpZHRoOiAzMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuYm90YW8ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODQwcHgpe1xyXG4gICAgICAgIC5Gb3JtdWxhcmlvIHtcclxuICAgICAgICAgICAgLkltYWdlbSB7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAqL1xyXG5cclxuICAuRm9ybXVsYXJpbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC5JbWFnZW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiA1LjNyZW0gMDtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGdhcDogOC44cmVtO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB3aWR0aDogNTUuNHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDYuNnJlbTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogLTIwcHg7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNi42cmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuYm90YW8ge1xyXG4gICAgICAgIHdpZHRoOiAyNS40cmVtO1xyXG4gICAgICAgIGhlaWdodDogNS4ycmVtO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIG1hcmdpbi10b3A6IDguMXJlbTtcclxuICAgICAgIFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmRkMDI4O1xyXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG5cclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9nbG9iYWxzXCI7XHJcbmltcG9ydCBIb21lTG9naW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZUxvZ2luXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5cclxuZXhwb3J0IHR5cGUgZ2V0TG9naW5zID0ge1xyXG4gIGRhdGE6IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBwYXNzd29yZDogU3RyaW5nO1xyXG4gICAgZHJpdmU6IHN0cmluZztcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgfVtdO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBkYXRhIH06IGdldExvZ2lucykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aCA9IGRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZSA9IDEuMFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDx0aXRsZT5Mb2dpbiBQcmVtaXVtPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8SG9tZUxvZ2luIGRhdGE9e2RhdGF9IC8+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldChcIi9sb2dpbnNcIik7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBkYXRhIH0sXHJcbiAgfTtcclxufVxyXG5cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6ICdodHRwOi8vMTQzLjE5OC4xNzAuOTYnXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7ICIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAvKiB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xyXG4gIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMTcsIDE3LCAxNywgMC44KSAwJSwgIzExMTExMSAxMDAlKTsgKi9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGNvbG9yOiAjZTFlMWU2O1xyXG4gIGZvbnQ6IDQwMCAxNnB4IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuKiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgxNywgMTcsIDE3LCAwLjgpIDAlLCAjMTExMTExIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgLyogcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7ICovXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuOnJvb3R7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogNjIuNSU7IC8vY29udmVydGUgbyB2YWxvciBkZSByZW0gZW0gMToxMDAgZXhlbXBsbyB1bSAxcmVtIMOpIGVxdWl2YWxlbnRlIGEgMTBweDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDE3LCAxNywgMTcsIDAuOCkgMCUsICMxMTExMTEgMTAwJSk7ICovXHJcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXHJcbiAgICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXHJcbiAgICBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXHJcbiAgICBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXHJcbiAgICBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxyXG4gICAgYiwgdSwgaSwgY2VudGVyLFxyXG4gICAgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcclxuICAgIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxyXG4gICAgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXHJcbiAgICBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXHJcbiAgICBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxyXG4gICAgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXHJcbiAgICB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xyXG4gICAgICAvKiBmb250LWZhbWlseTogXCJSb2JvdG9cIjsgKi9cclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgfSBcclxuICAgIC8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cclxuICAgIGFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxyXG4gICAgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIGJvZHkge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgfVxyXG4gICAgb2wsIHVsIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgfVxyXG4gICAgYmxvY2txdW90ZSwgcSB7XHJcbiAgICAgICAgcXVvdGVzOiBub25lO1xyXG4gICAgfVxyXG4gICAgYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXHJcbiAgICBxOmJlZm9yZSwgcTphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgY29udGVudDogbm9uZTtcclxuICAgIH1cclxuICAgIHRhYmxlIHtcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgfVxyXG4gICBcclxuXHJcbmA7XHJcbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==