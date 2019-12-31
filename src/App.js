import React, { Component} from "react";
import "./App.css";
import Layout from "./Layout.js";

class App extends Component{
    render(){
        return(
            <div className="App">
                <h1> Hello, World! </h1>
                <Layout />
            </div>
        );
    }
}

export default App;