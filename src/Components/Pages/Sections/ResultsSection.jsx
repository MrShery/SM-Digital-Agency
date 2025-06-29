import React from "react";
import SectionTitleInfo from "../../SectionTitleInfo";

const ResultsSection = () => {
  return (
    <section className="w-[87%] py-[5vw] md:my-8 customGradient-bg  mx-auto text-center border-t border-[#8340ff] rounded-[1.5vw] lg:mt-[8vw]  ">
      <div className="px-[10vw">
        <SectionTitleInfo
          title="Our Students Are Changing The World"
          subTitleClassName="scale-y-100  font-[500]"
          subTitle={<span className="text-white ">Results In Numbers</span>}
          peraClassName="px-[0vw]  lg:w-[55vw] lg:text-[1.2vw] text-[#959586] "
          pera="One student at a time, we are transforming the future of education by bringing practical knowledge to our students that will elevate their lives."
          titleClassName="lg:px-[15vw] lg:pb-[1.1vw] lg:leading-[5vw] md:pb-5 lg:text-[4.8vw] font-semibold  bg-[linear-gradient(#ffff_100%,#ffff_100%)]"
        />
      </div>
      <div className=" md:py-6 py-2">
        <h3 className=" bg-[linear-gradient(20deg,#8043ef_35%,#000,#000)] bg-clip-text text-transparent text-[10vw] font-bold leading-[8vw]">
          4,500+
        </h3>
        <h4 className="text-white font-bold text-[2.5vw] md:text-[1.4vw]">
          Total Students
        </h4>
      </div>
    </section>
  );
};

export default ResultsSection;
