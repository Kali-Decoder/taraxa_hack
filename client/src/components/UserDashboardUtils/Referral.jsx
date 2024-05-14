import React, { useState } from "react";
import { useUserDataContext } from "../../Context/UserContext";

const Referral = () => {
  const { referFriend } = useUserDataContext();
  const [refferedAddress, setRefferedAddress] = useState("");

  const reffering = async () => {
    if (!refferedAddress) return;

    await referFriend(refferedAddress);
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="rounded-2xl w-[75%] text-[#1A2421] bg-black [ p-8 md:p-10 lg:p-10 ] border">
          <p className="mb-6 [ text-sm text-[#1A2421]/70 text-opacity-50 ] text-blue-300">
            Paste Address for Refferal
          </p>
          <label
            for="walletAddress"
            className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]"
          >
            <input
              value={refferedAddress}
              onChange={(e) => setRefferedAddress(e.target.value)}
              className="form-input 
                        
              
              border 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-white/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ] 
                    [ text-[#fff] focus:text-white ]"
              type="text"
              name="walletAddress"
              id="walletAddress"
              placeholder="Paste your Address 0xcfa0b5...407891"
            />
          </label>
          <>
            <button
              onClick={reffering}
              className="form-input w-full mt-4 rounded-lg  text-white focus:outline-none
                   [ p-3 md:p-4 lg:p-4 ] 
                   [ transition-colors duration-500 ] 
                   [ bg-blue-800 hover:bg-blue-700 ] cursor-pointer"
            >
              Refer
            </button>
          </>
        </div>
      </div>
    </>
  );
};

export default Referral;
