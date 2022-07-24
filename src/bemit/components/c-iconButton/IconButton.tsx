import React, { useMemo } from 'react';
import classNames from 'classnames';

import ButtonBase from '../c-buttonBase/ButtonBase';
import { generateComponentClasses } from '../../../utilities/classForReact';
import { IconButtonPropertySummary, SystemCIconButtonProperties, IconButtonProperties } from '../../../generic/systemComponentProperties';
import { CPolymorphicRef, PolymorphicRef, PropsRef } from '../../../generic/PolymorphicGeneric';
import { ButtonBaseProps } from '../c-buttonBase/ButtonBase';
import { SystemColorProperties } from '../../../generic/systemStyleProperties';



export type IconButtonProps =
    & SystemCIconButtonProperties
    & Omit<SystemColorProperties, keyof IconButtonProperties>
    & Omit<ButtonBaseProps, keyof IconButtonProperties> & {};

export const IconButton: CPolymorphicRef<'button', IconButtonProps> = React.forwardRef(<C extends React.ElementType>({
    children,
    className,
    edge,
    ...restProps
}: PropsRef<C, IconButtonProps>, ref?: PolymorphicRef<C>) => {

    const { generatedClasses, rest, restInherit } = useMemo(
        () => generateComponentClasses(
            restProps,
            IconButtonPropertySummary
        ),
        //eslint-disable-next-line
        []);
    const arrayClasses = [
        'c-iconButton',
        className,
        generatedClasses,
        { 'c-iconButton--edge-start': edge === 'start' },
        { 'c-iconButton--edge-end': edge === 'end' },
    ];
    const classes = classNames(arrayClasses);

    return (
        <ButtonBase
            centerRipple
            ref={ref}
            className={classes}
            {...rest}
            {...restInherit}
        >
            {children}
        </ButtonBase>
    );
});

export default IconButton;