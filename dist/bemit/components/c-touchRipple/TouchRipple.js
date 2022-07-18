"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var TouchRipple = function (_a) {
    var centerRipple = _a.centerRipple;
    var ref = (0, react_1.useRef)(null);
    var rippleEffect = function (e) {
        var _a;
        if (ref.current) {
            var circle_1 = document.createElement('span');
            circle_1.classList.add('c-touch__ripple');
            if (e.currentTarget) {
                var offsetLeft = ref.current.getBoundingClientRect().left;
                var offsetTop = ref.current.getBoundingClientRect().top;
                var x = e.clientX - offsetLeft;
                var y = e.clientY - offsetTop;
                var sizeX = Math.max((ref.current.offsetWidth - x), x) * 3;
                var sizeY = Math.max((ref.current.offsetHeight - y), y) * 3;
                var rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
                circle_1.style.width = "".concat(rippleSize, "px");
                circle_1.style.height = "".concat(rippleSize, "px");
                if (centerRipple) {
                    circle_1.style.left = "".concat(-(rippleSize / 2) + ref.current.getBoundingClientRect().width / 2, "px");
                    circle_1.style.top = "".concat(-(rippleSize / 2) + ref.current.getBoundingClientRect().height / 2, "px");
                }
                else {
                    circle_1.style.left = "".concat(-(rippleSize / 2) + x, "px");
                    circle_1.style.top = "".concat(-(rippleSize / 2) + y, "px");
                }
                (_a = ref.current) === null || _a === void 0 ? void 0 : _a.appendChild(circle_1);
                setTimeout(function () {
                    circle_1.remove();
                }, 550);
            }
        }
    };
    return ((0, jsx_runtime_1.jsx)("span", { ref: ref, onClick: rippleEffect, className: 'c-touch' }));
};
exports.default = react_1.default.memo(TouchRipple);
