import React from "react";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
 const questionAnswer = [
  {
    question: "I’ve tried agencies before. How are you different?",
    answer: "We offer full-stack execution, not just advice. From ads to creatives to strategy. We take ownership and deliver results, not excuses."
  },
  {
    question: "I’m just starting my brand. Can you still help?",
    answer: "Absolutely. We build from scratch a store setup, branding, funnels, and marketing. You bring the product or idea, we handle the growth."
  },
  {
    question: "Do you create the ad content too, or just run ads?",
    answer: "We do both. Our team delivers high-converting UGCs, image creatives, and video ads, optimized for performance."
  },
  {
    question: "What kind of results can I expect?",
    answer: "It depends on your product, margin, and offer, but our goal is always profitable scaling. We don’t chase vanity metrics. We build brands."
  },
  {
    question: "How long before I see actual results?",
    answer: "Most clients see traction within the first 2–4 weeks. Our process is fast, focused, and built to start generating ROI early."
  }
];


  return (
    <div className=" w-[84vw] md:w-[50.7vw] bg-black dark:bg-[#8043ef] rounded-[1.9vw] px-[6vw] py-[4vw]">
      {questionAnswer.map((accorItem, index) => (
        <div key={index} className="border-b border-[#ffffff83] py-[1vw] md:py-[1.1vw]">
          <AccordionItem question={accorItem.question} answer={accorItem.answer} />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
