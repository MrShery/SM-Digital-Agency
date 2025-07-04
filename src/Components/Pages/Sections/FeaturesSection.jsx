import React from "react";
import SectionTitleInfo from "../../SectionTitleInfo";
import Feature from "../../Feature";

import FeatureImg1 from "../../../assets/Media/Pictures/feature-1.webp";

export const FeaturesSection = () => {
  const features = [
    {
      imgURL: FeatureImg1,
      title: "Scale With The Performance 3.0 Model",
      subTitle: "Brand Foundations",
      description:
        "Built for founders. Our performance marketing helps you reach the right customers, scale faster, and turn ad spend into predictable growth  without the guesswork",
    },
    {
      imgURL: FeatureImg1,
      title: "Scale Smarter With Google Ads Mastery",
      subTitle: "Brand Foundations",
      description:
        "Everything your brand needs to win with Google Ads from high-converting search campaigns to product retargeting and shopping ads. Built for performance",
    },
    {
      imgURL: FeatureImg1,
      title: "Rank Higher. Scale Faster With SEO.",
      subTitle: "Brand Foundations",
      description:
        "Everything your brand needs to climb the search ranks from keyword strategy to on-page SEO and technical optimization",
    },
    {
      imgURL: FeatureImg1,
      title: "Launch A Store Built To Scale",
      subTitle: "Brand Foundations",
      description:
        "Everything you need to launch a high-converting store, from product pages to backend setup. We handle the tech, design, and strategy for your brand",
    },
  ];
  return (
    <section id="features" className=" sm:px-[6vw] lg:px-[5vw]  ">
      <SectionTitleInfo
        className=" sm:px-[1px] py-[4vw] md:py-0"
        titleClassName="lg:text-[3.410vw] font-semibold lg:px-[5vw] px-[8vw] md:px-0"
        subTitle="E-Com Growth Engine"
        subTitleClassName=" scale-y-100  text-[5vw] xs:text-[4vw] "
        title="The Only Scaling System. Period."
      />

      {features.map((feature, index) => (
        <Feature
          featureID={index}
          key={index}
          title={feature.title}
          subTitle={feature.subTitle}
          profileImage={feature.imgURL}
          description={feature.description}
        />
      ))}
    </section>
  );
};
