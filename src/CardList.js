import React, { Fragment } from "react";
import Card from "./Card";


export const CardList = (props) => {
    
    const cardArray = props.robots.map((user)=>{
        return <Card key={user.id} name={user.name} id={user.id} email={user.email} />;
    })
    console.log(props.robots)
    return(
        <Fragment>
            {cardArray}
        </Fragment>    
    );
}
