### 前言

#### 项目介绍

该项目是一个从0开始配置webpack的项目；你可以拿这个项目来练手，测试你的webpack能力。首先我会给你一个基础代码，你只需要从这个最基础的代码开始配置webpack即可。例如：我想在项目里写scss代码，但是浏览器不认识scss代码，那么此时我们就要借助一些loader来帮我们处理scss文件代码；经过一些配置后，scss代码可以运行在浏览器了。大概的思路都是这样，如果你想处理某种类型文件，那么你就需要安装对应的loader来处理这个文件。我在文章中间也写了一些常见的loader，这些loader可以帮助你配置一个常见的项目。

#### 项目相关代码说明

1. 基础代码（从这个代码开始从0开始配置webpack项目）：https://github.com/hec990/webpack-demo-1.git

克隆项目

```
git clone https://github.com/hec990/webpack-demo-1.git
```

切换到初始化项目代码

```
git checkout 2c1b6bc1113f0e24d6df3a65610ae7ce65df35cd
```

将初始化项目代码拷贝一份后，然后删除当前目录。我们在拷贝的这份代码去开发配置webpack项目。

#### 文档

- webpack中文文档：https://webpack.docschina.org/concepts/
- loader：https://webpack.docschina.org/loaders/
- plugin：https://webpack.docschina.org/plugins/
- 项目提交记录：https://github.com/hec990/webpack-demo-1/commits/main

### 项目打包

（1）安装webpack

```git
npm install webpack webpack-cli -D
```

（2）在 package.json 文件新增脚本 build。到时候运行命令 `npm run build`，webpack就会对我们的项目进行打包了。

```json
{
  "name": "webpack-demo-1",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "git@github.com:hec990/webpack-demo-1.git",
  "author": "xiaohh <1296522554@qq.com>",
  "license": "MIT",
  "scripts": {
    "build": "webpack"  // 新增脚本 build
  },
  "devDependencies": {
    "webpack": "^5.70.0",
    "webpack-cli": "^4.9.2"
  }
}

```

（3）如果你要对项目进行打包，运行 `npm run build` 即可，项目根目录会多出一个 build 目录，这个目录就是打包后的目录。



**注意事项（一定要看，重点！！！）**：

1. 现在运行 npm run build打包 ，一定会报这样一个错误 -> 你需要指定一个loader来加载这个文件，那么此时你就要安装一个loader来加载文件，命令行才不会报这个错误。当我们安装对应loader后（见常用loader，选择loader），执行npm run build打包项目，此时项目根目录会多出一个 build目录。

   

### 常用loader

#### 加载css文件：css-loader / style-loader 

要想以 .css 后缀结尾的文件代码能在浏览器运行，需要同时安装 2个 loader。css-loader用于加载 .css 文件，style-loader用于将加载完成的.css文件插入到 style 标签中，让样式生效。

（1）安装 css-loader 和 style-loader

```git
npm install css-loader style-loader -D
```

（2）在 webpack.config.js 文件中，配置css-loader和style-loader

- 与output同级，新增 module 选项

```json
module.exports = {
    entry: "./src/main.js", 
    output: { 
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js", 
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
};
```

注意事项：use 里的loader是有执行顺序的，从后往前执行。因为我们需要先加载css文件然后再插入到样式标签中，所以css-loader在最后面（最后面的最先执行，从后往前执行）

#### 加载less文件：less-loader 

加载less文件要用到3个loader，如果你已经安装css-loader和style-loader，再安装一个less-loader就可以了。

（1）安装 less-loader

```
npm install less-loader -D
```

（2）在 webpack.config.js 文件中，配置less-loader

```
module.exports = {
    module: {
        rules: [
            {
                test: /\.less$/,  // 匹配所有以 .less 后缀结尾的文件
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "less-loader"}
                ]
            }
        ]
    }
};
```

#### 加载sass/scss文件：sass-loader 

加载scss文件要用到3个loader，如果你已经安装css-loader和style-loader，再安装一个sass-loader就可以了。

（1）安装 sass-loader

```
npm install sass-loader -D
```

（2）在 webpack.config.js 文件中，配置sass-loader

```json
module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,  // 匹配所有以 .scss 后缀结尾的文件
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "sass-loader"}
                ]
            }
        ]
    }
};
```

#### 加载Vue文件：vue-loader

（1）安装Vue3

```
npm install vue@next
```

（2）在 src/main.js 入口文件引入 vue

```js
import {createApp} from 'vue'
import App from "./vue/App.vue"

const app = createApp(App).mount("#app");
```

（3）在 src目录中创建一个vue目录，里面有一个App.vue文件，文件里代码如下：

```vue
<template>
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
</template>

<script>
export default {
    data(){
        return {
            title: "静夜思",
            content: "床前明月光，疑是地上霜。举头望明月，低头思故乡。"
        }
    }
}
</script>
```

此时执行 npm run build 会报错，我们需要安装两个loader，来处理vue文件。

（4）安装 vue-loader@next 和 @vue/compiler-sfc，这两个组合起来是专门处理 Vue3 文件的。

```
npm install vue-loader@next @vue/compiler-sfc -D
```

（5）在webpack.config.js文件里配置 vue-loader

```json
{
 test: /\.vue$/,  // 匹配所有以 .vue 后缀结尾的文件
 loader: "vue-loader"
}
```

此时执行 npm run build 还是会报错，控制台显示报错，大概意思是我们还需要使用一个插件才能帮助我们完成加载vue文件。

这个插件不需要另外安装，是vue-loader里的一个方法，我们引出来即可，具体操作如下：

- 打开 webpack.config.js 文件，从 vue-loader 源码里引出这个方法 VueLoaderPlugin，然后在插件注册这个方法

```
const {VueLoaderPlugin} = require("vue-loader/dist/index")    

module.exports = {
  plugins: [
    new VueLoaderPlugin()
  ]
}
```

（6）在 index.html 添加一个根标签 #app，这个标签用于渲染vue的东西。

```html
<body>
    <div id="app"></div>
    <script src="./build/bundle.js"></script>
</body>
```

（7）最后运行 npm run build 可以看到网页上可以显示我们vue代码的内容了。

### Plugin

#### 自动删除打包目录：CleanWebpackPlugin

每次修改一些配置，重新打包时，都需要手动删除 build 目录。此时我们可以借助一个插件来帮助我们完成这个任务，这个插件就是CleanWebpackPlugin。

（1）安装 CleanWebpackPlugin

```git
npm install clean-webpack-plugin -D
```

（2）在 webpack.config.js 文件里配置 CleanWebpackPlugin

```json
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
 // 其他省略
 plugins: [
  new CleanWebpackPlugin()
 ]
}
```