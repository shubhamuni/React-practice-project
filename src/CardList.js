import React from "react";
import Card from "./Card";


export const CardList = ({ robots }) => {
    const cardComponent = robots.map((user, i)=>{
        return <Card name={user[i].name} id={user[i].id} email={user[i].email} />;
    })
    return(
        cardComponent   
    );
}
