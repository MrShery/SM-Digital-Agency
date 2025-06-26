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
      className={` text-center flex flex-col justify-center  sm:px-10 md:px-[3vw] lg:px-[5vw]  text-white  ${className} `}
    >
      {subTitle != undefined && (
        <h5
          className={` primaryTextColor uppercase  sm:tracking-[4px] text-[3vw]  sm:text-[16px] md:text-[18px] font-bold py-[1vw]  ${subTitleClassName} `}
        >
          {subTitle}
        </h5>
      )}
      {title != undefined && (
        <h1
          className={` text-[6vw] sm:text-[38px] md:text-[48px] lg:text-[64px]  font-bold leading-[6.5vw] sm:leading-[37px] md:leading-[45px] lg:leading-[65px] ${titleClassName} `}
        >
          {title}
        </h1>
      )}
      {pera != undefined && (
        <p
          className={`xs:w-[400px] sm:w-[500px] md-w-[400px] lg:w-[700px] w-[80vw] text-[2vw] sm:text-[1.5vw] md-text-[18px] lg:text-[16px] py-[1vw] text-[#747F91] mx-auto  ${peraClassName}`}
        >
          {pera}
        </p>
      )}
    </div>
  );
};

export default SectionTitleInfo;
