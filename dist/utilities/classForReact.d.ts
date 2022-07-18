import { ComponentPropertySummary } from '../generic/utils';
interface ResClasses {
    rest: any;
    restInherit?: any;
    existInTheStyleSystem?: boolean;
    generatedClasses: string;
}
interface Props {
    [key: string]: any;
}
export declare const generateClasses: (props: Props, PROPERTIES?: any[]) => ResClasses;
export declare const generateComponentClasses: (props: Props, componentPropertySummary: ComponentPropertySummary) => ResClasses;
export {};
