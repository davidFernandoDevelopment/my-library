"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDelayUnmount = void 0;
var react_1 = require("react");
function useDelayUnmount(isMounted, delayTime) {
    var _a = (0, react_1.useState)(false), shouldRender = _a[0], setShouldRender = _a[1];
    (0, react_1.useEffect)(function () {
        var timeoutId;
        if (isMounted) {
            setShouldRender(true);
        }
        else {
            timeoutId = setTimeout(function () { return setShouldRender(false); }, delayTime);
        }
        return function () {
            clearTimeout(timeoutId);
        };
    }, [isMounted, delayTime]);
    return shouldRender;
}
exports.useDelayUnmount = useDelayUnmount;
