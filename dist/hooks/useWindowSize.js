"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useWindowSize() {
    var _a = (0, react_1.useState)([0, 0]), size = _a[0], setSize = _a[1];
    (0, react_1.useLayoutEffect)(function () {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return function () { return window.removeEventListener('resize', updateSize); };
    }, []);
    return size;
}
exports.default = useWindowSize;
