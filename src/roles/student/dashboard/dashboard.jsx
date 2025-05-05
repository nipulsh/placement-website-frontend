import React, { useState } from "react";
import CompaniesList from "./company-section/companies-list";
import DashboardProfile from "./profile-section/profile";
import DashboardAnnouncements from "./announcement/dashboard-announcements";

const StudentDashboard = () => {
  const [section, setSection] = useState(0);
  const headings = [
    "Job details",
    "Updated on",
    "Duration",
    "Stipend",
    "Apply",
  ];

  const handleSetSection = (index) => {
    setSection(index);
  };

  const announcements = [
    {
      id: 1,
      title: "Job Opening",
      description: "We are hiring for a new position.",
      date: "2023-08-01",
    },
    {
      id: 2,
      title: "Internship Opportunity",
      description: "Apply for our internship program.",
      date: "2023-08-15",
    },
    {
      id: 3,
      title: "Job Opening",
      description: "We are hiring for a new position.",
      date: "2023-08-01",
    },
    {
      id: 4,
      title: "Internship Opportunity",
      description: "Apply for our internship program.",
      date: "2023-08-15",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6">
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
          Welcome back, John!
        </h1>
        <p className="text-slate-600 mt-1 text-sm sm:text-base">
          Here's what's happening with your applications
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
        {/* Left Column - Job Listings */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100">
            <div className="p-4 border-b border-slate-100">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-800">
                Recent Job Openings
              </h2>
            </div>
            <div className="p-4">
              <div className="mb-4 overflow-x-auto">
                <ul className="grid grid-cols-5 gap-4 px-4 py-2 bg-slate-50 rounded-lg min-w-[600px]">
                  {headings.map((heading, index) => (
                    <li
                      key={index}
                      className="text-sm font-medium text-slate-600 capitalize"
                    >
                      {heading}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-[400px] sm:h-[500px] overflow-y-auto custom-scrollbar">
                <CompaniesList />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Profile */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full border border-slate-100">
            <div className="p-4 border-b border-slate-100">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-800">
                Your Profile
              </h2>
            </div>
            <div className="p-4">
              <DashboardProfile
                section={section}
                handleSetSection={handleSetSection}
              />
            </div>
          </div>
        </div>

        {/* Bottom Section - Announcements and Stats */}
        <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Announcements Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100">
            <div className="p-4 border-b border-slate-100">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-800">
                Announcements
              </h2>
            </div>
            <div className="p-4">
              <DashboardAnnouncements data={announcements} />
            </div>
          </div>

          {/* Application Stats Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100">
            <div className="p-4 border-b border-slate-100">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-800">
                Application Stats
              </h2>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-50 p-3 sm:p-4 rounded-lg">
                  <p className="text-xs sm:text-sm text-indigo-600 font-medium">
                    Applied
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-indigo-700 mt-1">
                    12
                  </p>
                </div>
                <div className="bg-emerald-50 p-3 sm:p-4 rounded-lg">
                  <p className="text-xs sm:text-sm text-emerald-600 font-medium">
                    Interviews
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-emerald-700 mt-1">
                    3
                  </p>
                </div>
                <div className="bg-cyan-50 p-3 sm:p-4 rounded-lg">
                  <p className="text-xs sm:text-sm text-cyan-600 font-medium">
                    Offers
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-cyan-700 mt-1">
                    1
                  </p>
                </div>
                <div className="bg-amber-50 p-3 sm:p-4 rounded-lg">
                  <p className="text-xs sm:text-sm text-amber-600 font-medium">
                    Pending
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-amber-700 mt-1">
                    8
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100">
            <div className="p-4 border-b border-slate-100">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-800">
                Upcoming Events
              </h2>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <span className="text-indigo-600 font-semibold text-sm sm:text-base">
                      15
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 text-sm sm:text-base">
                      Interview with Tech Corp
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      10:00 AM - 11:00 AM
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <span className="text-indigo-600 font-semibold text-sm sm:text-base">
                      18
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 text-sm sm:text-base">
                      Career Fair
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      2:00 PM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
