import React from "react";
import DashCompany from "./dash-company";

const CompaniesList = () => {
  const companies = [
    "Google",
    "Microsoft",
    "Apple",
    "Amazon",
    "Tesla",
    "Facebook",
  ];
  const dates = [
    "2025-03-20",
    "2025-03-21",
    "2025-03-22",
    "2025-03-23",
    "2025-03-24",
    "2025-03-25",
  ];
  const months = [1, 2, 3, 4, 5, 6];
  const stipends = [5000, 7000, 10000, 12000, 8000, 15000];

  return (
    <>
      <div className="h-[100%] w-full bg-[#F0EDE5] flex flex-col">
        <div>
          <div className="h-full flex flex-col">
            {companies.map((company, index) => (
              <DashCompany
                key={index}
                company={company}
                uploadDate={dates[index]}
                duration={months[index]}
                stipend={stipends[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompaniesList;
