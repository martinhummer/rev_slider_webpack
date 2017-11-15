var path = require('path')
var webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ //takes the result of style-loader and creates the file style.css and injects it into the html file
          fallback: 'style-loader', //inline the css into <head> section
          use: [
              'css-loader', //returns a javascript string of your css
          ],
      }),
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
      },
      {
        test: /\.(eot|ttf|woff|woff2|cur)(\?.+)?$/,
        use: [{
          loader: 'url-loader'
        }]
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      TweenLite: "TweenLite"
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
    alias: {
      jquery: "jquery/dist/jquery.js",
      TweenLite: path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    overlay: true
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
