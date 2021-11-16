const fs = require('fs');
const path = require('path');

/** @type {import('webpack').Configuration} */
const config = {
  mode: 'development',
  devtool: false,
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.tsx?$/i,
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    }],
  },
  optimization: {
    chunkIds: 'named',
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: mod => mod.resource?.includes('/node_modules/'),
          filename: 'vendor.js',
        },
      },
    },
  },
};

module.exports = config;
