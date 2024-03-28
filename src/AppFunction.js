import React, { Component } from "react";

class AppFunction extends Component {
    constructor(props) {
      super(props);
      console.log(props.value);
      // this.clickFunction = this.clickFunction.bind(this);
    }  clickFunction() {
      console.log(this.props.value);
    }  render() {
      return(
        <div onClick={this.clickFunction}>Click Me!</div>
      );
    }
  }
  export default AppFunction;