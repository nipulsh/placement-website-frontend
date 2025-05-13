import React, { useState } from "react";
import {
  FaBuilding,
  FaUpload,
  FaFilter,
  FaSearch,
  FaPlus,
  FaChartBar,
  FaUsers,
  FaCalendarAlt,
  FaFileExcel,
} from "react-icons/fa";
import CompanyStatistics from "./CompanyStatistics";
import CompanyForm from "./CompanyForm";
import CompanyTable from "./CompanyTable";

const FacultyCompany = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showStats, setShowStats] = useState(false);

  // Sample company data
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "Google",
      year: 2024,
      startDate: "2024-01-15",
      endDate: "2024-06-30",
      active: true,
      roles: ["Software Engineer", "Product Manager", "UX Designer"],
      minCGPA: 8.0,
      internshipOffered: true,
      fullTimeOffered: true,
      applications: 85,
      shortlisted: 25,
      finalSelections: 4,
      eligibleDepartments: ["CS", "EC", "EE"],
      packageRange: "40-50 LPA",
      jobLocations: ["Bangalore", "Hyderabad"],
      workMode: "Hybrid",
      status: "Active",
    },
    {
      id: 2,
      name: "Microsoft",
      year: 2024,
      startDate: "2024-02-01",
      endDate: "2024-07-15",
      active: true,
      roles: ["Software Engineer", "Data Scientist"],
      minCGPA: 7.5,
      internshipOffered: true,
      fullTimeOffered: true,
      applications: 75,
      shortlisted: 20,
      finalSelections: 3,
      eligibleDepartments: ["CS", "EC", "EE", "ME"],
      packageRange: "35-45 LPA",
      jobLocations: ["Bangalore", "Hyderabad", "Noida"],
      workMode: "Hybrid",
      status: "Active",
    },
    {
      id: 3,
      name: "Amazon",
      year: 2024,
      startDate: "2024-02-15",
      endDate: "2024-08-01",
      active: true,
      roles: ["SDE", "Business Analyst", "Operations"],
      minCGPA: 7.5,
      internshipOffered: true,
      fullTimeOffered: true,
      applications: 90,
      shortlisted: 30,
      finalSelections: 6,
      eligibleDepartments: ["CS", "EC", "ME", "IE"],
      packageRange: "30-40 LPA",
      jobLocations: ["Bangalore", "Chennai", "Hyderabad"],
      workMode: "In-office",
      status: "Active",
    },
    {
      id: 4,
      name: "IBM",
      year: 2024,
      startDate: "2024-03-01",
      endDate: "2024-09-01",
      active: true,
      roles: ["Associate Developer", "Consultant", "Research Engineer"],
      minCGPA: 7.0,
      internshipOffered: true,
      fullTimeOffered: true,
      applications: 60,
      shortlisted: 15,
      finalSelections: 5,
      eligibleDepartments: ["CS", "EC", "EE", "ME"],
      packageRange: "8-15 LPA",
      jobLocations: ["Bangalore", "Pune", "Delhi"],
      workMode: "Hybrid",
      status: "Active",
    },
    {
      id: 5,
      name: "Infosys",
      year: 2024,
      startDate: "2024-03-15",
      endDate: "2024-10-01",
      active: true,
      roles: ["Systems Engineer", "Business Analyst"],
      minCGPA: 6.5,
      internshipOffered: true,
      fullTimeOffered: true,
      applications: 120,
      shortlisted: 60,
      finalSelections: 30,
      eligibleDepartments: ["All Engineering"],
      packageRange: "7-10 LPA",
      jobLocations: ["Bangalore", "Pune", "Chennai", "Hyderabad", "Mysore"],
      workMode: "Hybrid",
      status: "Active",
    },
    {
      id: 6,
      name: "TCS",
      year: 2024,
      startDate: "2024-04-01",
      endDate: "2024-10-15",
      active: true,
      roles: ["Assistant System Engineer", "Digital Specialist"],
      minCGPA: 6.0,
      internshipOffered: false,
      fullTimeOffered: true,
      applications: 150,
      shortlisted: 80,
      finalSelections: 40,
      eligibleDepartments: ["All Engineering", "MCA"],
      packageRange: "6-8 LPA",
      jobLocations: ["Pan-India"],
      workMode: "In-office",
      status: "Active",
    },
    {
      id: 7,
      name: "Deloitte",
      year: 2023,
      startDate: "2023-02-15",
      endDate: "2023-08-01",
      active: false,
      roles: ["Analyst", "Consultant"],
      minCGPA: 7.0,
      internshipOffered: true,
      fullTimeOffered: true,
      applications: 80,
      shortlisted: 25,
      finalSelections: 10,
      eligibleDepartments: ["CS", "EC", "Business"],
      packageRange: "10-15 LPA",
      jobLocations: ["Bangalore", "Hyderabad", "Mumbai"],
      workMode: "Hybrid",
      status: "Completed",
    },
    {
      id: 8,
      name: "Accenture",
      year: 2023,
      startDate: "2023-03-01",
      endDate: "2023-09-01",
      active: false,
      roles: ["Associate Software Engineer", "Technical Architect"],
      minCGPA: 6.5,
      internshipOffered: false,
      fullTimeOffered: true,
      applications: 100,
      shortlisted: 40,
      finalSelections: 15,
      eligibleDepartments: ["All Engineering"],
      packageRange: "7-12 LPA",
      jobLocations: ["Bangalore", "Mumbai", "Chennai"],
      workMode: "Hybrid",
      status: "Completed",
    },
    {
      id: 9,
      name: "Oracle",
      year: 2023,
      startDate: "2023-04-15",
      endDate: "2023-08-15",
      active: false,
      roles: ["Software Developer", "Cloud Engineer"],
      minCGPA: 7.5,
      internshipOffered: true,
      fullTimeOffered: true,
      applications: 70,
      shortlisted: 20,
      finalSelections: 8,
      eligibleDepartments: ["CS", "EC"],
      packageRange: "15-25 LPA",
      jobLocations: ["Bangalore", "Hyderabad"],
      workMode: "In-office",
      status: "Completed",
    },
    {
      id: 10,
      name: "Sony",
      year: 2023,
      startDate: "2023-03-10",
      endDate: "2023-07-30",
      active: false,
      roles: ["Software Engineer", "Hardware Engineer"],
      minCGPA: 7.0,
      internshipOffered: true,
      fullTimeOffered: true,
      applications: 50,
      shortlisted: 15,
      finalSelections: 5,
      eligibleDepartments: ["CS", "EC", "EE"],
      packageRange: "12-18 LPA",
      jobLocations: ["Bangalore"],
      workMode: "Hybrid",
      status: "Completed",
    },
  ]);

  // Available years for the filter
  const years = [2024, 2023, 2022, 2021, 2020];

  // Filter companies based on year and search term
  const filteredCompanies = companies.filter(
    (company) =>
      company.year === selectedYear &&
      (searchTerm === "" ||
        company.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Handle company form submission
  const handleCompanySubmit = (companyData) => {
    if (selectedCompany) {
      // Update existing company
      setCompanies(
        companies.map((company) =>
          company.id === selectedCompany.id
            ? { ...company, ...companyData }
            : company
        )
      );
    } else {
      // Add new company
      const newCompany = {
        id: companies.length + 1,
        ...companyData,
        year: selectedYear,
        active: true,
        status: "Active",
      };
      setCompanies([...companies, newCompany]);
    }
    setShowAddForm(false);
    setSelectedCompany(null);
  };

  // Handle editing a company
  const handleEditCompany = (company) => {
    setSelectedCompany(company);
    setShowAddForm(true);
    setShowStats(false);
  };

  // Handle viewing company statistics
  const handleViewStats = (company) => {
    setSelectedCompany(company);
    setShowStats(true);
    setShowAddForm(false);
  };

  // Export company data
  const handleExportData = () => {
    // In a real app, this would generate and download an Excel file
    console.log(`Exporting company data for ${selectedYear}`);
    alert(`Company data for ${selectedYear} exported successfully!`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Faculty Company Management
        </h1>
        <div className="flex gap-3">
          <button
            onClick={() => {
              setActiveTab("dashboard");
              setShowAddForm(false);
              setShowStats(false);
            }}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              activeTab === "dashboard"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <FaChartBar /> Dashboard
          </button>
          <button
            onClick={() => {
              setActiveTab("upload");
              setSelectedCompany(null);
              setShowAddForm(true);
              setShowStats(false);
            }}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              activeTab === "upload"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <FaUpload /> Add Company
          </button>
        </div>
      </div>

      {/* Year Filter and Search */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center">
            <FaCalendarAlt className="text-indigo-500 mr-2 text-xl" />
            <h2 className="text-xl font-semibold mr-4 text-gray-800">
              Filter by Year
            </h2>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5"
              />
            </div>

            <button
              onClick={handleExportData}
              className="ml-3 bg-green-600 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 hover:bg-green-700"
            >
              <FaFileExcel /> Export
            </button>
          </div>
        </div>
      </div>

      {/* Company Form */}
      {showAddForm && (
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <FaBuilding className="text-indigo-500 mr-2 text-xl" />
            <h2 className="text-xl font-semibold">
              {selectedCompany ? "Edit Company" : "Add New Company"}
            </h2>
          </div>
          <CompanyForm
            company={selectedCompany}
            onSubmit={handleCompanySubmit}
            onCancel={() => {
              setShowAddForm(false);
              setSelectedCompany(null);
            }}
          />
        </div>
      )}

      {/* Company Statistics */}
      {showStats && selectedCompany && (
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <FaChartBar className="text-indigo-500 mr-2 text-xl" />
              <h2 className="text-xl font-semibold">
                {selectedCompany.name} - Statistics
              </h2>
            </div>
            <button
              onClick={() => setShowStats(false)}
              className="text-indigo-600 hover:underline"
            >
              Back to List
            </button>
          </div>
          <CompanyStatistics company={selectedCompany} />
        </div>
      )}

      {/* Company List */}
      {!showAddForm && !showStats && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Companies for {selectedYear}
            </h2>
            <button
              onClick={() => {
                setSelectedCompany(null);
                setShowAddForm(true);
                setActiveTab("upload");
              }}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-700"
            >
              <FaPlus /> Add Company
            </button>
          </div>

          <CompanyTable
            companies={filteredCompanies}
            onEdit={handleEditCompany}
            onViewStats={handleViewStats}
          />

          {/* Summary Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Total Companies
              </h3>
              <p className="text-3xl font-bold text-indigo-600">
                {filteredCompanies.length}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Total Selections
              </h3>
              <p className="text-3xl font-bold text-green-600">
                {filteredCompanies.reduce(
                  (sum, company) => sum + company.finalSelections,
                  0
                )}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Selection Rate
              </h3>
              <p className="text-3xl font-bold text-blue-600">
                {Math.round(
                  (filteredCompanies.reduce(
                    (sum, company) => sum + company.finalSelections,
                    0
                  ) /
                    filteredCompanies.reduce(
                      (sum, company) => sum + company.applications,
                      0
                    )) *
                    100
                )}
                %
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FacultyCompany;
