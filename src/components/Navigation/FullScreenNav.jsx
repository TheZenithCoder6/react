import { useGSAP } from '@gsap/react'
import React, { useContext, useRef } from 'react'
import gsap from 'gsap'
import { NavbarContaxt } from '../context/NavContext'
import { useNavigate } from 'react-router-dom'

const FullScreenNav = () => {
  const navigate = useNavigate();
  const fullNavLinksRef = useRef(null)
  const fullScreenRef = useRef(null)
  const [navOpen, setnavOpen] = useContext(NavbarContaxt)

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to('.stairing', {
      height: 0,
      duration: 0.2,
      stagger: { amount: -0.2 }
    });


    tl.to('.link', {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.2
      }
    }, 0)

    tl.from('.close-btn', {
      opacity: 1,
      x: 130,
      duration: 0.2,
      ease: 'power2.out'
    }, 0)
  }

  function gsapCloseAnimation(onComplete) {
    const tl = gsap.timeline({
      onComplete: onComplete 
    })

    
    tl.to('.link', {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.2
      }
    });

    tl.to('.stairing', {
      height: '0',
      duration: 0.2,
      stagger: { amount: 0.2 }
    });

    tl.from('.close-btn', {
      opacity: 1,
      x: 130,
      duration: 0.1,
      ease: 'power2.out'
    });
  }



  useGSAP(() => {
    if (navOpen) {
      gsap.set('#fullscreennav', { display: 'block' }); 
    
      gsapAnimation();
    } else {
      gsapCloseAnimation(() => {
        gsap.set('#fullscreennav', { display: 'none' }); 
      });
    }
  }, [navOpen]);

  

  return (
    <div ref={fullScreenRef} id='fullscreennav' className='hidden fixed h-screen w-full  bg-black py-36 text-white top-0 left-0 z-[9999]'>
      <div className='h-screen w-full fixed z-50 pointer-events-none'>
        <div className='h-full w-full flex'>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
        </div>
      </div>


      <div ref={fullNavLinksRef} className='relative'>
        <div className='navlink flex w-full items-start justify-between  mt-[-80px] p-3 fixed' >


          <div className=''>
            
            <div className='bg-transparent lg:w-36 w-20 lg:p-5 p-2 '>
              <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44 ">
                <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
              </svg>
            </div>
          </div>
          <div onClick={() => {

            setnavOpen(false);


            setTimeout(() => {
              navigate('/');
            }, 800)
          }}

            className='close-btn lg:h-30 lg:w-30 h-20 w-20 cursor-pointer relative group'>
            <div className='lg:h-40 h-28 w-0.5 group-hover:bg-green-400 bg-white absolute -rotate-45 origin-top'></div>
            <div className='lg:h-40 h-28 w-0.5 group-hover:bg-green-400 right-0 bg-white absolute rotate-45 origin-top'></div>
          </div>
        </div>
        <div className='alllinks py-18 mt-[-68px]'>

          <div  onClick={() => {
    setnavOpen(false);
    setTimeout(() => {
      navigate('/projects');
    }, 800); 
  }}
           className='link origin-top border-t-1 border-white relative overflow-hidden'>
            <h1 className='uppercase font-[font2] text-[8vw]  pt-[0.9rem] leading-[0.8] text-center'>PROJETS</h1>
            <div className='absolute flex top-0 bg-green-400 text-black moveLink'>
              <div className='flex items-center  moveX'>
                <h2 className='whitespace-nowrap uppercase font-[font2] text-[8vw]  pd-10 text-5xl leading-[0.8] text-center'>Pour Tout voir</h2>
                <img className='h-36 rounded-full w-69 object-cover shrink-0 p-7  mt-[-10px]' src='https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg' alt='' />
                <h2 className='whitespace-nowrap uppercase font-[font2] text-[8vw] pd-10 ext-5xl leading-[0.8] text-center'>Pour Tout voir</h2>
                <img className='h-36 rounded-full w-69 object-cover shrink-0 p-7  mt-[-10px]' src='https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg' alt='' />
              </div>
              <div className='flex items-center moveX'>
                <h2 className='whitespace-nowrap uppercase font-[font2] text-[8vw] pd-10 text-5xl leading-[0.8] text-center'>Pour Tout voir</h2>
                <img className='h-36 rounded-full w-69 object-cover shrink-0 p-7  mt-[-10px]' src='https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg' alt='' />
                <h2 className='whitespace-nowrap uppercase font-[font2] text-[8vw] pd-10 text-5xl leading-[0.8] text-center'>Pour Tout voir</h2>
                <img className='h-36 rounded-full w-69 object-cover shrink-0 p-7  mt-[-10px]' src='https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg' alt='' />
              </div>
            </div>
          </div>

          <div onClick={() => {
    setnavOpen(false);
    setTimeout(() => {
      navigate('/agence');
    }, 800); 
  }}
     
          className='link origin-top border-t-1 border-white relative overflow-hidden '>
            <h1 className='uppercase font-[font2] text-[8vw] pt-[0.9rem] leading-[0.8] text-center'>Agence</h1>
            <div className='absolute flex top-0 bg-green-400 text-black moveLink'>
              <div className='flex items-center  moveX'>
                <h2 className='whitespace-nowrap uppercase font-[font2] text-[8vw]  pd-10 text-5xl leading-[0.8] text-center'>Pour Tout SAvoir</h2>
                <img className='h-36 rounded-full w-69 object-cover shrink-0 p-7  mt-[-10px]' src='https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg' alt='' />
                <h2 className='whitespace-nowrap uppercase font-[font2] text-[8vw]  pd-10 text-5xl leading-[0.8] text-center'>Pour Tout SAvoir</h2>
                <img className='h-36 rounded-full w-69 object-cover shrink-0 p-7  mt-[-10px]' src='https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg' alt='' />
              </div>
              <div className='flex items-center moveX'>
                <h2 className='whitespace-nowrap uppercase font-[font2] text-[8vw] pd-10 text-5xl leading-[0.8] text-center'>Pour Tout SAvoir</h2>
                <img className='h-36 rounded-full w-69 object-cover shrink-0 p-7  mt-[-10px]' src='https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg' alt='' />
                <h2 className='whitespace-nowrap uppercase font-[font2] text-[8vw] pd-10 text-5xl leading-[0.8] text-center'>Pour Tout SAvoir</h2>
                <img className='h-36 rounded-full w-69 object-cover shrink-0 p-7  mt-[-10px]' src='https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg' alt='' />
              </div>
            </div>
          </div>

          <div onClick={() => {
    setnavOpen(false);
    setTimeout(() => {
      navigate('/contacts');
    }, 800); 
  }}
     
          className='link origin-top border-t-1 border-white relative overflow-hidden '>
            <h1 className='uppercase font-[font2] text-[8vw] pt-[0.9rem] leading-[0.8] text-center'>Contact</h1>
            <div className='absolute flex top-0 bg-green-400 text-black moveLink'>
              <div className='flex items-center  moveX'>
                <h2 className='whitespace-nowrap uppercase font-[font2] text-[8vw] pd-10 text-5xl leading-[0.8] text-center'>Pour Tout voir</h2>
                <img className='h-36 rounded-full w-69 object-cover shrink-0 p-7  mt-[-10px]' src='https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg' alt='' />
                <h2 className='whitespace-nowrap uppercase font-[font2] text-[8vw] pd-10 text-5xl leading-[0.8] text-center'>Pour Tout voir</h2>
                <img className='h-36 rounded-full w-69 object-cover shrink-0 p-7  mt-[-10px]' src='https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg' alt='' />
              </div>
              <div className='flex items-center moveX'>
                <h2 className='whitespace-nowrap uppercase font-[font2] text-[8vw] pd-10 text-5xl leading-[0.8] text-center'>Pour Tout voir</h2>
                <img className='h-36 rounded-full w-69 object-cover shrink-0 p-7  mt-[-10px]' src='https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg' alt='' />
                <h2 className='whitespace-nowrap uppercase font-[font2] text-[8vw] pd-10 text-5xl leading-[0.8] text-center'>Pour Tout voir</h2>
                <img className='h-36 rounded-full w-69 object-cover shrink-0 p-7  mt-[-10px] ' src='https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg' alt='' />
              </div>
            </div>
          </div>

          <div onClick={() => {
    setnavOpen(false);
    setTimeout(() => {
      navigate('/blogue');
    }, 800); 
  }}
     
          
          className='link origin-topk border-t-1 border-y-1 border-white relative overflow-hidden '>
            <h1 className='uppercase font-[font2] text-[8vw] pt-[0.9rem] leading-[0.8] text-center'>Blogs</h1>
            <div className='absolute flex top-0 bg-green-400 text-black moveLink'>
              <div className='flex items-center  moveX'>
                <h2 className='whitespace-nowrap uppercase font-[font2] text-[8vw] pd-10 text-5xl leading-[0.8] text-center'>Pour Tout voir</h2>
                <img className='h-36 rounded-full w-69 object-cover shrink-0 p-7  mt-[-10px]' src='https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg' alt='' />
                <h2 className='whitespace-nowrap uppercase font-[font2] text-[8vw] pd-10 text-5xl leading-[0.8] text-center'>Pour Tout voir</h2>
                <img className='h-36 rounded-full w-69 object-cover shrink-0 p-7  mt-[-10px]' src='https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg' alt='' />
              </div>
              <div className='flex items-center moveX'>
                <h2 className='whitespace-nowrap uppercase font-[font2] text-[8vw]  pd-10 text-5xl leading-[0.8] text-center'>Pour Tout voir</h2>
                <img className='h-36 rounded-full w-69 object-cover shrink-0 p-7  mt-[-10px]' src='https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg' alt='' />
                <h2 className='whitespace-nowrap uppercase font-[font2] text-[8vw] pd-10 text-5xl leading-[0.8] text-center'>Pour Tout voir</h2>
                <img className='h-36 rounded-full w-69 object-cover shrink-0 p-7  mt-[-10px]' src='https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg' alt='' />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FullScreenNav