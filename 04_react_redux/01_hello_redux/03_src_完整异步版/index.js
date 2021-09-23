import ReactDOM from "react-dom";

import App from "./App"

import {calculatorStore} from "./redux/store"

ReactDOM.render(<App />, document.getElementById("root"))

calculatorStore.subscribe(() => {
    ReactDOM.render(<App />, document.getElementById("root"))
})
