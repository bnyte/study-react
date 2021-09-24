// 引入UI组件
import ShowUI from "../../components/Show";

// 引入connect链接UI组件和redux
import {connect} from "react-redux"

// 暴露容器组件
export default connect(mapStateToProps, mapDispatchToProps)(ShowUI)

function mapStateToProps(state) {
    return {sum: state}
}

function mapDispatchToProps(param) {
    return {storeSetState: (date) => {
    }}
}