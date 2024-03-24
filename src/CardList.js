import React from "react";
import Card from "./Card";


export const CardList = (props) => {
    
    const cardComponent = props.robots.map((user)=>{
        return <Card name={user.name} id={user.id} email={user.email} />;
    })
    console.log(props.robots)
    return(
        <div>
            {cardComponent}
        </div>    
    );
}
