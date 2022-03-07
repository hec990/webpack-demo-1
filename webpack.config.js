const path = require("path");
const {VueLoaderPlugin} = require("vue-loader/dist/index")    


module.exports = {
    entry: "./src/main.js", // 指定入口文件
    output: { // 出口文件
        path: path.resolve(__dirname, "./build"), // 存放目录
        filename: "bundle.js" // 打包之后文件的名字
    },
    module: {
        rules: [
            {
                test: /\.css$/,  // 匹配所有以 .css 后缀结尾的文件
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            {
                test: /\.less$/,  // 匹配所有以 .less 后缀结尾的文件
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "less-loader"}
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // 将 JS 字符串生成为 style 节点
                  'style-loader',
                  // 将 CSS 转化成 CommonJS 模块
                  'css-loader',
                  // 将 Sass 编译成 CSS
                  'sass-loader',
                ],
              },
              {
                  test: /\.vue$/,
                  loader: "vue-loader"
              }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}