import { Button, Space } from "@mantine/core";
import React from "react";
import { useUserDataContext } from "../../Context/UserContext";
const InformationCard = ({ title, value, displayButton, icon,flag }) => {
    const {claimRewards} = useUserDataContext();
    const claimingLoyalityTokens=async()=>{
        await claimRewards();
    }
  return (
    <div className="relative flex border items-center button rounded-md h-[20vh] p-[1vw]">
      <div>
        <div className="p-2 bg-indigo-600 rounded">{icon}</div>
      </div>
      <Space w={"2vw"} />
      {displayButton && (
        <div className="absolute flex flex-row m-auto justify-end top-[2vh] right-[1vw]">
          {flag===true ? (
            <Button
              onClick={claimingLoyalityTokens}

              className="bg-[#4f46e5] cursor-pointer text-white px-3 py-1 rounded-md"
            >
              Claim
            </Button>
          ) : null}
        </div>
      )}
      <div>
        <div className="flex flex-col">
          <div className="text-[#4f46e5] font-semibold text-[3rem]">
            {value}
          </div>
          <h4 className="text-2xl text-white">{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
