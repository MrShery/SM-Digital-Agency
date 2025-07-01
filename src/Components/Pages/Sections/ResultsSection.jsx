import React from "react";
import SectionTitleInfo from "../../SectionTitleInfo";

const ResultsSection = () => {
  return (
    <section className="w-[90%] xs:w-[93%] py-[5vw] sm:py-[1.8vw] md:my-8 md:py-10  lg:py-[7vw] bg-[linear-gradient(#7f43ef69,_#0000_60%)] dark:bg-[#8043ef] mx-auto text-center border-t border-[#8340ff] rounded-[2.5vw] xs:rounded-[5.5vw] sm:rounded-[4.5vw] md:rounded-[1.5vw] lg:mt-[8vw]  ">
      <div className="px-[10vw">
        <SectionTitleInfo
        className="xs:pt-[10vw] md:pt-0"
          title="The Brands We Serve Are Making Waves"
          titleClassName="dark:text-white md:px-[16vw] md:py-4 lg:px-[16vw] px-[4.9vw] lg:pb-[1.1vw] text-[6.0vw] xs:text-[8.9vw] xs:font-[400] xs:leading-[8vw] lg:text-[5vw] leading-[6vw] lg:leading-[4.5vw] md:pb-5 text-white lg:text-[4.8vw] font-semibold  sm:bg-[linear-gradient(#ffff_100%,#ffff_100%)]"
          subTitle={<span className="text-white ">Results In Numbers</span>}
          subTitleClassName="scale-y-100  font-[500]  md:py-0"
          pera="One brand at a time, we’re transforming the future of e-commerce by delivering real growth strategies that empower founders to scale profitably and build something that actually lasts"
          peraClassName="dark:text-white text-[#ffffff93] xs:text-[3.7vw] xs:px-[25px] px-[2vw] md:w-[65vw] lg:w-[55vw] py-[3vw] md:py-2 lg:py-3 leading-[5vw] lg:leading-[1.5vw] xs:px-[1vw] text-[4.1vw]  xs:py-[3vw] xs:text-[3vw] lg:text-[1.1vw] text-[#959586] "
        />
      </div>
      <div className=" md:py-6 py-2 xs:py-4">
        <h3 className=" bg-[linear-gradient(20deg,#8043ef_50%,#ffff,#ffff)] bg-clip-text text-transparent dark:text-white text-[15vw] xs:text-[17vw] md:text-[9vw] font-bold py-3 leading-[10vw]">
          $4.5M+
        </h3>
        <h4 className="text-white font-bold text-[2.5vw] xs:text-[4vw] md:text-[1.4vw]">
           Total Sales
        </h4>
      </div>
    </section>
  );
};

export default ResultsSection;
