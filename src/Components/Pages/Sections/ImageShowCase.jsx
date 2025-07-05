import React, {useRef, useEffect } from "react";
import LogoWhiteBg from "../../../assets/Media/Logo/LogoWhiteBg.png";
import LogoPurpleBg from "../../../assets/Media/Logo/Asset 4.png";
import PhoneImg1 from "../../../assets/Media/Pictures/phoneImg-1.png";
import PhoneImg2 from "../../../assets/Media/Pictures/phoneImg-2.png";
import PhoneImg3 from "../../../assets/Media/Pictures/phoneImg-3.png";
import PhoneImg4 from "../../../assets/Media/Pictures/phoneImg-4.png";

import VerticalLine from "../../VerticalLine";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(useGSAP); // Needed for the hook
const ImageShowCase = () => {
  const container=useRef(null)
    const imageRef = useRef(null);

  
  useGSAP(() => {
    const images = container.current.querySelectorAll("[data-anim]");

    images.forEach((img) => {
      const direction = img.dataset.anim;

      const vars = {
        ease: "power2.inOut",
        duration: 1.2,
        scrollTrigger: {
          trigger: container.current,
          start: "top 30%",
          end: "bottom 120%",
          scrub: 1,
          // markers: true,
        },
      };

      // 👇 Define entry direction
      switch (direction) {
        case "top":
          vars.y = -800;
          break;
        case "bottom":
          vars.y =900;
          break;
        case "left":
          vars.x = -900;
          break;
        case "right":
          vars.x = 900;
          break;
        case "zoom":
          vars.scale = 3.5;
          break;
        default:
          break;
      }

      gsap.from(img, vars);
    });
  ScrollTrigger.refresh();
  }, { scope: container });

  return (
    <>
      <section  id="programs" className=" relative overflow-hidden">
        <div ref={container}  className="w-full h-[70vw] flex justify-center items-center relative ">
          <img
          data-anim="zoom"
            src={LogoWhiteBg}
            alt="logo"
            className="w-[10vw] h-[10vw] rounded-[3vw] bgGlowHover block dark:hidden"
          />
          <img
          data-anim="zoom"
            src={LogoPurpleBg}
            alt="logo"
            className="w-[10vw] h-[10vw] rounded-[3vw] bgGlowHover hidden dark:block"
          />
          <div className="flex gap-[4vw] w-[27vw] h-[45vw] absolute top-0  left-[-14vw] ">
            <img 
            data-anim="top"
              src={PhoneImg2}
              alt=""
            />
            <img
            data-anim="top"
              src={PhoneImg1}
              alt=""
            />
          </div>
          <div
            className=" flex gap-[3vw]  w-[80vw] h-[20vw] absolute top-0  right-[-25vw] "
          >
            <img data-anim="right" src={PhoneImg3} alt="" />
            <img data-anim="right"
              src={PhoneImg1}
              alt=""
              className="w-[27vw] h-[55vw] flex-shrink-0 -translate-y-[35vw]"
            />
          </div>
          <div
            className=" flex gap-[3vw] w-[27vw] h-[45vw] absolute bottom-0  right-[9vw] "
          >
            <img data-anim="bottom" src={PhoneImg2} alt="" />
            <img data-anim="bottom" src={PhoneImg1} alt="" />
          </div>
          <div
            className=" flex gap-[3vw]  w-[80vw] h-[20vw] absolute bottom-0  left-[12vw]"
          >
            <img data-anim="left" src={PhoneImg4} alt="" />
          <img
           data-anim="left"
            src={PhoneImg1}
            alt=""
            className="  absolute top-0  left-[-30vw]  w-[27vw] h-[40vw] flex-shrink-0 "
          />
          </div>
        </div>
        <div className=" relative py-[15vw] ">
          <img
          data-anim="left"
            src={PhoneImg1}
            alt=""
            className=" absolute top-[4vw]  right-[-16vw]  w-[27vw] h-[40vw]  flex-shrink-0 "
          />
          <img
          data-anim="left"

            src={PhoneImg4}
            alt=""
            className=" absolute top-[25vw]  left-[-18vw]  w-[27vw] h-[20vw] flex-shrink-0 "
          />
          <VerticalLine />
        </div>
      </section>
    </>
  );
};

export default ImageShowCase;
