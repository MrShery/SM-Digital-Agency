import React, { useEffect, useRef, useState } from "react";
import { GoDash } from "react-icons/go";

const AccordionItem = () => {
    const [toggle,setToggle]=useState(false)
    const container=useRef(null)
    const iconLine=useRef(null)
    const accorDescription=useRef(null)
     useEffect(() => {

    if (toggle) {
      container.current.style.height = "15vw";
      accorDescription.current.style.scale="1"
      iconLine.current.style.rotate="90deg"
    } else {
        container.current.style.height = "4vw";
        accorDescription.current.style.scale="0"
        iconLine.current.style.rotate="0deg"
    }
  }, [toggle]);

  return (
    <div ref={container} onClick={()=>{setToggle(!toggle)}} className="accordionTransition md:max-h-[11vw] text-white  py-[1vw] h-[5vw] overflow-hidden cursor-pointer">
      <div className="flex justify-between items-center">
        <h4 className=" text-[3vw] sm:text-[2vw] hover:text-[gray]">What are the payment methods?</h4>
        <div className="relative">
          <div className=" sm:w-4 sm:h-[2px] w-2 h-[1px] bg-white text-[25px]" />
          <div ref={iconLine} className=" sm:w-4 sm:h-[2px] w-2 h-[1px] bg-white  accordionTransition origin-left absolute top-[1%] translate-y-[-30%] left-[45%] translate-x-[-50%] text-[25px]" />
        </div>
      </div>
      <p ref={accorDescription} className="accordionTransition py-[1vw] text-[2vw] sm:text-[1vw] ">
        You'll have lifetime access to Agency Accelerator, all the Plug N Plays,
        resources, and 1-year access to support through the coaching calls. This
        is a collaborative session where we’ll develop a tailored game plan to
        align our strategies with your specific goals.
      </p>
    </div>
  );
};

export default AccordionItem;
