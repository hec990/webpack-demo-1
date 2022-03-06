import "./css/style.css"
import "./css/1.less"

const divEl = document.createElement("div");
divEl.innerHTML = "Hello Webpack";
divEl.className = "title"; 

document.body.appendChild(divEl)