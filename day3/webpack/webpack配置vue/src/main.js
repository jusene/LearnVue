import {add, muti} from "./js/math";

console.log(add(1, 2))
console.log(muti(1, 2))

// 依赖css文件
require("./css/style.css")

// 以来less文件
require("./css/special.less")

document.writeln('<h2>hello world</h2>')

// 使用vue
import Vue from 'vue'
import App from './vue/App.vue'

new Vue ({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})