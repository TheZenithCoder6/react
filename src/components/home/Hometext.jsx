import React from 'react'
import Video from './Video'

const Hometext = () => {
    return (
        <>
        <div className='font-[font1] pt-5 lg:mt-0 mt-45 text-center text-white justify-center'>
            <div className='uppercase lg:text-[9.5vw] text-[12vw] lg:leading-[8vw] leading-[10vw] '> L'étincelle </div>
            <div className='uppercase lg:text-[9.5vw] text-[12vw] lg:leading-[8vw] leading-[10vw]   justify-center flex items-center'> 
            qui <div className='ho h-[7vw] w-[16vw] rounded-full overflow-hidden mt-5'>
                <Video />
            </div>
               génère </div>
            <div className='uppercase lg:text-[9.5vw] text-[12vw] lg:leading-[8vw] leading-[10vw] '> la créativité</div>
            <div>
              
            </div>
        </div>
        </>
    )
}

export default Hometext