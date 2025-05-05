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
      description:
        "We are looking for a talented Software Engineer to join our team...",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of experience in software development",
        "Strong knowledge of data structures and algorithms",
        "Experience with React, Node.js, and TypeScript",
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Flexible work hours",
        "Remote work options",
      ],
      applicationDeadline: "2024-04-30",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      location: "Bangalore, India",
      experience: "3-5 years",
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

  const [selectedCompany, setSelectedCompany] = useState(null);

  function handleSetCompanySelected(id) {
    const company = currentHirings.find((company) => company.id === id);
    setSelectedCompany(company);
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Job Listings</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Column - Filters and Job Listings */}
        <div className="w-1/2 flex flex-col border-r border-gray-200 bg-white overflow-hidden">
          {/* Filters */}
          <div className="p-4 border-b border-gray-200">
            <StudentsFilters />
          </div>

          {/* Job Listings */}
          <div className="flex-1 overflow-y-auto">
            <div className="divide-y divide-gray-200">
              {currentHirings.map((company) => (
                <CompanyCard
                  key={company.id}
                  id={company.id}
                  data={company}
                  set={handleSetCompanySelected}
                  isSelected={selectedCompany?.id === company.id}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Company Details */}
        <div className="w-1/2 bg-white overflow-hidden">
          {selectedCompany ? (
            <div className="h-full overflow-y-auto">
              <ComapnyExplained data={selectedCompany} />
            </div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👀</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Select a Job
                </h3>
                <p className="text-gray-500">
                  Choose a job from the list to view more details
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Companies;
