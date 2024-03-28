import React, { useState } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { robots } from './robots'; // Assuming you have imported the robots array from a separate file
import AppFunction from './AppFunction';
// import Card from './Card';

const App = () => {
//   const [robots, setRobots] = useState(robots);
  const [searchfield, setSearchfield] = useState('');

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  console.log(filteredRobots)
  
  return (
    <div className='tc pa4'>
        <h1 className="pa5 br4 bg-dark-green">Robo Friends</h1>
        <SearchBox searchChange={onSearchChange} />
        <CardList  robot={filteredRobots} />
        <AppFunction value={filteredRobots}/>
    </div>
  );
};

export default App;
