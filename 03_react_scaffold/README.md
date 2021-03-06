# React脚手架

> React脚手架类似于一个`SpringBoot`但是这么说也不合适，他也不像`SpringBoot`，他只是将前端需要的东西做了一个统一包括`路由、request的封装，等等并且会有一个HelloWorld`这些点和`SpringBoot`很像，你只需要在启动类添加一个`@SpringBootApplication`你就能完成`web后台项目的搭建`。

# React脚手架的快速开始

> 首要前提是`全局下载React脚手架`

- 要安装react脚手架的前提是你已经安装了`nodejs`环境。

下载React脚手架

```shell
yarn install create-react-app
```

创建React脚手架项目

```shell
create-react-app hello-react-scaffold
```

- 做一下步骤需要进入到项目的根目录

```shell
cd hello-react-scaffold
```

运行项目

```shell
yarn start
```

以测试方式运行项目

```shell
yarn test
```

项目打包

```shell
yarn build
```

显示webpack的配置文件（不可逆）

```shell
yarn eject
```

# React脚手架的目录解析

```txt
public                  ----    
    favicon.ico         ----    网站图标
    index.html          ----    网站首页页面(至多且至少存在一个)
    logo192.png         ----    (logo)
    logo512.png         ----    (logo)
    manifest.json       ----    (打包成ios或者apk软件的套壳配置文件)
    robots.txt          ----    (防止爬虫配置文件)
src                     ----
    App.css             ----
    App.js              ----    React组件, 该文件默认会暴露出去并且名为'App'
    App.test.js         ----
    index.css           ----
    index.js            ----
    logo.svg            ----
    reportWebVitals.js  ----
    setupTests.js       ----
.gitignore              ----
package.json            ----
README.md               ----
yarn.lock               ----
```

# React脚手架配置less

> 安装less和less-loader插件包

```shell
yarn add less less-loader@7.0
```

> 显示webpack配置文件

注意：执行这条命令之前git暂存区必须为空，也就是必须提交代码才可以否则会报错

```shell
yarn eject
```

> 配置`config -> webpack.config.js`

- 搜索`sassModuleRegex`然后在后面添加两行代码

```javascript
const lessRegex = /\.(less)$/;
const lessModuleRegex = /\.module\.(less)$/;
```

- 搜索`sass-loader`大概在`461行`模仿代码中提供的`sassRegex`代码，添加如下代码

```javascript
{
    test: lessRegex,
    exclude: lessModuleRegex,
    use: getStyleLoaders(
        {
            importLoaders: 2,
            sourceMap: isEnvProduction && shouldUseSourceMap,
        },
        "less-loader"
    ),
    sideEffects: true,
},
{
    test: lessModuleRegex,
    use: getStyleLoaders(
        {
            importLoaders: 2,
            sourceMap: isEnvProduction && shouldUseSourceMap,
            modules: true,
            getLocalIdent: getCSSModuleLocalIdent,
        },
        "less-loader"
    ),
},
```

# React配置代理的两种方式

## 修改`package.json`

> 在`package.json`中添加如下配置

```json
{
    "proxy": "ip:port"
}
```

## 在`src`目录下新建文件`setupProxy.js`

```javascript
const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        proxy('/api1', { // 遇见以当前指定的`/api1`的请求则标识为走代理
            target: "http://localhost:8080", // 请求转发的目标地址
            changeOrigin: true, // 控制服务器收到的请求头中Host字段值
            pathRewrite: {"^/api1": ""} // 重写请求路径
        }),
        proxy('/api1', {
            target: "http://localhost:8081",
            changeOrigin: true,
            pathRewrite: {"^/api2": ""}
        })
    )
}
```

# React的组件之间通信

> 组件库`yarn add pubsubjs`

# React路由

## 下载`react-router-dom`

```
yarn add react-router-dom
```

## Link(导航)

> Link可以代表`a标签`，但是需要注意的是在编写`Link`标签替代`a`标签的时候，在`a`标签中的`href`要转换为`to`属性，其他一致, 如果添加`replace`属性则说明使用替换栈顶的方式跳转， 默认是用的`push`压栈模式

## Route(展示)

> 使用该标签他是单闭合的，只需要给属性`path="url"`和`component={组件名}`就可以完成了，在注册路由的时候只需要添加`exact`属性就能开启严格匹配(必须完全一致)

## NavLink(导航)

> 该标签和`Link`使用相同，只是他多了一个属性`activeClassName="样式名"`，就是当这个标签被点击之后会添加上该样式，但是需要注意的是这是`唯一的`，当新的标签被加上新的样式之后，旧的标签的样式就会被取消掉，另外如果没有指定样式名则会默认添加样式名为`active`的样式

## Switch(条件)

> 使用该标签用于在`注册路由`的时候来进行匹配规则，这里的匹配规则就是，在该标签体中的所有标签都会被标识为`一次匹配`也就是说，只要匹配到一次了那就不会在继续往下继续匹配了，如果没有匹配会继续匹配，知道匹配完毕或匹配到一个之后结束。`用于包裹注册路由时使用`

## Redirect(重定向，兜底)

> 当所有注册的路由都没有被匹配上的时候此时会去到这个`Redirect`指定的`to`属性地址值，注意：该标签需要写在所有的`Route`的最后一行

```
{/* 注册路由 */}
<Route path="/about" component={About} />
<Route path="/home" component={Home} />
<Redirect to="/about" />
```

## 路由组件接收参数

- *params*: 直接在路由中使用`:key`的方式就会被自动映射到`props.match.params`中，并且key就是`url中的:key`，`value就是uri中的值`

- *search*: 引入官方下载好的库`querystring`, 通过`parse和JSON转换为字符串的方法解析即可`，注意需要使用方法`slice(1)`去除第一个问号，值在`props.location.search`, 该方式正常传入即可不需要声明接受

- *state*: 向路由组件传递`state`参数(与组件中的state没有任何关系)，传递方式是一个对象如下代码，值在`props.location.state`, 该方式正常传入即可不需要声明接受

```
{
    pathname: "请求url",
    state: {
        id: "参数值",
        ...
        name: "参数值"
        }
}
```

## 一般组件具有路由组件功能

> 引入`react-router-dom`中的`withRouter`方法，通过该方法传入一个组件名，返回的对象就是一个加工之后的组件，此时就会具备路由组件所具备的功能

## 小结

- 需要注意的是不管是`Link`还是`Route`都要在`BrowserRouter`或`HashRouter`中，并且要想他们实现功能也必须要是他们都处于一个`BrowserRouter`来进行管理

# 使用组件UI

## 下载组件所需核心库

```
yarn add antd
```