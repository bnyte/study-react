# React的生命周期

## React的钩子

### React的初始化钩子`componentDidMount`

> 在组件中创建`componentDidMount()`, React会在组件初始化的之前调用该方法, 在这里可以执行一些初始化操作。

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>01-引出生命周期</title>
    <!-- 引入react的核心库 -->
    <script src="../js/react.development.js" type="text/javascript"></script>
    <!-- 引入react-dom用于支持react操作dom -->
    <script src="../js/react-dom.development.js" type="text/javascript"></script>
    <!-- 引入babel用于将jsx转换为js -->
    <script src="../js/babel.min.js" type="text/javascript"></script>
</head>
<body>
    <div id="app"></div>

    <script type="text/babel">
        // 创建组件
        class LifeDemo extends React.Component {

            state = {opacity: 1, isStater: false}
            
            // 删除组件
            remove = (event) => {
                ReactDOM.unmountComponentAtNode(document.getElementById("app"))
            }

            // 钩子函数, 这个函数会在react组件初始化完成之后渲染到页面之前执行
            componentDidMount() {
                // 执行循环state
                this.cycle()
            }

            // 组件删除之前, 这个函数会在组件删除之前执行
            componentWillUnmount() {
                clearInterval(this.timer)
            }

            // 循环state
            cycle = () => {
                let {isStater} = this.state
                if (!isStater) {
                    this.setState({isStater: !isStater})
                    this.timer = setInterval(() => {
                        let {opacity} = this.state
                        if (opacity > 0) {
                            opacity -= 0.1
                        }
                        else {
                            opacity = 1
                        }
                        // 触发对象和其属性变量名同名可以简写
                        this.setState({opacity})
                    }, 200)
                }
                else {
                    console.log("已经开启定时器了.....");
                }
            }

            render () {
                return (
                    <div>
                        <h1  style={{opacity: this.state.opacity}}>React学不会怎么办</h1>
                        <button onClick={this.remove}>不活了</button>
                    </div>
                )
            }

        }

        ReactDOM.render(<LifeDemo />, document.getElementById("app"))
    </script>
</body>
</html>
```