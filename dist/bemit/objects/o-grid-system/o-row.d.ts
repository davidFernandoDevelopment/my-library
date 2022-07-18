import { GridSystem } from '../../../generic/systemStyleProperties';
import { NumColumns } from '../../../generic/setting';
import { StylePropertyValues } from '../../../generic/utils';
import { CPolymorphic } from '../../../generic/PolymorphicGeneric';
declare type PropsOR = StylePropertyValues<GridSystem>;
interface ORowProps extends PropsOR {
    p?: string;
    columns?: NumColumns;
}
declare const ORow: CPolymorphic<'div', ORowProps>;
export default ORow;
