"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(job-list)/job-list-v12/page",{

/***/ "(app-pages-browser)/./components/header/DefaulHeader2.jsx":
/*!*********************************************!*\
  !*** ./components/header/DefaulHeader2.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _HeaderNavContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderNavContent */ \"(app-pages-browser)/./components/header/HeaderNavContent.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst DefaulHeader2 = ()=>{\n    _s();\n    const [navbar, setNavbar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    // const changeBackground = () => {\n    //   if (window.scrollY >= 10 && !navbar) {\n    //     setNavbar(true);\n    //   } else if (window.scrollY < 10 && navbar) {\n    //     setNavbar(false);\n    //   }\n    // };\n    const changeBackground = ()=>{\n        const scrolled = window.scrollY > 10;\n        if (scrolled !== navbar) {\n            setNavbar(scrolled);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", changeBackground);\n        return ()=>{\n            window.removeEventListener(\"scroll\", changeBackground);\n        };\n    }, [\n        navbar\n    ]);\n    const headerStyle = {\n        backgroundColor: navbar ? \"#B3E5FC\" : \"transparent\",\n        transition: \"background-color 0.3s ease\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"main-header header-style-two \".concat(navbar ? \"fixed-header animated slideInDown\" : \"\"),\n        style: headerStyle,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"auto-container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"main-box\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"nav-outer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"logo-box\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"logo\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            width: 50,\n                                            height: 50,\n                                            src: \"/images/logo-no-background.png\",\n                                            alt: \"Future Fit Logo\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderNavContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"outer-box\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-flex align-items-center btn-box2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"theme-btn btn-style-six call-modal\",\n                                    \"data-bs-toggle\": \"modal\",\n                                    \"data-bs-target\": \"#loginPopupModal\",\n                                    children: \"Login / Register\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/employers-dashboard/post-jobs\",\n                                    className: \"theme-btn btn-style-five\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"btn-title\",\n                                        children: \"Job Post\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DefaulHeader2, \"Vw5x37rwgc88uf5vFhgcd9DsIgU=\");\n_c = DefaulHeader2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DefaulHeader2); // 'use client'\n // import Link from \"next/link\";\n // import { useEffect, useState } from \"react\";\n // // /Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/HeaderNavContent.jsx\n // import HeaderNavContent from \"./HeaderNavContent\";\n // import Image from \"next/image\";\n // const DefaulHeader2 = () => {\n //   const [navbar, setNavbar] = useState(false);\n //   const changeBackground = () => {\n //     if (window.scrollY >= 10) {\n //       setNavbar(true);\n //     } else {\n //       setNavbar(false);\n //     }\n //   };\n //   useEffect(() => {\n //     window.addEventListener(\"scroll\", changeBackground);\n //   }, []);\n //   return (\n //     // <!-- Main Header-->\n //     <header\n //       className={`main-header header-style-two  ${\n //         navbar ? \"fixed-header animated slideInDown\" : \"\"\n //       }`}\n //     >\n //       <div className=\"auto-container\">\n //         {/* <!-- Main box --> */}\n //         <div className=\"main-box\">\n //           {/* <!--Nav Outer --> */}\n //           <div className=\"nav-outer\">\n //             <div className=\"logo-box\">\n //               <div className=\"logo\">\n //                 <Link href=\"/\">\n //                   <Image\n //                     width={50}\n //                     height={50}\n //                     src=\"/images/logo-no-background.png\"\n //                     alt=\"Future Fit Logo\"\n //                   />\n //                 </Link>\n //               </div>\n //             </div>\n //             {/* End .logo-box */}\n //             <HeaderNavContent />\n //             {/* <!-- Main Menu End--> */}\n //           </div>\n //           {/* End .nav-outer */}\n //           <div className=\"outer-box\">\n //             <div className=\"d-flex align-items-center btn-box2\">\n //               <a\n //                 href=\"#\"\n //                 className=\"theme-btn btn-style-six call-modal\"\n //                 data-bs-toggle=\"modal\"\n //                 data-bs-target=\"#loginPopupModal\"\n //               >\n //                 Login / Register\n //               </a>\n //               <Link\n //                 href=\"/employers-dashboard/post-jobs\"\n //                 className=\"theme-btn btn-style-five\"\n //               >\n //                 <span className=\"btn-title\">Job Post</span>\n //               </Link>\n //             </div>\n //           </div>\n //         </div>\n //       </div>\n //     </header>\n //   );\n // };\n // export default DefaulHeader2;\nvar _c;\n$RefreshReg$(_c, \"DefaulHeader2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaGVhZGVyL0RlZmF1bEhlYWRlcjIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRzZCO0FBQ2U7QUFDTTtBQUNuQjtBQUUvQixNQUFNSyxnQkFBZ0I7O0lBQ3BCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVyQyxtQ0FBbUM7SUFDbkMsMkNBQTJDO0lBQzNDLHVCQUF1QjtJQUN2QixnREFBZ0Q7SUFDaEQsd0JBQXdCO0lBQ3hCLE1BQU07SUFDTixLQUFLO0lBRUwsTUFBTU0sbUJBQW1CO1FBQ3ZCLE1BQU1DLFdBQVdDLE9BQU9DLE9BQU8sR0FBRztRQUNsQyxJQUFJRixhQUFhSCxRQUFRO1lBQ3ZCQyxVQUFVRTtRQUNaO0lBQ0Y7SUFFQVIsZ0RBQVNBLENBQUM7UUFDUlMsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUo7UUFDbEMsT0FBTztZQUNMRSxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVTDtRQUN2QztJQUNGLEdBQUc7UUFBQ0Y7S0FBTztJQUVYLE1BQU1RLGNBQWM7UUFDbEJDLGlCQUFpQlQsU0FBUyxZQUFZO1FBQ3RDVSxZQUFZO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0M7UUFDQ0MsV0FBVyxnQ0FFVixPQURDWixTQUFTLHNDQUFzQztRQUVqRGEsT0FBT0w7a0JBRVAsNEVBQUNNO1lBQUlGLFdBQVU7c0JBRWIsNEVBQUNFO2dCQUFJRixXQUFVOztrQ0FFYiw4REFBQ0U7d0JBQUlGLFdBQVU7OzBDQUNiLDhEQUFDRTtnQ0FBSUYsV0FBVTswQ0FDYiw0RUFBQ0U7b0NBQUlGLFdBQVU7OENBQ2IsNEVBQUNsQixrREFBSUE7d0NBQUNxQixNQUFLO2tEQUNULDRFQUFDakIsbURBQUtBOzRDQUNKa0IsT0FBTzs0Q0FDUEMsUUFBUTs0Q0FDUkMsS0FBSTs0Q0FDSkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQU9aLDhEQUFDdEIseURBQWdCQTs7Ozs7Ozs7Ozs7a0NBS25CLDhEQUFDaUI7d0JBQUlGLFdBQVU7a0NBQ2IsNEVBQUNFOzRCQUFJRixXQUFVOzs4Q0FDYiw4REFBQ1E7b0NBQ0NMLE1BQUs7b0NBQ0xILFdBQVU7b0NBQ1ZTLGtCQUFlO29DQUNmQyxrQkFBZTs4Q0FDaEI7Ozs7Ozs4Q0FHRCw4REFBQzVCLGtEQUFJQTtvQ0FDSHFCLE1BQUs7b0NBQ0xILFdBQVU7OENBRVYsNEVBQUNXO3dDQUFLWCxXQUFVO2tEQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE1QztHQW5GTWI7S0FBQUE7QUFxRk4sK0RBQWVBLGFBQWFBLEVBQUMsQ0FHN0IsZUFBZTtDQUVmLGdDQUFnQztDQUNoQywrQ0FBK0M7Q0FDL0MsK0ZBQStGO0NBQy9GLHFEQUFxRDtDQUNyRCxrQ0FBa0M7Q0FFbEMsZ0NBQWdDO0NBQ2hDLGlEQUFpRDtDQUVqRCxxQ0FBcUM7Q0FDckMsa0NBQWtDO0NBQ2xDLHlCQUF5QjtDQUN6QixlQUFlO0NBQ2YsMEJBQTBCO0NBQzFCLFFBQVE7Q0FDUixPQUFPO0NBRVAsc0JBQXNCO0NBQ3RCLDJEQUEyRDtDQUMzRCxZQUFZO0NBRVosYUFBYTtDQUNiLDZCQUE2QjtDQUM3QixjQUFjO0NBQ2QscURBQXFEO0NBQ3JELDREQUE0RDtDQUM1RCxZQUFZO0NBQ1osUUFBUTtDQUNSLHlDQUF5QztDQUN6QyxvQ0FBb0M7Q0FDcEMscUNBQXFDO0NBQ3JDLHNDQUFzQztDQUN0Qyx3Q0FBd0M7Q0FDeEMseUNBQXlDO0NBQ3pDLHVDQUF1QztDQUN2QyxrQ0FBa0M7Q0FDbEMsMkJBQTJCO0NBQzNCLGlDQUFpQztDQUNqQyxrQ0FBa0M7Q0FDbEMsMkRBQTJEO0NBQzNELDRDQUE0QztDQUM1Qyx1QkFBdUI7Q0FDdkIsMEJBQTBCO0NBQzFCLHVCQUF1QjtDQUN2QixxQkFBcUI7Q0FDckIsb0NBQW9DO0NBRXBDLG1DQUFtQztDQUNuQyw0Q0FBNEM7Q0FDNUMsbUJBQW1CO0NBQ25CLG1DQUFtQztDQUVuQyx3Q0FBd0M7Q0FDeEMsbUVBQW1FO0NBQ25FLG1CQUFtQjtDQUNuQiwyQkFBMkI7Q0FDM0IsaUVBQWlFO0NBQ2pFLHlDQUF5QztDQUN6QyxvREFBb0Q7Q0FDcEQsa0JBQWtCO0NBQ2xCLG1DQUFtQztDQUNuQyxxQkFBcUI7Q0FDckIsc0JBQXNCO0NBQ3RCLHdEQUF3RDtDQUN4RCx1REFBdUQ7Q0FDdkQsa0JBQWtCO0NBQ2xCLDhEQUE4RDtDQUM5RCx3QkFBd0I7Q0FDeEIscUJBQXFCO0NBQ3JCLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixPQUFPO0NBQ1AsS0FBSztDQUVMLGdDQUFnQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci9EZWZhdWxIZWFkZXIyLmpzeD8wNjQ5Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4ndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyTmF2Q29udGVudCBmcm9tIFwiLi9IZWFkZXJOYXZDb250ZW50XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuY29uc3QgRGVmYXVsSGVhZGVyMiA9ICgpID0+IHtcclxuICBjb25zdCBbbmF2YmFyLCBzZXROYXZiYXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIC8vIGNvbnN0IGNoYW5nZUJhY2tncm91bmQgPSAoKSA9PiB7XHJcbiAgLy8gICBpZiAod2luZG93LnNjcm9sbFkgPj0gMTAgJiYgIW5hdmJhcikge1xyXG4gIC8vICAgICBzZXROYXZiYXIodHJ1ZSk7XHJcbiAgLy8gICB9IGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZIDwgMTAgJiYgbmF2YmFyKSB7XHJcbiAgLy8gICAgIHNldE5hdmJhcihmYWxzZSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlQmFja2dyb3VuZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNjcm9sbGVkID0gd2luZG93LnNjcm9sbFkgPiAxMDtcclxuICAgIGlmIChzY3JvbGxlZCAhPT0gbmF2YmFyKSB7XHJcbiAgICAgIHNldE5hdmJhcihzY3JvbGxlZCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNoYW5nZUJhY2tncm91bmQpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY2hhbmdlQmFja2dyb3VuZCk7XHJcbiAgICB9O1xyXG4gIH0sIFtuYXZiYXJdKTtcclxuXHJcbiAgY29uc3QgaGVhZGVyU3R5bGUgPSB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IG5hdmJhciA/ICcjQjNFNUZDJyA6ICd0cmFuc3BhcmVudCcsIFxyXG4gICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlJyxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlclxyXG4gICAgICBjbGFzc05hbWU9e2BtYWluLWhlYWRlciBoZWFkZXItc3R5bGUtdHdvICR7XHJcbiAgICAgICAgbmF2YmFyID8gXCJmaXhlZC1oZWFkZXIgYW5pbWF0ZWQgc2xpZGVJbkRvd25cIiA6IFwiXCJcclxuICAgICAgfWB9XHJcbiAgICAgIHN0eWxlPXtoZWFkZXJTdHlsZX0gLy8gQXBwbHkgdGhlIGlubGluZSBzdHlsZSBoZXJlXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0by1jb250YWluZXJcIj5cclxuICAgICAgICB7LyogUmVzdCBvZiB5b3VyIGhlYWRlciBjb250ZW50ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ib3hcIj5cclxuICAgICAgICAgIHsvKiA8IS0tTmF2IE91dGVyIC0tPiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LW91dGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1ib3hcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nby1uby1iYWNrZ3JvdW5kLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiRnV0dXJlIEZpdCBMb2dvXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiBFbmQgLmxvZ28tYm94ICovfVxyXG5cclxuICAgICAgICAgICAgPEhlYWRlck5hdkNvbnRlbnQgLz5cclxuICAgICAgICAgICAgey8qIDwhLS0gTWFpbiBNZW51IEVuZC0tPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIEVuZCAubmF2LW91dGVyICovfVxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItYm94XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBidG4tYm94MlwiPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aGVtZS1idG4gYnRuLXN0eWxlLXNpeCBjYWxsLW1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjbG9naW5Qb3B1cE1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBMb2dpbiAvIFJlZ2lzdGVyXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiL2VtcGxveWVycy1kYXNoYm9hcmQvcG9zdC1qb2JzXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRoZW1lLWJ0biBidG4tc3R5bGUtZml2ZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuLXRpdGxlXCI+Sm9iIFBvc3Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWZhdWxIZWFkZXIyO1xyXG5cclxuXHJcbi8vICd1c2UgY2xpZW50J1xyXG5cclxuLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIC8vIC9Vc2Vycy9tYWMvRG9jdW1lbnRzL0Z1dHVyZUZpdC9mdXR1dHVyZWZpdGZyb250ZW5kL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlck5hdkNvbnRlbnQuanN4XHJcbi8vIGltcG9ydCBIZWFkZXJOYXZDb250ZW50IGZyb20gXCIuL0hlYWRlck5hdkNvbnRlbnRcIjtcclxuLy8gaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG4vLyBjb25zdCBEZWZhdWxIZWFkZXIyID0gKCkgPT4ge1xyXG4vLyAgIGNvbnN0IFtuYXZiYXIsIHNldE5hdmJhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4vLyAgIGNvbnN0IGNoYW5nZUJhY2tncm91bmQgPSAoKSA9PiB7XHJcbi8vICAgICBpZiAod2luZG93LnNjcm9sbFkgPj0gMTApIHtcclxuLy8gICAgICAgc2V0TmF2YmFyKHRydWUpO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgc2V0TmF2YmFyKGZhbHNlKTtcclxuLy8gICAgIH1cclxuLy8gICB9O1xyXG5cclxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY2hhbmdlQmFja2dyb3VuZCk7XHJcbi8vICAgfSwgW10pO1xyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgLy8gPCEtLSBNYWluIEhlYWRlci0tPlxyXG4vLyAgICAgPGhlYWRlclxyXG4vLyAgICAgICBjbGFzc05hbWU9e2BtYWluLWhlYWRlciBoZWFkZXItc3R5bGUtdHdvICAke1xyXG4vLyAgICAgICAgIG5hdmJhciA/IFwiZml4ZWQtaGVhZGVyIGFuaW1hdGVkIHNsaWRlSW5Eb3duXCIgOiBcIlwiXHJcbi8vICAgICAgIH1gfVxyXG4vLyAgICAgPlxyXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dG8tY29udGFpbmVyXCI+XHJcbi8vICAgICAgICAgey8qIDwhLS0gTWFpbiBib3ggLS0+ICovfVxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ib3hcIj5cclxuLy8gICAgICAgICAgIHsvKiA8IS0tTmF2IE91dGVyIC0tPiAqL31cclxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LW91dGVyXCI+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1ib3hcIj5cclxuLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuLy8gICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MH1cclxuLy8gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nby1uby1iYWNrZ3JvdW5kLnBuZ1wiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgYWx0PVwiRnV0dXJlIEZpdCBMb2dvXCJcclxuLy8gICAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIHsvKiBFbmQgLmxvZ28tYm94ICovfVxyXG5cclxuLy8gICAgICAgICAgICAgPEhlYWRlck5hdkNvbnRlbnQgLz5cclxuLy8gICAgICAgICAgICAgey8qIDwhLS0gTWFpbiBNZW51IEVuZC0tPiAqL31cclxuLy8gICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgey8qIEVuZCAubmF2LW91dGVyICovfVxyXG5cclxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItYm94XCI+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBidG4tYm94MlwiPlxyXG4vLyAgICAgICAgICAgICAgIDxhXHJcbi8vICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbi8vICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aGVtZS1idG4gYnRuLXN0eWxlLXNpeCBjYWxsLW1vZGFsXCJcclxuLy8gICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIlxyXG4vLyAgICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjbG9naW5Qb3B1cE1vZGFsXCJcclxuLy8gICAgICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgICAgICBMb2dpbiAvIFJlZ2lzdGVyXHJcbi8vICAgICAgICAgICAgICAgPC9hPlxyXG4vLyAgICAgICAgICAgICAgIDxMaW5rXHJcbi8vICAgICAgICAgICAgICAgICBocmVmPVwiL2VtcGxveWVycy1kYXNoYm9hcmQvcG9zdC1qb2JzXCJcclxuLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRoZW1lLWJ0biBidG4tc3R5bGUtZml2ZVwiXHJcbi8vICAgICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuLXRpdGxlXCI+Sm9iIFBvc3Q8L3NwYW4+XHJcbi8vICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgIDwvaGVhZGVyPlxyXG4vLyAgICk7XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBEZWZhdWxIZWFkZXIyO1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZGVyTmF2Q29udGVudCIsIkltYWdlIiwiRGVmYXVsSGVhZGVyMiIsIm5hdmJhciIsInNldE5hdmJhciIsImNoYW5nZUJhY2tncm91bmQiLCJzY3JvbGxlZCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhlYWRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidHJhbnNpdGlvbiIsImhlYWRlciIsImNsYXNzTmFtZSIsInN0eWxlIiwiZGl2IiwiaHJlZiIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiYWx0IiwiYSIsImRhdGEtYnMtdG9nZ2xlIiwiZGF0YS1icy10YXJnZXQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/header/DefaulHeader2.jsx\n"));

/***/ })

});