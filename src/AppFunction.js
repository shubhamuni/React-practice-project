import React, { Component } from "react";

class AppFunction extends Component {
    constructor({ robots }) {
      super({ robots });
      this.clickFunction = this.clickFunction.bind(this);
    }  clickFunction() {
      console.log(this.robots.value);
    }  render() {
      return(
        <div onClick={this.clickFunction}>Click Me!</div>
      );
    }
  }
  export default AppFunction;