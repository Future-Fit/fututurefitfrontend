"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(job-list)/job-list-v11/page",{

/***/ "(app-pages-browser)/./components/header/DefaulHeader2.jsx":
/*!*********************************************!*\
  !*** ./components/header/DefaulHeader2.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _HeaderNavContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderNavContent */ \"(app-pages-browser)/./components/header/HeaderNavContent.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst DefaulHeader2 = ()=>{\n    _s();\n    const [navbar, setNavbar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const changeBackground = ()=>{\n        if (window.scrollY >= 10) {\n            setNavbar(true);\n        } else {\n            setNavbar(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", changeBackground);\n        return ()=>{\n            window.removeEventListener(\"scroll\", changeBackground);\n        };\n    }, []);\n    // Inline style for the background color\n    const headerStyle = {\n        backgroundColor: navbar ? \"#B3E5FC\" : \"transparent\",\n        transition: \"background-color 0.3s ease\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"main-header header-style-two \".concat(navbar ? \"fixed-header animated slideInDown\" : \"\"),\n        style: headerStyle,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"auto-container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"main-box\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"nav-outer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"logo-box\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"logo\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            width: 50,\n                                            height: 50,\n                                            src: \"/images/logo-no-background.png\",\n                                            alt: \"Future Fit Logo\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderNavContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"outer-box\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-flex align-items-center btn-box2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"theme-btn btn-style-six call-modal\",\n                                    \"data-bs-toggle\": \"modal\",\n                                    \"data-bs-target\": \"#loginPopupModal\",\n                                    children: \"Login / Register\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/employers-dashboard/post-jobs\",\n                                    className: \"theme-btn btn-style-five\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"btn-title\",\n                                        children: \"Job Post\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/DefaulHeader2.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DefaulHeader2, \"Vw5x37rwgc88uf5vFhgcd9DsIgU=\");\n_c = DefaulHeader2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DefaulHeader2); // 'use client'\n // import Link from \"next/link\";\n // import { useEffect, useState } from \"react\";\n // // /Users/mac/Documents/FutureFit/fututurefitfrontend/components/header/HeaderNavContent.jsx\n // import HeaderNavContent from \"./HeaderNavContent\";\n // import Image from \"next/image\";\n // const DefaulHeader2 = () => {\n //   const [navbar, setNavbar] = useState(false);\n //   const changeBackground = () => {\n //     if (window.scrollY >= 10) {\n //       setNavbar(true);\n //     } else {\n //       setNavbar(false);\n //     }\n //   };\n //   useEffect(() => {\n //     window.addEventListener(\"scroll\", changeBackground);\n //   }, []);\n //   return (\n //     // <!-- Main Header-->\n //     <header\n //       className={`main-header header-style-two  ${\n //         navbar ? \"fixed-header animated slideInDown\" : \"\"\n //       }`}\n //     >\n //       <div className=\"auto-container\">\n //         {/* <!-- Main box --> */}\n //         <div className=\"main-box\">\n //           {/* <!--Nav Outer --> */}\n //           <div className=\"nav-outer\">\n //             <div className=\"logo-box\">\n //               <div className=\"logo\">\n //                 <Link href=\"/\">\n //                   <Image\n //                     width={50}\n //                     height={50}\n //                     src=\"/images/logo-no-background.png\"\n //                     alt=\"Future Fit Logo\"\n //                   />\n //                 </Link>\n //               </div>\n //             </div>\n //             {/* End .logo-box */}\n //             <HeaderNavContent />\n //             {/* <!-- Main Menu End--> */}\n //           </div>\n //           {/* End .nav-outer */}\n //           <div className=\"outer-box\">\n //             <div className=\"d-flex align-items-center btn-box2\">\n //               <a\n //                 href=\"#\"\n //                 className=\"theme-btn btn-style-six call-modal\"\n //                 data-bs-toggle=\"modal\"\n //                 data-bs-target=\"#loginPopupModal\"\n //               >\n //                 Login / Register\n //               </a>\n //               <Link\n //                 href=\"/employers-dashboard/post-jobs\"\n //                 className=\"theme-btn btn-style-five\"\n //               >\n //                 <span className=\"btn-title\">Job Post</span>\n //               </Link>\n //             </div>\n //           </div>\n //         </div>\n //       </div>\n //     </header>\n //   );\n // };\n // export default DefaulHeader2;\nvar _c;\n$RefreshReg$(_c, \"DefaulHeader2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaGVhZGVyL0RlZmF1bEhlYWRlcjIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRzZCO0FBQ2U7QUFDTTtBQUNuQjtBQUUvQixNQUFNSyxnQkFBZ0I7O0lBQ3BCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNTSxtQkFBbUI7UUFDdkIsSUFBSUMsT0FBT0MsT0FBTyxJQUFJLElBQUk7WUFDeEJILFVBQVU7UUFDWixPQUFPO1lBQ0xBLFVBQVU7UUFDWjtJQUNGO0lBRUFOLGdEQUFTQSxDQUFDO1FBQ1JRLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBQ2xDLE9BQU87WUFDTEMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCx3Q0FBd0M7SUFDeEMsTUFBTUssY0FBYztRQUNsQkMsaUJBQWlCUixTQUFTLFlBQVk7UUFDdENTLFlBQVk7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQztRQUNDQyxXQUFXLGdDQUVWLE9BRENYLFNBQVMsc0NBQXNDO1FBRWpEWSxPQUFPTDtrQkFFUCw0RUFBQ007WUFBSUYsV0FBVTtzQkFFYiw0RUFBQ0U7Z0JBQUlGLFdBQVU7O2tDQUViLDhEQUFDRTt3QkFBSUYsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUFJRixXQUFVOzBDQUNiLDRFQUFDRTtvQ0FBSUYsV0FBVTs4Q0FDYiw0RUFBQ2pCLGtEQUFJQTt3Q0FBQ29CLE1BQUs7a0RBQ1QsNEVBQUNoQixtREFBS0E7NENBQ0ppQixPQUFPOzRDQUNQQyxRQUFROzRDQUNSQyxLQUFJOzRDQUNKQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBT1osOERBQUNyQix5REFBZ0JBOzs7Ozs7Ozs7OztrQ0FLbkIsOERBQUNnQjt3QkFBSUYsV0FBVTtrQ0FDYiw0RUFBQ0U7NEJBQUlGLFdBQVU7OzhDQUNiLDhEQUFDUTtvQ0FDQ0wsTUFBSztvQ0FDTEgsV0FBVTtvQ0FDVlMsa0JBQWU7b0NBQ2ZDLGtCQUFlOzhDQUNoQjs7Ozs7OzhDQUdELDhEQUFDM0Isa0RBQUlBO29DQUNIb0IsTUFBSztvQ0FDTEgsV0FBVTs4Q0FFViw0RUFBQ1c7d0NBQUtYLFdBQVU7a0RBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTVDO0dBN0VNWjtLQUFBQTtBQStFTiwrREFBZUEsYUFBYUEsRUFBQyxDQUc3QixlQUFlO0NBRWYsZ0NBQWdDO0NBQ2hDLCtDQUErQztDQUMvQywrRkFBK0Y7Q0FDL0YscURBQXFEO0NBQ3JELGtDQUFrQztDQUVsQyxnQ0FBZ0M7Q0FDaEMsaURBQWlEO0NBRWpELHFDQUFxQztDQUNyQyxrQ0FBa0M7Q0FDbEMseUJBQXlCO0NBQ3pCLGVBQWU7Q0FDZiwwQkFBMEI7Q0FDMUIsUUFBUTtDQUNSLE9BQU87Q0FFUCxzQkFBc0I7Q0FDdEIsMkRBQTJEO0NBQzNELFlBQVk7Q0FFWixhQUFhO0NBQ2IsNkJBQTZCO0NBQzdCLGNBQWM7Q0FDZCxxREFBcUQ7Q0FDckQsNERBQTREO0NBQzVELFlBQVk7Q0FDWixRQUFRO0NBQ1IseUNBQXlDO0NBQ3pDLG9DQUFvQztDQUNwQyxxQ0FBcUM7Q0FDckMsc0NBQXNDO0NBQ3RDLHdDQUF3QztDQUN4Qyx5Q0FBeUM7Q0FDekMsdUNBQXVDO0NBQ3ZDLGtDQUFrQztDQUNsQywyQkFBMkI7Q0FDM0IsaUNBQWlDO0NBQ2pDLGtDQUFrQztDQUNsQywyREFBMkQ7Q0FDM0QsNENBQTRDO0NBQzVDLHVCQUF1QjtDQUN2QiwwQkFBMEI7Q0FDMUIsdUJBQXVCO0NBQ3ZCLHFCQUFxQjtDQUNyQixvQ0FBb0M7Q0FFcEMsbUNBQW1DO0NBQ25DLDRDQUE0QztDQUM1QyxtQkFBbUI7Q0FDbkIsbUNBQW1DO0NBRW5DLHdDQUF3QztDQUN4QyxtRUFBbUU7Q0FDbkUsbUJBQW1CO0NBQ25CLDJCQUEyQjtDQUMzQixpRUFBaUU7Q0FDakUseUNBQXlDO0NBQ3pDLG9EQUFvRDtDQUNwRCxrQkFBa0I7Q0FDbEIsbUNBQW1DO0NBQ25DLHFCQUFxQjtDQUNyQixzQkFBc0I7Q0FDdEIsd0RBQXdEO0NBQ3hELHVEQUF1RDtDQUN2RCxrQkFBa0I7Q0FDbEIsOERBQThEO0NBQzlELHdCQUF3QjtDQUN4QixxQkFBcUI7Q0FDckIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLE9BQU87Q0FDUCxLQUFLO0NBRUwsZ0NBQWdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyL0RlZmF1bEhlYWRlcjIuanN4PzA2NDkiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXJOYXZDb250ZW50IGZyb20gXCIuL0hlYWRlck5hdkNvbnRlbnRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5jb25zdCBEZWZhdWxIZWFkZXIyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtuYXZiYXIsIHNldE5hdmJhcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlQmFja2dyb3VuZCA9ICgpID0+IHtcclxuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSAxMCkge1xyXG4gICAgICBzZXROYXZiYXIodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXROYXZiYXIoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjaGFuZ2VCYWNrZ3JvdW5kKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNoYW5nZUJhY2tncm91bmQpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIElubGluZSBzdHlsZSBmb3IgdGhlIGJhY2tncm91bmQgY29sb3JcclxuICBjb25zdCBoZWFkZXJTdHlsZSA9IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogbmF2YmFyID8gJyNCM0U1RkMnIDogJ3RyYW5zcGFyZW50JywgLy8gQ2hhbmdlICcjeW91ckRlc2lyZWRDb2xvcicgdG8geW91ciBwcmVmZXJyZWQgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlJywgLy8gU21vb3RoIHRyYW5zaXRpb24gd2hlbiB0aGUgY29sb3IgY2hhbmdlc1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyXHJcbiAgICAgIGNsYXNzTmFtZT17YG1haW4taGVhZGVyIGhlYWRlci1zdHlsZS10d28gJHtcclxuICAgICAgICBuYXZiYXIgPyBcImZpeGVkLWhlYWRlciBhbmltYXRlZCBzbGlkZUluRG93blwiIDogXCJcIlxyXG4gICAgICB9YH1cclxuICAgICAgc3R5bGU9e2hlYWRlclN0eWxlfSAvLyBBcHBseSB0aGUgaW5saW5lIHN0eWxlIGhlcmVcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIHsvKiBSZXN0IG9mIHlvdXIgaGVhZGVyIGNvbnRlbnQgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJveFwiPlxyXG4gICAgICAgICAgey8qIDwhLS1OYXYgT3V0ZXIgLS0+ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtb3V0ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWJveFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9sb2dvLW5vLWJhY2tncm91bmQucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJGdXR1cmUgRml0IExvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIEVuZCAubG9nby1ib3ggKi99XHJcblxyXG4gICAgICAgICAgICA8SGVhZGVyTmF2Q29udGVudCAvPlxyXG4gICAgICAgICAgICB7LyogPCEtLSBNYWluIE1lbnUgRW5kLS0+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogRW5kIC5uYXYtb3V0ZXIgKi99XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlci1ib3hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGJ0bi1ib3gyXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRoZW1lLWJ0biBidG4tc3R5bGUtc2l4IGNhbGwtbW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNsb2dpblBvcHVwTW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIExvZ2luIC8gUmVnaXN0ZXJcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIvZW1wbG95ZXJzLWRhc2hib2FyZC9wb3N0LWpvYnNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGhlbWUtYnRuIGJ0bi1zdHlsZS1maXZlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4tdGl0bGVcIj5Kb2IgUG9zdDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlZmF1bEhlYWRlcjI7XHJcblxyXG5cclxuLy8gJ3VzZSBjbGllbnQnXHJcblxyXG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbi8vIGltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gLy8gL1VzZXJzL21hYy9Eb2N1bWVudHMvRnV0dXJlRml0L2Z1dHV0dXJlZml0ZnJvbnRlbmQvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyTmF2Q29udGVudC5qc3hcclxuLy8gaW1wb3J0IEhlYWRlck5hdkNvbnRlbnQgZnJvbSBcIi4vSGVhZGVyTmF2Q29udGVudFwiO1xyXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbi8vIGNvbnN0IERlZmF1bEhlYWRlcjIgPSAoKSA9PiB7XHJcbi8vICAgY29uc3QgW25hdmJhciwgc2V0TmF2YmFyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbi8vICAgY29uc3QgY2hhbmdlQmFja2dyb3VuZCA9ICgpID0+IHtcclxuLy8gICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSAxMCkge1xyXG4vLyAgICAgICBzZXROYXZiYXIodHJ1ZSk7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICBzZXROYXZiYXIoZmFsc2UpO1xyXG4vLyAgICAgfVxyXG4vLyAgIH07XHJcblxyXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjaGFuZ2VCYWNrZ3JvdW5kKTtcclxuLy8gICB9LCBbXSk7XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICAvLyA8IS0tIE1haW4gSGVhZGVyLS0+XHJcbi8vICAgICA8aGVhZGVyXHJcbi8vICAgICAgIGNsYXNzTmFtZT17YG1haW4taGVhZGVyIGhlYWRlci1zdHlsZS10d28gICR7XHJcbi8vICAgICAgICAgbmF2YmFyID8gXCJmaXhlZC1oZWFkZXIgYW5pbWF0ZWQgc2xpZGVJbkRvd25cIiA6IFwiXCJcclxuLy8gICAgICAgfWB9XHJcbi8vICAgICA+XHJcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0by1jb250YWluZXJcIj5cclxuLy8gICAgICAgICB7LyogPCEtLSBNYWluIGJveCAtLT4gKi99XHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJveFwiPlxyXG4vLyAgICAgICAgICAgey8qIDwhLS1OYXYgT3V0ZXIgLS0+ICovfVxyXG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtb3V0ZXJcIj5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWJveFwiPlxyXG4vLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuLy8gICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbi8vICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9sb2dvLW5vLWJhY2tncm91bmQucG5nXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICBhbHQ9XCJGdXR1cmUgRml0IExvZ29cIlxyXG4vLyAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgey8qIEVuZCAubG9nby1ib3ggKi99XHJcblxyXG4vLyAgICAgICAgICAgICA8SGVhZGVyTmF2Q29udGVudCAvPlxyXG4vLyAgICAgICAgICAgICB7LyogPCEtLSBNYWluIE1lbnUgRW5kLS0+ICovfVxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICB7LyogRW5kIC5uYXYtb3V0ZXIgKi99XHJcblxyXG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlci1ib3hcIj5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGJ0bi1ib3gyXCI+XHJcbi8vICAgICAgICAgICAgICAgPGFcclxuLy8gICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRoZW1lLWJ0biBidG4tc3R5bGUtc2l4IGNhbGwtbW9kYWxcIlxyXG4vLyAgICAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiXHJcbi8vICAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNsb2dpblBvcHVwTW9kYWxcIlxyXG4vLyAgICAgICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgICAgIExvZ2luIC8gUmVnaXN0ZXJcclxuLy8gICAgICAgICAgICAgICA8L2E+XHJcbi8vICAgICAgICAgICAgICAgPExpbmtcclxuLy8gICAgICAgICAgICAgICAgIGhyZWY9XCIvZW1wbG95ZXJzLWRhc2hib2FyZC9wb3N0LWpvYnNcIlxyXG4vLyAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGhlbWUtYnRuIGJ0bi1zdHlsZS1maXZlXCJcclxuLy8gICAgICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4tdGl0bGVcIj5Kb2IgUG9zdDwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICA8L0xpbms+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgPC9oZWFkZXI+XHJcbi8vICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IERlZmF1bEhlYWRlcjI7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkZXJOYXZDb250ZW50IiwiSW1hZ2UiLCJEZWZhdWxIZWFkZXIyIiwibmF2YmFyIiwic2V0TmF2YmFyIiwiY2hhbmdlQmFja2dyb3VuZCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhlYWRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidHJhbnNpdGlvbiIsImhlYWRlciIsImNsYXNzTmFtZSIsInN0eWxlIiwiZGl2IiwiaHJlZiIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiYWx0IiwiYSIsImRhdGEtYnMtdG9nZ2xlIiwiZGF0YS1icy10YXJnZXQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/header/DefaulHeader2.jsx\n"));

/***/ })

});