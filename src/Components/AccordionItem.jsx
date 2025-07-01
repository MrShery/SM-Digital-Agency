import React, { useEffect, useRef, useState } from "react";
import { GoDash } from "react-icons/go";

const AccordionItem = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false);
  const container = useRef(null);
  const iconLine = useRef(null);
  const accorDescription = useRef(null);
  useEffect(() => {
    if (toggle) {
      container.current.style.height = "30vw";
      accorDescription.current.style.scale = "1";
      iconLine.current.style.rotate = "0deg";
    } else {
      container.current.style.height = "4vw";
      accorDescription.current.style.scale = "0";
      iconLine.current.style.rotate = "90deg";
    }
  }, [toggle]);

  return (
    <div
      ref={container}
      onClick={() => {
        setToggle(!toggle);
      }}
      className="accordionTransition max-h-fit  md:max-h-fit sm:min-h-[6.5vw] min-h-[11vw] text-white  md:py-[1vw] h-[5vw] overflow-hidden cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <h4 className=" text-[3.8vw] sm:text-[2vw] hover:text-[gray] dark:hover:text-[#d1d0d0]">
          {question}
        </h4>
        <div className="relative">
          <div className=" sm:w-[1.1vw] sm:h-[2px] w-3 h-[1px] bg-white text-[25px]" />
          <div
            ref={iconLine}
            className=" sm:w-[1.1vw] sm:h-[2px] w-3 h-[1px] bg-white  accordionTransition origin-left absolute top-[1%] translate-y-[-30%] left-[45%] translate-x-[-50%] text-[25px]"
          />
        </div>
      </div>
      <p
        ref={accorDescription}
        className="accordionTransition py-[1vw] text-[3.8vw] xs:text-[3.5vw] sm:text-[2vw] lg:text-[1.5vw] "
      >
        {answer}
      </p>
    </div>
  );
};

export default AccordionItem;
