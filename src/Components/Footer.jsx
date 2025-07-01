import React from "react";
import SmLogo from "../assets/Media/Logo/Asset 1.png";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full h-fit text-white">
      <div className="sm:w-[90%] py-5 mt-10 customGradient-bg dark:bg-[#8043ef]  mx-auto rounded-t-3xl text-center border-t border-[#8043ef]">
        <div className="flex flex-col justify-center items-center gap-1 xs:gap-4 md:gap-2 lg:gap-10 md:pt-5 lg:py-5">
          <img src={SmLogo} alt="" className=" w-[35vw] md:w-[18vw]" />
          <p className=" text-[3.8vw] xs:text-[3vw] sm:text-[1.1vw] flex gap-3 lg:gap-4 flex-nowrap">
            <a
              href="https://www.instagram.com/smdigitalglobal/"
              target="_blank"
              className="link-footer xs:flex gap-1 items-center hidden"
            >
              <IoLogoInstagram />
              Instagram
            </a>
            <a
              href="https://www.facebook.com/SMDigitalGlobal"
              target="_blank"
              className="link-footer xs:flex gap-1 items-center hidden"
            >
              <IoLogoFacebook />
              Facebook
            </a>
             <span className="xs:flex gap-1 items-center hidden">
              <IoLogoWhatsapp /> WhatsApp: 0310-6111523
            </span>
            <a
              href="https://www.instagram.com/smdigitalglobal/"
              target="_blank"
              className="link-footer flex gap-1 items-center xs:hidden"
            >
              <IoLogoInstagram />
            </a>
            <a
              href="https://www.facebook.com/SMDigitalGlobal"
              target="_blank"
              className="link-footer flex gap-1 items-center xs:hidden"
            >
              <IoLogoFacebook />
            </a>
            <span className="flex gap-2 items-center xs:hidden">
              <IoLogoWhatsapp /> <span className="text-[14px]">0310-6111523</span>
            </span>
          </p>
        </div>
        <p className=" text-[3vw] xs:text-[3.4vw] sm:leading-none leading-5 font-[200] sm:text-[2vw] md:text-[2.3vw] lg:text-[1.2vw] px-2 sm:px-[3vw] md:px-[10vw] lg:px-[15vw] ms:pb-5 pt-2">
          This site is not a part of the Facebook website or Facebook Inc.
          Additionally, This site is NOT endorsed by Facebook in any way.
          FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
        <p className=" text-[2.5vw] xs:text-[2.5vw] sm:text-[10px] md:text-[1.1vw] py-2">
          ©2025 SM Digital Global. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
