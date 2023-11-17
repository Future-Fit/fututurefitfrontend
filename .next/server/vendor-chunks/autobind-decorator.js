"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/autobind-decorator";
exports.ids = ["vendor-chunks/autobind-decorator"];
exports.modules = {

/***/ "(ssr)/./node_modules/autobind-decorator/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/autobind-decorator/lib/index.js ***!
  \******************************************************/
/***/ ((module, exports) => {

eval("/**\n * @copyright 2015, Andrey Popp <8mayday@gmail.com>\n *\n * The decorator may be used on classes or methods\n * ```\n * @autobind\n * class FullBound {}\n *\n * class PartBound {\n *   @autobind\n *   method () {}\n * }\n * ```\n */\n\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = autobind;\n\nfunction autobind() {\n  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  if (args.length === 1) {\n    return boundClass.apply(undefined, args);\n  } else {\n    return boundMethod.apply(undefined, args);\n  }\n}\n\n/**\n * Use boundMethod to bind all methods on the target.prototype\n */\nfunction boundClass(target) {\n  // (Using reflect to get all keys including symbols)\n  var keys = undefined;\n  // Use Reflect if exists\n  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {\n    keys = Reflect.ownKeys(target.prototype);\n  } else {\n    keys = Object.getOwnPropertyNames(target.prototype);\n    // use symbols if support is provided\n    if (typeof Object.getOwnPropertySymbols === 'function') {\n      keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));\n    }\n  }\n\n  keys.forEach(function (key) {\n    // Ignore special case target method\n    if (key === 'constructor') {\n      return;\n    }\n\n    var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);\n\n    // Only methods need binding\n    if (typeof descriptor.value === 'function') {\n      Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));\n    }\n  });\n  return target;\n}\n\n/**\n * Return a descriptor removing the value and returning a getter\n * The getter will return a .bind version of the function\n * and memoize the result against a symbol on the instance\n */\nfunction boundMethod(target, key, descriptor) {\n  var fn = descriptor.value;\n\n  if (typeof fn !== 'function') {\n    throw new Error('@autobind decorator can only be applied to methods not: ' + typeof fn);\n  }\n\n  // In IE11 calling Object.defineProperty has a side-effect of evaluating the\n  // getter for the property which is being replaced. This causes infinite\n  // recursion and an \"Out of stack space\" error.\n  var definingProperty = false;\n\n  return {\n    configurable: true,\n    get: function get() {\n      if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {\n        return fn;\n      }\n\n      var boundFn = fn.bind(this);\n      definingProperty = true;\n      Object.defineProperty(this, key, {\n        value: boundFn,\n        configurable: true,\n        writable: true\n      });\n      definingProperty = false;\n      return boundFn;\n    }\n  };\n}\nmodule.exports = exports['default'];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYXV0b2JpbmQtZGVjb3JhdG9yL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWtCOztBQUVsQjtBQUNBLGtFQUFrRSxhQUFhO0FBQy9FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VwZXJpby1uZXh0Ly4vbm9kZV9tb2R1bGVzL2F1dG9iaW5kLWRlY29yYXRvci9saWIvaW5kZXguanM/NWQ5OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgQW5kcmV5IFBvcHAgPDhtYXlkYXlAZ21haWwuY29tPlxuICpcbiAqIFRoZSBkZWNvcmF0b3IgbWF5IGJlIHVzZWQgb24gY2xhc3NlcyBvciBtZXRob2RzXG4gKiBgYGBcbiAqIEBhdXRvYmluZFxuICogY2xhc3MgRnVsbEJvdW5kIHt9XG4gKlxuICogY2xhc3MgUGFydEJvdW5kIHtcbiAqICAgQGF1dG9iaW5kXG4gKiAgIG1ldGhvZCAoKSB7fVxuICogfVxuICogYGBgXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBhdXRvYmluZDtcblxuZnVuY3Rpb24gYXV0b2JpbmQoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBib3VuZENsYXNzLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJvdW5kTWV0aG9kLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH1cbn1cblxuLyoqXG4gKiBVc2UgYm91bmRNZXRob2QgdG8gYmluZCBhbGwgbWV0aG9kcyBvbiB0aGUgdGFyZ2V0LnByb3RvdHlwZVxuICovXG5mdW5jdGlvbiBib3VuZENsYXNzKHRhcmdldCkge1xuICAvLyAoVXNpbmcgcmVmbGVjdCB0byBnZXQgYWxsIGtleXMgaW5jbHVkaW5nIHN5bWJvbHMpXG4gIHZhciBrZXlzID0gdW5kZWZpbmVkO1xuICAvLyBVc2UgUmVmbGVjdCBpZiBleGlzdHNcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgUmVmbGVjdC5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gICAga2V5cyA9IFJlZmxlY3Qub3duS2V5cyh0YXJnZXQucHJvdG90eXBlKTtcbiAgfSBlbHNlIHtcbiAgICBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgLy8gdXNlIHN5bWJvbHMgaWYgc3VwcG9ydCBpcyBwcm92aWRlZFxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0LnByb3RvdHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgLy8gSWdub3JlIHNwZWNpYWwgY2FzZSB0YXJnZXQgbWV0aG9kXG4gICAgaWYgKGtleSA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQucHJvdG90eXBlLCBrZXkpO1xuXG4gICAgLy8gT25seSBtZXRob2RzIG5lZWQgYmluZGluZ1xuICAgIGlmICh0eXBlb2YgZGVzY3JpcHRvci52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldC5wcm90b3R5cGUsIGtleSwgYm91bmRNZXRob2QodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIFJldHVybiBhIGRlc2NyaXB0b3IgcmVtb3ZpbmcgdGhlIHZhbHVlIGFuZCByZXR1cm5pbmcgYSBnZXR0ZXJcbiAqIFRoZSBnZXR0ZXIgd2lsbCByZXR1cm4gYSAuYmluZCB2ZXJzaW9uIG9mIHRoZSBmdW5jdGlvblxuICogYW5kIG1lbW9pemUgdGhlIHJlc3VsdCBhZ2FpbnN0IGEgc3ltYm9sIG9uIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBib3VuZE1ldGhvZCh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikge1xuICB2YXIgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0BhdXRvYmluZCBkZWNvcmF0b3IgY2FuIG9ubHkgYmUgYXBwbGllZCB0byBtZXRob2RzIG5vdDogJyArIHR5cGVvZiBmbik7XG4gIH1cblxuICAvLyBJbiBJRTExIGNhbGxpbmcgT2JqZWN0LmRlZmluZVByb3BlcnR5IGhhcyBhIHNpZGUtZWZmZWN0IG9mIGV2YWx1YXRpbmcgdGhlXG4gIC8vIGdldHRlciBmb3IgdGhlIHByb3BlcnR5IHdoaWNoIGlzIGJlaW5nIHJlcGxhY2VkLiBUaGlzIGNhdXNlcyBpbmZpbml0ZVxuICAvLyByZWN1cnNpb24gYW5kIGFuIFwiT3V0IG9mIHN0YWNrIHNwYWNlXCIgZXJyb3IuXG4gIHZhciBkZWZpbmluZ1Byb3BlcnR5ID0gZmFsc2U7XG5cbiAgcmV0dXJuIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAoZGVmaW5pbmdQcm9wZXJ0eSB8fCB0aGlzID09PSB0YXJnZXQucHJvdG90eXBlIHx8IHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICByZXR1cm4gZm47XG4gICAgICB9XG5cbiAgICAgIHZhciBib3VuZEZuID0gZm4uYmluZCh0aGlzKTtcbiAgICAgIGRlZmluaW5nUHJvcGVydHkgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xuICAgICAgICB2YWx1ZTogYm91bmRGbixcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBkZWZpbmluZ1Byb3BlcnR5ID0gZmFsc2U7XG4gICAgICByZXR1cm4gYm91bmRGbjtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/autobind-decorator/lib/index.js\n");

/***/ })

};
;