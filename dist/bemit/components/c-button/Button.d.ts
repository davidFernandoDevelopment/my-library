import '../../main.css';
import { ButtonProperties, SystemCButtonProperties } from '../../../generic/systemComponentProperties';
import { CPolymorphicRef } from '../../../generic/PolymorphicGeneric';
import { ButtonBaseProps } from '../c-buttonBase/ButtonBase';
export declare type ButtonProps = SystemCButtonProperties & Omit<ButtonBaseProps, keyof ButtonProperties>;
export declare const Button: CPolymorphicRef<'button', ButtonProps>;
export default Button;
