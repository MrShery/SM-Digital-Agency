import React from "react";
import SectionTitleInfo from "../../SectionTitleInfo";

const ResultsSection = () => {
  return (
    <div className="w-[90%] py-5 my-8 customGradient-bg  mx-auto rounded-t-3xl text-center border-t border-[#8043ef]">
      <div className="px-[10vw">
        <SectionTitleInfo
          title="Our Students Are Changing The World"
          subTitle={<span className="text-white">Results In Numbers</span>}
          peraClassName="px-[3vw]"
          pera="One student at a time, we are transforming the future of education by bringing practical knowledge to our students that will elevate their lives."
        />
      </div>
      <div className="py-6">
        <h3 className=" bg-[linear-gradient(20deg,#8043ef_30%,#000,#000)] bg-clip-text text-transparent text-[10vw] font-bold leading-[8vw]">
          4,500+
        </h3>
        <h4 className="text-white font-bold text-[2.5vw] md:text-base">Total Students</h4>
      </div>
    </div>
  );
};

export default ResultsSection;
