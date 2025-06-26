import React, { useEffect, useRef } from "react";

const ResNavMenu = ({ navMenu, setToggle }) => {
  const resNav = useRef(null);

  useEffect(() => {
    const moveNav = setTimeout(() => {
      if (resNav.current) {
        resNav.current.style.top = "140%";
      }
    }, 100);

    return () => clearTimeout(moveNav); // 🔄 fixed from clearInterval
  }, []);

  return (
    <div
      ref={resNav}
      className=" w-[85vw] xs:w-[265px] block lg:hidden absolute top-[-1040%] z-10 right-0 bg-black border-2 border-[#3B3B3B] myTransition rounded-lg pt-3 pb-4 pe-[3vw]"
    >
      <ul className="sm:gap-4 gap-1 flex flex-col items-end">
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
        <button className="text-white hover:text-purple-100 sm:text-[16px] text-[3vw]">
          Enroll Now
        </button>
        <button className="bg-white sm:text-[16px] text-[3vw] hover:text-white hover:bg-[#8043ef] myTransition rounded-lg py-[1vw] px-[5vw] md:px-[2vw]">
          Student Login
        </button>
      </ul>
    </div>
  );
};

export default ResNavMenu;
