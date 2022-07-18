"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClassGenerator = void 0;
var react_1 = require("react");
var classnames_1 = __importDefault(require("classnames"));
var classForReact_1 = require("../utilities/classForReact");
var useClassGenerator = function (_a) {
    var _b;
    var p = _a.p, deps = _a.deps, props = _a.props, className = _a.className, propertySummary = _a.propertySummary, _c = _a.mainClasses, mainClasses = _c === void 0 ? [] : _c;
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var _d = (0, react_1.useMemo)(function () { return (0, classForReact_1.generateComponentClasses)(props, propertySummary); }, __spreadArray(__spreadArray([], deps, true), [propertySummary, props], false)), rest = _d.rest, restInherit = _d.restInherit, generatedClasses = _d.generatedClasses;
    var extraClasses = (0, react_1.useRef)([]);
    var arrayClasses = [
        __spreadArray([], mainClasses, true),
        (_b = {}, _b["".concat(p)] = p, _b),
        className,
        generatedClasses
    ];
    var classes = (0, classnames_1.default)(arrayClasses);
    extraClasses.current = args.map(function (arr) { return (0, classnames_1.default)(arr); });
    return {
        rest: rest,
        restInherit: restInherit,
        mainClasses: classes,
        extraClasses: extraClasses.current
    };
};
exports.useClassGenerator = useClassGenerator;
