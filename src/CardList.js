import React from "react";
import Card from "./Card";

//map also same for below code 
// const cardArray = props.robots.map((user)=>{
//     return <Card key={user.id} name={user.name} id={user.id} email={user.email} />;
// })
// console.log(robots)
// Destructring happens below { robots } value that we passed in app component (robots={filteredRobots})
const CardList = ({ robots }) => {
    //below is just for explaining this keyword.
const obj = {
    a:10,
    x:function() {
        console.log(this.a)
    }
}
obj.x();
    return(
        robots.map((user,i)=>{
            return <Card key={i} name={robots[i].name} id={robots[i].id} email={robots[i].email} />;
        })    
    );
}

export default CardList;