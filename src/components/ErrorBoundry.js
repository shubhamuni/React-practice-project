import React, { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: true
        }
    }
    //Error boundry for any error in CardList component
    render () {
        if(this.state.hasError){
            return <h1>Oops there is somenthing wrong</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundry;