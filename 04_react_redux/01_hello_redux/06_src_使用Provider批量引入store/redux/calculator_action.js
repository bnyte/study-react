import { DECREMENT, INCREMENT } from "./constant";

export const increment = data => ({type: INCREMENT, data})
export const decrement = data => ({type: DECREMENT, data})

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