import ReactDOM from "react-dom";
import {Provider} from "react-redux"

import App from "./App"
import {calculatorStore} from "./redux/store"

ReactDOM.render(
    /** 吧store交给Proider管理，它会自动将所有的容器组件传入store */
    <Provider store={calculatorStore}>
        <App />
    </Provider>, 
    document.getElementById("root")
)