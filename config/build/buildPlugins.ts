import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
	const {
        isDev,
		paths,
    } = options;

	const plugins = [
		new webpack.ProgressPlugin(),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: 'css/[name].css',
		}),
		new CopyPlugin({
			patterns: [
				{ from: paths.styles, to: paths.buildStyles },
				{ from: paths.types, to: paths.buildTypes },
				{ from: paths.config, to: paths.buildConfig },
			],
		}),
	];

	return plugins;
}
