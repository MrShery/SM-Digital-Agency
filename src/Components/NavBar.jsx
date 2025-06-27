import React, { useState } from "react";
import Logo from "./Logo";
import { GrMenu } from "react-icons/gr";
import ResNavMenu from "./ResNavMenu";

const NavBar = () => {
  const navMenu = [
    { navTitle: "Our Mission", sectionId: "#our-mission" },
    { navTitle: "Features", sectionId: "#features" },
    { navTitle: "Programs", sectionId: "#programs" },
    { navTitle: "Terms and Conditions", sectionId: "#terms_conditions" },
  ];
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" w-[90%]  sticky top-4 z-[999] bg-gradient-to-r from-[#15091d] via-[#8043ef]  to-[#15091d] rounded-[18px] mx-auto px-[4vw] py-[1.5vw] sm:py-[2vw] sm:px-12 sm:py-[14px] mt-4 flex justify-between lg:justify-start gap-0 lg:gap-10 items-center ">
      <div>
        <Logo className="w-[22vw] sm:w-[162px] h-[5vw] sm:h-[28.16px]" />
      </div>
      <div className=" w-[80%] flex lg:justify-between justify-end relative">
        <ul className="gap-[2vw] items-center hidden lg:flex text-[1.19vw]">
          {navMenu.map((navItem, index) => (
            <li
            onClick={()=> {setToggle(false)}}
              key={navItem + index}
              className=" text-white cursor-pointer hover:text-purple-300 "
            >
              <a href={navItem.sectionId}>{navItem.navTitle}</a>{" "}
            </li>
          ))}
        </ul>
        <div className="gap-[1vw] items-center hidden lg:flex ">
          <button className="text-white hover:text-purple-100 text-[1.19vw]">
            Enroll Now
          </button>
          <button className="bg-white rounded-lg py-[.5vw] px-[1vw]">
            {" "}
            Student Login
          </button>
        </div>
        <GrMenu onClick={()=> {setToggle(!toggle)}} className="text-white text-[5vw] xs:text-[5vw] sm:text-[30px] cursor-pointer lg:hidden" />
        {toggle && <ResNavMenu navMenu={navMenu} setToggle={setToggle} />}
      </div>
    </nav>
  );
};

export default NavBar;
