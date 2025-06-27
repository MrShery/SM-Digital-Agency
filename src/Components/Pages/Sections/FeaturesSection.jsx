import React from "react";
import SectionTitleInfo from "../../SectionTitleInfo";
import Feature from "../../Feature";

export const FeaturesSection = () => {
  const arr = [1, 2, 3, 4];
  const features=[{imgURL:"",title:"Learn the Agency 3.0 Model.",subTitle:"agency foundations",description:"Learn how to set your agency up for success. Basically everything you need to get up and running…"}]
  return (
    <section id="features" className="px-[6vw] lg:px-[5vw] ">
      <SectionTitleInfo
      className="pb-6 sm:px-[1px]"
        titleClassName="lg:text-[44.5px] font-semibold lg:px-[5vw] px-[8vw] md:px-0"
        subTitleClassName="lg:text-[16px] "
        subTitle="Learning Platform"
        title="The Best Learning Platform. Period."
      />

      {arr.map((_, index) => (
      <Feature featureID={index} key={index} />
      ))}
    </section>
  );
};
