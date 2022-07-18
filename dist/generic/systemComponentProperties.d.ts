/// <reference types="react" />
import { Anchor, Breakpoint, ContainerlessBreakpoints, OriginAlign, Placement, ShadowValues, Sizes, UnitValues } from './setting';
import { SystemStyleProperties } from './systemStyleProperties';
import { ComponentPropertyBasic, ComponentPropertySummary, ComponentPropertyValues } from './utils';
export declare type TouchRippleProperties = {
    centerRipple: boolean;
};
export declare type SystemCTouchRippleProperties = ComponentPropertyValues<TouchRippleProperties>;
declare type ButtonBasePropertyBasic = {
    disabled: boolean;
    disableRipple: boolean;
};
declare type ButtonBasePropertyValues = {};
export declare type ButtonBaseProperties = ButtonBasePropertyValues & ButtonBasePropertyBasic;
export declare type SystemCButtonBaseProperties = ComponentPropertyValues<ButtonBasePropertyValues> & ComponentPropertyBasic<ButtonBasePropertyBasic>;
export declare const ButtonBasePropertySummary: ComponentPropertySummary;
declare type IconBasePropertyValues = {
    rotate: boolean;
    size: Sizes | 'xsmall';
};
export declare type IconBaseProperties = IconBasePropertyValues;
export declare type SystemCIconBaseproperties = ComponentPropertyValues<IconBasePropertyValues>;
export declare const IconBasePropertySummary: ComponentPropertySummary;
declare type ButtonPropertyBasic = {
    text: string;
    endIcon: React.ReactNode;
    startIcon: React.ReactNode;
    variant: 'default' | 'ghost' | 'link' | 'light';
    disabled: boolean;
    fullWidth: boolean;
    disableElevation: boolean;
};
declare type ButtonPropertyValues = {
    /**
     * Tamaño del botón
     */
    size: Sizes;
};
export declare type ButtonProperties = ButtonPropertyBasic & ButtonPropertyValues;
export declare type SystemCButtonProperties = ComponentPropertyBasic<ButtonPropertyBasic> & ComponentPropertyValues<ButtonPropertyValues>;
export declare const ButtonPropertySummary: ComponentPropertySummary;
declare type LoaderButtonPropertyBasic = {
    loading: boolean;
    loadingIndicator: React.ReactNode;
    loadingPosition: 'start' | 'center' | 'end';
};
declare type LoaderButtonPropertyValues = {};
export declare type LoaderButtonProperties = LoaderButtonPropertyBasic & LoaderButtonPropertyValues;
export declare type SystemCLoaderButtonProperties = ComponentPropertyBasic<LoaderButtonPropertyBasic> & ComponentPropertyValues<LoaderButtonPropertyValues>;
export declare const LoaderButtonPropertySummary: ComponentPropertySummary;
declare type IconButtonBasic = {
    disabled: boolean;
    edge: 'start' | 'end';
    variant: 'circle' | 'square';
};
declare type IconButtonPropertyValues = {
    size: Sizes;
};
export declare type IconButtonProperties = IconButtonPropertyValues & IconButtonBasic;
export declare type SystemCIconButtonProperties = ComponentPropertyValues<IconButtonPropertyValues> & ComponentPropertyBasic<IconButtonBasic>;
export declare const IconButtonPropertySummary: ComponentPropertySummary;
declare type PaperPropertyBasic = {
    variant: 'outline' | 'elevation';
    square: boolean;
    elevation: ShadowValues;
};
declare type PaperPropertyValues = {};
export declare type PaperProperties = PaperPropertyValues & PaperPropertyBasic;
export declare type SystemCPaperProperties = ComponentPropertyValues<PaperPropertyValues> & ComponentPropertyBasic<PaperPropertyBasic>;
export declare const PaperPropertySummary: ComponentPropertySummary;
declare type CardPropertyBasic = {
    spacing: UnitValues;
};
declare type CardPropertyValues = {};
export declare type CardProperties = CardPropertyValues & CardPropertyBasic;
export declare type SystemCCardProperties = ComponentPropertyValues<CardPropertyValues> & ComponentPropertyBasic<CardPropertyBasic>;
export declare const CardPropertySummary: ComponentPropertySummary;
declare type CardContentPropertyBasic = {
    spacing: UnitValues;
};
declare type CardContentPropertyValues = {};
export declare type CardContentProperties = CardContentPropertyValues & CardContentPropertyBasic;
export declare type SystemCCardContentProperties = ComponentPropertyValues<CardContentPropertyValues> & ComponentPropertyBasic<CardContentPropertyBasic>;
export declare const CardContentPropertySummary: ComponentPropertySummary;
declare type CardActionsPropertyBasic = {
    disableGap: boolean;
    spacing: UnitValues;
    gap: UnitValues;
};
declare type CardActionsPropertyValues = {};
export declare type CardActionsProperties = CardActionsPropertyValues & CardActionsPropertyBasic;
export declare type SystemCCardActionsProperties = ComponentPropertyValues<CardActionsPropertyValues> & ComponentPropertyBasic<CardActionsPropertyBasic>;
export declare const CardActionsPropertySummary: ComponentPropertySummary;
declare type CardActionAreaPropertyValues = {};
export declare type CardActionAreaProperties = CardActionAreaPropertyValues;
export declare type SystemCCardActionAreaProperties = ComponentPropertyValues<CardActionAreaPropertyValues>;
export declare const CardActionAreaPropertySummary: ComponentPropertySummary;
declare type CardMediaPropertyValues = {
    variant: 'ratio-9-16' | 'default';
};
export declare type CardMediaProperties = CardMediaPropertyValues;
export declare type SystemCCardMediaProperties = ComponentPropertyValues<CardMediaPropertyValues>;
export declare const CardMediaPropertySummary: ComponentPropertySummary;
declare type CardHeaderPropertyBasic = {
    spacing: UnitValues;
    gap: UnitValues;
    avatar: React.ReactNode;
    action: React.ReactNode;
    title: string | React.ReactNode;
    subtitle: string | React.ReactNode;
};
declare type CardHeaderPropertyValues = {};
export declare type CardHeaderProperties = CardHeaderPropertyBasic & CardHeaderPropertyValues;
export declare type SystemCCardHeaderProperties = ComponentPropertyValues<CardHeaderPropertyValues> & ComponentPropertyBasic<CardHeaderPropertyBasic>;
export declare const CardHeaderPropertySummary: ComponentPropertySummary;
declare type AvatarPropertyBasic = {
    src: string;
    alt: string;
    fallback: React.ReactNode;
    variant: 'circle' | 'square';
};
declare type AvatarPropertyValues = {
    size: Sizes;
};
export declare type AvatarProperties = AvatarPropertyBasic & AvatarPropertyValues;
export declare type SystemCAvatarProperties = ComponentPropertyValues<AvatarPropertyValues> & ComponentPropertyBasic<AvatarPropertyBasic>;
export declare const AvatarPropertySummary: ComponentPropertySummary;
declare type AvatarGroupPropertyValues = {};
declare type AvatarGroupPropertyBasic = {
    spacing: UnitValues;
    max: number;
    total: number;
    size: Sizes;
    variant: 'circle' | 'square';
};
export declare type AvatarGroupProperties = AvatarGroupPropertyBasic & AvatarGroupPropertyValues;
export declare type SystemCAvatarGroupProperties = ComponentPropertyBasic<AvatarGroupPropertyBasic> & ComponentPropertyValues<AvatarGroupPropertyValues>;
export declare const AvatarGroupPropertySummary: ComponentPropertySummary;
declare type BackDropPropertiesValues = {};
declare type BackDropPropertiesBasic = {
    open: boolean;
    invisible: boolean;
};
export declare type BackDropProperties = BackDropPropertiesBasic & BackDropPropertiesValues;
export declare type SystemCBackDropProperties = ComponentPropertyBasic<BackDropPropertiesBasic> & ComponentPropertyValues<BackDropPropertiesValues>;
export declare const BackDropPropertySummary: ComponentPropertySummary;
declare type ModalPropertiesValues = {};
declare type ModalPropertiesBasic = {
    open: boolean;
    hideBackdrop: boolean;
    staticBackdrop: boolean;
    disableScrollLock: boolean;
    disableAnimationContent: boolean;
    keepMounted: boolean;
    onClose: {
        bivarianceHack(event: {}, reason: 'backdropClick' | 'escapeKeyDown'): void;
    }['bivarianceHack'];
};
export declare type ModalProperties = ModalPropertiesBasic & ModalPropertiesValues;
export declare type SystemCModalProperties = ComponentPropertyBasic<ModalPropertiesBasic> & ComponentPropertyValues<ModalPropertiesValues>;
export declare const ModalPropertySummary: ComponentPropertySummary;
declare type DialogPropertiesValues = {};
declare type DialogPropertiesBasic = {
    maxWidth?: Exclude<Breakpoint, ContainerlessBreakpoints>[] | undefined;
};
export declare type DialogProperties = DialogPropertiesValues & DialogPropertiesBasic;
export declare type SystemCDialogProperties = ComponentPropertyBasic<DialogPropertiesBasic> & ComponentPropertyValues<DialogPropertiesValues>;
export declare const DialogPropertySummary: ComponentPropertySummary;
declare type DialogActionsPropertiesValues = {};
declare type DialogActionsPropertiesBasic = {
    spacing: UnitValues;
    gap: UnitValues;
};
export declare type DialogActionsProperties = DialogActionsPropertiesValues & DialogActionsPropertiesBasic;
export declare type SystemCDialogActionsProperties = ComponentPropertyBasic<DialogActionsPropertiesBasic> & ComponentPropertyValues<DialogActionsPropertiesValues>;
export declare const DialogActionsPropertySummary: ComponentPropertySummary;
declare type DialogContentPropertiesValues = {};
declare type DialogContentPropertiesBasic = {
    gap: UnitValues;
    divider: boolean;
    spacing: UnitValues;
};
export declare type DialogContentProperties = DialogContentPropertiesValues & DialogContentPropertiesBasic;
export declare type SystemCDialogContentProperties = ComponentPropertyBasic<DialogContentPropertiesBasic> & ComponentPropertyValues<DialogContentPropertiesValues>;
export declare const DialogContentPropertySummary: ComponentPropertySummary;
declare type DialogTitlePropertiesValues = {};
declare type DialogTitlePropertiesBasic = {
    gap: UnitValues;
    spacing: UnitValues;
    closeButton: boolean;
};
export declare type DialogTitleProperties = DialogTitlePropertiesValues & DialogTitlePropertiesBasic;
export declare type SystemCDialogTitleProperties = ComponentPropertyBasic<DialogTitlePropertiesBasic> & ComponentPropertyValues<DialogTitlePropertiesValues>;
export declare const DialogTitlePropertySummary: ComponentPropertySummary;
declare type DividerPropertiesValues = {};
declare type DividerPropertiesBasic = {
    variant: 'middle' | 'inset' | 'fullWidth';
    orientation: 'horizontal' | 'vertical';
    textAlign: 'center' | 'right' | 'left';
};
export declare type DividerProperties = DividerPropertiesValues & DividerPropertiesBasic;
export declare type SystemCDividerProperties = ComponentPropertyBasic<DividerPropertiesBasic> & ComponentPropertyValues<DividerPropertiesValues>;
export declare const DividerPropertySummary: ComponentPropertySummary;
declare type ListPropertiesValues = {};
declare type ListPropertiesBasic = {
    dense: boolean;
    disablePadding: boolean;
    subheader: React.ReactNode;
};
export declare type ListProperties = ListPropertiesValues & ListPropertiesBasic;
export declare type SystemCListProperties = ComponentPropertyBasic<ListPropertiesBasic> & ComponentPropertyValues<ListPropertiesValues>;
export declare const ListPropertySummary: ComponentPropertySummary;
declare type ListItemPropertiesValues = {};
declare type ListItemPropertiesBasic = {
    dense: boolean;
    alignItems: 'start' | 'center';
    disableGutters: boolean;
    disablePadding: boolean;
    secondaryAction: React.ReactNode;
};
export declare type ListItemProperties = ListItemPropertiesValues & ListItemPropertiesBasic;
export declare type SystemCListItemProperties = ComponentPropertyBasic<ListItemPropertiesBasic> & ComponentPropertyValues<ListItemPropertiesValues>;
export declare const ListItemPropertySummary: ComponentPropertySummary;
declare type ListItemButtonPropertiesValues = {};
declare type ListItemButtonPropertiesBasic = {
    dense: boolean;
    divider: boolean;
    selected: boolean;
    disabled: boolean;
    disablePadding: boolean;
    disableGutters: boolean;
    alignItems: 'start' | 'center';
};
export declare type ListItemButtonProperties = ListItemButtonPropertiesValues & ListItemButtonPropertiesBasic;
export declare type SystemCListItemButtonProperties = ComponentPropertyBasic<ListItemButtonPropertiesBasic> & ComponentPropertyValues<ListItemButtonPropertiesValues>;
export declare const ListItemButtonPropertySummary: ComponentPropertySummary;
declare type ListItemIconPropertiesValues = {};
declare type ListItemIconPropertiesBasic = {};
export declare type ListItemIconProperties = ListItemIconPropertiesValues & ListItemIconPropertiesBasic;
export declare type SystemCListItemIconProperties = ComponentPropertyBasic<ListItemIconPropertiesBasic> & ComponentPropertyValues<ListItemIconPropertiesValues>;
export declare const ListItemIconPropertySummary: ComponentPropertySummary;
declare type ListItemTextPropertiesValues = {};
declare type ListItemTextPropertiesBasic = {
    inset: boolean;
    disableCText: boolean;
    primary: React.ReactNode;
    secondary: React.ReactNode;
};
export declare type ListItemTextProperties = ListItemTextPropertiesValues & ListItemTextPropertiesBasic;
export declare type SystemCListItemTextProperties = ComponentPropertyBasic<ListItemTextPropertiesBasic> & ComponentPropertyValues<ListItemTextPropertiesValues>;
export declare const ListItemTextPropertySummary: ComponentPropertySummary;
declare type ListItemAvatarPropertiesValues = {};
declare type ListItemAvatarPropertiesBasic = {};
export declare type ListItemAvatarProperties = ListItemAvatarPropertiesValues & ListItemAvatarPropertiesBasic;
export declare type SystemCListItemAvatarProperties = ComponentPropertyBasic<ListItemAvatarPropertiesBasic> & ComponentPropertyValues<ListItemAvatarPropertiesValues>;
export declare const ListItemAvatarPropertySummary: ComponentPropertySummary;
declare type ListSubHeaderPropertiesValues = {};
declare type ListSubHeaderPropertiesBasic = {
    inset: boolean;
    disableSticky: boolean;
    disableGutters: boolean;
};
export declare type ListSubHeaderProperties = ListSubHeaderPropertiesValues & ListSubHeaderPropertiesBasic;
export declare type SystemCListSubHeaderProperties = ComponentPropertyBasic<ListSubHeaderPropertiesBasic> & ComponentPropertyValues<ListSubHeaderPropertiesValues>;
export declare const ListSubHeaderPropertySummary: ComponentPropertySummary;
declare type ListItemSecondaryActionPropertiesValues = {};
declare type ListItemSecondaryActionPropertiesBasic = {
    inset: boolean;
    disableSticky: boolean;
    disableGutters: boolean;
};
export declare type ListItemSecondaryActionProperties = ListItemSecondaryActionPropertiesValues & ListItemSecondaryActionPropertiesBasic;
export declare type SystemCListItemSecondaryActionProperties = ComponentPropertyBasic<ListItemSecondaryActionPropertiesBasic> & ComponentPropertyValues<ListItemSecondaryActionPropertiesValues>;
export declare const ListItemSecondaryActionPropertySummary: ComponentPropertySummary;
declare type DrawerPropertiesValues = {};
declare type DrawerPropertiesBasic = {
    open: boolean;
    variant: 'permanent' | 'temporary' | 'persistent';
    anchor: 'top' | 'bottom' | 'left' | 'right';
    swipeableEdge: boolean;
    swipeableEdgeIcon: React.ReactNode;
    swipeableEdgeExtra: React.ReactNode;
    paperProps: SystemStyleProperties;
};
export declare type DrawerProperties = DrawerPropertiesValues & DrawerPropertiesBasic;
export declare type SystemCDrawerProperties = ComponentPropertyBasic<DrawerPropertiesBasic> & ComponentPropertyValues<DrawerPropertiesValues>;
export declare const DrawerPropertySummary: ComponentPropertySummary;
declare type PopoverPropertiesValues = {};
declare type PopoverPropertiesBasic = {
    open: boolean;
    arrow: boolean;
    anchorEl: Anchor;
    elevation: ShadowValues;
    anchorOrigin: OriginAlign;
    transformOrigin: OriginAlign;
    placement: Placement;
    paperProps: SystemStyleProperties;
    paperClasses: string;
};
export declare type PopoverProperties = PopoverPropertiesValues & PopoverPropertiesBasic;
export declare type SystemCPopoverProperties = ComponentPropertyBasic<PopoverPropertiesBasic> & ComponentPropertyValues<PopoverPropertiesValues>;
export declare const PopoverPropertySummary: ComponentPropertySummary;
declare type PopperPropertiesValues = {};
declare type PopperPropertiesBasic = {
    open: boolean;
    arrow: boolean;
    anchorEl: Anchor;
    elevation: ShadowValues;
    anchorOrigin: OriginAlign;
    transformOrigin: OriginAlign;
    placement: Placement;
    paperProps: SystemStyleProperties;
    paperClasses: string;
    withoutModal: boolean;
    keepMounted: boolean;
};
export declare type PopperProperties = PopperPropertiesValues & PopperPropertiesBasic;
export declare type SystemCPopperProperties = ComponentPropertyBasic<PopperPropertiesBasic> & ComponentPropertyValues<PopperPropertiesValues>;
export declare const PopperPropertySummary: ComponentPropertySummary;
declare type TooltipPropertiesValues = {};
declare type TooltipPropertiesBasic = {
    arrow: boolean;
    placement: Placement;
    paperProps: SystemStyleProperties;
    paperClasses: string;
    title: React.ReactNode;
};
export declare type TooltipProperties = TooltipPropertiesValues & TooltipPropertiesBasic;
export declare type SystemCTooltipProperties = ComponentPropertyBasic<TooltipPropertiesBasic> & ComponentPropertyValues<TooltipPropertiesValues>;
export declare const TooltipPropertySummary: ComponentPropertySummary;
declare type MenuPropertiesValues = {};
declare type MenuPropertiesBasic = {};
export declare type MenuProperties = MenuPropertiesValues & MenuPropertiesBasic;
export declare type SystemCMenuProperties = ComponentPropertyBasic<MenuPropertiesBasic> & ComponentPropertyValues<MenuPropertiesValues>;
export declare const MenuPropertySummary: ComponentPropertySummary;
declare type MenuListPropertiesValues = {};
declare type MenuListPropertiesBasic = {};
export declare type MenuListProperties = MenuListPropertiesValues & MenuListPropertiesBasic;
export declare type SystemCMenuListProperties = ComponentPropertyBasic<MenuListPropertiesBasic> & ComponentPropertyValues<MenuListPropertiesValues>;
export declare const MenuListPropertySummary: ComponentPropertySummary;
declare type MenuItemPropertiesValues = {};
declare type MenuItemPropertiesBasic = {
    divider: boolean;
    disableGutters: boolean;
};
export declare type MenuItemProperties = MenuItemPropertiesValues & MenuItemPropertiesBasic;
export declare type SystemCMenuItemProperties = ComponentPropertyBasic<MenuItemPropertiesBasic> & ComponentPropertyValues<MenuItemPropertiesValues>;
export declare const MenuItemPropertySummary: ComponentPropertySummary;
export {};
