# Redux

## 下载Redux

```
yarn add redux
```

## 快速开始

### 创建redux文件夹

> 在`src`文件夹下创建`redux`文件夹用于管理所有的`redux`

### 编写`reducer`

- 在`src/redux`文件夹下创建文件`calculator_reducer.js`

```javascript
/**
 * 1. 该文件是用于创建一个为Calculator组件服务的reducer，reducer的本质上是一个函数
 * 2. reducer函数会接受到两个参数，分别为：之前的状态(preState)，动作对象(action{type, data})
 */
const initValue = 0
// preState = initValue 意思是当前一个值为undefined的时候则使用默认值 initValue (初始化的时候就是未定义)，这里返回的值就是在其他组件中使用getState()API的时候调取获取到的返回值
export default function calculatorReducer(preState = initValue, action) {
    console.log("preState", preState);
    // 从action对象中获取数据
    const {type, data} = action
    // 根据type决定如何加工数据
    switch (type) {
        case "increment": // 加法
            return preState + data
        case "decrement": // 剑法
            return preState - data     
        default:
            return preState
    }
}
```

> 注意：`action`是一个对象，需要接收一个`String:type`和`Object:data`，`calculatorReducer`该方法返回值就是调用`getState()`时获取到的返回值

### 编写`store.js`

- 在`src/redux`文件夹下创建文件`store.js`

```javascript
/**
 * 该文见用于暴露一个store对象，整个应用只有一个store对象
 */
import {createStore} from "redux"

// 引入为Calcuator服务的reducer
import calculatorReducer from "./calculator_reducer"

// 通过reducer创建store并暴漏出去
const calculatorStore = createStore(calculatorReducer)

export {calculatorStore}
```

## redux的API

- getState()

获取当前redux维护的state值
```
calculatorStore.getState()
```

- dispatch(Object:action)

更新当前的state值
```
calculatorStore.dispatch({type: "increment", data: incrementNum})
```

- subscribe()
订阅，当state值发生改变时调用回调，需要注意的是subscribe()不会重新调用`render()`，也就是不会重新渲染页面，所以需要手动更新，方法很多，在组件中的钩子函数上添加如下代码或直接渲染整个父组件
```
// 组件将要挂在的钩子函数
componentDidMount() {
    calculatorStore.subscribe(() => {
        this.setState({})
    })
}
```

## 安装`redux-thunk`使用`异步action`

```
yarn add redux-thunk
```

- 添加异步action函数

```javascript
// 异步action
export const incrementAsync = (data, time) => {
    // 这个dispatch是在被回调的时候redux传过来的
    return (dispatch) => {
        setTimeout(() => {
            // 值更新, 该API会调用showReducer
            dispatch(increment(data))
        }, time)
    }
}
```

- 修改`store.js`
```javascript
import {createStore, applyMiddleware} from "redux" // 引入applyMiddleware执行异步中间件

// 引入异步回调中间件
import thunk from "redux-thunk" // 引入异步中间件

// 通过reducer创建store并暴漏出去
const calculatorStore = createStore(calculatorReducer, applyMiddleware(thunk)) // 创建store的时候让该store支持异步
```

## 使用官方的`react-redux`

- 下载redux

```
yarn add react-redux
```

- 配置redux

> 在`src`下创建`containers`文件夹，该文件夹用于创建容器组件

- 创建容器组件

```javascript
// 引入UI组件
import CalculatorUI from "../../components/Calculator";

// 引入connect连接UI组件和redux
import {connect} from "react-redux"

// 使用connect创建容器组件并暴露
export default connect()(CalculatorUI)
```

- 在`App.jsx`中不在引入UI组件，而是我们创建的容器组件，并且需要注意的是, 要将store通过props的方式传入, props的key为store

```javascript
import React, { Component } from 'react'

import Calculator from './containers/Calculator'
import Show from './containers/Show'

import {calculatorStore} from "./redux/store"

export default class App extends Component {

    render() {
        return (
            <div>
                <Show store={calculatorStore} />
                <Calculator store={calculatorStore} />
            </div>
        )
    }

}
```