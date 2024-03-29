// import Text from './Text'
import './App.css';
import React from 'react';

const Card = (props) => {
 const { name, email, id, city } = props
  return (
    <div className='bg-light-green dib br4 pa3 ma3 grow bw2 shadow-5'>
      <img alt='robo' src={`https://robohash.org/${id}?200*200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>Planet: {city}</p>
      </div>
    </div>
  )
}

export default Card;
