import React, { useState } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { robots } from './robots'; // Assuming you have imported the robots array from a separate file
import Card from './Card';

const App = () => {
//   const [robots, setRobots] = useState(robots);
  const [searchfield, setSearchfield] = useState('');

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className='tc pa1'>
        <h1 className="">Robo Friends</h1>
        <SearchBox searchChange={onSearchChange} />
        <CardList robots={filteredRobots} />
    </div>
  );
};

export default App;
