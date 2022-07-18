import React from 'react';
import classNames from 'classnames';


import { generateClasses } from '../../../utilities/classForReact';
import { Props, CPolymorphic } from '../../../generic/PolymorphicGeneric';
import { PushColumns, NumColumns } from '../../../generic/setting';




type OColProps = NumColumns & PushColumns & {
    p?: string;
    cols?: NumColumns & PushColumns;
};

const OCol: CPolymorphic<'div', OColProps> = <C extends React.ElementType>({
    as,
    p,
    xxs: vxxs, xxsPush: vxxsPush,
    xs: vxs, xsPush: vxsPush,
    sm: vsm, smPush: vsmPush,
    md: vmd, mdPush: vmdPush,
    lg: vlg, lgPush: vlgPush,
    xl: vxl, xlPush: vxlPush,
    xxl: vxxl, xxlPush: vxxlPush,
    cols = {},
    style,
    children,
    className,
    ...restProps
}: Props<C, OColProps>) => {

    const {
        xxs, xs, sm, md, lg, xl, xxl,
        xxsPush, xsPush, smPush, mdPush, lgPush, xlPush, xxlPush
    } = cols;

    const { generatedClasses, rest } = generateClasses(restProps);
    const arrayClasses = [
        'o-col',
        className,
        generatedClasses,
        { [`${p}__col`]: p },
        { [`o-col-${xxs || vxxs}`]: xxs || vxxs },
        { [`o-col-push-${xxsPush || vxxsPush}`]: xxsPush || vxxsPush },
        { [`o-col-xs-${xs || vxs}`]: xs || vxs },
        { [`o-col-push-xs-${xsPush || vxsPush}`]: xsPush || vxsPush },
        { [`o-col-sm-${sm || vsm}`]: sm || vsm },
        { [`o-col-push-sm-${smPush || vsmPush}`]: smPush || vsmPush },
        { [`o-col-md-${md || vmd}`]: md || vmd },
        { [`o-col-push-md-${mdPush || vmdPush}`]: mdPush || vmdPush },
        { [`o-col-lg-${lg || vlg}`]: lg || vlg },
        { [`o-col-push-lg-${lgPush || vlgPush}`]: lgPush || vlgPush },
        { [`o-col-xl-${xl || vxl}`]: xl || vxl },
        { [`o-col-push-xl-${xlPush || vxlPush}`]: xlPush || vxlPush },
        { [`o-col-xxl-${xxl || vxxl}`]: xxl || vxxl },
        { [`o-col-push-xxl-${xxlPush || vxxlPush}`]: xxlPush || vxxlPush },
    ];
    const classes = classNames(arrayClasses);
    const Component = as || 'div';

    return (
        <Component style={style} className={classes} {...rest}>
            {children}
        </Component>
    );
};

export default OCol;