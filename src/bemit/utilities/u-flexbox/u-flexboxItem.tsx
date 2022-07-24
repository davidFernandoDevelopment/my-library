import classNames from 'classnames';
import { FlexboxItemProperties } from '../../../generic/systemStyleProperties';
import { CPolymorphic, Props } from '../../../generic/PolymorphicGeneric';
import { generateClasses } from '../../../utilities/classForReact';
import { StylePropertyValues } from '../../../generic/utils';


type PropsFI = StylePropertyValues<FlexboxItemProperties>;
interface UFlexboxItemProps extends PropsFI { };

const UFlexboxItem: CPolymorphic<'div', UFlexboxItemProps> = <C extends React.ElementType>({
    as,
    style,
    children,
    className,
    ...restProps
}: Props<C, UFlexboxItemProps>) => {

    const { generatedClasses, rest } = generateClasses(restProps);
    const arrayClasses = [
        className,
        generatedClasses
    ];

    const classes = classNames(arrayClasses);
    const Component = as || 'div';

    return (
        <Component {...rest} className={classes} style={style}>
            {children}
        </Component>
    );
};

export default UFlexboxItem;