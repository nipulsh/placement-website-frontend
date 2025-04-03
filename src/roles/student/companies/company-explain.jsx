import React from "react";
import CompanyCard from "./comapny-card";

const ComapnyExplained = ({ data }) => {
  const workDescription = [
    "Develop and maintain web applications",
    "Collaborate with cross-functional teams",
    "Implement and optimize frontend features",
    "Conduct code reviews and ensure best practices",
    "Troubleshoot and resolve technical issues",
  ];

  const skillsRequired = [
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Version Control (Git)",
  ];

  return (
    <div className="w-full h-full overflow-y-auto p-5">
      <h1 className="text-center text-black capitalize text-3xl font-bold mb-5">
        Software Engineer Internship
      </h1>

      <div className="space-y-6">
        <CompanyCard background={false} data={data} id={data.id} />

        <div className="text-black">
          <h2 className="text-xl font-semibold capitalize mb-3">
            About the Work
          </h2>
          <p className="mb-3">
            We are seeking a talented Software Engineer Intern to join our
            dynamic team and contribute to innovative projects.
          </p>
          <ul className="list-disc list-inside space-y-2">
            {workDescription.map((description, index) => (
              <li key={index} className="text-gray-700">
                {description}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold capitalize mb-3">
            Skills Required
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {skillsRequired.map((skill, index) => (
              <li key={index} className="text-gray-700">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComapnyExplained;
