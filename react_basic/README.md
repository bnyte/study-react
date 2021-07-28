# React的快速开始

> 引入核心依赖包

需要注意的是React的库文件引入是有顺序的，而引入的顺序以下面列出的顺序一致

```text
react.development.js # 核心库
react-dom.development.js # react操作DOM的库
babel.min.js
prop-types.js
```

> 创建html页面

在创建的Html页面中给与React操作的容器, 该容器可以为一个`div`标签, 因为React需要知道他操作的容器是哪个, 如以下Demo所示。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hello_react</title>
</head>
<body>
    <!-- 准备好React的"容器" -->
    <div id="test">
        
    </div>

    <!-- 引入react的核心库 -->
    <script src="../js/react.development.js" type="text/javascript"></script>
    <!-- 引入react-dom用于支持react操作dom -->
    <script src="../js/react-dom.development.js" type="text/javascript"></script>
    <!-- 引入babel用于将jsx转换为js -->
    <script src="../js/babel.min.js" type="text/javascript"></script>

    <!-- 注意：这里必须要写babel因为我们写的是jsx并且需要babel翻译成为js，并且必须写，因为不写默认是js -->
    <script type="text/babel">
        // 1. 创建虚拟DOM
        const VDOM = <h1>HelloReact</h1> // 在jsx中字符串不用写字符串, 并且是一定的，因为他不是字符串，他是React的虚拟DOM

        // 2. 渲染虚拟DOM到页面
        // ReactDOM.render(虚拟DOM, 容器)
        ReactDOM.render(VDOM, document.getElementById("test"))

    </script>
    
</body>
</html>
```

> 此时打开使用浏览器打开页面

![01](note_image/01.png)

## 小结及注意点

> 在引用React核心库的时候一定要记住他们是有顺序的。

> 在编写React脚本语句时一定要注意`type`属性中必须是`text/babel`否则会报错

> 在定义React`虚拟DOM`的时候他并不是字符串, 如果加上引号那么则说明这整个字符串是一个虚拟DOM的值，所以如果想让标签奏效则不能添加引号

> `ReactDOM.render(虚拟DOM, 容器)`语句是重写操作并不是追加操作，如果需要添加多个DOM元素则不能使用多次添加的方式

# 虚拟DOM的两种创建方式

## JSX（JavaScriptXml）

```javascript
<script type="text/babel">
    // 创建ReactDOM
    // 使用JSX方式创建标签时，如果有多行标签可以使用`()`括住
    const VDOM = (
        <h1 id="title">
            <span id="bnyte">HelloReact</span>
        </h1>
    )
    
    ReactDOM.render(VDOM, document.getElementById("app"))

</script>
```

## JavaScript

```javascript
<script type="text/javascript">
    // 创建ReactDOM
    // const VDOM = React.createElement("标签名", "标签属性格式：{key:value}", "标签值")
    const VDOM = React.createElement("h1", {"id": "title"}, React.createElement("span", {"id":"bnyte"}, "HelloReact"))

    // 渲染视图
    ReactDOM.render(VDOM, document.getElementById("app"))
</script>
```

## 小结

> 在使用JSX方式创建虚拟DOM时可以直接使用Html原生写法创建，但是JSX方式只会支持一个虚拟DOM中有一个跟标签存在，不允许有多个跟标签的存在

> 在使用原生js的方式创建虚拟DOM的时候需要借助`React`核心库中的`React对象中的createElement()`方法进行创建

> 就算使用了JSX方式创建了虚拟DOM那么他最终依然会被`babel`转换成使用`原生JS`的方式，然后去创建虚拟DOM实例

## tips

> 虚拟dom和真实dom的区别

1. 他们都是对象, 并且不是集合等其他的对象, 只是一个简单的Objct对象
2. 虚拟DOM的对象信息相对于真实DOM对象来说，他的信息比真实DOM更少

![02](./note_image/02.png)

# JSX的语法规则

> 虚拟DOM中获取普通变量值

```javascript
<script type="text/babel">
    const name = "bnyte"
    const age = 16

    // 创建ReactDOM
    const VDOM = (
        <h1>
            <span id="bnyte">name &gt;&gt; {name}</span> // 取值使用`{}`标记
            <br />
            <span id="bnyte">age &gt;&gt; {age}</span>
        </h1>
    )

    // 渲染React
    ReactDOM.render(VDOM, document.getElementById("app"))
</script>
```

> 获取css中的样式

```javascript
<script type="text/babel">
    
    // 创建ReactDOM
    /*
        *  引入css样式直接写即可, 但是不推荐因为这是错误的写法，这样的话会抛出异常
        *  `Invalid DOM property `class`. Did you mean `className`?`，也就是说我们应该是用`className`属性来指定样式
        */
    const VDOM = (
        <h1>
            <span className="title" id="bnyte">name &gt;&gt; {name}</span>
            <br />
            <span >age &gt;&gt; {age}</span>
            <br />
            <span>arr &gt;&gt; {arr}</span>
        </h1>
    )

    // 渲染React
    ReactDOM.render(VDOM, document.getElementById("app"))
</script>
```

```html
<style>
    .title{
        background-color: palevioletred;
        width: 20px;
    }
</style>
```

> 小Demo, 遍历

```javascript
<script type="text/babel">
    
    // 定义常量
    const users = ["ggboy", "bnyte", "大帅哥"]

    // 需要注意的是每个相同的标签都应该有一个唯一的key属性, React就是通过这个key来获取不同的标签
    const VDOM = (
        <ul>
            {
                users.map((value, index) => {
                    return <li key={index}>{value}</li>
                })
            }
        </ul>
    )

    // 获取容器
    ReactDOM.render(VDOM, document.getElementById("app"))
</script>
```

## 小结

> 引入css样式直接写即可, 但是不推荐因为这是错误的写法，这样的话会抛出异常`Invalid DOM property `class`. Did you mean `className`?`，也就是说我们应该是用`className`属性来指定样式

> 需要注意的是每个相同的标签都应该有一个唯一的key属性, React就是通过这个key来获取不同的标签

# 面向组件编程

> 函数式组件

```javascript
<script type="text/babel">
    // 创建函数式组件
    function Demo() {
        return <h1>这是函数式组件编程</h1>
    }
    // 引用函数式组件, 需要注意的是引用函数式组件的时候必须使用标签的方式引入并且首字母必须大写，并且标签必须闭合
    ReactDOM.render(<Demo/>, document.getElementById("app"))

</script>
```