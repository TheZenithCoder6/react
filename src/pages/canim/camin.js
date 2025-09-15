import gsap from 'gsap';

export const canim = (ref) => {
  if (!ref?.current) return;
};

export const setupWindowEvents = () => {
  const handleWheel = (event) => {
    const direction = event.deltaY;
    if (direction > 0) {
      console.log('scrolled down');
      gsap.to('.marque', {
        xPercent: -50,
        duration: 3,
        ease: 'linear',
        repeat: -1,
      })

      gsap.to('.marque img', {
        rotate: 180,
      })
    } else {


      console.log('scroll up')
      gsap.to('.marque', {
        xPercent: 0,
        duration: 3,
        ease: 'linear',
        repeat: -1,
      })
      gsap.to('.marque img', {
        rotate: 0,
      })

    }

  };


  window.addEventListener('wheel', handleWheel
  );

  return () => {
    window.removeEventListener('wheel', handleWheel
    );
  };
};