const path = require("path");

module.exports = {
    entry: "./src/main.js", // 指定入口文件
    output: { // 出口文件
        path: path.resolve(__dirname, "./build"), // 存放目录
        filename: "bundle.js" // 打包之后文件的名字
    }
}