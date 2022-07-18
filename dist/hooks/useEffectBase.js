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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEffectBase = void 0;
var react_1 = require("react");
var helpersForClass_1 = require("../utilities/helpersForClass");
var useEffectBase = function (cb, dep, generatedClasses) {
    if (dep === void 0) { dep = []; }
    var justMounted = (0, react_1.useRef)(true);
    (0, react_1.useEffect)(function () {
        if (!justMounted) {
            cb();
        }
        justMounted.current = false;
        return function () {
            (0, helpersForClass_1.clearClassesSx)(generatedClasses);
        };
        //eslint-disable-next-line
    }, __spreadArray([], dep, true));
};
exports.useEffectBase = useEffectBase;
