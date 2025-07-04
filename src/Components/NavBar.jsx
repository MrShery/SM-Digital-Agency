import React, { useState } from "react";
import Logo from "./Logo";
import { GrMenu } from "react-icons/gr";
import ResNavMenu from "./ResNavMenu";
import DarkModeToggle from "./DarkModeToggle";

const NavBar = () => {
  const navMenu = [
    { navTitle: "Why Brands Trust Us", sectionId: "#our-mission" },
    { navTitle: "What You Get", sectionId: "#features" },
    { navTitle: "Built For Growth", sectionId: "#programs" },
    { navTitle: "Any Question", sectionId: "#terms_conditions" },
  ];
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" w-[90%] sticky top-[15px] z-[999] bg-gradient-to-r from-[#15091d] via-[#8043ef]  to-[#15091d] rounded-[18px] mx-auto px-[4vw] py-[6px] xs:py-[1vw] sm:py-[1.5vw] sm:px-12 lg:py-[1.2vw] mt-4 flex justify-between  gap-0 lg:gap-10 items-center ">
      <div>
        <Logo className="w-[30vw] xs:w-[27vw] sm:w-[19vw] md:w-[11vw] h-[6.5vw] xs:h-[5.5vw] sm:h-[5vw] md:h-[2.5vw]" />
      </div>
      <div className=" w-[83%] flex lg:justify-between justify-end relative">
        <ul className="gap-[2vw] items-center hidden lg:flex text-[1.19vw]">
          {navMenu.map((navItem, index) => (
            <li
              onClick={() => {
                setToggle(false);
              }}
              key={navItem + index}
              className=" text-white cursor-pointer hover:text-purple-300  text-[1.0vw]"
            >
              <a href={navItem.sectionId}>{navItem.navTitle}</a>{" "}
            </li>
          ))}
        </ul>
        <div className="gap-[.5vw] items-center hidden lg:flex justify-end ">
          <a
            href="#helpSection"
            className="bg-white hover:bg-[#8043ef] hover:text-white rounded-lg py-[.5vw] px-[1vw] text-[1.122vw] "
          >
            {" "}
            Launch Your Brand
          </a>
          <DarkModeToggle />
        </div>
        <GrMenu
          onClick={() => {
            setToggle(!toggle);
          }}
          className="text-white text-[4vw] xs:text-[3.5vw] sm:text-[30px] cursor-pointer lg:hidden"
        />
        {<ResNavMenu navMenu={navMenu} setToggle={setToggle} toggle={toggle} />}
      </div>
    </nav>
  );
};

export default NavBar;
