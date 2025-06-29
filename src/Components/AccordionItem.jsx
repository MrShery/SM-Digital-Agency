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
      className="accordionTransition max-h-fit  md:max-h-fit sm:min-h-[4vw] min-h-[2vw] text-white  md:py-[1vw] h-[5vw] overflow-hidden cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <h4 className=" text-[2.2vw] sm:text-[1.7vw] hover:text-[gray]">
          {question}
        </h4>
        <div className="relative">
          <div className=" sm:w-[1.1vw] sm:h-[2px] w-2 h-[1px] bg-white text-[25px]" />
          <div
            ref={iconLine}
            className=" sm:w-[1.1vw] sm:h-[2px] w-2 h-[1px] bg-white  accordionTransition origin-left absolute top-[1%] translate-y-[-30%] left-[45%] translate-x-[-50%] text-[25px]"
          />
        </div>
      </div>
      <p
        ref={accorDescription}
        className="accordionTransition py-[1vw] text-[2vw] sm:text-[1vw] "
      >
        {answer}
      </p>
    </div>
  );
};

export default AccordionItem;
