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