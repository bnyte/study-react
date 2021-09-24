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

- 最终的创建容器组件的代码

```javascript
// 引入UI组件
import CalculatorUI from "../../components/Calculator";

// 引入connect连接UI组件和redux
import {connect} from "react-redux"
import { increment, decrement } from "../../redux/calculator_action"

// 使用connect创建容器组件并暴露
/**
 * connect()()在第一次被调用的时候需要传入两个函数，
 *      一个是传递给UI组件props参数的函数, 注意返回值必须是一个对象，在子组件(UI组件)中通过`this.props`获取相应的参数
 *      一个是用来操作参数的函数
 */
export default connect(mapStateToProps, mapDispatchToProps)(CalculatorUI)
// TODO 注意这中方式和上面的方式必须二选一
export default connect(
        mapStateToProps,
        /*
            这是mapDispatchToProps的简写方式, 这种方式只需要其中对象属性的值是一个action
            那么react-redux就会自动去调用dispatch(action)，然后将指定对象属性中action值作为参数去更新状态
        */
        {
            increment: increment,
            decrement: decrement,
            incrementAsync: incrementAsync
        }
    )(CalculatorUI)

/**
 * 传递状态的方法
 * 
 * 传递props参数的函数, 其返回值必须要是一个对象，然后在UI组件中可以直接通过对象属性来获取到这个state值
 * redux在底层调用的时候会掉用这个函数并且会把当前state值传过来给我们，我们只需要了通过方法中传过来的值就可以获取到最新的state值
 */
function mapStateToProps(state) {
    return {sum: state}
}

/**
 * 操作状态的方法
 * @param {*} dispatch 用于更新state值的store中的dispatch方法 
 * @returns 返回值和前面的mapStateToProps形同，返回值必须是一个对象，keykey就是通过props传入的时候接受的属性名
 *          value是一个函数，用于给UI组件调用来对state坐状态更新，需要注意的是这个函数也是被redux底层调用的
 *          他会传递一个dispatch()函数返回给我们，此时我们就可以完成对state状态的更新
 */
function mapDispatchToProps(dispatch) {
    return {
        increment: 
            (data) => {
                dispatch(increment(data))
            },
        decrement: 
            (data) => {
                dispatch(decrement(data))
            }
    }
}
```

> 注意: 通过此方式，子组件就可以直接通过this.props来获取相应的操作state或者获取state的方式了

## 安装redux开发者工具库

- 下载

```
yarn add redux-devtools-extension
```

- 配置

```javascript
/**
 * 该文见用于暴露一个store对象，整个应用只有一个store对象
 */
import {createStore, applyMiddleware} from "redux"
// 引入异步回调中间件
import thunk from "redux-thunk"
// redux开发者工具
import {composeWithDevTools} from "redux-devtools-extension"
// 引入为Calcuator服务的reducer
import calculatorReducer from "./calculator_reducer"


// 通过reducer创建store并暴漏出去
const calculatorStore = createStore(calculatorReducer, composeWithDevTools(applyMiddleware(thunk)))

export {calculatorStore}
```