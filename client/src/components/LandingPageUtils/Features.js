import React from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TbCashOff } from "react-icons/tb";
const Features = () => {
  return (
    <>
      <div className="sm:container  flex justify-center items-center flex-col mx-auto ">
        <div className=" container z-10 font-bold uppercase mobile:text-center mobile:w-[100%] txt-main mobile:text-[40px] lg:text-[50px] mobile:flex-col lg:flex-row">
          <span className="txt-light ">&nbsp;Features</span>
        </div>

        <div className=" mobile:w-[80%] w-full">
          <div
            id="features"
            className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20  pb-10 lg:pt-40 lg:pb-20"
          >
            <div className="p-6 feature-card rounded-lg expand-on-hover">
              <div className="mb-3">
                <svg
                  className="hi-outline hi-cube inline-block w-12 h-12 text-indigo-500"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M256 117c-65.2 0-124.2 11.6-166.13 29.7-20.95 9.1-37.57 19.8-48.57 31.1S25 200.4 25 212c0 11.6 5.3 22.9 16.3 34.2 11 11.3 27.62 22 48.57 31.1C131.8 295.4 190.8 307 256 307c65.2 0 124.2-11.6 166.1-29.7 21-9.1 37.6-19.8 48.6-31.1S487 223.6 487 212c0-11.6-5.3-22.9-16.3-34.2-11-11.3-27.6-22-48.6-31.1C380.2 128.6 321.2 117 256 117zM25 255.1v50.2c0 6.3 5.3 17.6 16.3 28.9 11 11.3 27.62 22 48.57 31.1C131.8 383.4 190.8 395 256 395c65.2 0 124.2-11.6 166.1-29.7 21-9.1 37.6-19.8 48.6-31.1s16.3-22.6 16.3-28.9v-50.2c-1.1 1.3-2.2 2.5-3.4 3.7-13.3 13.6-31.8 25.3-54.3 35-45 19.5-106 31.2-173.3 31.2-67.3 0-128.3-11.7-173.28-31.2-22.49-9.7-41.01-21.4-54.3-35-1.19-1.2-2.32-2.5-3.42-3.7z"
                  />
                </svg>
              </div>

              <h3 className="text-lg text-white font-normal mb-3">
                User Earn Rewards for Reporting Bugs
              </h3>

              <p className="text-sm text-slate-400 leading-6">
                Users report bugs and errors in our partner platforms to earn
                rewards in tokens.
              </p>
            </div>

            <div className="p-6 feature-card rounded-lg expand-on-hover">
              <div className="mb-3">
                <svg
                  className="hi-outline hi-cube inline-block w-12 h-12 text-indigo-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  ></path>
                </svg>
              </div>

              <h3 className="text-lg text-white font-normal mb-2">
                No Spam, Only Genuine Issues
              </h3>

              <p className="text-sm leading-6 text-slate-400">
                We don’t allow spam; only genuine errors/bugs are reported to
                benefit companies by resolving issues and understanding platform
                concerns.
              </p>
            </div>

            <div className="p-6 feature-card rounded-lg expand-on-hover">
              <div className="mb-3">
                <BsCheck2Circle className="w-10 h-10 text-indigo-500" />
              </div>

              <h3 className="text-lg text-white font-normal mb-2">
                Inclusive Contribution, Regardless of Developer Status
              </h3>

              <p className="text-sm leading-6 text-slate-400">
                Users or developers, everyone can actively contribute to
                error/bug reporting.
              </p>
            </div>

            <div className="p-6 feature-card rounded-lg expand-on-hover">
              <div className="mb-3">
                <AiOutlineFileDone className="w-10 h-10 text-indigo-500" />
              </div>

              <h3 className="text-lg text-white font-normal mb-2">
                Easy to Get Started and Easy To Claim Rewards
              </h3>

              <p className="text-sm leading-6 text-slate-400">
                Super good UI/UX, The platform is designed in such a way that it
                is easy to start and claim the rewarding tokens or our partner
                rewards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
