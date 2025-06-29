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
          className={` primaryTextColor scale-y-[.8] uppercase  sm:tracking-[3px] text-[3.5vw]  sm:text-[16px] md:text-[1.472vw] font-semibold py-[.8vw]  ${subTitleClassName} `}
        >
          {subTitle}
        </h5>
      )}
      {title != undefined && (
        <h1
          className={`bg-[linear-gradient(180deg,#ffff_80%,#000)]  bg-clip-text text-transparent capitalize  text-[5vw] sm:text-[38px] md:text-[48px] lg:text-[4vw] leading-[6vw] sm:leading-[37px] md:leading-[45px] lg:leading-[4vw]  md:px-3 sm:pb-1 ${titleClassName} `}
        >
          {title}
        </h1>
      )}
      {pera != undefined && (
        <p
          className={`xs:w-[400px] sm:w-[500px] md-w-[400px] lg:w-[66%] w-[70vw] text-[2.5vw] sm:px-0 px-[2vw] sm:text-[1.7vw] md-text-[18px] lg:text-[1.3vw] py-[1vw] white mx-auto  ${peraClassName}`}
        >
          {pera}
        </p>
      )}
    </div>
  );
};

export default SectionTitleInfo;
