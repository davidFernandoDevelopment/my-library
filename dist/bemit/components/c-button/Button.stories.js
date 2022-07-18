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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_1 = require("./Button");
exports.default = {
    title: 'Components/Button',
    component: Button_1.Button,
    argTypes: {
        size: { control: 'select', options: ["small", "normal", "large", "xlarge"] },
        disabled: { control: 'boolean', defaultValue: false },
        fullWidth: { control: 'boolean', defaultValue: false },
        centerRipple: { control: 'boolean', defaultValue: false },
        disableRipple: { control: 'boolean', defaultValue: false },
        disableElevation: { control: 'boolean', defaultValue: false },
    }
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(Button_1.Button, __assign({}, args)); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    size: 'normal',
    variant: 'default',
    text: 'default text'
};
