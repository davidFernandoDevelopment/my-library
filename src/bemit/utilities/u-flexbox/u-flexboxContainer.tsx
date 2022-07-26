import React, { useMemo } from 'react';
import classNames from 'classnames';

import { SystemStyleProperties } from '../../../generic/systemStyleProperties';
import { CPolymorphic, Props } from '../../../generic/PolymorphicGeneric';
import { generateClasses } from '../../../utilities/classForReact';




type UFlexContainerProps = SystemStyleProperties & {};

const UFlexContainer: CPolymorphic<'div', UFlexContainerProps> = <C extends React.ElementType>({
    as,
    style,
    children,
    className,
    ...restProps
}: Props<C, UFlexContainerProps>) => {

    const { generatedClasses, rest } = useMemo(
        () => generateClasses(restProps),
        //eslint-disable-next-line
        []
    );
    const arrayClasses = [
        'SUI-u-d-flex',
        className,
        generatedClasses,
    ];

    const classes = classNames(arrayClasses);
    const Component = as || 'div';

    return (
        <Component {...rest} style={style} className={classes}>
            {children}
        </Component>
    );
};

export default React.memo(UFlexContainer);