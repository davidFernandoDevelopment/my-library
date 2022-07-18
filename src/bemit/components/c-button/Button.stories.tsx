import { Button } from './Button';

export default {
    title: 'Components/Button',
    component: Button
};

const Template = () => <Button variant='default' themeColor='primary'>Hola mundo</Button>;

export const Basic = Template.bind({});