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
var OCol = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    var as = _a.as, p = _a.p, vxxs = _a.xxs, vxxsPush = _a.xxsPush, vxs = _a.xs, vxsPush = _a.xsPush, vsm = _a.sm, vsmPush = _a.smPush, vmd = _a.md, vmdPush = _a.mdPush, vlg = _a.lg, vlgPush = _a.lgPush, vxl = _a.xl, vxlPush = _a.xlPush, vxxl = _a.xxl, vxxlPush = _a.xxlPush, _s = _a.cols, cols = _s === void 0 ? {} : _s, style = _a.style, children = _a.children, className = _a.className, restProps = __rest(_a, ["as", "p", "xxs", "xxsPush", "xs", "xsPush", "sm", "smPush", "md", "mdPush", "lg", "lgPush", "xl", "xlPush", "xxl", "xxlPush", "cols", "style", "children", "className"]);
    var xxs = cols.xxs, xs = cols.xs, sm = cols.sm, md = cols.md, lg = cols.lg, xl = cols.xl, xxl = cols.xxl, xxsPush = cols.xxsPush, xsPush = cols.xsPush, smPush = cols.smPush, mdPush = cols.mdPush, lgPush = cols.lgPush, xlPush = cols.xlPush, xxlPush = cols.xxlPush;
    var _t = (0, classForReact_1.generateClasses)(restProps), generatedClasses = _t.generatedClasses, rest = _t.rest;
    var arrayClasses = [
        'o-col',
        className,
        generatedClasses,
        (_b = {}, _b["".concat(p, "__col")] = p, _b),
        (_c = {}, _c["o-col-".concat(xxs || vxxs)] = xxs || vxxs, _c),
        (_d = {}, _d["o-col-push-".concat(xxsPush || vxxsPush)] = xxsPush || vxxsPush, _d),
        (_e = {}, _e["o-col-xs-".concat(xs || vxs)] = xs || vxs, _e),
        (_f = {}, _f["o-col-push-xs-".concat(xsPush || vxsPush)] = xsPush || vxsPush, _f),
        (_g = {}, _g["o-col-sm-".concat(sm || vsm)] = sm || vsm, _g),
        (_h = {}, _h["o-col-push-sm-".concat(smPush || vsmPush)] = smPush || vsmPush, _h),
        (_j = {}, _j["o-col-md-".concat(md || vmd)] = md || vmd, _j),
        (_k = {}, _k["o-col-push-md-".concat(mdPush || vmdPush)] = mdPush || vmdPush, _k),
        (_l = {}, _l["o-col-lg-".concat(lg || vlg)] = lg || vlg, _l),
        (_m = {}, _m["o-col-push-lg-".concat(lgPush || vlgPush)] = lgPush || vlgPush, _m),
        (_o = {}, _o["o-col-xl-".concat(xl || vxl)] = xl || vxl, _o),
        (_p = {}, _p["o-col-push-xl-".concat(xlPush || vxlPush)] = xlPush || vxlPush, _p),
        (_q = {}, _q["o-col-xxl-".concat(xxl || vxxl)] = xxl || vxxl, _q),
        (_r = {}, _r["o-col-push-xxl-".concat(xxlPush || vxxlPush)] = xxlPush || vxxlPush, _r),
    ];
    var classes = (0, classnames_1.default)(arrayClasses);
    var Component = as || 'div';
    return ((0, jsx_runtime_1.jsx)(Component, __assign({ style: style, className: classes }, rest, { children: children })));
};
exports.default = OCol;
