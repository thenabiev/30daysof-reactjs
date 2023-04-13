import React from 'react'
import Counter from './Counter'

const Home = ({counter, setCounter}) => {
  return (
    <div className='home'>
      <Counter counter={counter} setCounter={setCounter}/>
    </div>
  )
}

export default Home
