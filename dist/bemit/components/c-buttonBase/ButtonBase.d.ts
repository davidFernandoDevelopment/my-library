import { TouchRippleProps } from '../c-touchRipple/TouchRipple';
import { SystemCButtonBaseProperties, ButtonBaseProperties } from '../../../generic/systemComponentProperties';
import { CPolymorphicRef } from '../../../generic/PolymorphicGeneric';
export declare type ButtonBaseProps = SystemCButtonBaseProperties & Omit<TouchRippleProps, keyof ButtonBaseProperties>;
declare const ButtonBase: CPolymorphicRef<'button', ButtonBaseProps>;
export default ButtonBase;
