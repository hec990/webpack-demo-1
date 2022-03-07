import "./css/style.css"
import "./css/1.less"
import "./css/2.scss"
import {createApp} from 'vue'
import App from "./vue/App.vue"

const app = createApp(App).mount("#app");


const divEl = document.createElement("div");
divEl.innerHTML = "Hello Webpack";
divEl.className = "title"; 

const divEl2 = document.createElement("div");
divEl2.innerHTML = "webpack 是一个用于现代 JavaScript 应用程序的 静态模块打包工具。";
divEl2.className = "content"; 

document.body.appendChild(divEl)
document.body.appendChild(divEl2)