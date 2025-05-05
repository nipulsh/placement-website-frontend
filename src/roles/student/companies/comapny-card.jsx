import React from "react";

const CompanyCard = ({ id, data, set, isSelected }) => {
  const {
    image,
    jobTitle,
    companyName,
    workPlace,
    duration,
    postedTime,
    stipend,
    jobType,
    skills = [],
  } = data;

  return (
    <div
      onClick={() => set(id)}
      className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
        isSelected ? "bg-purple-50 border-l-4 border-purple-500" : ""
      }`}
    >
      <div className="flex items-start space-x-4">
        {/* Company Logo */}
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={companyName}
            className="w-12 h-12 rounded-lg object-contain bg-white border border-gray-200"
          />
        </div>

        {/* Job Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {jobTitle}
            </h3>
            <span className="text-sm text-gray-500">{postedTime}</span>
          </div>

          <p className="text-sm font-medium text-gray-700">{companyName}</p>

          <div className="mt-2 flex flex-wrap gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {jobType}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {workPlace}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              {duration}
            </span>
          </div>

          {/* Skills */}
          {skills.length > 0 && (
            <div className="mt-3">
              <div className="flex flex-wrap gap-1">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Stipend */}
          <div className="mt-3 flex items-center text-sm text-gray-600">
            <svg
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>₹{stipend}/month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
