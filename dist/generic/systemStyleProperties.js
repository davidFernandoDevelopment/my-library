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
exports.SYSTEM_STYLE_PROPERTY_KEYS = exports.TEXT = exports.DISPLAY = exports.FLEXBOX_ITEM = exports.FLEXBOX_CONTAINER = exports.COLOR = exports.SHADOW = exports.BORDER = void 0;
var CONTAINER = [['maxWidthContainer', 'o-container']];
var GRID_SISTEM = [['spacing', 'o-g'], ['rowSpacing', 'o-gx'], ['columnSpacing', 'o-gy']];
var BORDER_SHORTHAND = [['border', 'u-border'], ['borderTop', 'u-border-top'], ['borderBottom', 'u-border-bottom'], ['borderLeft', 'u-border-left'], ['borderRight', 'u-border-right']];
var BORDER_WIDTH = [['borderWidth', 'u-border-width'], ['borderTopWidth', 'u-border-top-width'], ['borderBottomWidth', 'u-border-bottom-width'], ['borderLeftWidth', 'u-border-left-width'], ['borderRightWidth', 'u-border-right-width']];
var BORDER_STYLE = [['borderStyle', 'u-border-style'], ['borderTopStyle', 'u-border-top-style'], ['borderBottomStyle', 'u-border-bottom-style'], ['borderLeftStyle', 'u-border-left-style'], ['borderRightStyle', 'u-border-right-style']];
var BORDER_RADIUS = [['borderRadius', 'u-border-radius'], ['borderRadiusTL', 'u-border-tl-radius'], ['borderRadiusTR', 'u-border-tr-radius'], ['borderRadiusBL', 'u-border-bl-radius'], ['borderRadiusBR', 'u-border-br-radius']];
exports.BORDER = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], BORDER_SHORTHAND, true), BORDER_STYLE, true), BORDER_WIDTH, true), BORDER_RADIUS, true);
exports.SHADOW = [['shadow', 'u-shadow']];
exports.COLOR = [['color', 'u-text'], ['bgColor', 'u-bg'], ['borderColor', 'u-border'], ['pallete', 'u-pallete'], ['themeColor', 'u-theme-color']];
var SPACING = [['marginTop', 'u-mt'], ['marginRight', 'u-mr'], ['marginBottom', 'u-mb'], ['marginLeft', 'u-ml'], ['pxy', 'u-pxy'], ['paddingTop', 'u-pt'], ['paddingRigth', 'u-pr'], ['paddingBottom', 'u-pb'], ['paddingLeft', 'u-pl'], ['px', 'u-px'], ['py', 'u-py']];
var SIZING = [['w', 'u-w'], ['h', 'u-h'], ['mw', 'u-mw'], ['mh', 'u-mh']];
exports.FLEXBOX_CONTAINER = [['typeDisplay', 'u-d'], ['flexDirection', 'u-fd'], ['justifyContent', 'u-jc'], ['alignItems', 'u-ai'], ['alignContent', 'u-ac'], ['flexWrap', 'u-fwrap'], ['flexGap', 'u-fg']];
exports.FLEXBOX_ITEM = [['alignSelf', 'u-as'], ['order', 'u-order'], ['flexShrink', 'u-fshrink'], ['flexGrow', 'u-fgrow'], ['flexBasis', 'u-fbasis']];
exports.DISPLAY = [['display', 'u-d'], ['position', 'u-position'], ['overflow', 'u-overflow']];
exports.TEXT = [['variant', 'o'], ['textAlign', 'u-ta'], ['whiteSpace', 'u-ws'], ['textTransform', 'u-tt'], ['textDecoration', 'u-td'], ['fontSize', 'u-fs'], ['fontWeight', 'u-fw']];
var BLOCK_ALIGMENTS = [['alignTo', 'u-to'], ['alignBlockTo', 'u-block']];
exports.SYSTEM_STYLE_PROPERTY_KEYS = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], CONTAINER, true), GRID_SISTEM, true), exports.BORDER, true), exports.SHADOW, true), exports.COLOR, true), SPACING, true), SIZING, true), exports.FLEXBOX_CONTAINER, true), exports.FLEXBOX_ITEM, true), exports.DISPLAY, true), exports.TEXT, true), BLOCK_ALIGMENTS, true);
