import React from "react";
import SectionTitleInfo from "../../SectionTitleInfo";
import Feature from "../../Feature";

export const FeaturesSection = () => {
  const arr = [1, 2, 3, 4];
  const features=[{imgURL:"",title:"Learn the Agency 3.0 Model.",subTitle:"agency foundations",description:"Learn how to set your agency up for success. Basically everything you need to get up and running…"}]
  return (
    <section id="features" className="  px-[6vw] lg:px-[5vw]  ">
      <SectionTitleInfo
      className=" sm:px-[1px] xl:py-[2vw]"
        titleClassName="lg:text-[3.4vw] font-semibold lg:px-[5vw] px-[8vw] md:px-0"
        subTitleClassName=" scale-y-100 "
        subTitle="Learning Platform"
        title="The Best Learning Platform. Period."
      />

      {arr.map((_, index) => (
      <Feature featureID={index} key={index} />
      ))}
    </section>
  );
};
