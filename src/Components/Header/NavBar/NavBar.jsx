import { useState } from "react";
import logo from "../../../Assets/images/logo.svg";
import styles from "../../../styles";
import Hamburger from "./Hamburger";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenuHandler = () => {
    setIsOpen((prevOpen) => !prevOpen);
    document.body.classList.toggle("lock-scroll");
  };
  return (
    <nav
      className={`bg-white flex justify-between md:justify-start items-center ${styles.mobileScreen} ${styles.desktopScreen}`}
    >
      <a href="#" className=" md:mr-[4.5rem]">
        <img
          src={logo}
          alt="Shortly Logo"
          className="w-[120.4px ] max-w-none"
        />
      </a>
      <div
        className={`items-center justify-between ${styles.menu} ${
          isOpen
            ? `left-[50%] translate-x-[-50%] md:translate-x-0 ${styles.transition}`
            : `left-[-500px] translate-x-[-100%] md:translate-x-0 ${styles.transition}`
        } `}
      >
        <ul
          role="menubar"
          className=" flex flex-col md:flex-row text-center md:text-start gap-[2.9rem]  capitalize font-bold text-[1.8rem] md:text-[1.5rem] md:text-neutralGrayishViolet text-white"
        >
          <li
            role={"menuitem"}
            className={`md:hover:text-neutralDarkViolet hover:text-neutralGrayishViolet ${styles.transition}`}
          >
            <a href="#">Features</a>
          </li>
          <li
            role={"menuitem"}
            className={`md:hover:text-neutralDarkViolet hover:text-neutralGrayishViolet ${styles.transition}`}
          >
            <a href="#">pricing</a>
          </li>
          <li
            role={"menuitem"}
            className={`md:hover:text-neutralDarkViolet hover:text-neutralGrayishViolet ${styles.transition}`}
          >
            <a href="#">resources</a>
          </li>
        </ul>
        <ul className=" md:flex space-y-[2.4rem] md:space-y-0 md:gap-[3.8rem] items-center text-white text-center w-full md:w-fit md:text-neutralGrayishViolet capitalize font-bold text-[1.8rem] md:text-[1.5rem]">
          <li
            role={"button"}
            tabIndex={"0"}
            aria-pressed="false"
            className={`md:hover:text-neutralDarkViolet hover:text-neutralGrayishViolet mt-[3.2rem] md:mt-0 ${styles.transition}`}
          >
            login
          </li>
          <li
            role={"button"}
            tabIndex={"0"}
            aria-pressed="false"
            className={`px-[2.3rem] py-[1.2rem] md:py-[0.9rem] bg-primaryCyan text-white rounded-full hover:opacity-70 ${styles.transition}`}
          >
            sign up
          </li>
        </ul>
      </div>

      <Hamburger isOpen={isOpen} setIsOpen={openMenuHandler} />
    </nav>
  );
}

export default NavBar;
