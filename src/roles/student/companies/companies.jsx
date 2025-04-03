import StudentsFilters from "./filters";
import CompanyCard from "./comapny-card";
import ComapnyExplained from "./company-explain";
import { useState } from "react";

const Companies = () => {
  const currentHirings = [
    {
      id: 1,
      name: "Google",
      image:
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_120x44dp.png",
      jobTitle: "Software Engineer",
      companyName: "Google",
      workPlace: "Work from Home",
      duration: "1 week",
      postedTime: "3 days ago",
      stipend: "5000",
      jobType: "Internship",
    },
    {
      id: 2,
      name: "Microsoft",
      image:
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_120x44dp.png",
      jobTitle: "Software Engineer",
      companyName: "Microsoft",
      workPlace: "Work from Home",
      duration: "1 week",
      postedTime: "3 days ago",
      stipend: "5000",
      jobType: "Internship",
    },
    {
      id: 3,
      name: "Amazon",
      image:
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_120x44dp.png",
      jobTitle: "Software Engineer",
      companyName: "Amazon",
      workPlace: "Work from Home",
      duration: "1 week",
      postedTime: "3 days ago",
      stipend: "5000",
      jobType: "Internship",
    },
    {
      id: 4,
      name: "Tesla",
      image:
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_120x44dp.png",
      jobTitle: "Software Engineer",
      companyName: "Tesla",
      workPlace: "Work from Home",
      duration: "1 week",
      postedTime: "3 days ago",
      stipend: "5000",
      jobType: "Internship",
    },
    {
      id: 5,
      name: "Tesla",
      image:
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_120x44dp.png",
      jobTitle: "prostitute",
      companyName: "Tesla",
      workPlace: "Work from Home",
      duration: "1 week",
      postedTime: "3 days ago",
      stipend: "5000",
      jobType: "Internship",
    },
    {
      id: 6,
      name: "Tesla",
      image:
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_120x44dp.png",
      jobTitle: "Software Engineer",
      companyName: "Tesla",
      workPlace: "Work from Home",
      duration: "1 week",
      postedTime: "3 days ago",
      stipend: "5000",
      jobType: "Internship",
    },
    {
      id: 7,
      name: "X",
      image:
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_120x44dp.png",
      jobTitle: "Software Engineer",
      companyName: "X",
      workPlace: "Work from Home",
      duration: "1 week",
      postedTime: "3 days ago",
      stipend: "5000",
      jobType: "Internship",
    },
  ];

  const [CompanyData, setCompanyData] = useState({});

  function handleSetCompanySelected(id) {
    return handleFetchCompanyData(id);
  }

  function handleFetchCompanyData(id) {
    const company = currentHirings.find((company) => company.id === id);
    setCompanyData(company);
  }

  return (
    <>
      <div className="flex gap-5 bg- h-full overflow-hidden bg-white ">
        <div className=" flex flex-col flex-1 h-full gap-3 ">
          <div className="flex-1/12 ">
            <StudentsFilters />
          </div>
          <div className="bg-[#D9D9D936] flex-11/12 text-black p-5 overflow-y-scroll">
            {currentHirings.map((company) => (
              <CompanyCard
                key={company.id}
                id={company.id}
                data={company}
                set={handleSetCompanySelected}
                background={true}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 box-border">
          <ComapnyExplained data={CompanyData} />
        </div>
      </div>
    </>
  );
};

export default Companies;
