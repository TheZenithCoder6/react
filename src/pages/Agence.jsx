import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Agence = () => {

gsap.registerPlugin(ScrollTrigger)
const imageDivref = useRef(null)
 const imageRef = useRef(null)

 const imageArray =[
   'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
 ]

useGSAP(() => {
   gsap.to(imageDivref.current, {
      scrollTrigger: {
        trigger: imageDivref.current,
        start: 'top 36%',
        end: 'top -70%',
        pin: true,
       pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1, 
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate:(elem)=>{
          let imageIndex
          if(elem.progress<1){
            imageIndex = Math.floor(elem.progress * imageArray.length -1)
          }else{
           imageIndex = imageArray.length - 1
          }
          imageRef.current.src=imageArray[imageIndex]
        }
    }
  })
})


  return (
    <div>
    <div className='section1' py-1>
      <div ref={imageDivref} className='top-45 lg:left-[30vw] left-[20vw] absolute lg:h-[40vh] h-[20vh] rounded-3xl lg:w-[15vw] w-[25vw]  overflow-hidden'>
        <img ref={imageRef} className='h-full w-full object-cover' src='https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg' alt=''/>
        
      </div>
        <div className='relative'>
      <div className='font-[font2]'>
      <div className='lg:mt-[55vh] mt-[25vh]'>
        <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Soixan7e<br/>Douze</h1>
      </div>
      <div className='pl-[50%] mt-20' >
        <p className='lg:text-6xl '> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des
            valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons 
            chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à 
            donner de la perspective, pour bâtir des marques influentes.</p>
      </div>
    </div>
    </div>
    </div>
  </div>
  )
}

export default Agence