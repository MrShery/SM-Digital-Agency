import React, { useEffect } from "react";
import LogoWhiteBg from "../../../assets/Media/Logo/LogoWhiteBg.png";
import PhoneImg1 from "../../../assets/Media/Pictures/phoneImg-1.webp";
import PhoneImg2 from "../../../assets/Media/Pictures/phoneImg-2.webp";
import PhoneImg3 from "../../../assets/Media/Pictures/phoneImg-3.webp";
import PhoneImg4 from "../../../assets/Media/Pictures/phoneImg-4.webp";
import PhoneImg5 from "../../../assets/Media/Pictures/phoneImg-5.webp";
import PhoneImg6 from "../../../assets/Media/Pictures/phoneImg-6.webp";
import PhoneImg7 from "../../../assets/Media/Pictures/phoneImg-7.webp";
import PhoneImg8 from "../../../assets/Media/Pictures/phoneImg-8.webp";
import PhoneImg9 from "../../../assets/Media/Pictures/phoneImg-9.webp";
import VerticalLine from "../../VerticalLine";
import AOS from "aos";
import "aos/dist/aos.css";

const ImageShowCase = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section id="programs" className=" relative overflow-hidden">
        <div className="w-full h-[70vw] flex justify-center items-center relative ">
          <img
          data-aos="zoom-out"
              data-aos-easing="ease-in-out"
              data-aos-offset="100"
            src={LogoWhiteBg}
            alt="logo"
            className="w-[10vw] h-[10vw] rounded-[3vw] bgGlowHover"
          />
          <div className="flex gap-[4vw] w-[27vw] h-[45vw] absolute top-0  left-[-14vw] ">
            <img
              data-aos="fade-down"
              data-aos-easing="ease-in-back"
              data-aos-offset="500"
              src={PhoneImg2}
              alt=""
            />
            <img
              data-aos="fade-down"
              data-aos-easing="ease-in-back"
              data-aos-offset="500"
              src={PhoneImg1}
              alt=""
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-back"
            data-aos-offset="500"
            className=" flex gap-[3vw]  w-[80vw] h-[20vw] absolute top-0  right-[-25vw] "
          >
            <img src={PhoneImg3} alt="" />
            <img
              src={PhoneImg1}
              alt=""
              className="w-[27vw] h-[55vw] flex-shrink-0 translate-y-[-63%]"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-offset="300"
            className=" flex gap-[3vw] w-[27vw] h-[45vw] absolute bottom-0  right-[9vw] "
          >
            <img src={PhoneImg2} alt="" />
            <img src={PhoneImg1} alt="" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-back"
            data-aos-offset="100"
            className=" flex gap-[3vw]  w-[80vw] h-[20vw] absolute bottom-0  left-[12vw]"
          >
            <img src={PhoneImg3} alt="" />
          </div>
        </div>
        <div className=" relative py-[10vw]">
          <img
            data-aos="fade-right"
            data-aos-easing="ease-in-back"
            data-aos-offset="0"
            src={PhoneImg1}
            alt=""
            className=" absolute bottom-[26vw]  left-[-18vw]  w-[27vw] h-[55vw] flex-shrink-0 "
          />
          <img
            src={PhoneImg1}
            alt=""
            className=" absolute top-[4vw]  right-[-16vw]  w-[27vw] h-[55vw] flex-shrink-0 "
          />
          <img
            src={PhoneImg3}
            alt=""
            className=" absolute top-[40vw]  left-[-18vw]  w-[27vw] h-[20vw] flex-shrink-0 "
          />
          <VerticalLine />
        </div>
      </section>
    </>
  );
};

export default ImageShowCase;
