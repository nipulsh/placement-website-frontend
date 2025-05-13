import React from "react";
import { Bar, Pie, Doughnut } from "react-chartjs-2";
import {
  FaUsers,
  FaGraduationCap,
  FaBriefcase,
  FaCalendarAlt,
  FaUserTie,
  FaMapMarkerAlt,
  FaListUl,
  FaBuilding,
  FaChartLine,
  FaCheckSquare,
  FaLayerGroup,
  FaCode,
  FaUsersCog,
} from "react-icons/fa";

const CompanyStatistics = ({ company }) => {
  // Application statistics chart data
  const applicationData = {
    labels: ["Total Applications", "Shortlisted", "Final Selections"],
    datasets: [
      {
        label: "Number of Students",
        data: [
          company.applications,
          company.shortlisted,
          company.finalSelections,
        ],
        backgroundColor: [
          "#4F46E5", // indigo-600
          "#7C3AED", // purple-600
          "#10B981", // emerald-600
        ],
      },
    ],
  };

  // Selection funnel chart data
  const selectionData = {
    labels: ["Applied", "Shortlisted", "Selected"],
    datasets: [
      {
        label: "Selection Stage",
        data: [
          100,
          Math.round((company.shortlisted / company.applications) * 100),
          Math.round((company.finalSelections / company.applications) * 100),
        ],
        backgroundColor: [
          "#4F46E5", // indigo-600
          "#7C3AED", // purple-600
          "#10B981", // emerald-600
        ],
      },
    ],
  };

  // Department-wise distribution (sample data)
  const departmentData = {
    labels: company.eligibleDepartments,
    datasets: [
      {
        label: "Applications by Department",
        data: company.eligibleDepartments.map(() =>
          Math.floor(
            Math.random() *
              ((company.applications / company.eligibleDepartments.length) *
                1.5)
          )
        ),
        backgroundColor: [
          "#4F46E5", // indigo-600
          "#7C3AED", // purple-600
          "#EC4899", // pink-600
          "#F43F5E", // rose-600
          "#EF4444", // red-600
          "#F97316", // orange-600
          "#EAB308", // yellow-600
          "#22C55E", // green-600
          "#06B6D4", // cyan-600
          "#3B82F6", // blue-600
        ],
      },
    ],
  };

  // Chart options
  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="space-y-8">
      {/* Company Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-indigo-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <FaBuilding className="text-indigo-500 mr-2" />
            <h3 className="text-sm font-semibold text-gray-700">Status</h3>
          </div>
          <p className="text-2xl font-bold text-indigo-700">{company.status}</p>
          <p className="text-xs text-gray-500 mt-1">
            {company.active ? "Currently Active" : "Recruitment Completed"}
          </p>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <FaCalendarAlt className="text-purple-500 mr-2" />
            <h3 className="text-sm font-semibold text-gray-700">Timeline</h3>
          </div>
          <p className="text-2xl font-bold text-purple-700">
            {new Date(company.startDate).toLocaleDateString()} -{" "}
            {new Date(company.endDate).toLocaleDateString()}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Duration:{" "}
            {Math.round(
              (new Date(company.endDate) - new Date(company.startDate)) /
                (1000 * 60 * 60 * 24)
            )}{" "}
            days
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <FaUserTie className="text-green-500 mr-2" />
            <h3 className="text-sm font-semibold text-gray-700">
              Selection Rate
            </h3>
          </div>
          <p className="text-2xl font-bold text-green-700">
            {Math.round((company.finalSelections / company.applications) * 100)}
            %
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {company.finalSelections} out of {company.applications} applications
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <FaBriefcase className="text-blue-500 mr-2" />
            <h3 className="text-sm font-semibold text-gray-700">Offer Types</h3>
          </div>
          <p className="text-2xl font-bold text-blue-700">
            {company.internshipOffered && company.fullTimeOffered
              ? "Internship & Full-time"
              : company.internshipOffered
              ? "Internship"
              : "Full-time"}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {company.packageRange} • {company.workMode}
          </p>
        </div>
      </div>

      {/* Offered Seats & Student Requirements */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <FaUsersCog className="text-indigo-500 mr-2 text-xl" />
          <h2 className="text-xl font-semibold">
            Offered Positions & Requirements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-4">
              <h3 className="text-md font-semibold text-gray-700 mb-2 flex items-center">
                <FaUsers className="text-indigo-500 mr-2" />
                Positions & Eligibility
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Total Offered Seats
                    </p>
                    <p className="text-lg font-bold text-indigo-600">
                      {company.offeredSeats || "Multiple"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Minimum CGPA
                    </p>
                    <p className="text-lg font-bold text-indigo-600">
                      {company.minCGPA}+
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Expected Graduation
                    </p>
                    <p className="text-lg font-bold text-indigo-600">
                      {company.expectedGradYear || "All Years"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Dept. Eligible
                    </p>
                    <p className="text-lg font-bold text-indigo-600">
                      {company.eligibleDepartments?.length || "All"}
                    </p>
                  </div>
                </div>

                {company.hiringForYears &&
                  company.hiringForYears.length > 0 && (
                    <div className="mt-3">
                      <p className="text-sm font-medium text-gray-500">
                        Hiring Batches
                      </p>
                      <p className="text-md text-gray-700">
                        {company.hiringForYears.join(", ")}
                      </p>
                    </div>
                  )}

                {company.eligibilityCriteria && (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-500">
                      Additional Criteria
                    </p>
                    <p className="text-md text-gray-700">
                      {company.eligibilityCriteria}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <h3 className="text-md font-semibold text-gray-700 mb-2 flex items-center">
                <FaCode className="text-indigo-500 mr-2" />
                Required Skills & Selection Process
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                {company.requiredSkills &&
                  company.requiredSkills.length > 0 && (
                    <div className="mb-3">
                      <p className="text-sm font-medium text-gray-500">
                        Required Skills
                      </p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {company.requiredSkills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                {company.selectionProcess && (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-500">
                      Selection Process
                    </p>
                    <p className="text-md text-gray-700">
                      {company.selectionProcess}
                    </p>
                  </div>
                )}

                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-500">
                    Application Statistics
                  </p>
                  <div className="grid grid-cols-3 gap-2 mt-1">
                    <div className="text-center">
                      <p className="text-xl font-bold text-indigo-600">
                        {company.applications}
                      </p>
                      <p className="text-xs text-gray-500">Applied</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-purple-600">
                        {company.shortlisted}
                      </p>
                      <p className="text-xs text-gray-500">Shortlisted</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-green-600">
                        {company.finalSelections}
                      </p>
                      <p className="text-xs text-gray-500">Selected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaUsers className="text-indigo-500 mr-2 text-xl" />
            <h2 className="text-xl font-semibold">Application Statistics</h2>
          </div>
          <div className="h-64">
            <Bar data={applicationData} options={barOptions} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaChartLine className="text-indigo-500 mr-2 text-xl" />
            <h2 className="text-xl font-semibold">Selection Funnel (%)</h2>
          </div>
          <div className="h-64">
            <Bar data={selectionData} options={barOptions} />
          </div>
        </div>
      </div>

      {/* Department Distribution & Job Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md md:col-span-1">
          <div className="flex items-center mb-4">
            <FaGraduationCap className="text-indigo-500 mr-2 text-xl" />
            <h2 className="text-xl font-semibold">Department Distribution</h2>
          </div>
          <div className="h-64">
            <Doughnut data={departmentData} options={pieOptions} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
          <div className="flex items-center mb-4">
            <FaBriefcase className="text-indigo-500 mr-2 text-xl" />
            <h2 className="text-xl font-semibold">Job Details</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <div className="flex items-center mb-1">
                  <FaListUl className="text-indigo-500 mr-2" />
                  <h3 className="text-sm font-semibold text-gray-700">
                    Roles Offered
                  </h3>
                </div>
                <ul className="list-disc list-inside text-gray-600 pl-5">
                  {company.roles.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-1">
                  <FaMapMarkerAlt className="text-indigo-500 mr-2" />
                  <h3 className="text-sm font-semibold text-gray-700">
                    Job Locations
                  </h3>
                </div>
                <ul className="list-disc list-inside text-gray-600 pl-5">
                  {company.jobLocations.map((location, index) => (
                    <li key={index}>{location}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-1">
                  Eligibility
                </h3>
                <p className="text-gray-600">Min. CGPA: {company.minCGPA}</p>
                <p className="text-gray-600">
                  Departments: {company.eligibleDepartments.join(", ")}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">
                  Package Details
                </h3>
                <p className="text-gray-600">Range: {company.packageRange}</p>
                <p className="text-gray-600">Work Mode: {company.workMode}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyStatistics;
