import React, { useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import { Link } from "react-router-dom";
import { useUserDataContext } from "../../Context/UserContext";

const Home = () => {
  const TEXTS = [
    "Bugs",
    "Tokens",
    "Rewards",
    "FI.Coin",
    "Bounties",
    "Peer-To-Company",
    "Escrow Payments",
  ];
  const COLORS = [
    "#6F61C0",
    "#A084E8",
    "#8BE8E5",
    "#57C5B6",
    "#159895",
    "#1A5F7A",
    "#F7E987",
  ];
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  const { verified } = useUserDataContext();
  return (

    <div
      className="flex text-center justify-center items-center flex-col pt-[120px] "
      id="home"
    > 
    
      <div className="z-10 mb-60 pt-10 lg:mt-20 mobile:mt-20">
        <div className="font-bold txt-light mobile:text-[30px] lg:text-[54px] flex justify-center items-center flex-col">

          {/* {festival && (<>
            <span className="text-blue-400 mb-4">{festival}</span>
          </>)} */}
          <h1 className="container text-[40px] mx-auto"> Welcome to <span className="text-yellow-400">Finance Incentivized!</span> <br/>  Report errors,  <span className="text-blue-400">Earn Rewards</span> 💰, drive digital innovation. </h1>
          <TextTransition
            delay={10}
            className="mt-10"
            springConfig={presets.wobbly}
          >
            <span
              className={`txt-main text-center`}
              style={{ color: COLORS[index % COLORS.length] }}
            >
              &nbsp;{TEXTS[index % TEXTS.length]}{" "}
            </span>
          </TextTransition>
        </div>
        <div className="txt-ternary-light capitalize w-[50%] mobile:w-[80%] mx-auto lg:text-[20px] mt-3 md:flex-row flex mobile:flex-col mobile:items-center justify-center">
          <div></div>
        </div>
        
        
        {verified ? <button className="text-white  bg-violet-500 px-[40px] py-[10px] mt-20 rounded-md text-[15px] hover:bg-violet-400 active:bg-violet-500 transition-all">
            <Link to="/marketplace">Welcome to FeedBack Incentivized</Link>
            
          </button>  : (
          <button className="text-white  bg-violet-500 px-[40px] py-[10px] mt-20 rounded-md text-[15px] hover:bg-violet-400 active:bg-violet-500 transition-all">
            <Link to="/register">Let's Earn</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
