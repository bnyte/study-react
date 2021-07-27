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
>
> 在编写React脚本语句时一定要注意`type`属性中必须是`text/babel`否则会报错
>
> 在定义React`虚拟DOM`的时候他并不是字符串, 如果加上引号那么则说明这整个字符串是一个虚拟DOM的值，所以如果想让标签奏效则不能添加引号
>
> `ReactDOM.render(虚拟DOM, 容器)`语句是重写操作并不是追加操作，如果需要添加多个DOM元素则不能使用多次添加的方式
