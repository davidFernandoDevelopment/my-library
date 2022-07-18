import { ComponentPropertySummary } from '../generic/utils';
interface IProps {
    [key: string]: any;
}
interface IUseClassGenerator {
    p?: string;
    deps: any[];
    props: IProps;
    className?: string;
    propertySummary: ComponentPropertySummary;
    mainClasses?: (string | IProps)[];
}
export declare const useClassGenerator: ({ p, deps, props, className, propertySummary, mainClasses }: IUseClassGenerator, ...args: (string | IProps)[]) => {
    rest: any;
    restInherit: any;
    mainClasses: string;
    extraClasses: string[];
};
export {};
