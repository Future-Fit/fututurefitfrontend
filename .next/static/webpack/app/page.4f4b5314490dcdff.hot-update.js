"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./utils/linkActiveChecker.js":
/*!************************************!*\
  !*** ./utils/linkActiveChecker.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isActiveLink: function() { return /* binding */ isActiveLink; },\n/* harmony export */   isActiveParent: function() { return /* binding */ isActiveParent; },\n/* harmony export */   isActiveParentChaild: function() { return /* binding */ isActiveParentChaild; }\n/* harmony export */ });\n// is active parent check\n// export const isActiveParent = (data = [], path) => {\n//   if (data?.length !== 0) {\n//     return data?.some(({ items }) =>\n//       items?.some(\n//         (menu) =>\n//           menu.routePath?.split(\"/\")[1]?.replace(/\\/\\d+/, \"\") ===\n//           path?.split(\"/\")[1]?.replace(/\\/\\d+/, \"\")\n//       )\n//     );\n//   }\n// };\nconst isActiveParent = function() {\n    let data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], path = arguments.length > 1 ? arguments[1] : void 0;\n    if (Array.isArray(data) && data.length !== 0) {\n        return data.some((param)=>{\n            let { items } = param;\n            return Array.isArray(items) && items.some((menu)=>{\n                var _menu_routePath_split_, _menu_routePath, _path_split_;\n                return ((_menu_routePath = menu.routePath) === null || _menu_routePath === void 0 ? void 0 : (_menu_routePath_split_ = _menu_routePath.split(\"/\")[1]) === null || _menu_routePath_split_ === void 0 ? void 0 : _menu_routePath_split_.replace(/\\/\\d+/, \"\")) === (path === null || path === void 0 ? void 0 : (_path_split_ = path.split(\"/\")[1]) === null || _path_split_ === void 0 ? void 0 : _path_split_.replace(/\\/\\d+/, \"\"));\n            });\n        });\n    }\n    return false;\n};\n// is active parent childe check\nconst isActiveParentChaild = function() {\n    let data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], path = arguments.length > 1 ? arguments[1] : void 0;\n    if ((data === null || data === void 0 ? void 0 : data.length) !== 0) {\n        return data === null || data === void 0 ? void 0 : data.some((menu)=>menu.routePath.replace(/\\/\\d+/, \"\") === path.replace(/\\/\\d+/, \"\"));\n    }\n};\n// is active link check\nconst isActiveLink = (menuPath, routePath)=>{\n    if (menuPath && routePath) {\n        return menuPath.replace(/\\/\\d+/, \"\") === routePath.replace(/\\/\\d+/, \"\");\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3V0aWxzL2xpbmtBY3RpdmVDaGVja2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlCQUF5QjtBQUN6Qix1REFBdUQ7QUFDdkQsOEJBQThCO0FBQzlCLHVDQUF1QztBQUN2QyxxQkFBcUI7QUFDckIsb0JBQW9CO0FBQ3BCLG9FQUFvRTtBQUNwRSxzREFBc0Q7QUFDdEQsVUFBVTtBQUNWLFNBQVM7QUFDVCxNQUFNO0FBQ04sS0FBSztBQUVFLE1BQU1BLGlCQUFpQjtRQUFDQyx3RUFBTyxFQUFFLEVBQUVDO0lBQ3hDLElBQUlDLE1BQU1DLE9BQU8sQ0FBQ0gsU0FBU0EsS0FBS0ksTUFBTSxLQUFLLEdBQUc7UUFDNUMsT0FBT0osS0FBS0ssSUFBSSxDQUFDO2dCQUFDLEVBQUVDLEtBQUssRUFBRTttQkFDekJKLE1BQU1DLE9BQU8sQ0FBQ0csVUFBVUEsTUFBTUQsSUFBSSxDQUNoQyxDQUFDRTtvQkFDQ0Esd0JBQUFBLGlCQUNBTjt1QkFEQU0sRUFBQUEsa0JBQUFBLEtBQUtDLFNBQVMsY0FBZEQsdUNBQUFBLHlCQUFBQSxnQkFBZ0JFLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUE3QkYsNkNBQUFBLHVCQUErQkcsT0FBTyxDQUFDLFNBQVMsVUFDaERULGlCQUFBQSw0QkFBQUEsZUFBQUEsS0FBTVEsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLGNBQW5CUixtQ0FBQUEsYUFBcUJTLE9BQU8sQ0FBQyxTQUFTOztRQUMxQztJQUVKO0lBQ0EsT0FBTztBQUNULEVBQUU7QUFHRixnQ0FBZ0M7QUFDekIsTUFBTUMsdUJBQXVCO1FBQUNYLHdFQUFPLEVBQUUsRUFBRUM7SUFDOUMsSUFBSUQsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNSSxNQUFNLE1BQUssR0FBRztRQUN0QixPQUFPSixpQkFBQUEsMkJBQUFBLEtBQU1LLElBQUksQ0FDZixDQUFDRSxPQUNDQSxLQUFLQyxTQUFTLENBQUNFLE9BQU8sQ0FBQyxTQUFTLFFBQVFULEtBQUtTLE9BQU8sQ0FBQyxTQUFTO0lBRXBFO0FBQ0YsRUFBRTtBQUVGLHVCQUF1QjtBQUNoQixNQUFNRSxlQUFlLENBQUNDLFVBQVVMO0lBQ3JDLElBQUlLLFlBQVlMLFdBQVc7UUFDekIsT0FBT0ssU0FBU0gsT0FBTyxDQUFDLFNBQVMsUUFBUUYsVUFBVUUsT0FBTyxDQUFDLFNBQVM7SUFDdEU7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2xpbmtBY3RpdmVDaGVja2VyLmpzPzY2MTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaXMgYWN0aXZlIHBhcmVudCBjaGVja1xyXG4vLyBleHBvcnQgY29uc3QgaXNBY3RpdmVQYXJlbnQgPSAoZGF0YSA9IFtdLCBwYXRoKSA9PiB7XHJcbi8vICAgaWYgKGRhdGE/Lmxlbmd0aCAhPT0gMCkge1xyXG4vLyAgICAgcmV0dXJuIGRhdGE/LnNvbWUoKHsgaXRlbXMgfSkgPT5cclxuLy8gICAgICAgaXRlbXM/LnNvbWUoXHJcbi8vICAgICAgICAgKG1lbnUpID0+XHJcbi8vICAgICAgICAgICBtZW51LnJvdXRlUGF0aD8uc3BsaXQoXCIvXCIpWzFdPy5yZXBsYWNlKC9cXC9cXGQrLywgXCJcIikgPT09XHJcbi8vICAgICAgICAgICBwYXRoPy5zcGxpdChcIi9cIilbMV0/LnJlcGxhY2UoL1xcL1xcZCsvLCBcIlwiKVxyXG4vLyAgICAgICApXHJcbi8vICAgICApO1xyXG4vLyAgIH1cclxuLy8gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBpc0FjdGl2ZVBhcmVudCA9IChkYXRhID0gW10sIHBhdGgpID0+IHtcclxuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSAmJiBkYXRhLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgcmV0dXJuIGRhdGEuc29tZSgoeyBpdGVtcyB9KSA9PlxyXG4gICAgICBBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5zb21lKFxyXG4gICAgICAgIChtZW51KSA9PlxyXG4gICAgICAgICAgbWVudS5yb3V0ZVBhdGg/LnNwbGl0KFwiL1wiKVsxXT8ucmVwbGFjZSgvXFwvXFxkKy8sIFwiXCIpID09PVxyXG4gICAgICAgICAgcGF0aD8uc3BsaXQoXCIvXCIpWzFdPy5yZXBsYWNlKC9cXC9cXGQrLywgXCJcIilcclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuXHJcbi8vIGlzIGFjdGl2ZSBwYXJlbnQgY2hpbGRlIGNoZWNrXHJcbmV4cG9ydCBjb25zdCBpc0FjdGl2ZVBhcmVudENoYWlsZCA9IChkYXRhID0gW10sIHBhdGgpID0+IHtcclxuICBpZiAoZGF0YT8ubGVuZ3RoICE9PSAwKSB7XHJcbiAgICByZXR1cm4gZGF0YT8uc29tZShcclxuICAgICAgKG1lbnUpID0+XHJcbiAgICAgICAgbWVudS5yb3V0ZVBhdGgucmVwbGFjZSgvXFwvXFxkKy8sIFwiXCIpID09PSBwYXRoLnJlcGxhY2UoL1xcL1xcZCsvLCBcIlwiKVxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBpcyBhY3RpdmUgbGluayBjaGVja1xyXG5leHBvcnQgY29uc3QgaXNBY3RpdmVMaW5rID0gKG1lbnVQYXRoLCByb3V0ZVBhdGgpID0+IHtcclxuICBpZiAobWVudVBhdGggJiYgcm91dGVQYXRoKSB7XHJcbiAgICByZXR1cm4gbWVudVBhdGgucmVwbGFjZSgvXFwvXFxkKy8sIFwiXCIpID09PSByb3V0ZVBhdGgucmVwbGFjZSgvXFwvXFxkKy8sIFwiXCIpO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImlzQWN0aXZlUGFyZW50IiwiZGF0YSIsInBhdGgiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJzb21lIiwiaXRlbXMiLCJtZW51Iiwicm91dGVQYXRoIiwic3BsaXQiLCJyZXBsYWNlIiwiaXNBY3RpdmVQYXJlbnRDaGFpbGQiLCJpc0FjdGl2ZUxpbmsiLCJtZW51UGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./utils/linkActiveChecker.js\n"));

/***/ })

});