import { IconButton } from './IconButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Notification from '../c-icons/icons/Notification';

export default {
    title: 'Components/IconButton',
    component: IconButton,
    argTypes: {
        size: { control: 'select', options: ["small", "normal", "large", "xlarge"] },
        disabled: { control: 'boolean', defaultValue: false },
        disableRipple: { control: 'boolean', defaultValue: false },
        disableElevation: { control: 'boolean', defaultValue: false },
    }
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
    <IconButton {...args}>
        <Notification />
    </IconButton>
);

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    variant: 'circle'
};