import React,{Component} from "react";

class Text extends Component {
    render(){
        return (
            <div className="f2 tc">
                <h1>Hello world</h1>
                <p>Welcome to javascript React project</p>
                <p>{this.props.greeting}</p>
            </div>
        )
    }
}


export default Text;