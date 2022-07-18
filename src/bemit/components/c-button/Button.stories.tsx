import { Button } from './Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        size: { control: 'select', options: ["small", "normal", "large", "xlarge"] },
        disabled: { control: 'boolean', defaultValue: false },
        fullWidth: { control: 'boolean', defaultValue: false },
        centerRipple: { control: 'boolean', defaultValue: false },
        disableRipple: { control: 'boolean', defaultValue: false },
        disableElevation: { control: 'boolean', defaultValue: false },
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>;

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    variant: 'default',
    text: 'default text'
};