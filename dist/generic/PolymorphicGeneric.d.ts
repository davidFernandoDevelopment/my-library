/// <reference types="react" />
import { SystemStyleProperties } from './systemStyleProperties';
export interface CommonProps {
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    sx?: SystemStyleProperties;
}
interface AsProp<C extends React.ElementType> {
    as?: C;
}
declare type BaseProps<C extends React.ElementType> = CommonProps & AsProp<C>;
export declare type Props<C extends React.ElementType, P = {}> = P & BaseProps<C> & Omit<React.ComponentPropsWithoutRef<C>, keyof (BaseProps<C> & P)>;
export declare type CPolymorphic<D extends React.ElementType, P = {}> = <C extends React.ElementType = D>(props: Props<C, P>) => React.ReactElement | null;
export declare type SVGProps<C extends SVGElement, P = {}> = P & CommonProps & Omit<React.SVGProps<C>, keyof (CommonProps & P)>;
export declare type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>["ref"];
export declare type PropsRef<C extends React.ElementType, P = {}> = Props<C, P> & {
    ref?: PolymorphicRef<C>;
};
export declare type CPolymorphicRef<D extends React.ElementType, P = {}> = <C extends React.ElementType = D>(props: PropsRef<C, P>) => React.ReactElement | null;
export {};
