import type { StorybookConfig } from '@storybook/react-webpack5';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/preset-scss',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async (config) => {
        if (config.resolve) {
            config.resolve.plugins = [
                ...(config.resolve.plugins || []),
                new TsconfigPathsPlugin({
                    extensions: config.resolve.extensions,
                }),
            ];
        }
        if (config.module) {
            config.module.rules = [
                ...(config.module.rules || []),
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                },
            ];
        }
        // if (config.module?.rules) {
        //     const fileLoaderRule = config.module.rules.find(
        //         (rule: any) => rule.test && rule.test.test('.svg'),
        //     );
        //     if (typeof fileLoaderRule === 'object' && fileLoaderRule) fileLoaderRule.exclude = /\.svg$/;
        //     config.module.rules = [
        //         ...(config.module.rules || []),
        //         {
        //             test: /\.svg$/,
        //             use: ['@svgr/webpack'],
        //         },
        //     ];
        // } else {
        //     config.module = {
        //         rules: [
        //             {
        //                 test: /\.svg$/,
        //                 use: ['@svgr/webpack'],
        //             },
        //         ]
        //     }
        // }

        return config;
    },
};
export default config;
