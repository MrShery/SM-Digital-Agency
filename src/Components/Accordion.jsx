import React from "react";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  return (
    <div className=" w-[72vw] md:w-[50.7vw] bg-black rounded-xl px-[4vw] py-[2vw]">
      {new Array(5).fill("s").map((accorItem, index) => (
        <div key={index} className="border-b border-[gray] py-3 md:py-5">
          <AccordionItem title="" description="" />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
