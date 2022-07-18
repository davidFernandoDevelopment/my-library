"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var classForReact_1 = require("../../../utilities/classForReact");
var OContainer = function (_a) {
    var _b, _c;
    var p = _a.p, as = _a.as, style = _a.style, children = _a.children, className = _a.className, restProps = __rest(_a, ["p", "as", "style", "children", "className"]);
    var generatedClasses = (0, classForReact_1.generateClasses)(restProps).generatedClasses;
    var arrayClasses = [
        generatedClasses,
        (_b = {}, _b["".concat(p, "__container")] = p, _b),
        (_c = {}, _c["".concat(className)] = className, _c),
        { 'o-container': !generatedClasses },
    ];
    var classes = (0, classnames_1.default)(arrayClasses);
    var Component = as || 'div';
    return ((0, jsx_runtime_1.jsx)(Component, __assign({ className: classes, style: style }, { children: children })));
};
exports.default = OContainer;
