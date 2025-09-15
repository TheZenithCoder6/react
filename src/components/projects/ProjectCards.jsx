import React from 'react'

const ProjectCards = (props) => {
  return (
    <>
      
            <div className='lg:w-1/2 h-full hover:rounded-[70px] overflow-hidden relative transition-all group'>
            <img className='h-full w-full object-cover' src={props.image1} alt=''/>
             <div className=' opacity-0 group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 bg-black/10 h-full w-full '>
              <h2 className='  text-6xl fomt-[font2] rounded-full border-4 border-white  px-6  text-white'>VOIR LE PROJET</h2>
            </div>
            </div>  
             <div className='lg:w-1/2 h-full hover:rounded-[70px] overflow-hidden relative transition-all group'>
            <img className='h-full w-full object-cover' src={props.image2} alt=''/>
             <div className=' opacity-0 group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 bg-black/10 h-full w-full '>
              <h2 className='  text-6xl fomt-[font2] rounded-full border-4 border-white  px-6  text-white '>VOIR LE PROJET</h2>
            </div>
            </div>  
         

    </>
  )
}

export default ProjectCards