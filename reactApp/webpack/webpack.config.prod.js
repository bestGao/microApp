// module.exports = {
//   target: "web", // 默认打包成web平台的
//   mode: "production", // 环境 development 和 production 环境 链接： https://www.webpackjs.com/concepts/mode/#mode-development
//   entry: entryPath, // 文件的入口
//   output: {
//     clean: true,
//     filename: "js/[name].[chunkhash:8].js", // 文件名
//     path: path.resolve(__dirname, "../dist"), // 文件输出地址
//   },
//   optimization: {
//     minimize: true,
//     splitChunks: {
//       cacheGroups: {
//         vendor: {
//           filename: "vendor.js",
//           chunks: "all",
//           test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
//         },
//       },
//     },
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env", "@babel/preset-react"],
//           },
//         },
//       },
//       {
//         test: /\.less$/i,
//         use: ["style-loader", "css-loader", "less-loader"],
//       },
//       {
//         test: /\.css$/i,
//         use: [MiniCssExtractPlugin.loader, "css-loader"],
//       },
//       {
//         test: /\.ts$/,
//         exclude: /node_modules/,
//         use: [
//           {
//             loader: "babel-loader",
//             options: {
//               presets: [
//                 "@babel/preset-env",
//                 {
//                   // 要兼容的目标浏览器
//                   targets: {
//                     chrome: "58",
//                     ie: "11",
//                   },
//                   // 指定core.js的版本
//                   corejs: "3",
//                   // 使用corejs的方式 “usage” 表示按需加载
//                   useBuiltIns: "usage",
//                 },
//               ],
//               // 开启babel缓存
//               cacheDirectory: true,
//             },
//           },
//           "ts-loader",
//         ],
//       },
//       {
//         test: /\.png$/i,
//         use: "asset/resource",
//       },
//       {
//         test: /\.ico$/i,
//         use: "asset/inline",
//       },
//       {
//         test: /\.text$/i,
//         use: "asset/source",
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin(),
//     // new HtmlWebpackPlugin({
//     //   template: path.resolve(__dirname, "../public/index.html"),
//     // }),
//     new ESLintPlugin({
//       fix: true, // 启用 ESLint 自动修复特性
//       extensions: ['js', 'json', 'coffee'], // 需要排查的文件
//       exclude: '/node_modules/' // 排除 node_module 的检查
//     }),
//     new MiniCssExtractPlugin({
//       filename: "[name].css",
//       chunkFilename: "[id].css",
//     }),
//   ],
// };
// webpack.config.prod.js
 
// 合并规则
const { merge } = require("webpack-merge");
// 导入基础配置
const { baseConfig } = require("./webpack.config.base");
module.exports = merge(baseConfig, {
  // 环境配置：生产环境
  mode: "production"
});
