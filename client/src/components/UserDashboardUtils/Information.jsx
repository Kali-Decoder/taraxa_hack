import { SimpleGrid, Space } from "@mantine/core";
import React from "react";
import { useUserDataContext } from "../../Context/UserContext";
import InformationCard from "./InformationCard";
import numeral from "numeral";
import {IconAward,IconBuildingBank, IconCoins,IconCurrencyEthereum,IconCurrencyBitcoin,IconShare3 } from '@tabler/icons-react'

const Information = () => {
  const { user } = useUserDataContext();
  return (
    <div class="grid grid-cols-2 gap-4">
      <InformationCard
        title={"Total Rewards"}
        flag={true}
        value={numeral(user?.balance).format("0.0a")}
        displayButton={true}
        icon={<IconCurrencyEthereum className="w-10 h-10" color="white"/>}
      />
      <InformationCard
        title={"Total Balance"}

        value={numeral(user?.exactBalance).format("0.0a") + " $"}
        displayButton={false}
        icon={<IconAward className="w-10 h-10" color="white"/>}
      />
      <InformationCard
        title={"Raised Issues"}
       
        value={numeral(user?.numberOfIssues).format("0.0a")}
        displayButton={false}
        icon={<IconShare3 className="w-10 h-10" color="white"/>}
      />
      <InformationCard
        title={"Accepted Issues"}

        value={numeral(user?.acceptedIssues).format("0.0a")}
        displayButton={true}
        icon={<IconCoins className="w-10 h-10" color="white"/>}
      />
       <InformationCard
        title={"Rejected Issues"}
        value={numeral(user?.rejectedIssues).format("0.0a")}
        displayButton={false}
        icon={<IconBuildingBank className="w-10 h-10" color="white"/>}
      />
    </div>
  );
};

export default Information;
