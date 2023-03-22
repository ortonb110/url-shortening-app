import logo from "../../../Assets/images/logo.svg";
import styles from "../../../styles";
import React from "react";
import Hamburger from "./Hamburger";

function NavBar() {
  return (
    <nav className="pt-[4.8rem] px-[16.7rem] flex justify-between items-center">
      <div className="flex gap-[4.345rem] items-center">
        <a href="#"><img src={logo} alt="Shortly Logo" /></a>
        <ul
          role="menubar"
          className="flex gap-[2.9rem] capitalize font-bold text-[1.5rem] text-neutralGrayishViolet"
        >
          <li
            role={"menuitem"}
            className={`hover:text-neutralDarkViolet ${styles.transition}`}
          >
            <a href="#">Features</a>
          </li>
          <li
            role={"menuitem"}
            className={`hover:text-neutralDarkViolet ${styles.transition}`}
          >
            <a href="#">pricing</a>
          </li>
          <li
            role={"menuitem"}
            className={`hover:text-neutralDarkViolet ${styles.transition}`}
          >
            <a href="#">resources</a>
          </li>
        </ul>
      </div>
      <ul className="flex gap-[3.7rem] items-center text-neutralGrayishViolet capitalize font-bold text-[1.5rem]">
        <li role={"button"} tabIndex={"0"} aria-pressed="false" className={`hover:text-neutralDarkViolet ${styles.transition}`}>
          login
        </li>
        <li
          role={"button"}
          tabIndex={"0"}
          aria-pressed="false"
          className={`px-[2.3rem] py-[0.9rem] bg-primaryCyan text-white rounded-full hover:opacity-70 ${styles.transition}`}
        >
          sign up
        </li>
      </ul>
      <Hamburger/>
    </nav>
  );
}

export default NavBar;
