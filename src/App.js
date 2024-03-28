import React, { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import AppFunction from './AppFunction';
// import { robots } from './robots'; // Assuming you have imported the robots array from a separate file
// import Card from './Card';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(Response => Response.json()).then(users => setRobots(users) )
  },[])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  // console.log(filteredRobots)
  
  return (
    <div className='tc pa4'>
        <h1 className="pa5 br4 bg-light-green">Robo Friends</h1>
        <SearchBox searchChange={onSearchChange} />
        <CardList  robot={filteredRobots} />
        <AppFunction/>
    </div>
  );
};

export default App;
