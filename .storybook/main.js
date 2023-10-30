module.exports = {
    stories: ['../src/**/**/*.stories.mdx', '../src/**/**/*.stories.@(js|jsx|ts|tsx)', '../__stories__/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],

    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },

    features: {
        postcss: false
    },

    docs: {
        autodocs: true
    }
};
