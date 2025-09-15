import React, { useEffect, useRef } from 'react';
import { canim, setupWindowEvents } from './canim/camin';

const Contacts = () => {
  const contactRef = useRef(null);
  useEffect(() => {
    canim(contactRef)
    const cleanup = setupWindowEvents();
    return cleanup;
  }, []);

  return (
    <div className='bg-black min-h-screen overflow-hidden'>
      <div className='font-[font1] items-center text-center justify-center pt-3'>
        <h1 className='text-white lg:text-[8.9rem] text-7xl uppercase leading-30 '>Pour<br />parler de<br />votre<br />projet
        </h1>
      </div>
      <div className='flex text-white p-8 -lg:mt-33'>
        <div>
          <p className='text-white  lg:ml-30 '>Dans un écran ou un bureau.<br />Chez vous. Chez nous.<br />Partout.</p>
        </div>
        <div>
          <p className='text-white  lg:ml-200'>Dans un écran ou un bureau.<br />Chez vous. Chez nous.<br />Partout.</p>
        </div>
      </div>

      <div className='lg:mt-36 mt-7 w-max'>

        <div id="page1"></div>

        <div id="page2" className='h-[80px]'>
          <div className='flex bg-green-400 overflow-hidden  '>
            <div className='flex marque'>
              <div className=' h-full flex items-center gap-7 px-2 py-[2vw] shrink-0'>
                <h1 className='h-full flex items-center font-[font1] text-[4vw]'>THRIVE Beyonds limits </h1>
                <img src='https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg' alt='' className='h-[65px]' />
              </div>

              <div className=' h-full flex items-center gap-7 px-2 py-[2vw] shrink-0'>
                <h1 className='h-full flex items-center font-[font1] text-[4vw]'>THRIVE Beyonds limits </h1>
                <img src='https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg' alt='' className='h-[65px]' />
              </div>

              <div className=' h-full flex items-center gap-7 px-2 py-[2vw] shrink-0'>
                <h1 className='h-full flex items-center font-[font1] text-[4vw]'>THRIVE Beyonds limits </h1>
                <img src='https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg' alt='' className='h-[65px]' />
              </div>

              <div className=' h-full flex items-center gap-7 px-2 py-[2vw] shrink-0'>
                <h1 className='h-full flex items-center font-[font1] text-[4vw]'>THRIVE Beyonds limits </h1>
                <img src='https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg' alt='' className='h-[65px]' />
              </div>



              <div className=' h-full flex items-center gap-7 px-2 py-[2vw] shrink-0'>
                <h1 className='h-full flex items-center font-[font1] text-[4vw]'>THRIVE Beyonds limits </h1>
                <img src='https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg' alt='' className='h-[65px]' />
              </div>
            </div>




          </div>


        </div>

      </div>





      <div className='items-center text-center justify-center text-white uppercase font-[font1] flex flex-col gap-4'>
        <div>
          <p className='text-1xl lg:mt-72 mt-30'>Suivez-nous</p>
        </div>
        <div className='hover:text-green-400'>
          <button onClick={() => window.open('https://t.me/telegram.org', '_blank')}
            className='uppercase text-[5.5vw] leading-[5vw] border-[2px] border-white rounded-full px-14 pt-1 hover:border-green-400'>tg</button>
        </div>
      </div>
    </div>

  )
}

export default Contacts



