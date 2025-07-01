import React, { useEffect, useState } from "react";
import { IoMdSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="bg-white py-[.78vw] px-[1vw] text-[1.19vw]  dark:bg-gray-700 dark:text-white rounded-lg"
    >
      {darkMode ? <IoMoon /> :<IoMdSunny /> }
    </button>
  );
};

export default DarkModeToggle;
