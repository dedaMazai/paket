import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
	const {
        isDev,
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
	];

	return plugins;
}
