"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/react/index.ts
var react_exports = {};
__export(react_exports, {
    TailwindScreenSize: function() {
        return TailwindScreenSize;
    },
    detectTailwind: function() {
        return detectTailwind;
    },
    showTailwindWarning: function() {
        return showTailwindWarning;
    }
});
module.exports = __toCommonJS(react_exports);
// src/react/TailwindScreenSize.tsx
var import_react = __toESM(require("react"));
var import_tailwind_merge = require("tailwind-merge");
// src/utils/index.ts
function detectTailwind() {
    if (typeof window === "undefined") return true;
    var tailwindClasses = [
        "sm:",
        "md:",
        "lg:",
        "xl:",
        "2xl:",
        "flex",
        "grid",
        "container",
        "px-",
        "py-",
        "mx-",
        "my-",
        "bg-",
        "text-",
        "border-"
    ];
    var styleSheets = Array.from(document.styleSheets);
    try {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = styleSheets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var sheet = _step.value;
                try {
                    var _sheet_href;
                    if (!((_sheet_href = sheet.href) === null || _sheet_href === void 0 ? void 0 : _sheet_href.includes(window.location.origin))) continue;
                    var rules = Array.from(sheet.cssRules);
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        var _loop = function() {
                            var rule = _step1.value;
                            var ruleText = rule.cssText;
                            if (tailwindClasses.some(function(cls) {
                                return ruleText.includes(cls);
                            })) {
                                return {
                                    v: true
                                };
                            }
                            if (ruleText.includes("@tailwind") || ruleText.includes("@layer") || ruleText.includes("@apply")) {
                                return {
                                    v: true
                                };
                            }
                        };
                        for(var _iterator1 = rules[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var _ret = _loop();
                            if (_type_of(_ret) === "object") return _ret.v;
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                } catch (e) {
                    continue;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        var allElements = Array.from(document.getElementsByTagName("*"));
        var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
        try {
            var _loop1 = function() {
                var element = _step2.value;
                if (tailwindClasses.some(function(cls) {
                    return Array.from(element.classList).some(function(className) {
                        return className.includes(cls.replace(":", "-"));
                    });
                })) {
                    return {
                        v: true
                    };
                }
            };
            for(var _iterator2 = allElements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                var _ret1 = _loop1();
                if (_type_of(_ret1) === "object") return _ret1.v;
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                    _iterator2.return();
                }
            } finally{
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
        return false;
    } catch (e) {
        console.warn("Error detecting Tailwind CSS");
        return true;
    }
}
function showTailwindWarning() {
    console.warn("%cTailwind Screen Size Warning: Tailwind CSS not detected. \nThis component is designed to work with Tailwind CSS. \nPlease ensure you have Tailwind CSS properly installed in your project.\nVisit https://tailwindcss.com/docs/installation for installation instructions.", "color: #f59e0b; font-weight: bold;");
}
// src/react/TailwindScreenSize.tsx
var positionClasses = {
    "top-left": "top-5 left-5",
    "top-right": "top-5 right-5",
    "bottom-left": "bottom-5 left-5",
    "bottom-right": "bottom-5 right-5",
    "top-center": "top-5 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-5 left-1/2 -translate-x-1/2"
};
var themeClasses = {
    dark: {
        container: "bg-gray-900/90 text-white",
        text: "text-white",
        divider: "bg-gray-700",
        breakpoint: "text-gray-400"
    },
    light: {
        container: "bg-white/90 text-gray-900",
        text: "text-gray-900",
        divider: "bg-gray-200",
        breakpoint: "text-gray-600"
    },
    glass: {
        container: "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg",
        text: "text-white",
        divider: "bg-white/20",
        breakpoint: "text-white/80"
    },
    minimal: {
        container: "bg-transparent",
        text: "text-gray-600 dark:text-gray-300",
        divider: "bg-gray-300 dark:bg-gray-700",
        breakpoint: "text-gray-500 dark:text-gray-400"
    },
    slate: {
        container: "bg-slate-600/90 text-white",
        text: "text-white",
        divider: "bg-slate-400",
        breakpoint: "text-slate-200"
    },
    gray: {
        container: "bg-gray-600/90 text-white",
        text: "text-white",
        divider: "bg-gray-400",
        breakpoint: "text-gray-200"
    },
    zinc: {
        container: "bg-zinc-600/90 text-white",
        text: "text-white",
        divider: "bg-zinc-400",
        breakpoint: "text-zinc-200"
    },
    neutral: {
        container: "bg-neutral-600/90 text-white",
        text: "text-white",
        divider: "bg-neutral-400",
        breakpoint: "text-neutral-200"
    },
    stone: {
        container: "bg-stone-600/90 text-white",
        text: "text-white",
        divider: "bg-stone-400",
        breakpoint: "text-stone-200"
    },
    red: {
        container: "bg-red-600/90 text-white",
        text: "text-white",
        divider: "bg-red-400",
        breakpoint: "text-red-200"
    },
    orange: {
        container: "bg-orange-600/90 text-white",
        text: "text-white",
        divider: "bg-orange-400",
        breakpoint: "text-orange-200"
    },
    amber: {
        container: "bg-amber-600/90 text-white",
        text: "text-white",
        divider: "bg-amber-400",
        breakpoint: "text-amber-200"
    },
    yellow: {
        container: "bg-yellow-500/90 text-white",
        text: "text-white",
        divider: "bg-yellow-300",
        breakpoint: "text-yellow-100"
    },
    lime: {
        container: "bg-lime-600/90 text-white",
        text: "text-white",
        divider: "bg-lime-400",
        breakpoint: "text-lime-200"
    },
    green: {
        container: "bg-green-600/90 text-white",
        text: "text-white",
        divider: "bg-green-400",
        breakpoint: "text-green-200"
    },
    emerald: {
        container: "bg-emerald-600/90 text-white",
        text: "text-white",
        divider: "bg-emerald-400",
        breakpoint: "text-emerald-200"
    },
    teal: {
        container: "bg-teal-600/90 text-white",
        text: "text-white",
        divider: "bg-teal-400",
        breakpoint: "text-teal-200"
    },
    cyan: {
        container: "bg-cyan-600/90 text-white",
        text: "text-white",
        divider: "bg-cyan-400",
        breakpoint: "text-cyan-200"
    },
    sky: {
        container: "bg-sky-600/90 text-white",
        text: "text-white",
        divider: "bg-sky-400",
        breakpoint: "text-sky-200"
    },
    blue: {
        container: "bg-blue-600/90 text-white",
        text: "text-white",
        divider: "bg-blue-400",
        breakpoint: "text-blue-200"
    },
    indigo: {
        container: "bg-indigo-600/90 text-white",
        text: "text-white",
        divider: "bg-indigo-400",
        breakpoint: "text-indigo-200"
    },
    violet: {
        container: "bg-violet-600/90 text-white",
        text: "text-white",
        divider: "bg-violet-400",
        breakpoint: "text-violet-200"
    },
    purple: {
        container: "bg-purple-600/90 text-white",
        text: "text-white",
        divider: "bg-purple-400",
        breakpoint: "text-purple-200"
    },
    fuchsia: {
        container: "bg-fuchsia-600/90 text-white",
        text: "text-white",
        divider: "bg-fuchsia-400",
        breakpoint: "text-fuchsia-200"
    },
    pink: {
        container: "bg-pink-600/90 text-white",
        text: "text-white",
        divider: "bg-pink-400",
        breakpoint: "text-pink-200"
    },
    rose: {
        container: "bg-rose-600/90 text-white",
        text: "text-white",
        divider: "bg-rose-400",
        breakpoint: "text-rose-200"
    }
};
var defaultBreakpoints = [
    {
        screenTitle: "XS",
        minWidth: 0
    },
    {
        screenTitle: "SM",
        minWidth: 640
    },
    {
        screenTitle: "MD",
        minWidth: 768
    },
    {
        screenTitle: "LG",
        minWidth: 1024
    },
    {
        screenTitle: "XL",
        minWidth: 1280
    },
    {
        screenTitle: "2XL",
        minWidth: 1536
    }
];
var isDevelopment = function() {
    if (typeof process === "undefined") return false;
    return process.env.NODE_ENV === "development";
};
var baseClasses = {
    container: "fixed flex items-center gap-2 rounded-full px-2.5 py-1 font-mono text-xs font-medium transition-all duration-200",
    divider: "h-4 w-px"
};
var TailwindScreenSize = function(param) {
    var _param_className = param.className, className = _param_className === void 0 ? "" : _param_className, _param_position = param.position, position = _param_position === void 0 ? "bottom-right" : _param_position, _param_theme = param.theme, theme = _param_theme === void 0 ? "dark" : _param_theme, show = param.show, _param_containerClassName = param.containerClassName, containerClassName = _param_containerClassName === void 0 ? "" : _param_containerClassName, _param_textClassName = param.textClassName, textClassName = _param_textClassName === void 0 ? "" : _param_textClassName, _param_dividerClassName = param.dividerClassName, dividerClassName = _param_dividerClassName === void 0 ? "" : _param_dividerClassName, _param_breakpointClassName = param.breakpointClassName, breakpointClassName = _param_breakpointClassName === void 0 ? "" : _param_breakpointClassName, breakpoints = param.breakpoints, _param_showDefaultBreakpoints = param.showDefaultBreakpoints, showDefaultBreakpoints = _param_showDefaultBreakpoints === void 0 ? true : _param_showDefaultBreakpoints, _param_hideNoTailwindCSSWarning = param.hideNoTailwindCSSWarning, hideNoTailwindCSSWarning = _param_hideNoTailwindCSSWarning === void 0 ? false : _param_hideNoTailwindCSSWarning;
    var _ref = _sliced_to_array((0, import_react.useState)(false), 2), mounted = _ref[0], setMounted = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react.useState)(null), 2), dimensions = _ref1[0], setDimensions = _ref1[1];
    var _ref2 = _sliced_to_array((0, import_react.useState)(""), 2), currentBreakpoint = _ref2[0], setCurrentBreakpoint = _ref2[1];
    var _ref3 = _sliced_to_array((0, import_react.useState)(true), 2), hasTailwind = _ref3[0], setHasTailwind = _ref3[1];
    var _ref4 = _sliced_to_array((0, import_react.useState)(false), 2), isDevMode = _ref4[0], setIsDevMode = _ref4[1];
    var allBreakpoints = (0, import_react.useMemo)(function() {
        var customBreakpoints = breakpoints || [];
        if (!showDefaultBreakpoints) return customBreakpoints;
        return _to_consumable_array(defaultBreakpoints).concat(_to_consumable_array(customBreakpoints)).sort(function(a, b) {
            return a.minWidth - b.minWidth;
        });
    }, [
        breakpoints,
        showDefaultBreakpoints
    ]);
    (0, import_react.useEffect)(function() {
        setMounted(true);
        setIsDevMode(isDevelopment());
        if (typeof window !== "undefined") {
            var tailwindDetected = detectTailwind();
            setHasTailwind(tailwindDetected);
        }
    }, []);
    (0, import_react.useEffect)(function() {
        if (!mounted) return;
        var updateDimensions = function() {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return function() {
            return window.removeEventListener("resize", updateDimensions);
        };
    }, [
        mounted
    ]);
    (0, import_react.useEffect)(function() {
        if (mounted && dimensions) {
            var current = allBreakpoints.slice().reverse().find(function(breakpoint) {
                return dimensions.width >= breakpoint.minWidth;
            });
            setCurrentBreakpoint((current === null || current === void 0 ? void 0 : current.screenTitle) || "");
        }
    }, [
        dimensions,
        allBreakpoints,
        mounted
    ]);
    if (!mounted || !dimensions) return null;
    if (show === false) return null;
    if (!isDevMode && show !== true) return null;
    var width = dimensions.width, height = dimensions.height;
    var themeStyles = themeClasses[theme];
    return /* @__PURE__ */ import_react.default.createElement("div", {
        className: (0, import_tailwind_merge.twMerge)(baseClasses.container, positionClasses[position], themeStyles.container, containerClassName, className)
    }, /* @__PURE__ */ import_react.default.createElement("span", {
        className: (0, import_tailwind_merge.twMerge)(themeStyles.text, textClassName)
    }, width.toLocaleString(), " \xD7 ", height.toLocaleString()), /* @__PURE__ */ import_react.default.createElement("div", {
        className: (0, import_tailwind_merge.twMerge)(baseClasses.divider, themeStyles.divider, dividerClassName)
    }), /* @__PURE__ */ import_react.default.createElement("span", {
        className: (0, import_tailwind_merge.twMerge)(themeStyles.breakpoint, breakpointClassName)
    }, currentBreakpoint), !hasTailwind && !hideNoTailwindCSSWarning && /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", {
        className: (0, import_tailwind_merge.twMerge)(baseClasses.divider, themeStyles.divider, dividerClassName)
    }), /* @__PURE__ */ import_react.default.createElement("span", {
        className: (0, import_tailwind_merge.twMerge)(themeStyles.breakpoint, breakpointClassName)
    }, "No TailwindCSS Detected")));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    TailwindScreenSize: TailwindScreenSize,
    detectTailwind: detectTailwind,
    showTailwindWarning: showTailwindWarning
});
