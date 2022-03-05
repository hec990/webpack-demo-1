import "./css/style.css"

const divEl = document.createElement("div");
divEl.innerHTML = "Hello Webpack";
divEl.className = "title"; 

document.body.appendChild(divEl)