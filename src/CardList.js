import React from "react";
import Card from "./Card";


export const CardList = ({ robots }) => {
    
    // const cardArray = props.robots.map((user)=>{
    //     return <Card key={user.id} name={user.name} id={user.id} email={user.email} />;
    // })
    // console.log(robots)
    return(
        robots.map((i)=>{
            return <Card key={i} name={robots[i].name} id={robots[i].id} email={robots[i].email} />;
        })    
    );
}

export default CardList;