import React from 'react'
import Video from '../components/home/Video'
import Hometext from '../components/home/Hometext'
import HomeBottomtext from '../components/home/HomeBottomtext'


const Home = () => {
  return (
    <>
    <div>
      <div className='h-screen w-screen fixed autoplay '>
       <Video/>
      </div>
      <div className='h-screen w-screen relative flex flex-col justify-between pb-5 overflow-hidden'>
        <Hometext />
        <HomeBottomtext />
      </div>
    </div>
    </>
  )
}

export default Home