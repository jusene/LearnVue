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

