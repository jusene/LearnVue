## Vue中的MVVM

Model View ViewModel

- el:
    - 类型：string|htmlelement
    - 作用: 决定之后vue实例会管理哪一个dom
- data:
    - 类型：object|function（组件当中data必须是一个函数）
    - 作用：vue实例对应的数据对象
- methods:
    - 类型: {[key: string]: function}
    - 作用: 定义属于vue的一些方法，可以在其他地方调用，也可以在指令中使用

## Vue的生命周期

![](https://github.com/jusene/LearnVue/blob/master/day1/img/lifecycle.png)

## let/var

```javascript
// 监听
// ES5
// 闭包解决，函数是一个作用域
var btns = document.getElementByTagName('button');
for (var i = 0; i < btns.length; i++) {
    (function(i) {
        btns[i].onclick = function() {
            alert('点击了'+i+'个')
        }
    })(i)
}

// ES6
// let 有if和for的作用域
let btns = document.getElementByTagName('button');
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
        alert('点击了'+i+'个')
    }
}
```