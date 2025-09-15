import React from 'react'
import {Link} from 'react-router-dom'

const HomeBottomtext = () => {  
  return (
    <div className='text-white font-[font2] flex flex-wrap justify-center items-center gap-5'>
      <div className='hover:text-green-400 '> 
        <Link className='uppercase text-[5.5vw] leading-[6vw] sm:text-[5vw] sm:leading-[5vw] border-3  border-white rounded-full lg:px-14 lg:pt-5 px-4 pt-1 hover:border-green-400' to='/projects'>PROJECTS</Link>
      </div>
      
      <div className='hover:text-green-400'>
        <Link className='uppercase text-[5.5vw] leading-[6vw] sm:text-[5vw] sm:leading-[5vw] border-[3px]  border-white rounded-full lg:px-14 lg:pt-5 px-4 pt-1 hover:border-green-400' to='/agence'>AGENCE</Link>
      </div>
      
    </div>
  )
}

export default HomeBottomtext