import React, { useEffect, useState } from "react";

import { useUserDataContext } from "../../Context/UserContext";

const Transactions = () => {
  const { user, products, formatTimestamp } = useUserDataContext();

  return (
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
              </tr>
            </thead>
            <tbody>
              {user?.userIssues?.map((issue) => {
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
                      <p class="text-blue-900 font-semibold whitespace-no-wrap ">
                        {issue?.amountStaked}
                      </p>
                      <p class="text-gray-600 whitespace-no-wrap">USD</p>
                    </td>
                    <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {issue?.title}
                      </p>
                    </td>
                    <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {issue?.status ? "🔴" : "🟢"}
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Transactions;
