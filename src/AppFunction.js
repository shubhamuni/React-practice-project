import React from "react";


function AppFunction () {
  const object = {
    name:"Shubham",
    lastName: "Patil"
  }
  const fullName = function (city,state) {
    console.log(this.name + " " + this.lastName + " from " + city+ " " + state)
  }
  fullName.call(object,"Pune","Maharashtra");
  fullName.apply(object,["Pune","Maharashtra"])
  const printMe = fullName.bind(object,"Pune","Maharashtra")
  printMe()
  const object1 = {
    name:"Pratik",
    lastName: "Sathye"
  }
  fullName.call(object1,"Malegaon","From call of maharashtra")
  fullName.apply(object1,["Malegaon,","Maharashtra"])
  return(
    <div>
      <fieldset>
        <legend aria-required>Account type (required)</legend>
        <label for="personal-account"><input for="personal-account" id="personal-account" type="radio" name="account-type" checked /> Personal</label>
      </fieldset>
    </div>
  ) 
}

export default AppFunction;