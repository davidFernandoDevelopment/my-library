import { ContainerProperties } from '../../../generic/systemStyleProperties';
import { CPolymorphic } from '../../../generic/PolymorphicGeneric';
interface OContainerProps extends ContainerProperties {
    p?: string;
}
declare const OContainer: CPolymorphic<'div', OContainerProps>;
export default OContainer;
