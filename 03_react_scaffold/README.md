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