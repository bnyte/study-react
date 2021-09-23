// 引入UI组件
import CalculatorUI from "../../components/Calculator";

// 引入connect连接UI组件和redux
import {connect} from "react-redux"

// 使用connect创建容器组件并暴露
export default connect()(CalculatorUI)