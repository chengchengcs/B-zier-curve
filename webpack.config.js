var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var isProduction = process.env.NODE_ENV === 'production'; 
console.log(process.env.NODE_ENV,'----process.env.NODE_ENV')
//development
module.exports = {
  entry:{
    app: './src/main.js', // main
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/',
    filename: isProduction ? '[name].[hash].js' : '[name].js',
    //publicPath: process.env.NODE_ENV === 'production' ? './dist/' :'/dist/',
    //filename: 'build.js',
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: process.env.NODE_ENV === 'production'
        ? 'index.html'
        : 'index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    // new CleanWebpackPlugin(['dist'],{
    //   dry:false,//process.env.NODE_ENV === 'production'? true : false,
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    contentBase: './',  
    inline: true,//实时刷新
    historyApiFallback: true,
    // historyApiFallback: {
    //   index:'build/index.html',
    //   rewrites: [
    //     // 解决非webpack dev内存中的文件无法访问的问题
    //     {
    //       from: /^\/dist\/.*$/,
    //       to: function (context) {
    //         // console.log(context); // TODO: 404判断 开发环境暂时可忽略
    //         return context.parsedUrl.pathname;
    //       }
    //     },
    //     {
    //       from: /./,
    //       to: '/index.html'
    //     }
    //   ]
    // },
    noInfo: true,
    port:3000
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
