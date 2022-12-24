import { useState } from "react";
import { Link } from "react-router-dom"

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import Button from "./Button";

const Navbar = () => {

  const [active, setActive] = useState("");
  // window.location.pathname
  // navLinks.forEach(element => {
  //   console.log(window.location.pathname);
  //   if (window.location.pathname == element.link) {
  //     console.log(element.title);
  //     return element.title;
  //   }
  // })
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[96px] h-[52px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li>
          <Button styles={`mr-10`} />
        </li>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <Link to={nav.link} onClick={() => setActive(nav.title)}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={nav.link}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
