import React, { useEffect, useRef } from "react";
import DarkModeToggle from "./DarkModeToggle";

const ResNavMenu = ({ navMenu, setToggle, toggle }) => {
  const resNav = useRef(null);

  useEffect(() => {
    const moveNav = setTimeout(() => {
      if (toggle) {
        resNav.current.style.height = "70vw";
      } else {
        resNav.current.style.height = "0vh";
      }
    }, 100);

    return () => clearTimeout(moveNav); // 🔄 fixed from clearInterval
  }, [toggle]);

  return (
    <div
      ref={resNav}
      className={` w-[40vw] xs:w-[265px] max-h-fit block h-0 lg:hidden absolute top-[160%] sm:top-[140%] z-10 right-0 overflow-hidden bg-black  myTransition rounded-lg ${
        toggle && "md:border-2 border border-[#3B3B3B] "
      } `}
    >
      <ul className="sm:gap-4 gap-1 flex flex-col items-end pt-3 pb-4 pe-[3vw]">
        {navMenu.map((navItem, index) => (
          <li
            onClick={() => {
              setToggle(false);
            }}
            key={navItem + index}
            className=" text-white cursor-pointer hover:text-purple-300 sm:text-[16px] text-[3vw] "
          >
            <a href={navItem.sectionId}>{navItem.navTitle}</a>{" "}
          </li>
        ))}
        <div className="flex flex-wrap justify-end gap-1">
          <a href="#helpSection" className="bg-white sm:text-[16px] text-[2.5vw] hover:text-white hover:bg-[#8043ef] myTransition rounded-lg py-[.5vw] px-[3vw] md:px-[2vw]">
            Launch Your Brand
          </a>
          <DarkModeToggle />
        </div>
      </ul>
    </div>
  );
};

export default ResNavMenu;
