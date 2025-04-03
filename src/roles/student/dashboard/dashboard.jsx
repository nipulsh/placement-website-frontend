import React from "react";
import CompaniesList from "./company-section/companies-list";
import DashboardProfile from "./profile-section/profile";

const StudentDashboard = () => {
  const headings = [
    "job details",
    "updated on",
    "duration",
    "stipend",
    "apply",
  ];
  return (
    <>
      <div className="flex flex-col h-full gap-3 p-7 pt-3 ">
        <section className=" h-[65%] flex justify-between gap-3 ">
          <div className="w-7/12 h-full bg-white rounded-2xl overflow-hidden">
            <div className="mb-3 ">
              <ul className="pl-5 pt-2 pb-2 pr-5">
                <li className="flex justify-between capitalize">
                  {headings.map((heading, index) => (
                    <div
                      key={index}
                      className="text-[1.1rem] text-[#878790] flex justify-center items-center min-w-0"
                    >
                      {heading}
                    </div>
                  ))}
                </li>
              </ul>
            </div>
            <div className="h-[90%] overflow-scroll overflow-x-hidden">
              <CompaniesList />
            </div>
          </div>
          <div className="w-5/12 h-full bg-[#353535] rounded-2xl overflow-hidden">
            <DashboardProfile />
          </div>
        </section>
        <section className=" h-[35%] w-full flex justify-between gap-3">
          <div className="flex-1 h-full bg-amber-600 rounded-2xl overflow-hidden"></div>
          <div className="flex-1 h-full bg-amber-700 rounded-2xl overflow-hidden"></div>
          <div className="flex-1 h-full bg-amber-800 rounded-2xl overflow-hidden"></div>
        </section>
      </div>
    </>
  );
};

export default StudentDashboard;
