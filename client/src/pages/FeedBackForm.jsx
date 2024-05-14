
import React, { useState } from "react";
import Confetti from "react-confetti";
import { useUserDataContext } from "../Context/UserContext";
const FeedBackForm = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const { confetti ,createIssue} = useUserDataContext();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const [issueData, setIssueData] = useState({
    name: "",
    title: "",
    description: "",
  });
  const [company, setCompany] = useState("");
  const [confidenceLevel, setConfidenceLevel] = useState("");

  const onChangeData = (e) => {
    setIssueData({ ...issueData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...issueData,
      company,
      confidenceLevel,
    };
    await createIssue(data);
  };
  const width = window.innerWidth;
  const height = window.innerHeight;
  return (
    <>
      {confetti && <Confetti width={width} height={height} />}
      <div className="flex items-center justify-center flex-col p-12 h-auto bg-[#141622]">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Upload Your Issue
        </h2>
        <p className="mb-0 lg:mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Let's Get Rewards From them <br />
          Need details Technical or Any Glitches
        </p>
        <div className="mx-auto w-full max-w-[550px]">
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div className="mb-5">
              <label
                for="name"
                className="mb-3 block text-base font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => onChangeData(e)}
                value={issueData.name}
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-[#141622] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="title"
                className="mb-3 block text-base font-medium text-white"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={(e) => onChangeData(e)}
                value={issueData.title}
                placeholder="Title of Issue"
                className="w-full rounded-md border border-[#e0e0e0] bg-[#141622] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="name"
                className="mb-3 block text-base font-medium text-white"
              >
                Upload Issue
              </label>
              <label
                for="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-34 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#141622] dark:hover:bg-bray-800 dark:bg-[#141622] hover:bg-[#141622] "
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> Doc
                    Verification
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Upload Issue Image
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  onChange={(e) => handleFileChange(e)}
                  type="file"
                  className="hidden"
                />
              </label>

              {selectedFile && selectedFile.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="File Preview"
                  className="mt-3 mb-1"
                  style={{ maxWidth: "50%", maxHeight: "100px" }}
                />
              ) : (
                <p className="mt-4 text-gray-500">
                  File preview not available for this file type.
                </p>
              )}
            </div>

            <div className="mb-5">
              <label
                for="description"
                className="mb-3 block text-base font-medium text-white"
              >
                Issue Description
              </label>
              <textarea
                rows="4"
                name="description"
                id="description"
                onChange={(e) => onChangeData(e)}
                value={issueData.description}
                placeholder="Type issue description here"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-[#141622] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>

            <div className="mb-5">
              <select
                id="company"
                name="company"
                onChange={(e) => setCompany(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected value="null">
                  Select Company
                </option>
                <option value="amazon">Amazon</option>
                <option value="google">Google</option>
                <option value="sap">SAP</option>
                <option value="harman">HARMAN</option>
              </select>
            </div>
            <div className="mb-5">
              <select
                id="confidence"
                name="confidence"
                onChange={(e) => setConfidenceLevel(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected value="null" className="bg-[#141622]">
                  Select Confidence Your Level
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div>
              <button
                onClick={onSubmit}
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FeedBackForm;
