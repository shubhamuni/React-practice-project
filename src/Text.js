import React from "react";

const Text = (props) => {
    return (
        <div className="f2 tc">
            <h1>Hello world</h1>
            <p>Welcome to javascript React project</p>
            <p>{props.greeting}</p>
        </div>
    )
}


export default Text;