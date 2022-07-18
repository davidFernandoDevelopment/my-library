import { Breakpoint, Globals } from './setting';
declare type _Range<T extends number, R extends unknown[]> = R['length'] extends T ? Exclude<R[number], 0> : _Range<T, [R['length'], ...R]>;
export declare type Ran<T extends number> = number extends T ? never : _Range<T, []>;
declare type AddGlobalProperties<T> = {
    [K in keyof T]: T[K] | Globals;
};
declare type ObjectValuesBreakpoint<T, U extends keyof T> = {
    [bp in Breakpoint]?: U extends keyof T ? T[U] : never;
};
export declare type ObjectBreakpoint = {
    [bp in Breakpoint]?: any;
};
export declare type StylePropertyValues<P> = {
    [key in keyof P]?: AddGlobalProperties<P>[key] | ObjectValuesBreakpoint<AddGlobalProperties<P>, key>;
};
export declare type ComponentPropertyBasic<P> = {
    [key in keyof P]?: P[key];
};
export declare type ComponentPropertyValues<P> = {
    [key in keyof P]?: P[key] | (P[key] extends boolean ? P[key] : ObjectValuesBreakpoint<P, key>);
};
export declare type ComponentPropertySummary = {
    propertyKeys: any & {
        lenght?: number;
    };
    defaultProperties: {
        [key: string]: any;
    };
    utilityProperties: any[];
    inheritProperties?: any[];
};
export {};
