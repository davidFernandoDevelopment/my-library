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
exports.generateComponentClasses = exports.generateClasses = void 0;
var systemStyleProperties_1 = require("../generic/systemStyleProperties");
var setting_1 = require("../generic/setting");
var helpersForClass_1 = require("./helpersForClass");
var generateDecimal = function (val) {
    var newVal = val;
    if (newVal.toString().includes('.')) {
        var _a = newVal.toString().split('.'), entero = _a[0], decimal = _a[1];
        newVal = "".concat(entero, "-").concat(decimal);
    }
    return newVal;
};
var belongsToProperties = function (key, PROPERTIES) { return PROPERTIES.find(function (_a) {
    var i = _a[0];
    return i === key;
}); };
var generateClassObject = function (prefix, prop) {
    var result = [];
    if (prop && typeof prop == 'object' && Array.isArray(prop)) {
        var style = prop.map(function (bp) {
            var newSize = bp === 'xxs' ? '' : "-".concat(bp);
            return "".concat(prefix).concat(newSize);
        }).join(' ');
        result = __spreadArray(__spreadArray([], result, true), [
            style
        ], false);
    }
    else if (prop && typeof prop == 'object') {
        var p_1 = prop;
        var keys = Object.keys(p_1);
        keys.forEach(function (key) {
            if (p_1[key] !== false) {
                var size = key === 'xxs' ? "" : "-".concat(key);
                var val = p_1[key] && typeof p_1[key] === 'number' ?
                    "-".concat(generateDecimal(p_1[key])) :
                    (typeof p_1[key] === 'boolean' ? '' : "-".concat(p_1[key]));
                var style = "".concat(prefix).concat(size).concat(val);
                result = __spreadArray(__spreadArray([], result, true), [
                    style
                ], false);
            }
        });
    }
    else if (prop !== undefined && prop !== false) {
        var val = typeof prop === 'number' ?
            "-".concat(generateDecimal(prop)) :
            (typeof prop === 'boolean' ? '' : "-".concat(prop));
        var style = "".concat(prefix).concat(val);
        result = __spreadArray(__spreadArray([], result, true), [
            style
        ], false);
    }
    return result.join(' ');
};
var generateClasses = function (props, PROPERTIES) {
    var _a;
    if (PROPERTIES === void 0) { PROPERTIES = systemStyleProperties_1.SYSTEM_STYLE_PROPERTY_KEYS; }
    var restProps = {};
    var classes = '';
    var existInTheStyleSystem = false;
    for (var key in props) {
        var isProperty = belongsToProperties(key, PROPERTIES);
        if (!!isProperty) {
            classes += "".concat(generateClassObject(isProperty[1], props[isProperty[0]]), " ");
            existInTheStyleSystem = true;
        }
        else if (key === 'sx') {
            classes += generateClassesWithPropSx(props[key]);
        }
        else {
            restProps = __assign(__assign({}, restProps), (_a = {}, _a["".concat(key)] = props[key], _a));
        }
    }
    return {
        rest: restProps,
        existInTheStyleSystem: existInTheStyleSystem,
        generatedClasses: classes.trim()
    };
};
exports.generateClasses = generateClasses;
var generateClassesWithPropSx = function (props) {
    var classes = '';
    var _loop_1 = function (prop) {
        var newProp = belongsToProperties(prop, systemStyleProperties_1.SYSTEM_STYLE_PROPERTY_KEYS);
        if (newProp) {
            var newClasses = generateClassObject(newProp[1], props[newProp[0]]);
            classes += "".concat(newClasses, " ");
        }
        else {
            if (typeof props[prop] !== 'object') {
                var keyDate = Date.now().toString().slice(-6);
                var classAlias = ".sx-".concat(prop).concat(keyDate);
                var declaration = (0, helpersForClass_1.createDeclaration)(prop);
                if (typeof props[prop] === 'number') {
                    var decClass = "".concat(declaration, ": ").concat(props[prop], "px");
                    classes += "".concat(classAlias.split('.')[1], " ");
                    (0, helpersForClass_1.createClass)(classAlias, decClass);
                }
            }
            else {
                var classAlias_1 = ".sx-".concat(prop + Date.now().toString());
                var declaration_1 = (0, helpersForClass_1.createDeclaration)(prop);
                classes += "".concat(classAlias_1.split('.')[1], " ");
                Object.keys(props[prop]).forEach(function (bpKey) {
                    var bp = setting_1.BreakpointsValues[bpKey];
                    var decClass = "".concat(declaration_1, ": ").concat(props[prop][bpKey], "px");
                    (0, helpersForClass_1.createClass)(classAlias_1, decClass, bp);
                });
            }
        }
    };
    for (var prop in props) {
        _loop_1(prop);
    }
    return classes;
};
var generateComponentClasses = function (props, componentPropertySummary) {
    var _a, _b;
    var classes = '';
    var restProps = {};
    var restInherit = {};
    var defaultProperties = componentPropertySummary.defaultProperties, utilityProperties = componentPropertySummary.utilityProperties, propertyKeys = componentPropertySummary.propertyKeys, inheritProperties = componentPropertySummary.inheritProperties;
    var inheritProps = inheritProperties || [];
    props = __assign(__assign({}, defaultProperties), props);
    for (var key in props) {
        var isPropertyComponent = belongsToProperties(key, propertyKeys);
        var isPropertyUtilities = belongsToProperties(key, utilityProperties);
        if (!!isPropertyComponent) {
            classes += "".concat(generateClassObject(isPropertyComponent[1], props[isPropertyComponent[0]]), " ");
        }
        else if (!!isPropertyUtilities) {
            classes += "".concat(generateClassObject(isPropertyUtilities[1], props[isPropertyUtilities[0]]), " ");
        }
        else if (key === 'sx') {
            classes += generateClassesWithPropSx(props[key]);
        }
        else {
            restProps = __assign(__assign({}, restProps), (_a = {}, _a["".concat(key)] = props[key], _a));
        }
        if (inheritProps.includes(key)) {
            restInherit = __assign(__assign({}, restInherit), (_b = {}, _b["".concat(key)] = props[key], _b));
        }
    }
    ;
    return {
        rest: restProps,
        restInherit: restInherit,
        generatedClasses: classes.trim()
    };
};
exports.generateComponentClasses = generateComponentClasses;
