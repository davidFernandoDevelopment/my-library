import React from 'react';
import classNames from 'classnames';

import { GridSystem } from '../../../generic/systemStyleProperties';
import { generateClasses } from '../../../utilities/classForReact';
import { NumColumns } from '../../../generic/setting';
import { StylePropertyValues } from '../../../generic/utils';
import { CPolymorphic, Props } from '../../../generic/PolymorphicGeneric';



type PropsOR = StylePropertyValues<GridSystem>;
interface ORowProps extends PropsOR {
    p?: string;
    columns?: NumColumns;
}

const ORow: CPolymorphic<'div', ORowProps> = <C extends React.ElementType>({
    as,
    p,
    style,
    children,
    className,
    columns = {},
    ...restProps
}: Props<C, ORowProps>) => {
    const { generatedClasses, rest } = generateClasses(restProps);
    const { xxs, xs, sm, md, lg, xl, xxl } = columns;

    const arrayClasses = [
        'o-row',
        className,
        generatedClasses,
        { [`${p}__row`]: p },
        { [`o-col-${xxs}`]: xxs },
        { [`o-col-xs-${xs}`]: xs },
        { [`o-col-sm-${sm}`]: sm },
        { [`o-col-md-${md}`]: md },
        { [`o-col-lg-${lg}`]: lg },
        { [`o-col-xl-${xl}`]: xl },
        { [`o-col-xxl-${xxl}`]: xxl },
    ];

    const classes = classNames(arrayClasses);
    const Component = as || 'div';

    return (
        <Component {...rest} className={classes} style={style}>
            {children}
        </Component>
    );
};

export default ORow;