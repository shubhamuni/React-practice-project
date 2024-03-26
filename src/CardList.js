import React from "react";
import Card from "./Card";

//map also same for below code 
// const cardArray = props.robots.map((user)=>{
//     return <Card key={user.id} name={user.name} id={user.id} email={user.email} />;
// })
// console.log(robots)

export const CardList = ({ robots }) => {
    
    return(
        robots.map((user,i)=>{
            return <Card key={i} name={robots[i].name} id={robots[i].id} email={robots[i].email} />;
        })    
    );
}

export default CardList;