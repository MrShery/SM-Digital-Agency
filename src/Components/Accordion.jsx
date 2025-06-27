import React from "react";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const questionAnswer = [
  {
    question: "How long will I have access to Agency Accelerator?",
    answer: "You'll have lifetime access to Agency Accelerator, all the Plug N Plays, resources, and 1-year access to support through the coaching calls. This is a collaborative session where we’ll develop a tailored game plan to align our strategies with your specific goals."
  },
  {
    question: "Do I need past experience or results?",
    answer: "Not at all. Most of our successful students joined Agency Accelerator as complete beginners with no previous knowledge or experience. Agency Accelerator will provide you with all the information you need to succeed online, whether you’re starting today or if you already have some knowledge about the online world."
  },
  {
    question: "I’m still in college. Does it work for me?",
    answer: "As long as you have a computer and access to the Internet, you have everything you need to get started. Then, you choose how much time you want to invest in your agency. Some students work on it for 2 hours daily, and some for 8 hours. We've had people succeed with both."
  },
  {
    question: "Do I need to quit my job to get results?",
    answer: "No. Agency Accelerator provides the foundation to start your agency as a side hustle. Then, once you're making enough money, you can move on to it full-time. We do not recommend people quit their jobs before earning enough money with their side hustle."
  },
  {
    question: "What are the payment methods?",
    answer: "Our payment processor, Stripe, allows payments using credit cards, debit cards, PayPal, Apple Pay, Klarna, Afterpay, and other local payment options."
  }
];

  return (
    <div className=" w-[72vw] md:w-[50.7vw] bg-black rounded-xl px-[4vw] py-[2vw]">
      {questionAnswer.map((accorItem, index) => (
        <div key={index} className="border-b border-[gray] py-[1vw] md:py-3">
          <AccordionItem question={accorItem.question} answer={accorItem.answer} />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
