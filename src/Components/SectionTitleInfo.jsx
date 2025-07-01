import React from "react";

const SectionTitleInfo = ({
  title,
  pera,
  subTitle,
  className,
  subTitleClassName,
  titleClassName,
  peraClassName,
}) => {
  return (
    <div
      className={`text-center flex flex-col justify-center md:px-[3vw] lg:px-[5vw] text-white  ${className} `}
    >
      {subTitle != undefined && (
        <h5
          className={` primaryTextColor scale-y-[.8] uppercase  sm:tracking-[3px]  text-[4.5vw] xs:text-[4vw]  sm:text-[3vw] md:text-[1.472vw] lg:text-[1.35vw]  font-semibold py-[.8vw]   ${subTitleClassName} `}
        >
          {subTitle}
        </h5>
      )}
      {title != undefined && (
        <h1
          className={`sm:bg-[linear-gradient(180deg,#ffff_80%,#000)]  sm:bg-clip-text sm:text-transparent capitalize text-white dark:text-black  text-[8vw] sm:text-[38px] md:text-[5vw] lg:text-[4vw] leading-[9.8vw] sm:leading-[5.5vw] md:leading-[45px] lg:leading-[4vw]  md:px-3 sm:pb-1 ${titleClassName} `}
        >
          {title}
        </h1>
      )}
      {pera != undefined && (
        <p
          className={`xs:w-[400px] dark:text-black text-white sm:w-[500px] md-w-[400px] lg:w-[66%] text-[3.5vw] xs:text-[3.9vw] sm:px-0   sm:text-[2.7vw] md-text-[18px] leading-[4.5vw] sm:leading-none lg:text-[1.3vw] py-[1vw] white mx-auto  ${peraClassName}`}
        >
          {pera}
        </p>
      )}
    </div>
  );
};

export default SectionTitleInfo;
