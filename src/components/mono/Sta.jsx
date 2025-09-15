import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Sta = (props) => {
const currentPath = useLocation().pathname;

    const parentRef = useRef(null)
    const pageRef = useRef(null)
    useGSAP(function () {
        const tl = gsap.timeline();
        tl.to(parentRef.current, {
            display: 'block'
        })
        tl.from('.sta', {
            height: 0,
            stagger: {
                amount: -0.2
            }
        });

        tl.to('.sta', {
            y: '100%',
            stagger: {
                amount: -0.2
            }
        });

        tl.to(parentRef.current, {
            display: 'none'
        })

        tl.to('.sta', {
            y: '0%',
        })

        gsap.from(pageRef.current,{
            opacity: 0,
            delay: 1,
             ease: "power4.out",   
          
        })
    },[currentPath])

console.log(props.children)
    return (
     <div>
           <div ref={parentRef} className='h-screen w-full  z-20 top-0 gap-0 fixed'>
            <div className='h-full w-full flex'>
                <div className=' sta h-full w-1/3 bg-black'></div>
                <div className=' sta h-full w-1/3 bg-black'></div>
                <div className=' sta h-full w-1/3 bg-black'></div>
                <div className=' sta h-full w-1/3 bg-black'></div>
                <div className=' sta h-full w-1/3 bg-black'></div>
            </div>
        </div>  
      <div ref={pageRef}>{props.children}</div>
     </div>
    )
}

export default Sta