import React, {Component} from "react";
import { Hello } from "./components/Hello";

/**
 * 创建组件
 */
export default class App extends Component {
    render() {
        return (
            <div>
                <h1>This is React Page</h1>
                <Hello />
            </div>
            
        )
    }
} 