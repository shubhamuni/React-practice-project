// import Text from './Text'
import './App.css';
import React from 'react';

const Card = () => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robo' src='https://robohash.org/test?200*200' />
      <div>
        <h2>Shubham Patil</h2>
        <p>shubhampatil@example.com</p>
      </div>
    </div>
  )
}

export default Card;
