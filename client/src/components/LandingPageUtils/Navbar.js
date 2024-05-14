import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useUserDataContext } from "../../Context/UserContext";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isMarketplacePage = location.pathname === "/marketplace";

  const { verified, owner } = useUserDataContext();
  return (
    <>
      <div className="z-20 mobile:px-10 lg:px-[10vw] lg:text-[18px] lg:h-[80px] mobile:h-[70px] w-[100vw] flex items-center justify-between font-normal shadow-md fixed nav-light txt-light">
        <div className="cursor-pointer w-[60%] md:w-[20%] flex items-center">
          <Link to="/" className="flex items-center">
            <li>
              <div class="logo-holder logo-3 whitespace-nowrap">
                <h3>Feedback Incentivized</h3>
                <p><span className="text-blue-400">Find</span> <span className="text-orange-400">Listed</span> <span className="text-yellow-400">Earn</span></p>
              </div>
            </li>
          </Link>
        </div>
        {isHomePage && (
          <ul className="lg:justify-around md:justify-between items-center sm:flex hidden mt-2">
            {/* Menu items */}
            <li className="list-none inline-block mx-2 font-medium hover:border-b-2 border-blue-600 cursor-pointer p-2 transition-all">
              <a href="#home" style={{ fontSize: 15 }}>
                Home
              </a>
            </li>
            <li className="list-none inline-block mx-2 font-medium hover:border-b-2 border-blue-600 cursor-pointer p-2 transition-all">
              <a href="#features" style={{ fontSize: 15 }}>
                Features
              </a>
            </li>
            <li className="list-none inline-block mx-2 font-medium hover:border-b-2 border-blue-600 cursor-pointer p-2 transition-all">
              <a href="#about" style={{ fontSize: 15 }}>
                About Us
              </a>
            </li>
            <li className="list-none inline-block mx-2 font-medium hover:border-b-2 border-blue-600 cursor-pointer p-2 transition-all">
              <Link to="/feedback-form" style={{ fontSize: 15 }}>
                Earn Rewards
              </Link>
            </li>
            <li className="list-none inline-block mx-2 font-medium hover:border-b-2 border-blue-600 cursor-pointer p-2 transition-all">
              <a href="#faq" style={{ fontSize: 15 }}>
                FAQs
              </a>
            </li>
            {true ? (
              <li className="list-none inline-block mx-2 font-medium  border-blue-600 cursor-pointer p-2 transition-all">
                <Link to="/user-dashboard">
                  <img
                    className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                    src="https://img.freepik.com/free-icon/user_318-159711.jpg"
                    alt="Bordered avatar"
                  />
                </Link>
              </li>
            ) : null}

            {owner ? (
              <li className="list-none inline-block mx-2 font-medium  border-blue-600 cursor-pointer p-2 transition-all">
                <Link to="/adminpage">Brand Dashboard</Link>
              </li>
            ) : null}
          </ul>
        )}
        {!isMarketplacePage && (
          <button
            type="button"
            onClick={() => setToggle(!toggle)}
            className="justify-end mt-1 items-center sm:hidden w-8"
          >
            <img id="menu" alt="hamburger menu" src="./assets/menu-dark.png" />
          </button>
        )}
      </div>

      {toggle && isHomePage && (
        <div className="fixed sm:invisible top-[10.5%] divide-y divide-gray-100  txt-light shadow w-full">
          {/* Mobile menu */}
          <ul className="py-2 text-sm" onClick={() => setToggle(false)}>
            <li>
              <a
                href="#home"
                className="block px-4 py-1 hover:text-blue-400 focus:text-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="block px-4 py-1 hover:text-blue-400 focus:text-blue-500"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block px-4 py-1 hover:text-blue-400 focus:text-blue-500"
              >
                About Us
              </a>
            </li>
            <li>
              <Link
                to="/marketplace"
                className="block px-4 py-1 hover:text-blue-400 focus:text-blue-500"
              >
                Marketplace
              </Link>
            </li>
            <li>
              <a
                href="#faq"
                className="block px-4 py-1 hover:text-blue-400 focus:text-blue-500"
              >
                FAQs
              </a>
            </li>
            {verified ? (
              <li className="list-none inline-block mx-2 font-medium  border-blue-600 cursor-pointer p-2 transition-all">
                <Link to="/user-dashboard">
                  <img
                    className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                    src="https://img.freepik.com/free-icon/user_318-159711.jpg"
                    alt="Bordered avatar"
                  />
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
