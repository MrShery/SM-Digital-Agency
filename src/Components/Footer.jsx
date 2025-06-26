import React from "react";
import SmLogo from "../assets/Media/Logo/Asset 1.png";

const Footer = () => {
  return (
    <footer className="w-full h-fit">
      <div className="w-[90%] py-5 my-8 customGradient-bg  mx-auto rounded-t-3xl text-center border-t border-[#8043ef]">
        <div className="flex flex-col justify-center items-center gap-2 xs:gap-4 md:gap-10 md:py-5">
          <img src={SmLogo} alt="" className=" w-[28vw] md:w-[18vw]" />
          <p className="text-white text-[1.5vw] sm:text-[13px]">
            <a href="#" target="_blank" className="link-footer">
              Acceptable Use{" "}
            </a>
            |{" "}
            <a href="#" target="_blank" className="link-footer">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" target="_blank" className="link-footer">
              Terms &amp; Conditions
            </a>
          </p>
        </div>
        <p className="text-white text-[1.5vw] sm:text-[13px] px-5 sm:px-[3vw] md:px-[10vw] ms:pb-5 pt-2">
          This site is not a part of the Facebook website or Facebook Inc.
          Additionally, This site is NOT endorsed by Facebook in any way.
          FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
        <span className="text-white text-[1.5vw] xs:text-[2vw] sm:text-[10px] md:text-[13px]">©2024 agency-accelerator.io. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
