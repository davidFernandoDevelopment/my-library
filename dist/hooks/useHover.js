"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHover = void 0;
var react_1 = require("react");
function useHover() {
    var _a = (0, react_1.useState)(false), value = _a[0], setValue = _a[1];
    var ref = (0, react_1.useRef)(null);
    var handleMouseOver = function () { return setValue(true); };
    var handleMouseOut = function () { return setValue(false); };
    (0, react_1.useEffect)(function () {
        var node = ref.current;
        if (node) {
            node.addEventListener('mouseenter', handleMouseOver);
            node.addEventListener('mouseleave', handleMouseOut);
            return function () {
                node === null || node === void 0 ? void 0 : node.removeEventListener('mouseenter', handleMouseOver);
                node === null || node === void 0 ? void 0 : node.removeEventListener('mouseleave', handleMouseOut);
            };
        }
    }, []);
    return [ref, value];
}
exports.useHover = useHover;
