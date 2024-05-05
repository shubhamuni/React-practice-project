import React, { useEffect, useState } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import "./App.css"
import Scroll from '../components/Scroll';
import AppFunction from '../AppFunction';
import ErrorBoundry from '../components/ErrorBoundry';
// import { robots } from './robots'; // Assuming you have imported the robots array from a separate file
// import Card from './Card';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');
//in react function we don't use "ComponentDidMount() instead we use useEffect()"
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(Response => Response.json()).then((users)=>{
      setTimeout(() => {
        setRobots(users)
      }, 1000);
    } )
  },[])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  // console.log(filteredRobots)
  
  return !robots.length ? <h1 className='f1 bungee-spice-regular tc ma6 pa7'>Loading</h1>
  : <div className='tc pa4'>
      <h1 className="f1  pa5 br4 bg-light-green bungee-spice-regular">Robo friends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList  robot={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
      <AppFunction/>
    </div>
};

export default App;
