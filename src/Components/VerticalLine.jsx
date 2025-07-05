import React, { useRef } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)
const VerticalLine = () => {
  const container=useRef(null);
  const lineRef=useRef(null);
  useGSAP(() => {
    gsap.to(lineRef.current, {
      height: "100%",
      duration:1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: lineRef.current,
        start: "top 50%",
        end:"bottom 100%",
        scrub:4
      },
    });
  }, { scope: container })
  return (
    <div ref={container} className='w-full h-[30vw] xs:h-[50.3vw] sm:h-[31.3vw] flex justify-center items-start  text-white py-[0vw]'>
        <div ref={lineRef} className=' verticalLine  w-[1px] h-0'></div>
    </div>
  )
}
export default VerticalLine
