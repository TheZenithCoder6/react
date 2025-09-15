import React from 'react'
import ProjectCards from '../components/projects/ProjectCards'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Projects = () => {
const project = [{
  image1:'https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg',
  image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg',
},{
  image1:'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg',
  image2:'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
},{
  image1:'https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg',
  image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg',
}]

gsap.registerPlugin(ScrollTrigger)
useGSAP(function(){
gsap.from('.hero',{
  height:'100px',
  delay:0.4,
  ease:'power2.out',
  scrollTrigger:{
    trigger:'.lol',
    start:'top 100%',
    end:'top -450%',
    scrub:true
  }
})
})


  return (
    <div className='lg:p-4 p-2 mb-[0vh]'>
      <div className='pt-[45vh]'>
        <h1 className='lg:text-[12vw] lg:font-[font2] text-7xl'>PROJETS<sup className='text-[3vw] align-super font-[font2]'>16</sup></h1>
      </div>
      <div className='-lg:mt-17 lol'>
        {project.map(function(elem, idx) {
          return    <div key={idx} className='hero w-full lg:h-[850px] flex lg:flex-row flex-col lg:gap-4 gap-2 mb-4'> 
          <ProjectCards image1={elem.image1} image2={elem.image2}/>
           </div>
        })}
        </div>
      </div>
  )
}

export default Projects