import React, { useState, useEffect } from "react";
import { FaSave, FaTimes } from "react-icons/fa";

const CompanyForm = ({ company, onSubmit, onCancel }) => {
  // Initialize form with company data or default values
  const [formData, setFormData] = useState({
    name: "",
    startDate: "",
    endDate: "",
    roles: [],
    minCGPA: 0,
    internshipOffered: false,
    fullTimeOffered: false,
    eligibleDepartments: [],
    packageRange: "",
    jobLocations: [],
    workMode: "Hybrid",
    applications: 0,
    shortlisted: 0,
    finalSelections: 0,
    // New fields
    offeredSeats: 0,
    requiredSkills: [],
    expectedGradYear: new Date().getFullYear(),
    interviewRounds: "",
    additionalRequirements: "",
    eligibilityCriteria: "",
    selectionProcess: "",
    hiringForYears: [],
  });

  // Populate form when company data is provided
  useEffect(() => {
    if (company) {
      setFormData({
        name: company.name || "",
        startDate: company.startDate || "",
        endDate: company.endDate || "",
        roles: company.roles || [],
        minCGPA: company.minCGPA || 0,
        internshipOffered: company.internshipOffered || false,
        fullTimeOffered: company.fullTimeOffered || false,
        eligibleDepartments: company.eligibleDepartments || [],
        packageRange: company.packageRange || "",
        jobLocations: company.jobLocations || [],
        workMode: company.workMode || "Hybrid",
        applications: company.applications || 0,
        shortlisted: company.shortlisted || 0,
        finalSelections: company.finalSelections || 0,
        // New fields with defaults
        offeredSeats: company.offeredSeats || 0,
        requiredSkills: company.requiredSkills || [],
        expectedGradYear: company.expectedGradYear || new Date().getFullYear(),
        interviewRounds: company.interviewRounds || "",
        additionalRequirements: company.additionalRequirements || "",
        eligibilityCriteria: company.eligibilityCriteria || "",
        selectionProcess: company.selectionProcess || "",
        hiringForYears: company.hiringForYears || [],
      });
    }
  }, [company]);

  // Department options
  const departmentOptions = [
    "CS",
    "EC",
    "EE",
    "ME",
    "CE",
    "CH",
    "BT",
    "Business",
    "All Engineering",
    "MCA",
  ];

  // Work mode options
  const workModeOptions = ["In-office", "Hybrid", "Remote"];

  // Graduation year options
  const currentYear = new Date().getFullYear();
  const gradYearOptions = [
    currentYear,
    currentYear + 1,
    currentYear + 2,
    currentYear + 3,
    "All Years",
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle multi-select changes
  const handleMultiSelectChange = (e, field) => {
    const options = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setFormData((prev) => ({ ...prev, [field]: options }));
  };

  // Handle comma-separated text inputs for arrays
  const handleArrayInputChange = (e, field) => {
    const value = e.target.value;
    const array = value
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");
    setFormData((prev) => ({ ...prev, [field]: array }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Information */}
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-4">
            Basic Information
          </h3>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name*
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Recruitment Start Date*
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              className="w-full text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Recruitment End Date*
            </label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
              className="w-full p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Work Mode
            </label>
            <select
              name="workMode"
              value={formData.workMode}
              onChange={handleChange}
              className="w-full p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {workModeOptions.map((mode) => (
                <option key={mode} value={mode}>
                  {mode}
                </option>
              ))}
            </select>
          </div>

          {/* New field: Total Offered Seats */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Total Offered Seats
            </label>
            <input
              type="number"
              name="offeredSeats"
              value={formData.offeredSeats}
              onChange={handleChange}
              min="0"
              className="w-full p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Offer Details */}
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-4">
            Offer Details
          </h3>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Roles Offered (comma-separated)
            </label>
            <input
              type="text"
              value={formData.roles.join(", ")}
              onChange={(e) => handleArrayInputChange(e, "roles")}
              className="w-full p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Software Engineer, Data Scientist, etc."
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Package Range
            </label>
            <input
              type="text"
              name="packageRange"
              value={formData.packageRange}
              onChange={handleChange}
              className="w-full p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g. 15-20 LPA"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Locations (comma-separated)
            </label>
            <input
              type="text"
              value={formData.jobLocations.join(", ")}
              onChange={(e) => handleArrayInputChange(e, "jobLocations")}
              className="w-full p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Bangalore, Mumbai, etc."
            />
          </div>

          <div className="flex items-center mb-4">
            <div className="mr-6">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <input
                  type="checkbox"
                  name="internshipOffered"
                  checked={formData.internshipOffered}
                  onChange={handleChange}
                  className="rounded border-gray-300 text-indigo-600 mr-2"
                />
                Internship
              </label>
            </div>
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700">
                <input
                  type="checkbox"
                  name="fullTimeOffered"
                  checked={formData.fullTimeOffered}
                  onChange={handleChange}
                  className="rounded border-gray-300 text-indigo-600 mr-2"
                />
                Full-time
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Student Eligibility Section */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-medium text-gray-700 mb-4">
          Student Eligibility & Requirements
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Minimum CGPA Requirement
              </label>
              <input
                type="number"
                name="minCGPA"
                value={formData.minCGPA}
                onChange={handleChange}
                min="0"
                max="10"
                step="0.1"
                className="w-full text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Required Skills (comma-separated)
              </label>
              <input
                type="text"
                value={formData.requiredSkills.join(", ")}
                onChange={(e) => handleArrayInputChange(e, "requiredSkills")}
                className="w-full text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Java, Python, Machine Learning, etc."
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expected Graduation Year
              </label>
              <select
                name="expectedGradYear"
                value={formData.expectedGradYear}
                onChange={handleChange}
                className="w-full p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {gradYearOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hiring for Years (multiple select)
              </label>
              <select
                multiple
                value={formData.hiringForYears}
                onChange={(e) => handleMultiSelectChange(e, "hiringForYears")}
                className="w-full p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24"
              >
                {gradYearOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">
                Hold Ctrl/Cmd to select multiple
              </p>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Eligible Departments
              </label>
              <select
                multiple
                value={formData.eligibleDepartments}
                onChange={(e) =>
                  handleMultiSelectChange(e, "eligibleDepartments")
                }
                className="w-full p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24"
              >
                {departmentOptions.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">
                Hold Ctrl/Cmd to select multiple
              </p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Selection Process
              </label>
              <textarea
                name="selectionProcess"
                value={formData.selectionProcess}
                onChange={handleChange}
                className="w-full p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Aptitude Test → Technical Interview → HR Interview"
                rows="2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Eligibility Criteria
              </label>
              <textarea
                name="eligibilityCriteria"
                value={formData.eligibilityCriteria}
                onChange={handleChange}
                className="w-full p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="No active backlogs, etc."
                rows="2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section - only show if editing existing company */}
      {company && (
        <div className="border-t pt-6">
          <h3 className="text-lg font-medium text-gray-700 mb-4">
            Application Statistics
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Applications
              </label>
              <input
                type="number"
                name="applications"
                value={formData.applications}
                onChange={handleChange}
                min="0"
                className="w-full p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Shortlisted Candidates
              </label>
              <input
                type="number"
                name="shortlisted"
                value={formData.shortlisted}
                onChange={handleChange}
                min="0"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Final Selections
              </label>
              <input
                type="number"
                name="finalSelections"
                value={formData.finalSelections}
                onChange={handleChange}
                min="0"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* Form Actions */}
      <div className="flex justify-end space-x-3 border-t pt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center"
        >
          <FaTimes className="mr-2" /> Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
        >
          <FaSave className="mr-2" /> {company ? "Update" : "Add"} Company
        </button>
      </div>
    </form>
  );
};

export default CompanyForm;
