"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDeclaration = exports.createClass = exports.clearClassesSx = exports.CSSString2CSSStyleSheet = void 0;
function CSSString2CSSStyleSheet(css) {
    var style = document.createElement('style');
    style.innerText = css;
    document.head.appendChild(style);
    var sheet = style.sheet;
    document.head.removeChild(style);
    return sheet;
}
exports.CSSString2CSSStyleSheet = CSSString2CSSStyleSheet;
function clearClassesSx(classesSx) {
    var sx = classesSx.split(' ').find(function (i) { return i.includes('sx'); });
    var sxStyles = document.getElementsByTagName('head')[0].querySelectorAll(".".concat(sx));
    sxStyles.forEach(function (s) { return s.remove(); });
}
exports.clearClassesSx = clearClassesSx;
function createClass(name, rules, bp) {
    var style = document.createElement('style');
    style.className = name.split('.')[1];
    document.getElementsByTagName('head')[0].appendChild(style);
    var sheet = style.sheet;
    console.log(sheet);
    if (sheet) {
        bp ?
            sheet.insertRule("@media screen and (min-width: ".concat(bp, "){").concat(name + "{" + rules + "}", "}"), 0) :
            sheet.insertRule(name + "{" + rules + "}", 0);
    }
}
exports.createClass = createClass;
function createDeclaration(classJSS) {
    var classCSS = '';
    for (var _i = 0, classJSS_1 = classJSS; _i < classJSS_1.length; _i++) {
        var i = classJSS_1[_i];
        if (i.charCodeAt(0) >= 65 && i.charCodeAt(0) <= 90) {
            classCSS += "-".concat(i.toLowerCase());
        }
        else {
            classCSS += i;
        }
    }
    return classCSS;
}
exports.createDeclaration = createDeclaration;
