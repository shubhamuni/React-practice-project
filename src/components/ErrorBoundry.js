import React, { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    render () {
        return {
            if(this.state.hasError){
                return <h1>Oops there is somenthing wrong</h1>
            }
        }
    }
}