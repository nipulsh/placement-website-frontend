import React from "react";

const DashCompany = (props) => {
  return (
    <>
      <div className="flex justify-between gap-3  text-black bg-[#D9D9D952] pt-4 pb-4 pl-2 pr-2 mb-2">
        <div className="flex-1 h-full flex align-center justify-center text-[#4B33D1]">
          {props.company}
        </div>
        <div className="flex-1 h-full flex align-center justify-center">
          {props.uploadDate}
        </div>
        <div className="flex-1 h-full flex align-center justify-center">
          {props.duration}
        </div>
        <div className="flex-1 h-full flex align-center justify-center">
          {props.stipend}/month
        </div>
        <div className="flex-1 h-full  flex align-center justify-center">
          <button className="bg-[#5D5FEF] text-white h-full w-20 cursor-pointer rounded-[5px] flex justify-center align-center">
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default DashCompany;
