
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const SplitTextFlip = () => {
  const textRef = useRef(null);
  let split;

  useEffect(() => {
    split = new SplitText(textRef.current, { type: "chars" });

    gsap.fromTo(
      split.chars,
      { rotationX: -90, opacity: 0 },
      {
        rotationX: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          
        },
      }
    );

     gsap.to(textRef.current, {
      color: "#00FF00", 
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 70%",
        end: "top 10%",
        scrub: true,
      },
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <div className="h-[150vh] bg-black flex items-center justify-center">
      <h1
        ref={textRef}
        className="text-9xl font-[font2] text-white"
        style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
      >
        COMMING SOON ! 
      </h1>
    </div>
  );
};

export default SplitTextFlip;
