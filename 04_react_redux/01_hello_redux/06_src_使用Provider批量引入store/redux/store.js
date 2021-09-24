/**
 * 该文见用于暴露一个store对象，整个应用只有一个store对象
 */
import {createStore, applyMiddleware} from "redux"

// 引入为Calcuator服务的reducer
import calculatorReducer from "./calculator_reducer"

// 引入异步回调中间件
import thunk from "redux-thunk"

// 通过reducer创建store并暴漏出去
const calculatorStore = createStore(calculatorReducer, applyMiddleware(thunk))

export {calculatorStore}