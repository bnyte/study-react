// 引入UI组件
import CalculatorUI from "../../components/Calculator";

// 引入connect连接UI组件和redux
import {connect} from "react-redux"
import { increment, decrement, incrementAsync } from "../../redux/calculator_action"

// 使用connect创建容器组件并暴露
/**
 * connect()()在第一次被调用的时候需要传入两个函数，
 *      一个是传递给UI组件props参数的函数, 注意返回值必须是一个对象，在子组件(UI组件)中通过`this.props`获取相应的参数
 *      一个是用来操作参数的函数
 */
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
