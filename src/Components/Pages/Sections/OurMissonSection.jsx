import React, { useRef, useState } from "react";
import SectionTitleInfo from "../../SectionTitleInfo";
import { BsPlayCircleFill } from "react-icons/bs";
import { MdPauseCircleFilled } from "react-icons/md";
import { IoPause, IoPlay } from "react-icons/io5";

const OurMissonSection = () => {
  const [toggle, setToggle] = useState(true);
  const videoRef = useRef(null);
  const handleClick = () => {
    if (videoRef.current) {
      toggle ? videoRef.current.play() : videoRef.current.pause();
    }
    setToggle(!toggle);
  };
  return (
    <section id="our-mission" className="pb-8">
      <SectionTitleInfo
        subTitle="The Mission"
        title="Reforming the Education
System"
        pera="We’re transforming the future of global education system with the world’s foremost digital learning platform and community, democratizing access to real life, practical skills and information.

"
        titleClassName=" px-[20px] sm:px-[5vw] md:px-[10vw]"
        className="py-8"
      />
      <div className=" group relative bg-white flex justify-center items-center w-[80%]  rounded-3xl overflow-hidden mx-auto  cursor-pointer hover:scale-105 myTransition">
        <video
          src="https://cdn.prod.website-files.com/652960d5e51ce51080354368/652e9d7c2343c58e2e861f30_video trimmed-transcode.mp4"
          muted
          loop
          ref={videoRef}
          alt=""
          className="w-full h-full "
        />
        {toggle ? (
          <IoPlay
            onClick={handleClick}
            className=" text-[8vw] myTransition  text-[#8043ef] group-hover:opacity-100 opacity-0 border border-[#8043ef] p-4 ps-6 rounded-full absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]"
          />
        ) : (
          <IoPause
            onClick={handleClick}
            className=" text-[8vw] myTransition text-[#8043ef] group-hover:opacity-100 opacity-0 border border-[#8043ef] p-4 rounded-full  absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]"
          />
        )}{" "}
      </div>
    </section>
  );
};

export default OurMissonSection;
