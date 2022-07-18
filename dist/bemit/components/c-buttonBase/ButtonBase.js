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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var TouchRipple_1 = __importDefault(require("../c-touchRipple/TouchRipple"));
var classForReact_1 = require("../../../utilities/classForReact");
var systemComponentProperties_1 = require("../../../generic/systemComponentProperties");
var ButtonBase = react_1.default.forwardRef(function ButtonBase(_a, ref) {
    var as = _a.as, style = _a.style, children = _a.children, className = _a.className, _b = _a.disableRipple, disableRipple = _b === void 0 ? false : _b, _c = _a.centerRipple, centerRipple = _c === void 0 ? false : _c, // PROPIEDAD QUE REQUIERE EL COMPONENTE-DEP TOUCHRIPPLE.
    restProps = __rest(_a, ["as", "style", "children", "className", "disableRipple", "centerRipple"]) // RESTO DE PROPIEDADES QUE GENERARAN CLASSES O PROPIEDADES DE TAG.
    ;
    var _d = (0, react_1.useMemo)(function () { return (0, classForReact_1.generateComponentClasses)(restProps, systemComponentProperties_1.ButtonBasePropertySummary); }, 
    //eslint-disable-next-line
    [restProps.disabled]), generatedClasses = _d.generatedClasses, rest = _d.rest, restInherit = _d.restInherit;
    var arrayClasses = [
        'c-buttonBase',
        className,
        generatedClasses
    ];
    var classes = (0, classnames_1.default)(arrayClasses);
    var Component = as || 'button';
    return ((0, jsx_runtime_1.jsxs)(Component, __assign({}, rest, restInherit, { ref: ref, style: style, className: classes }, { children: [children, !disableRipple ? (0, jsx_runtime_1.jsx)(TouchRipple_1.default, { centerRipple: centerRipple }) : null] })));
});
exports.default = ButtonBase;
