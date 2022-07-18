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
var ORow = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var as = _a.as, p = _a.p, style = _a.style, children = _a.children, className = _a.className, _k = _a.columns, columns = _k === void 0 ? {} : _k, restProps = __rest(_a, ["as", "p", "style", "children", "className", "columns"]);
    var _l = (0, classForReact_1.generateClasses)(restProps), generatedClasses = _l.generatedClasses, rest = _l.rest;
    var xxs = columns.xxs, xs = columns.xs, sm = columns.sm, md = columns.md, lg = columns.lg, xl = columns.xl, xxl = columns.xxl;
    var arrayClasses = [
        'o-row',
        className,
        generatedClasses,
        (_b = {}, _b["".concat(p, "__row")] = p, _b),
        (_c = {}, _c["o-col-".concat(xxs)] = xxs, _c),
        (_d = {}, _d["o-col-xs-".concat(xs)] = xs, _d),
        (_e = {}, _e["o-col-sm-".concat(sm)] = sm, _e),
        (_f = {}, _f["o-col-md-".concat(md)] = md, _f),
        (_g = {}, _g["o-col-lg-".concat(lg)] = lg, _g),
        (_h = {}, _h["o-col-xl-".concat(xl)] = xl, _h),
        (_j = {}, _j["o-col-xxl-".concat(xxl)] = xxl, _j),
    ];
    var classes = (0, classnames_1.default)(arrayClasses);
    var Component = as || 'div';
    return ((0, jsx_runtime_1.jsx)(Component, __assign({}, rest, { className: classes, style: style }, { children: children })));
};
exports.default = ORow;
