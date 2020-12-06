const path = require("path");
const uglify = require("uglifyjs-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const config = {
  // 配置打包模式 development production
  mode: "development",
  //入口文件 多页面时使用对象
  entry: {
    index: path.resolve(__dirname, "./src/js/index.js"),
  },
  //输出文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.ejs$/,
        loader: "ejs-loader",
      },
      {
        test: /\.scss$/i,
        use: [
          //   MiniCssExtractPlugin.loader,
          "style-loader", // 使用这行配置，注释  MiniCssExtractPlugin.loader 配置 时不会将css单独提取出来，而时放在 head 标签中
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {
                path: "postcss.config.js", // 这个得在项目根目录创建此文件
              },
            },
          },

          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[ext]",
            },
          },
          {
            loader: "url-loader",
            options: {
              limit: 1024,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new uglify(),
    new htmlWebpackPlugin({
      minify: {
        //删除注释
        removeComments: true,
        //删除回车和换行
        collapseWhitespace: true,
      },
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
      //网页的title
      title: "webpack",
      //引入js文件的顺序
      chunksSortMode: "manual",
      //需要引入的js文件
      chunks: ["index"],
      excludeChunks: ["node_modules"],
      hash: true,
    }),
  ],
  devServer: {
    open: true,
    host: "localhost",
    port: 9813,
  },
};

module.exports = config;
