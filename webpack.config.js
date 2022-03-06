const path = require("path");

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
            }
        ]
    }
}