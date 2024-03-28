import React from "react";
import Card from "./Card";

const CardList = ({ robot }) => {
    return(
        robot.map((user,i)=>{
            return <Card key={i} name={robot[i].name} id={robot[i].id} email={robot[i].email} />;
        })    
    );
}

export default CardList;