import React from "react";
import {
  FaChartBar,
  FaEdit,
  FaEye,
  FaCheckCircle,
  FaExclamationTriangle,
  FaGraduationCap,
  FaBriefcase,
  FaUsers,
} from "react-icons/fa";

const CompanyTable = ({ companies, onEdit, onViewStats }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Company
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Timeline
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Offers
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Package & Seats
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Student Eligibility
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Applications
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {companies.length === 0 ? (
              <tr>
                <td colSpan="8" className="px-6 py-4 text-center text-gray-500">
                  No companies found for this year.
                </td>
              </tr>
            ) : (
              companies.map((company) => (
                <tr key={company.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {company.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {company.workMode}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {new Date(company.startDate).toLocaleDateString()} -{" "}
                      {new Date(company.endDate).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-gray-500">
                      {company.jobLocations?.join(", ") || "Multiple locations"}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {company.roles?.join(", ")}
                    </div>
                    <div className="text-sm text-gray-500">
                      {company.internshipOffered && "Internship"}
                      {company.internshipOffered &&
                        company.fullTimeOffered &&
                        " & "}
                      {company.fullTimeOffered && "Full-time"}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {company.packageRange}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <FaUsers className="mr-1" />
                      {company.offeredSeats
                        ? `${company.offeredSeats} seats`
                        : "Multiple positions"}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <FaGraduationCap className="mr-1" /> CGPA:{" "}
                      {company.minCGPA}+
                    </div>
                    <div className="text-sm text-gray-500">
                      {company.eligibleDepartments?.join(", ") ||
                        "All Departments"}
                    </div>
                    {company.expectedGradYear && (
                      <div className="text-xs text-gray-500 mt-1">
                        Batch: {company.expectedGradYear}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      Total: {company.applications}
                    </div>
                    <div className="text-sm text-gray-500">
                      Selected: {company.finalSelections} (
                      {company.applications > 0
                        ? Math.round(
                            (company.finalSelections / company.applications) *
                              100
                          )
                        : 0}
                      %)
                    </div>
                    {company.shortlisted > 0 && (
                      <div className="text-xs text-gray-500 mt-1">
                        Shortlisted: {company.shortlisted}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        company.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {company.status === "Active" ? (
                        <FaCheckCircle className="mr-1 mt-0.5" />
                      ) : (
                        <FaExclamationTriangle className="mr-1 mt-0.5" />
                      )}
                      {company.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => onViewStats(company)}
                      className="text-indigo-600 hover:text-indigo-900 mr-3"
                      title="View Statistics"
                    >
                      <FaChartBar />
                    </button>
                    <button
                      onClick={() => onEdit(company)}
                      className="text-blue-600 hover:text-blue-900"
                      title="Edit Company"
                    >
                      <FaEdit />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyTable;
