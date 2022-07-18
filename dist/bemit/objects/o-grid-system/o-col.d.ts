import { CPolymorphic } from '../../../generic/PolymorphicGeneric';
import { PushColumns, NumColumns } from '../../../generic/setting';
declare type OColProps = NumColumns & PushColumns & {
    p?: string;
    cols?: NumColumns & PushColumns;
};
declare const OCol: CPolymorphic<'div', OColProps>;
export default OCol;
