import React from "react";

const ProfileExplaination = ({ profile, section }) => {
  if (!profile)
    return (
      <div className="p-4 text-center text-slate-600">
        <p>No data available.</p>
      </div>
    );

  return (
    <div className="h-auto overflow-y-auto flex flex-col space-y-4 text-slate-600 overflow-x-hidden">
      {section === 0 && (
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
          <h1 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-2 break-words">
            {profile.jobTitle}
          </h1>
          <h4 className="text-lg text-slate-700 mb-1 break-words">
            {profile.company}
          </h4>
          <h5 className="text-sm text-slate-500 mb-3">
            {profile.startingDate} - {profile.endingDate}
          </h5>
          <div className="mb-4">
            <h3 className="text-sm font-medium text-slate-800 mb-1">
              Description
            </h3>
            <p className="text-sm text-slate-600 break-words">
              {profile.jobDiscription}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-800 mb-2">Skills</h3>
            <ul className="flex flex-wrap gap-2">
              {profile.skillsUsed.map((skill, index) => (
                <li
                  key={index}
                  className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm break-words"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {section === 1 && (
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
          <h1 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-2 break-words">
            {profile.projectName}
          </h1>
          <h4 className="text-lg text-slate-700 mb-1 break-words">
            {profile.company}
          </h4>
          <h5 className="text-sm text-slate-500 mb-3">
            {profile.startingDate} - {profile.endingDate}
          </h5>
          <div className="mb-4">
            <h3 className="text-sm font-medium text-slate-800 mb-1">
              Description
            </h3>
            <p className="text-sm text-slate-600 break-words">
              {profile.ProjectDiscription}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-800 mb-2">
              Skills Used
            </h3>
            <ul className="flex flex-wrap gap-2">
              {profile.skillsUsed.map((skill, index) => (
                <li
                  key={index}
                  className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm break-words"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {section === 2 && (
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
          <h1 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-2 break-words">
            {profile.institution}
          </h1>
          <h4 className="text-lg text-slate-700 mb-1 break-words">
            {profile.course}
          </h4>
          <h5 className="text-sm text-slate-500 mb-3">
            {profile.startingDate} - {profile.endingDate}
          </h5>
          <div className="mb-4">
            <h3 className="text-sm font-medium text-slate-800 mb-1">
              Description
            </h3>
            <p className="text-sm text-slate-600 break-words">
              {profile.courseDiscription}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-800 mb-2">
              Key Learnings
            </h3>
            <ul className="space-y-2">
              {profile.lernings.map((learning, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-slate-600 break-words"
                >
                  <span className="text-indigo-500 mt-1 flex-shrink-0">•</span>
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {section === 3 && (
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
          <h1 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-2 break-words">
            {profile.skillName}
          </h1>
          <div className="mb-4">
            <h3 className="text-sm font-medium text-slate-800 mb-1">
              Proficiency Level
            </h3>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm break-words">
                {profile.skillLevel}
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-800 mb-1">
              Description
            </h3>
            <p className="text-sm text-slate-600 break-words">
              {profile.skillDiscription}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileExplaination;
