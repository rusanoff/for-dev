const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const DEV = process.env.NODE_ENV !== 'production';
const { loader: miniCssExtractPluginLoader } = MiniCssExtractPlugin;

const config = {
  mode: DEV ? 'development' : 'production',
  bail: !DEV,
  devtool: DEV ? 'eval-source-map' : 'source-map',
  entry: {
    main: path.resolve(__dirname, 'src', 'index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: DEV ? '/' : './',
    filename: DEV ? '[name].js' : 'js/[name].[chunkhash:8].js',
    chunkFilename: DEV ? '[name].js' : 'js/[chunkhash:8].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    modules: ['node_modules'],
    alias: {
      core: path.resolve(__dirname, 'src', 'app', 'core'),
      components: path.resolve(__dirname, 'src', 'app', 'components'),
      containers: path.resolve(__dirname, 'src', 'app', 'containers'),
      constants: path.resolve(__dirname, 'src', 'app', 'constants'),
      services: path.resolve(__dirname, 'src', 'app', 'services'),
      types: path.resolve(__dirname, 'src', 'app', 'types'),
      assets: path.resolve(__dirname, 'src', 'assets'),
      styled: path.resolve(__dirname, 'src', 'app', 'styled'),
    },
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c|le)ss$/,
        use: [
          'style-loader',
          miniCssExtractPluginLoader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: path.resolve(__dirname, 'src', 'assets', 'fonts'),
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: `assets/img/[name]${DEV ? '' : '-[chunkhash:8]'}.[ext]`,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff2?)$/,
        exclude: path.resolve(__dirname, 'src', 'assets', 'img'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[folder]/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[chunkhash:8].css',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
  },
};

module.exports = config;
