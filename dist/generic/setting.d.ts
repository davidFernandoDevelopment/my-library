import { Ran } from './utils';
export declare type Globals = "inherit" | "initial" | "unset";
export declare type Container = Element | (() => Element | null) | null;
export declare type Anchor = HTMLElement | ((el?: HTMLElement) => HTMLElement) | null;
declare type CombinedTypes<T extends string, U extends string> = T extends any ? `${T}-${U}` : never;
declare type SubTypeColor = 'light' | 'main' | 'dark';
export declare type ThemeColor = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'title';
export declare type PalleteColor = 'blue' | 'yellow' | 'red' | 'green' | 'gray';
export declare type Colors = CombinedTypes<ThemeColor, SubTypeColor> | CombinedTypes<'background', 'primary' | 'secondary'> | 'white' | 'black' | 'disabled' | 'transparent';
export declare type UnitValues = 0 | 0.125 | 0.25 | 0.5 | 0.75 | 1.25 | 1.5 | 1.75 | 2.5 | Ran<7>;
export declare type PercentValues = 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90 | 95 | 100 | '100vh' | '100vw';
export declare type ShadowValues = 'none' | Ran<7> | 8 | 12 | 16 | 24;
export declare type Breakpoint = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export declare const BreakpointsValues: {
    [key in Breakpoint]: string;
};
export declare type ContainerlessBreakpoints = 'xxs' | 'xs';
export declare type NumColumns = {
    xxs?: Ran<5>;
    xs?: Ran<5>;
    sm?: Ran<7>;
    md?: Ran<7>;
    lg?: Ran<13>;
    xl?: Ran<13>;
    xxl?: Ran<13>;
};
export declare type PushColumns = {
    xxsPush?: Ran<5> | 'none';
    xsPush?: Ran<5> | 'none';
    smPush?: Ran<7> | 'none';
    mdPush?: Ran<7> | 'none';
    lgPush?: Ran<13> | 'none';
    xlPush?: Ran<13> | 'none';
    xxlPush?: Ran<13> | 'none';
};
export declare type Sizes = 'small' | 'normal' | 'large' | 'xlarge';
export declare type VerticalBasiclAlign = 'top' | 'center' | 'bottom';
export declare type HorizontalBasicAlign = 'left' | 'center' | 'right';
export declare type Side = 'top' | 'bottom' | 'left' | 'right';
declare type Align = 'start' | 'center' | 'end';
export declare type Placement = CombinedTypes<Side, Align>;
export declare type OriginAlign = {
    horizontal?: HorizontalBasicAlign;
    vertical?: VerticalBasiclAlign;
};
export {};
