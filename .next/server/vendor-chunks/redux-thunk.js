"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/redux-thunk";
exports.ids = ["vendor-chunks/redux-thunk"];
exports.modules = {

/***/ "(ssr)/./node_modules/redux-thunk/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/redux-thunk/lib/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\n/** A function that accepts a potential \"extra argument\" value to be injected later,\r\n * and returns an instance of the thunk middleware that uses that value\r\n */\nfunction createThunkMiddleware(extraArgument) {\n  // Standard Redux middleware definition pattern:\n  // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware\n  var middleware = function middleware(_ref) {\n    var dispatch = _ref.dispatch,\n        getState = _ref.getState;\n    return function (next) {\n      return function (action) {\n        // The thunk middleware looks for any functions that were passed to `store.dispatch`.\n        // If this \"action\" is really a function, call it and return the result.\n        if (typeof action === 'function') {\n          // Inject the store's `dispatch` and `getState` methods, as well as any \"extra arg\"\n          return action(dispatch, getState, extraArgument);\n        } // Otherwise, pass the action down the middleware chain as usual\n\n\n        return next(action);\n      };\n    };\n  };\n\n  return middleware;\n}\n\nvar thunk = createThunkMiddleware(); // Attach the factory function so users can create a customized version\n// with whatever \"extra arg\" they want to inject into their thunks\n\nthunk.withExtraArgument = createThunkMiddleware;\nvar _default = thunk;\nexports[\"default\"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7O0FBR1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQ0FBcUM7QUFDckM7O0FBRUE7QUFDQTtBQUNBLGtCQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VwZXJpby1uZXh0Ly4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcz81ZjRhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG4vKiogQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSBwb3RlbnRpYWwgXCJleHRyYSBhcmd1bWVudFwiIHZhbHVlIHRvIGJlIGluamVjdGVkIGxhdGVyLFxyXG4gKiBhbmQgcmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgdGh1bmsgbWlkZGxld2FyZSB0aGF0IHVzZXMgdGhhdCB2YWx1ZVxyXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVRodW5rTWlkZGxld2FyZShleHRyYUFyZ3VtZW50KSB7XG4gIC8vIFN0YW5kYXJkIFJlZHV4IG1pZGRsZXdhcmUgZGVmaW5pdGlvbiBwYXR0ZXJuOlxuICAvLyBTZWU6IGh0dHBzOi8vcmVkdXguanMub3JnL3R1dG9yaWFscy9mdW5kYW1lbnRhbHMvcGFydC00LXN0b3JlI3dyaXRpbmctY3VzdG9tLW1pZGRsZXdhcmVcbiAgdmFyIG1pZGRsZXdhcmUgPSBmdW5jdGlvbiBtaWRkbGV3YXJlKF9yZWYpIHtcbiAgICB2YXIgZGlzcGF0Y2ggPSBfcmVmLmRpc3BhdGNoLFxuICAgICAgICBnZXRTdGF0ZSA9IF9yZWYuZ2V0U3RhdGU7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAvLyBUaGUgdGh1bmsgbWlkZGxld2FyZSBsb29rcyBmb3IgYW55IGZ1bmN0aW9ucyB0aGF0IHdlcmUgcGFzc2VkIHRvIGBzdG9yZS5kaXNwYXRjaGAuXG4gICAgICAgIC8vIElmIHRoaXMgXCJhY3Rpb25cIiBpcyByZWFsbHkgYSBmdW5jdGlvbiwgY2FsbCBpdCBhbmQgcmV0dXJuIHRoZSByZXN1bHQuXG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgLy8gSW5qZWN0IHRoZSBzdG9yZSdzIGBkaXNwYXRjaGAgYW5kIGBnZXRTdGF0ZWAgbWV0aG9kcywgYXMgd2VsbCBhcyBhbnkgXCJleHRyYSBhcmdcIlxuICAgICAgICAgIHJldHVybiBhY3Rpb24oZGlzcGF0Y2gsIGdldFN0YXRlLCBleHRyYUFyZ3VtZW50KTtcbiAgICAgICAgfSAvLyBPdGhlcndpc2UsIHBhc3MgdGhlIGFjdGlvbiBkb3duIHRoZSBtaWRkbGV3YXJlIGNoYWluIGFzIHVzdWFsXG5cblxuICAgICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiBtaWRkbGV3YXJlO1xufVxuXG52YXIgdGh1bmsgPSBjcmVhdGVUaHVua01pZGRsZXdhcmUoKTsgLy8gQXR0YWNoIHRoZSBmYWN0b3J5IGZ1bmN0aW9uIHNvIHVzZXJzIGNhbiBjcmVhdGUgYSBjdXN0b21pemVkIHZlcnNpb25cbi8vIHdpdGggd2hhdGV2ZXIgXCJleHRyYSBhcmdcIiB0aGV5IHdhbnQgdG8gaW5qZWN0IGludG8gdGhlaXIgdGh1bmtzXG5cbnRodW5rLndpdGhFeHRyYUFyZ3VtZW50ID0gY3JlYXRlVGh1bmtNaWRkbGV3YXJlO1xudmFyIF9kZWZhdWx0ID0gdGh1bms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/redux-thunk/lib/index.js\n");

/***/ })

};
;