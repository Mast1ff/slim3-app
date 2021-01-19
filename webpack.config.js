const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

const env = process.env.NODE_ENV || 'development';

module.exports = {
    mode: env,
    entry: {
        index: './src/typescript/main.ts',
    },
    output: {
        path: path.resolve(__dirname, 'public/dist/js'),
        hashDigestLength: 6,
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
    },
    devtool: env === 'production' ? 'source-map' : 'eval',
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'initial',
                    enforce: true,
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /core-js/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                        },
                    },
                ],
            },
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: './src/typescript/tsconfig.json',
            }),
        ],
    },
    plugins: [
    ],
};
