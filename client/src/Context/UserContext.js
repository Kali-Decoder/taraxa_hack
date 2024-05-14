import React, { createContext, useContext, useState, useEffect } from "react";
import { ethers, BigNumber } from "ethers";
import { usePublicClient, useAccount, useNetwork } from "wagmi";
import { useEthersSigner } from "../web3-services/utils/signer.ts";
import { toast } from "react-toastify";
import {
  FeedBackAbi,
  FeedBackAddress,
  LoyalityTokenABI,
  LoyalityAddress,
} from "../web3-services/constant";
const UserDataContext = createContext();

export const UserContextProvider = ({ children }) => {
  const { chain } = useNetwork();
  const [activeChain, setActiveChainId] = useState(chain?.id);
  useEffect(() => {
    setActiveChainId(chain?.id);
  }, [chain?.id]);
  const { address, isDisconnected } = useAccount();
  const signer = useEthersSigner(activeChain);
  const [verified, setVerified] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [companyIssues, setCompanyIssues] = useState([]);
  const [user, setUser] = useState({});

  const [owner, setOwner] = useState(false);

  const festivalDates = {
    "2023-01-01": "New Year's Day",
    "2023-02-14": "Valentine's Day",
    "2023-03-17": "St. Patrick's Day",
    "2023-04-05": "Ram Navami", // Hindu Festival
    "2023-04-15": "Easter Sunday", // Christian Festival - This date changes every year; ensure it's correct for 2023
    "2023-05-26": "Buddha Purnima", // Buddhist Festival
    "2023-07-04": "Independence Day (USA)",
    "2023-09-23": " Token ℳart Launch",
    "2023-08-10": "Raksha Bandhan", // Hindu Festival
    "2023-08-30": "Janmashtami", // Birthday of Lord Krishna - Hindu Festival
    "2023-10-21": "Dussehra", // Hindu Festival
    "2023-10-31": "Halloween",
    "2023-11-09": "Diwali", // Hindu Festival
    "2023-11-25": "Thanksgiving Day", // USA Festival - This date changes every year; ensure it's correct for 2023
    "2023-12-03": "Hanukkah Starts", // Jewish Festival - This date changes; ensure it's correct for 2023
    "2023-12-25": "Christmas Day",
    "2023-12-31": "New Year's Eve",
  };
  //   function isTodayFestival() {
  //     const today = new Date();
  //     const formattedToday = today.toISOString().split("T")[0]; // Converts today's date to YYYY-MM-DD format
  //     let festive = festivalDates[formattedToday] || null;
  //     setFestival(festive);
  //   }
  async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  //   function formatTimestamp(timestamp) {
  //     const date = new Date(timestamp * 1000);

  //     const months = [
  //       "January",
  //       "February",
  //       "March",
  //       "April",
  //       "May",
  //       "June",
  //       "July",
  //       "August",
  //       "September",
  //       "October",
  //       "November",
  //       "December",
  //     ];

  //     const year = date.getFullYear();
  //     const month = months[date.getMonth()];
  //     const day = date.getDate();
  //     const hours = date.getHours();
  //     const minutes = date.getMinutes();
  //     const seconds = date.getSeconds();

  //     // Add leading zero for single-digit numbers
  //     const formattedMonth = month.padStart(2, "0");
  //     const formattedDay = day.toString().padStart(2, "0");
  //     const formattedHours = hours.toString().padStart(2, "0");
  //     const formattedMinutes = minutes.toString().padStart(2, "0");
  //     const formattedSeconds = seconds.toString().padStart(2, "0");

  //     const formattedDate = `${formattedMonth} ${formattedDay}, ${year}`;
  //     const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

  //     return `${formattedDate} ${formattedTime}`;
  //   }
  const getContractInstance = async (contractAddress, contractAbi) => {
    try {
      let contractInstance = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer
      );
      return contractInstance;
    } catch (error) {
      console.log("Error in deploying contract");
    }
  };

  //   const checkVerification = async (pasteAddress) => {
  //     let id = toast.loading("⏳ Checking for Verification... ", {
  //       theme: "dark",
  //     });
  //     try {
  //       let nftInstance = await getContractInstance(NFTAddress, NFTAbi);
  //       let contract = await getContractInstance(EcommerceAddress, EcommerceAbi);

  //       let balance = await nftInstance.balanceOf(pasteAddress);
  //       balance = +balance.toString();

  //       let isExist = await contract.checkIsUser(pasteAddress);
  //       let isVerified = balance == 1 ? true : false;
  //       setVerified(isVerified && isExist);
  //       if (isVerified && isExist) {
  //         toast.update(id, {
  //           render: "Valid User !",
  //           type: "success",
  //           isLoading: false,
  //           theme: "dark",
  //           icon: " ✅ ",
  //           autoClose: true,
  //         });
  //         setConfetti(true);
  //         setTimeout(() => {
  //           setConfetti(false);
  //         }, 5000);

  //         await sleep(5000);
  //         window.location.href = "/";
  //       } else {
  //         toast.update(id, {
  //           render: "Not Valid User !",
  //           type: "info",
  //           isLoading: false,
  //           theme: "dark",
  //           icon: " ❌ ",
  //           autoClose: true,
  //           delay: 1000,
  //         });
  //         await sleep(3000);
  //         window.location.href = "/register-user";
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       toast.update(id, {
  //         render: "Try Again !",
  //         type: "error",
  //         isLoading: false,
  //         theme: "dark",
  //         icon: "❌",
  //         autoClose: true,
  //       });
  //     }
  //   };

  const getUserFullDteails = async () => {
    try {
      let contract = await getContractInstance(FeedBackAddress, FeedBackAbi);
      let tokenContract = await getContractInstance(
        LoyalityAddress,
        LoyalityTokenABI
      );

      let userData = await contract.users(address);
      let userIssues = await contract.getIssues();
      let rewardHas = await tokenContract.balanceOf(address);
      let DECIMAL = BigNumber.from(10).pow(18);
      let balance = +rewardHas.div(DECIMAL).toString();
      let issueArray = [];

      userIssues.map((item) => {
        let obj = {
          id: +item.issueId,
          title: item.title,
          description: item.description,
          company: item.companyName,
          amountStaked: +item.amountStaked,
          status: item.status,
          viewAccess: item.viewAccess,
        };
        issueArray.push(obj);
      });

      let user = {
        address: address,
        userIssues: issueArray,
        balance: balance,
        exactBalance: +userData.totalBalance,
        acceptedIssues: +userData.acceptedIssues,
        rejectedIssues: +userData.rejectedIssues,
        numberOfIssues: +userData.numberOfIssues,
      };
      console.log(user, "user");
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!signer) return;
    getUserFullDteails();
    // getCompanyIssues("google");
    if (!address) {
      setVerified(false);
    }
  }, [signer, address]);

  async function createIssue(data) {
    const { name, title, description, company, confidenceLevel } = data;

    if (!name || !title || !description || !company || !confidenceLevel) {
      return toast.error("Please fill all the fields");
    }
    let initialAmount = 20;
    let increasedAmount = 0;
    if (confidenceLevel == 1) {
      increasedAmount = initialAmount * 1.05;
    } else if (confidenceLevel == 2) {
      increasedAmount = initialAmount * 1.1;
    } else if (confidenceLevel == 3) {
      increasedAmount = initialAmount * 1.15;
    } else if (confidenceLevel == 4) {
      increasedAmount = initialAmount * 1.2;
    } else if (confidenceLevel == 5) {
      increasedAmount = initialAmount * 1.25;
    } else {
      // Handle other cases or set a default value
      increasedAmount = initialAmount;
    }

    let roundedIncreasedAmount = Math.round(increasedAmount);

    try {
      const feedContract = await getContractInstance(
        FeedBackAddress,
        FeedBackAbi
      );
      const tokenContract = await getContractInstance(
        LoyalityAddress,
        LoyalityTokenABI
      );

      const DECIMAL = BigNumber.from(10).pow(18);
      const amount = BigNumber.from(+roundedIncreasedAmount).mul(DECIMAL);

      let id1 = toast.loading(
        `⏳ Staking Tokens ... ${roundedIncreasedAmount} FI`,
        {
          theme: "dark",
        }
      );

      let approveTx = await tokenContract.approve(FeedBackAddress, amount);
      await approveTx.wait();

      toast.update(id1, {
        render: "Staked !",
        type: "success",
        isLoading: false,
      });

      let id2 = toast.loading("⏳ Creating issue on Chain ...", {
        theme: "dark",
      });

      let trx = await feedContract.registerIssue(
        title,
        description,
        company,
        roundedIncreasedAmount
      );
      await trx.wait();
      if (trx) {
        toast.update(id2, {
          render: "Issue Upload !",
          type: "success",
          isLoading: false,
        });

        setConfetti(true);
        setTimeout(() => {
          setConfetti(false);
        }, 5000);
        await sleep(5000);
        window.location.href = "/";
        setVerified(true);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in creating issue");
    }
  }

  async function claimRewards(){
    try {
      let contract = await getContractInstance(FeedBackAddress, FeedBackAbi);
      let id1 = toast.loading(`⏳ Claiming Rewards ...`, {
        theme: "dark",
      });
      let tokenContract = await getContractInstance(LoyalityAddress, LoyalityTokenABI);
      let rewardHas = await tokenContract.balanceOf(address); 
      let DECIMAL = BigNumber.from(10).pow(18);
      let balance = +rewardHas.div(DECIMAL).toString();

      let trx = await contract.claimTokens(balance);
      await trx.wait();
      if (trx) {
        toast.update(id1, {
          render: "Rewards Claimed !",
          type: "success",
          isLoading: false,
        });
        setConfetti(true);
        setTimeout(() => {
          setConfetti(false);
        }, 5000);
        await sleep(5000);
        window.location.href = "/user-dashboard";
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in claiming rewards");
    }
  }
  async function updateIssueStatus(id, status) {
    console.log(id, status);
    try {
      let contract = await getContractInstance(FeedBackAddress, FeedBackAbi);
      let id1 = toast.loading(`⏳ Updating Status ...`, {
        theme: "dark",
      });
      let token = await getContractInstance(LoyalityAddress, LoyalityTokenABI);
      let DECIMAL = BigNumber.from(10).pow(18);
      let amount = BigNumber.from(100).mul(DECIMAL);
      let approveTx = await token.approve(FeedBackAddress, amount);
      await approveTx.wait();

      let trx = await contract.updateIssueStatus(id, status);
      await trx.wait();
      if (trx) {
        toast.update(id1, {
          render: "Status Updated !",
          type: "success",
          isLoading: false,
        });
        if (status) {
          setConfetti(true);
          setTimeout(() => {
            setConfetti(false);
          }, 5000);
        }
        await sleep(3000);
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in updating status");
    }
  }
  async function getCompanyIssues(company) {
    try {
      let contract = await getContractInstance(FeedBackAddress, FeedBackAbi);
      let totalIssues = await contract.totalIssues();
      totalIssues = +totalIssues.toString();
      let issues = [];

      for (let i = 0; i <= totalIssues; i++) {
        let issue = await contract.issueIdToIssue(i);

        if (issue.companyName === company) {
          let obj = {
            id: +issue.issueId,
            title: issue.title,
            description: issue.description,
            company: issue.companyName,
            amountStaked: +issue.amountStaked,
            status: issue.status,
            viewAccess: issue.viewAccess,
          };
          issues.push(obj);
        }
      }

      setCompanyIssues(issues);
    } catch (error) {
      console.log(error);
    }
  }

  async function viewIssue(issueId, amountStaked) {
    console.log(issueId, "Unl;ocking");
    try {
      let id1 = toast.loading("⏳ Approving Tokens ...", {
        theme: "dark",
      });

      let token = await getContractInstance(LoyalityAddress, LoyalityTokenABI);
      let DECIMAL = BigNumber.from(10).pow(18);
      let amount = BigNumber.from(+amountStaked).mul(DECIMAL);
      let trx = await token.approve(FeedBackAddress, amount);
      await trx.wait();

      toast.update(id1, {
        render: "Tokens Approved !",
        type: "success",
        isLoading: false,
      });
      let contract = await getContractInstance(FeedBackAddress, FeedBackAbi);
      let id = toast.loading("⏳ Unlocking Issue By Staking ...", {
        theme: "dark",
      });

      let tx1 = await contract.viewIssue(issueId);
      await tx1.wait();
      toast.update(id, {
        render: "Issue Unlocked !",
        type: "success",
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function registerUser() {
    try {
      const feedContract = await getContractInstance(
        FeedBackAddress,
        FeedBackAbi
      );
      const tokenContract = await getContractInstance(
        LoyalityAddress,
        LoyalityTokenABI
      );
      const DECIMAL = BigNumber.from(10).pow(18);
      const amount = BigNumber.from(100).mul(DECIMAL);
      let id = toast.loading("⏳ Getting First Sigup Tokens...", {
        theme: "dark",
      });
      let approveTx = await tokenContract.approve(FeedBackAddress, amount);

      await approveTx.wait();

      toast.update(id, {
        render: "Tokens Approved !",
        type: "success",
        isLoading: false,
      });

      let trx = await feedContract.registerUser();
      await trx.wait();

      let id2 = toast.loading("⏳ Registering User...", {
        theme: "dark",
      });
      await trx.wait();
      if (trx) {
        toast.update(id2, {
          render: "User Registered Sucessfully !",
          type: "success",
          isLoading: false,
        });
        setConfetti(true);
        setTimeout(() => {
          setConfetti(false);
        }, 5000);
        await sleep(5000);
        window.location.href = "/";
        setVerified(true);
      }
    } catch (error) {
      toast.error("Error Occurred !!!");
      console.log(error);
      return false;
    }
  }
  function formatAddress(address) {
    let firstPart = address.substring(0, 8);
    let lastPart = address.substring(address.length - 5, address.length);
    return (firstPart + "..." + lastPart).toUpperCase();
  }

  return (
    <UserDataContext.Provider
      value={{
        registerUser,
        confetti,
        formatAddress,
        user,
        verified,
        createIssue,
        getCompanyIssues,
        companyIssues,
        viewIssue,
        updateIssueStatus,
        claimRewards
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
export const useUserDataContext = () => useContext(UserDataContext);
