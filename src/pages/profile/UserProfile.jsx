import React from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
          <div className="mt-2 mb-8 w-full">
            <h4 className="px-2 text-xl font-bold text-black-700 dark:text-black">
              General Information
            </h4>
            <p className="mt-2 px-2 text-base text-gray-600">
              Here is the Overview of what you have done so far .....
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 px-2 w-full">
            <div
              style={{
                border: "1px solid navy",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
            >
              <Link
                to="/myorders"
                className="text-base font-medium text-blue-700 dark:text-blue"
              >
                My Orders
              </Link>
            </div>
            <div
              style={{
                border: "1px solid navy",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
            >
              <Link
                to="/myorders"
                className="text-base font-medium text-blue-700 dark:text-blue"
              >
                My Orders
              </Link>
            </div>
            <div
              style={{
                border: "1px solid navy",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
            >
              <Link
                to="/myorders"
                className="text-base font-medium text-blue-700 dark:text-blue"
              >
                My Orders
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
