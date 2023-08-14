import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;

    return {
        mode,
        entry: {
            'index': paths.entry,
       },
        output: {
            filename: '[name].js',
            path: paths.build,
            library: {
                name: 'andrei-bread-lib',
                type: 'umd',
            },
            umdNamedDefine: true,
            globalObject: 'this',
            clean: true,
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        externals: {
          react: 'react',
          'react-dom': 'react-dom',
          'antd': 'antd',
        },
    };
}

  // "exports": {
  //   "./*": {
  //     "types": "./dist/*.d.ts",
  //     "import": "./dist/*.js",
  //     "default": "./dist/*.js"
  //   }
  // },
