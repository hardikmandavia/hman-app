import React, { Component} from "react";
import {hot} from "react-hot-loader";

class App extends Component{
  render(){
    console.log(process.env.NODE_ENV);
    return(
      <div>
        <h1>Hardik-Mandavia</h1>
      </div>
    );
  }
}

export default hot(module)(App);
