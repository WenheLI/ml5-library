// Copyright (c) 2018 ml5
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { join } from 'path';
import merge from 'webpack-merge';
import common, {developmentPort} from './webpack.common.babel';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    watchContentBase: true,
    contentBase: join(__dirname, './dist'),
    disableHostCheck: true,
    port: developmentPort,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ml5'
    })
  ]
})
