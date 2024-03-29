import React, { useEffect, useState } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import "./App.css"
import Scroll from '../components/Scroll';
// import { robots } from './robots'; // Assuming you have imported the robots array from a separate file
// import Card from './Card';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');
//in react function we don't use "ComponentDidMount() instead we use useEffect()"
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
        <h1 className="f1  pa5 br4 bg-light-green bungee-spice-regular">Robo friends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList  robot={filteredRobots} />
        </Scroll>
    </div>
  );
};

export default App;