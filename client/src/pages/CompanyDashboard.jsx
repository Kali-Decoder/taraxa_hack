import React, { useEffect, useState } from "react";
import BackGradients from "../components/LandingPageUtils/BackGradients";
import { Card, Group, Image, ScrollArea, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import { IconGraph } from "@tabler/icons-react";
import { useUserDataContext } from "../Context/UserContext";
const CompanyDashboard = () => {
  const [selectedButton, setSelectedButton] = useState("dash");
  const selectedCss = "mb-2 bg-gray-800 rounded shadow";
  const unSelectedCss = "mb-2 rounded hover:shadow hover:bg-gray-800";
  const {
    user,
    confetti,
    viewIssue,
    getCompanyIssues,
    companyIssues,
    updateIssueStatus,
  } = useUserDataContext();

  useEffect(() => {
    getCompanyIssues("amazon");
  }, [user]);
  const width = window.innerWidth;
  const height = window.innerHeight;
  return (
    <>
      <BackGradients />
      {confetti && <Confetti width={width} height={height} />}
      <div className="flex ">
        <div className="px-4 py-2 h-[100vh] bg-black lg:w-1/4">
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
          <div className=" lg:block mt-10 cursor-pointer">
            <div className="my-2 mb-6">
              <h1 className="text-2xl font-bold mx-4 text-white">
                Company Dashboard <br />{" "}
                <span className="text-red-500">Google</span>
              </h1>
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
                  Listed Issues
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full px-4 py-2 bg-black h-[100vh] lg:w-full">
          <div className="flex flex-col ">
            <div className="mt-[3vh] ml-[2vw]">
              <div className="text-[#8BE8E5] font-semibold text-[3rem] mb-[1vh]">
                {selectedButton == "dash" ? "Issues Listed" : null}
              </div>
              <ScrollArea className="w-[80%] h-[100vh]">
                {selectedButton == "dash" ? (
                  <>
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                      <div class="inline-block min-w-full shadow-md rounded-lg ">
                        <table class="w-full leading-normal ">
                          <thead>
                            <tr>
                              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 font-bold text-left text-xs  text-gray-700 uppercase tracking-wider">
                                Issue ID
                              </th>
                              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 font-bold text-left text-xs  text-gray-700 uppercase tracking-wider">
                                Company Name
                              </th>
                              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 font-bold text-left text-xs  text-gray-700 uppercase tracking-wider">
                                Amount Staked
                              </th>

                              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 font-bold text-left text-xs  text-gray-700 uppercase tracking-wider">
                                Title
                              </th>

                              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 font-bold text-left text-xs  text-gray-700 uppercase tracking-wider">
                                Status
                              </th>
                              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 font-bold text-left text-xs  text-gray-700 uppercase tracking-wider">
                                View
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {companyIssues?.map((issue) => {
                              return (
                                <tr>
                                  <td class="px-5 py-2 border-b border-gray-200 font-bold bg-white text-sm">
                                    <div class="flex">
                                      <p class="text-gray-900 whitespace-no-wrap font-semibold">
                                        {issue?.id}
                                      </p>
                                    </div>
                                  </td>
                                  <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap font-bold uppercase">
                                      {issue?.company}
                                    </p>
                                  </td>
                                  <td class=" text-center py-2 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-blue-900 font-extrabold whitespace-no-wrap ">
                                      {issue?.amountStaked} FI
                                    </p>
                                  </td>
                                  <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                    <p
                                      class={`text-gray-900 whitespace-no-wrap ${
                                        issue?.viewAccess ? "" : "blur-text"
                                      }`}
                                    >
                                      {issue?.title} <br />
                                      {issue?.viewAccess ? (
                                        <span className="text-blue-500">
                                          {issue?.description}
                                        </span>
                                      ) : null}
                                    </p>
                                  </td>
                                  <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                      {issue?.status ? "🔴" : "🟢"}
                                    </p>
                                  </td>
                                  <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                    {!issue?.viewAccess ? (
                                      <button
                                        onClick={async () => {
                                          await viewIssue(
                                            issue?.id,
                                            issue?.amountStaked
                                          );
                                        }}
                                        class="text-white bg-blue-600 px-2 py-1 rounded-md whitespace-no-wrap"
                                      >
                                        View Issue
                                      </button>
                                    ) : !issue?.status ? (
                                      <div className="flex justify-between">
                                        <button
                                          onClick={async () => {
                                            await updateIssueStatus(
                                              issue?.id,
                                              true
                                            );
                                          }}
                                          class="text-white bg-green-600 px-2 py-1 rounded-md whitespace-no-wrap"
                                        >
                                          Accept
                                        </button>
                                        <button
                                          onClick={async () => {
                                            await updateIssueStatus(
                                              issue?.id,
                                              false
                                            );
                                          }}
                                          class="text-white bg-red-600 px-2 py-1 rounded-md whitespace-no-wrap"
                                        >
                                          Decline
                                        </button>
                                      </div>
                                    ) : (
                                      <button disabled className="bg-green-500 px-3 rounded-md">
                                        Completed
                                      </button>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                ) : null}
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDashboard;
