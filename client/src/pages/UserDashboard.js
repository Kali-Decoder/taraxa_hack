import React, { useState } from "react";
import BackGradients from "../components/LandingPageUtils/BackGradients";
import { Card, Group, Image, ScrollArea, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import Information from "../components/UserDashboardUtils/Information";
import Transactions from "../components/UserDashboardUtils/Transactions";
import Referral from "../components/UserDashboardUtils/Referral";
import {
  IconShare3,
  IconHistory,
  IconCoin,
  IconGraph,
} from "@tabler/icons-react";

const UserDashBoard = () => {
  const [selectedButton, setSelectedButton] = useState("dash");
  const selectedCss = "mb-2 bg-gray-800 rounded shadow";
  const unSelectedCss = "mb-2 rounded hover:shadow hover:bg-gray-800";

  return (
    <>
      <BackGradients />
      <div className="flex ">
        <div className="px-4 py-2 bg-black lg:w-1/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline w-8 h-8 text-white lg:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div className="hidden lg:block mt-10 cursor-pointer">
            <div className="my-2 mb-6">
              <h1 className="text-5xl font-bold mx-4 text-white">User Dashboard</h1>
            </div>
            <ul className="mt-10">
              <li className="mb-2 rounded hover:shadow hover:bg-gray-800">
                <Link to="/">
                  <a className="inline-block w-full h-full px-3 py-2 font-bold text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-6 h-6 mr-2 -mt-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Home
                  </a>
                </Link>
              </li>
              <li
                className={`${
                  selectedButton == "dash" ? selectedCss : unSelectedCss
                }`}
              >
                <button
                  onClick={() => setSelectedButton("dash")}
                  className="flex inline-block w-full h-full px-3 py-2 font-bold text-white"
                >
                  <IconGraph className="mr-2" />
                  Dashboard
                </button>
              </li>
              
              <li
                className={`${
                  selectedButton == "refer" ? selectedCss : unSelectedCss
                }`}
              >
                <button
                  onClick={() => setSelectedButton("refer")}
                  className="flex inline-block w-full h-full px-3 py-2 font-bold text-white "
                >
                  <IconShare3 className="mr-2" />
                  Refferals
                </button>
              </li>
              <li
                className={`${
                  selectedButton == "transactions" ? selectedCss : unSelectedCss
                }`}
              >
                <button
                  onClick={() => setSelectedButton("transactions")}
                  className="flex inline-block w-full h-full px-3 py-2 font-bold text-white "
                >
                  <IconHistory className="mr-2" />
                  Issues
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full px-4 py-2 bg-black lg:w-full h-full">
          <div className="flex flex-col ">
            <div className="mt-[3vh] ml-[2vw]">
              <div className="text-[#8BE8E5] font-semibold text-[3rem] mb-[1vh]">
                {selectedButton == "dash"
                  ? " Portfolio"
                  : selectedButton == "token"
                  ? "Brand Token Portfolio"
                  : selectedButton == "transactions"
                  ? "Issue History"
                  : "Refferals"}
              </div>
              <ScrollArea className="w-[80%] h-[100vh]">
                {selectedButton == "dash" ? (
                  <Information></Information>
                ) : selectedButton == "transactions" ? (
                  <Transactions></Transactions>
                ) : (
                  <Referral></Referral>
                )}
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashBoard;
