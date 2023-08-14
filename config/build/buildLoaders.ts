import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const svgLoaders = {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    prettier: false,
                    svgo: false,
                    svgoConfig: {
                        plugins: [{ removeViewBox: false }],
                    },
                    titleProp: true,
                    ref: true,
                },
            },
            {
                loader: 'file-loader',
                options: {
                    name: 'static/media/[name].[hash].[ext]',
                },
            },
        ],
        issuer: {
            and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
        },
    };

    const tsLoader = {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
    };

    const babelLoader = {
        test: /\.(jsx|tsx|js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2?|eot|ttf|otf)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoaders = buildCssLoader(isDev);

    return [
        // fileLoader,
        // svgLoaders,
        tsLoader,
        // babelLoader,
        // ...cssLoaders,
    ];
}
