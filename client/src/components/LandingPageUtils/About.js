import React from "react";

const Home = () => {
  return (
    <div
      className="flex text-center justify-center items-center flex-col pt-[100px]"
      id="about"
    >
      <div className="inline z-10 w-[100%] md:container  font-bold uppercase txt-main mobile:text-[40px] lg:text-[50px] mobile:flex-col lg:flex-row">
      About<span className="txt-light ">&nbsp;Us</span>
      </div>
     
      <div className="z-10 mb-6 lg:mt-10 mobile:mt-10">
        <div className="txt-ternary-light capitalize md:w-[60%] mobile:w-[85%] mx-auto lg:text-[20px] mt-3 md:flex-row flex mobile:flex-col mobile:items-center justify-center">
          <div>
          At FI.Coin , We are the ultimate, globally accessible, and user-friendly error/bug reporting platform, offering innovative solutions for identifying and resolving issues within digital ecosystems.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
