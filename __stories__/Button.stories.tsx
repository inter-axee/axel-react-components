import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Button from '../src/components/Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {}
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    disabled: false,
    text: 'Primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
    primary: false,
    disabled: false,
    text: 'Secondary'
};

export const Disabled = Template.bind({});
Disabled.args = {
    primary: false,
    disabled: true,
    text: 'Disabled'
};

export const Small = Template.bind({});
Small.args = {
    ...Primary.args,
    size: 'small',
    text: 'Small'
};

export const Medium = Template.bind({});
Medium.args = {
    ...Primary.args,
    size: 'medium',
    text: 'Medium'
};

export const Large = Template.bind({});
Large.args = {
    ...Primary.args,
    size: 'large',
    text: 'Large'
};
