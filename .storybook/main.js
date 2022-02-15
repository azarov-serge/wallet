const path = require('path');
const webpack = require('webpack');
const custom = require('../webpack.config.js');

module.exports = {
    stories: ['../src/**/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-storysource',
        '@storybook/addon-viewport',
        '@storybook/addon-essentials',
    ],
    webpackFinal: (config, argv) => {
        if (argv.configType && argv.configType.toLowerCase() !== 'production') {
            config.plugins.push(new webpack.HotModuleReplacementPlugin());
        }

        config.module.rules.push({
            test: /\.stories\.tsx$/,
            loaders: [
                {
                    loader: require.resolve('@storybook/source-loader'),
                    options: { parser: 'typescript' },
                },
            ],
            enforce: 'pre',
        });

        // 2b. Run `source-loader` on story files to show their source code
        // automatically in `DocsPage` or the `Source` doc block.
        config.module.rules.push({
            test: /\.(stories|story)\.[tj]sx?$/,
            loader: require.resolve('@storybook/source-loader'),
            exclude: [/node_modules/],
            enforce: 'pre',
        });

        return {
            ...config,
            resolve: {
                extensions: custom.resolve.extensions,
                alias: {
                    ...custom.resolve.alias,
                },
            },
            module: {
                ...config.module,
                rules: [...config.module.rules],
            },
        };
    },
};
