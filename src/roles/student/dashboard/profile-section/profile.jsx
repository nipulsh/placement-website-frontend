import React from "react";
import DashboardProfileAbout from "./about";
import "./profile-explain.css";

const DashboardProfile = () => {
  const studentName = "John Doe";
  return (
    <>
      <div className="p-4 bg-[#F0EDE5] flex flex-col h-full">
        <div>
          <div className="flex justify-between">
            <h1 className="text-[#0C0C0C99] capitalize text-[1.5rem]">
              My Profile
            </h1>
            <button className="text-[12px] bg-[#499BFC] rounded-[5px]  pt-0.5 pb-0.5 pr-2 pl-2">
              Edit Profile
            </button>
          </div>
          <div className="flex gap-5">
            <div className="w-[50px] h-[50px] rounded-full  ">
              <img
                src="/pngwing.com.png"
                alt=""
                className="object-contain h-full w-full"
              />
            </div>
            <div>
              <h1 className="text-[1.5rem] text-black">{studentName}</h1>
              <p className="text-[12px] text-[#0C0C0C99]">Student</p>
            </div>
          </div>
          <div className="flex gap-1 ">
            <span className="text-black">location .</span>
            <span className="text-[#0C0C0C99]">contact info</span>
          </div>
          <div className="flex gap-5">
            <span className="text-black capitalize bg-[#2976E9] pt-0.5 pb-0.5 pr-2 pl-2 rounded-[5px] text-center">
              about
            </span>
            <span className="text-black capitalize border-2 rounded-[20px] pt-0.5 pb-0.5 pr-3 pl-3 border-[#2976E9] ">
              CV Download
            </span>
          </div>
        </div>
        <div className="flex-1">
          <div className="h-full flex justify-start ">
            <DashboardProfileAbout />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardProfile;
