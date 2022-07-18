"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useImageStatus = void 0;
var react_1 = require("react");
function useImageStatus(src) {
    var image = (0, react_1.useRef)(new Image());
    var _a = (0, react_1.useState)('loading'), loaded = _a[0], setLoaded = _a[1];
    (0, react_1.useEffect)(function () {
        if (!src) {
            setLoaded('error');
            return undefined;
        }
        ;
        var active = true;
        image.current.onload = function () {
            if (!active)
                return;
            setLoaded('loaded');
        };
        image.current.onerror = function () {
            if (!active)
                return;
            setLoaded('error');
        };
        image.current.src = src;
        return function () {
            active = false;
        };
    }, [src]);
    return [loaded, image.current];
}
exports.useImageStatus = useImageStatus;
