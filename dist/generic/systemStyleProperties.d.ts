import { Colors, PalleteColor, PercentValues, UnitValues, ThemeColor, ContainerlessBreakpoints, Breakpoint, ShadowValues } from './setting';
import { StylePropertyValues, Ran } from './utils';
export declare type ContainerProperties = {
    maxWidthContainer?: Exclude<Breakpoint, ContainerlessBreakpoints>[];
};
declare const GRID_SISTEM: readonly [readonly ["spacing", "o-g"], readonly ["rowSpacing", "o-gx"], readonly ["columnSpacing", "o-gy"]];
export declare type GridSystem = {
    [key in typeof GRID_SISTEM[number][0]]: UnitValues;
};
declare const BORDER_SHORTHAND: readonly [readonly ["border", "u-border"], readonly ["borderTop", "u-border-top"], readonly ["borderBottom", "u-border-bottom"], readonly ["borderLeft", "u-border-left"], readonly ["borderRight", "u-border-right"]];
declare const BORDER_WIDTH: readonly [readonly ["borderWidth", "u-border-width"], readonly ["borderTopWidth", "u-border-top-width"], readonly ["borderBottomWidth", "u-border-bottom-width"], readonly ["borderLeftWidth", "u-border-left-width"], readonly ["borderRightWidth", "u-border-right-width"]];
declare const BORDER_STYLE: readonly [readonly ["borderStyle", "u-border-style"], readonly ["borderTopStyle", "u-border-top-style"], readonly ["borderBottomStyle", "u-border-bottom-style"], readonly ["borderLeftStyle", "u-border-left-style"], readonly ["borderRightStyle", "u-border-right-style"]];
declare const BORDER_RADIUS: readonly [readonly ["borderRadius", "u-border-radius"], readonly ["borderRadiusTL", "u-border-tl-radius"], readonly ["borderRadiusTR", "u-border-tr-radius"], readonly ["borderRadiusBL", "u-border-bl-radius"], readonly ["borderRadiusBR", "u-border-br-radius"]];
export declare const BORDER: (readonly ["border", "u-border"] | readonly ["borderTop", "u-border-top"] | readonly ["borderBottom", "u-border-bottom"] | readonly ["borderLeft", "u-border-left"] | readonly ["borderRight", "u-border-right"] | readonly ["borderWidth", "u-border-width"] | readonly ["borderTopWidth", "u-border-top-width"] | readonly ["borderBottomWidth", "u-border-bottom-width"] | readonly ["borderLeftWidth", "u-border-left-width"] | readonly ["borderRightWidth", "u-border-right-width"] | readonly ["borderStyle", "u-border-style"] | readonly ["borderTopStyle", "u-border-top-style"] | readonly ["borderBottomStyle", "u-border-bottom-style"] | readonly ["borderLeftStyle", "u-border-left-style"] | readonly ["borderRightStyle", "u-border-right-style"] | readonly ["borderRadius", "u-border-radius"] | readonly ["borderRadiusTL", "u-border-tl-radius"] | readonly ["borderRadiusTR", "u-border-tr-radius"] | readonly ["borderRadiusBL", "u-border-bl-radius"] | readonly ["borderRadiusBR", "u-border-br-radius"])[];
declare type BorderShorthandProperties = {
    [key in typeof BORDER_SHORTHAND[number][0]]: true | 'none';
};
declare type BorderWidthProperties = {
    [key in typeof BORDER_WIDTH[number][0]]: UnitValues;
};
declare type BorderStyleProperties = {
    [key in typeof BORDER_STYLE[number][0]]: "dashed" | "dotted" | "double" | "groove" | "hidden";
};
declare type BorderRadiusProperties = {
    [key in typeof BORDER_RADIUS[number][0]]: UnitValues | 50;
};
export declare type BorderProperties = Partial<BorderShorthandProperties & BorderWidthProperties & BorderStyleProperties & BorderRadiusProperties>;
export declare type SystemSBorderProperties = StylePropertyValues<BorderProperties>;
export declare const SHADOW: readonly [readonly ["shadow", "u-shadow"]];
export declare type ShadowProperties = {
    shadow: ShadowValues;
};
export declare type SystemSShadowProperties = StylePropertyValues<ShadowProperties>;
export declare const COLOR: readonly [readonly ["color", "u-text"], readonly ["bgColor", "u-bg"], readonly ["borderColor", "u-border"], readonly ["pallete", "u-pallete"], readonly ["themeColor", "u-theme-color"]];
declare type ColorPropertyKeys = typeof COLOR[number][0];
export declare type ColorProperties = Partial<{
    [key in ColorPropertyKeys]: key extends 'pallete' ? PalleteColor : (key extends 'themeColor' ? ThemeColor : Colors);
}>;
export declare type SystemColorProperties = StylePropertyValues<ColorProperties>;
declare const SPACING: readonly [readonly ["marginTop", "u-mt"], readonly ["marginRight", "u-mr"], readonly ["marginBottom", "u-mb"], readonly ["marginLeft", "u-ml"], readonly ["pxy", "u-pxy"], readonly ["paddingTop", "u-pt"], readonly ["paddingRigth", "u-pr"], readonly ["paddingBottom", "u-pb"], readonly ["paddingLeft", "u-pl"], readonly ["px", "u-px"], readonly ["py", "u-py"]];
declare type SpacingPropertyKeys = typeof SPACING[number][0];
export declare type SpacingProperties = {
    [key in SpacingPropertyKeys]: UnitValues;
};
declare const SIZING: readonly [readonly ["w", "u-w"], readonly ["h", "u-h"], readonly ["mw", "u-mw"], readonly ["mh", "u-mh"]];
declare type SizingPropertyKeys = typeof SIZING[number][0];
export declare type SizingWithoutClass = {
    maxWidth: number;
    minWidth: number;
};
export declare type SizingWithClass = {
    [key in SizingPropertyKeys]: PercentValues;
};
export declare type SizingProperties = SizingWithoutClass & SizingWithClass;
export declare const FLEXBOX_CONTAINER: string[][];
export declare type FlexboxContainerProperties = {
    typeDisplay: 'flex' | 'inline-flex';
    flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    justifyContent: 'start' | 'center' | 'end' | 'between' | 'around' | 'distribute';
    alignItems: 'start' | 'end' | 'center' | 'baseline';
    alignContent: 'start' | 'end' | 'center' | 'baseline';
    flexWrap: 'wrap' | 'no-wrap' | 'wrap-reverse';
    flexGap: UnitValues;
};
export declare type SystemSFlexboxContainerProperties = StylePropertyValues<FlexboxContainerProperties>;
export declare const FLEXBOX_ITEM: string[][];
export declare type FlexboxItemProperties = {
    alignSelf: 'start' | 'end' | 'center';
    order: 0 | Ran<13>;
    flexShrink: 0 | Ran<13>;
    flexGrow: 0 | Ran<13>;
    flexBasis: 'auto' | 'max-content' | 'min-content' | string;
};
export declare type SystemSFlexboxItemProperties = StylePropertyValues<FlexboxItemProperties>;
export declare const DISPLAY: string[][];
export declare type DisplayProperties = {
    display: 'none' | 'block' | 'inline' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid';
    position: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
    overflow: 'hidden' | 'scroll' | 'auto' | 'visible';
};
export declare type SystemSDisplayProperties = StylePropertyValues<DisplayProperties>;
export declare const TEXT: string[][];
export declare type TextProperties = {
    variant: 'big-title' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'smaller' | 'small' | 'normal' | 'big' | 'bigger' | 'biggest';
    textAlign: 'left' | 'center' | 'right' | 'justify';
    whiteSpace: 'wrap' | 'nowrap';
    textTransform: 'uppercase' | 'lowercase' | 'capitalize';
    textDecoration: 'underline' | 'middle' | 'none';
    fontSize: 'h1' | 'h2' | 'h3' | 'normal' | 'small' | 'smaller' | UnitValues;
    fontWeight: 'normal' | 'medium' | 'semi-bold' | 'bold';
};
export declare type SystemSTextProperties = StylePropertyValues<TextProperties>;
export declare type BlockAligmentsProperties = {
    alignTo: 'left' | 'center' | 'right';
    alignBlockTo: 'left' | 'center' | 'right';
};
export declare type SystemStyleProperties = StylePropertyValues<BorderProperties> & StylePropertyValues<ShadowProperties> & StylePropertyValues<ColorProperties> & StylePropertyValues<SpacingProperties> & StylePropertyValues<SizingProperties> & StylePropertyValues<FlexboxContainerProperties> & StylePropertyValues<FlexboxItemProperties> & StylePropertyValues<DisplayProperties> & StylePropertyValues<TextProperties> & StylePropertyValues<BlockAligmentsProperties>;
export declare const SYSTEM_STYLE_PROPERTY_KEYS: (string[] | readonly ["spacing", "o-g"] | readonly ["rowSpacing", "o-gx"] | readonly ["columnSpacing", "o-gy"] | readonly ["border", "u-border"] | readonly ["borderTop", "u-border-top"] | readonly ["borderBottom", "u-border-bottom"] | readonly ["borderLeft", "u-border-left"] | readonly ["borderRight", "u-border-right"] | readonly ["borderWidth", "u-border-width"] | readonly ["borderTopWidth", "u-border-top-width"] | readonly ["borderBottomWidth", "u-border-bottom-width"] | readonly ["borderLeftWidth", "u-border-left-width"] | readonly ["borderRightWidth", "u-border-right-width"] | readonly ["borderStyle", "u-border-style"] | readonly ["borderTopStyle", "u-border-top-style"] | readonly ["borderBottomStyle", "u-border-bottom-style"] | readonly ["borderLeftStyle", "u-border-left-style"] | readonly ["borderRightStyle", "u-border-right-style"] | readonly ["borderRadius", "u-border-radius"] | readonly ["borderRadiusTL", "u-border-tl-radius"] | readonly ["borderRadiusTR", "u-border-tr-radius"] | readonly ["borderRadiusBL", "u-border-bl-radius"] | readonly ["borderRadiusBR", "u-border-br-radius"] | readonly ["shadow", "u-shadow"] | readonly ["color", "u-text"] | readonly ["bgColor", "u-bg"] | readonly ["borderColor", "u-border"] | readonly ["pallete", "u-pallete"] | readonly ["themeColor", "u-theme-color"] | readonly ["marginTop", "u-mt"] | readonly ["marginRight", "u-mr"] | readonly ["marginBottom", "u-mb"] | readonly ["marginLeft", "u-ml"] | readonly ["pxy", "u-pxy"] | readonly ["paddingTop", "u-pt"] | readonly ["paddingRigth", "u-pr"] | readonly ["paddingBottom", "u-pb"] | readonly ["paddingLeft", "u-pl"] | readonly ["px", "u-px"] | readonly ["py", "u-py"] | readonly ["w", "u-w"] | readonly ["h", "u-h"] | readonly ["mw", "u-mw"] | readonly ["mh", "u-mh"])[];
export {};
