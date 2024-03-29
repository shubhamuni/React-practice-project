import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY:"scroll",border:"2px solid black", height:"600px"}}>
            <p>CardList component inside a scroll component</p>
            {props.children}
        </div>
    )
}

export default Scroll;