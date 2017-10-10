const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const HappyPack = require('happypack');
const HappyThreadPool = HappyPack.ThreadPool({size: 8});

const isDev = true;

// Define the Webpack config.
const config = {
  devtool: 'inline-source-map',
  watch: isDev,
  performance: {
    hints: false,
  },
  entry: {
    app: [
      './game/index.js',
    ],
  },
  module: {
    // rules: [
    //   {
    //     test: /.js$/,
    //     loaders: 'happypack/loader?id=js',
    //     include: path.join(__dirname, 'game'),
    //   }
    // ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js?[chunkhash]',
  },
  plugins: [
    // new HappyPack({
    //   id: 'js',
    //   threadPool: HappyThreadPool,
    //   loaders: [{
    //     loader: 'buble-loader',
    //     query: {
    //       objectAssign: 'Object.assign'
    //     }
    //   }],
    // }),
    // Use hoisting.
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};

// Define development-only plugins.
if (isDev) {
  // Setup live-reloading in the browser with BrowserSync.
  config.plugins.push(new BrowserSyncPlugin({
    host: '0.0.0.0',
    port: 8000,
    server: {
      baseDir: ['./dist'],
    },
    open: false,
    ghostMode: false,
  }));

  // Setup the source maps.
  config.plugins.push(new webpack.SourceMapDevToolPlugin({
    filename: '[file].map',
  }));
}

module.exports = config;
