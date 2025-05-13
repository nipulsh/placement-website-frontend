import React from "react";
import { FaFilter, FaRedo, FaChevronDown, FaCheckCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FilterSection = ({ filters, onFilterChange, onSkillsChange, onResetFilters }) => {
  // Mock data for dropdowns
  const years = ["All", "2020", "2021", "2022", "2023", "2024"];
  const departments = [
    "All",
    "Computer Science",
    "Electronics",
    "Mechanical",
    "Civil",
    "Chemical",
    "Electrical",
  ];
  const statuses = ["All", "Placed", "Not Placed", "In Process"];
  const offerTypes = ["All", "On-campus", "Off-campus"];
  const employmentTypes = ["All", "Internship", "Full-Time"];
  const genders = ["All", "Male", "Female", "Other"];
  const companies = [
    "All",
    "Google",
    "Microsoft",
    "Amazon",
    "Apple",
    "Meta",
    "Tesla",
    "IBM",
  ];
  const skillsList = [
    "Python",
    "Java",
    "JavaScript",
    "React",
    "Angular",
    "Node.js",
    "C++",
    "Machine Learning",
    "Data Science",
    "Cloud Computing",
    "DevOps",
    "Blockchain",
  ];

  return (
    <motion.div
      className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl shadow-xl p-8 mb-10 border border-indigo-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 12 }}
            transition={{ type: 'spring', stiffness: 400 }}
            className="bg-indigo-100 p-2 rounded-full shadow"
          >
            <FaFilter className="text-indigo-600 text-2xl" />
          </motion.div>
          <h2 className="text-2xl font-bold text-indigo-800 tracking-tight">Filters</h2>
        </div>
        <motion.button
          whileHover={{ scale: 1.08, backgroundColor: '#e0e7ff' }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-indigo-200 text-indigo-700 font-semibold shadow hover:bg-indigo-50 transition"
          onClick={onResetFilters}
          aria-label="Reset Filters"
        >
          <FaRedo className="text-indigo-500" />
          Reset
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Year of Graduation */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Year of Graduation
          </label>
          <div className="relative">
            <select
              name="graduationYear"
              value={filters.graduationYear}
              onChange={onFilterChange}
              className="w-full text-indigo-900 rounded-lg border border-indigo-200 px-4 py-2 pr-10 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            >
              {years.map((year) => (
                <option key={year} value={year} className="text-indigo-900">
                  {year}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 pointer-events-none" />
          </div>
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Department
          </label>
          <div className="relative">
            <select
              name="department"
              value={filters.department}
              onChange={onFilterChange}
              className="w-full text-indigo-900 rounded-lg border border-indigo-200 px-4 py-2 pr-10 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept} className="text-indigo-900">
                  {dept}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 pointer-events-none" />
          </div>
        </div>

        {/* CGPA Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CGPA Range
          </label>
          <div className="flex items-center gap-2">
            <motion.input
              type="number"
              name="cgpaMin"
              min="0"
              max="10"
              step="0.1"
              value={filters.cgpaMin}
              onChange={onFilterChange}
              className="w-full text-indigo-900 rounded-lg border border-indigo-200 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Min"
              maxLength={2}
              whileFocus={{ scale: 1.04, borderColor: '#6366f1' }}
            />
            <span className="text-indigo-800 font-bold">-</span>
            <motion.input
              type="number"
              maxLength={2}
              name="cgpaMax"
              min="0"
              max="10"
              step="0.1"
              value={filters.cgpaMax}
              onChange={onFilterChange}
              className="w-full text-indigo-900 rounded-lg border border-indigo-200 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Max"
              whileFocus={{ scale: 1.04, borderColor: '#6366f1' }}
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company
          </label>
          <select
            name="company"
            value={filters.company}
            onChange={onFilterChange}
            className="w-full text-gray-800 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {companies.map((company) => (
              <option key={company} value={company} className="text-gray-800">
                {company}
              </option>
            ))}
          </select>
        </div>

        {/* Placement Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Placement Status
          </label>
          <select
            name="placementStatus"
            value={filters.placementStatus}
            onChange={onFilterChange}
            className="w-full text-gray-800 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {statuses.map((status) => (
              <option key={status} value={status} className="text-gray-800">
                {status}
              </option>
            ))}
          </select>
        </div>

        {/* Offer Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Offer Type
          </label>
          <div className="relative">
            <select
              name="offerType"
              value={filters.offerType}
              onChange={onFilterChange}
              className="w-full text-indigo-900 rounded-lg border border-indigo-200 px-4 py-2 pr-10 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            >
              {offerTypes.map((type) => (
                <option key={type} value={type} className="text-indigo-900">
                  {type}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 pointer-events-none" />
          </div>
        </div>

        {/* Package Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Package Range (₹)
          </label>
          <div className="flex items-center gap-2">
            <motion.input
              type="number"
              name="packageMin"
              min="0"
              value={filters.packageMin}
              onChange={onFilterChange}
              className="w-full text-indigo-900 rounded-lg border border-indigo-200 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Min"
              whileFocus={{ scale: 1.04, borderColor: '#6366f1' }}
            />
            <span className="text-indigo-800 font-bold">-</span>
            <motion.input
              type="number"
              name="packageMax"
              min="0"
              value={filters.packageMax}
              onChange={onFilterChange}
              className="w-full text-indigo-900 rounded-lg border border-indigo-200 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Max"
              whileFocus={{ scale: 1.04, borderColor: '#6366f1' }}
            />
          </div>
        </div>

        {/* Employment Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Employment Type
          </label>
          <div className="relative">
            <select
              name="employmentType"
              value={filters.employmentType}
              onChange={onFilterChange}
              className="w-full text-indigo-900 rounded-lg border border-indigo-200 px-4 py-2 pr-10 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            >
              {employmentTypes.map((type) => (
                <option key={type} value={type} className="text-indigo-900">
                  {type}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 pointer-events-none" />
          </div>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gender
          </label>
          <div className="relative">
            <select
              name="gender"
              value={filters.gender}
              onChange={onFilterChange}
              className="w-full text-indigo-900 rounded-lg border border-indigo-200 px-4 py-2 pr-10 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            >
              {genders.map((gender) => (
                <option key={gender} value={gender} className="text-indigo-900">
                  {gender}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 pointer-events-none" />
          </div>
        </div>

        {/* Skills - Multiselect */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Skills
          </label>
          <div className="flex flex-wrap gap-2">
            {skillsList.map((skill) => {
              const checked = filters.skills.includes(skill);
              return (
                <motion.div
                  key={skill}
                  className={`flex text-black items-center px-2 py-1 rounded-lg cursor-pointer border transition ${checked ? 'bg-indigo-100 border-indigo-400 shadow' : 'bg-white border-indigo-100 hover:bg-indigo-50'}`}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    const newSkills = checked
                      ? filters.skills.filter((s) => s !== skill)
                      : [...filters.skills, skill];
                    onSkillsChange(newSkills);
                  }}
                >
                  <input
                    type="checkbox"
                    id={`skill-${skill}`}
                    checked={checked}
                    readOnly
                    className="mr-1 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor={`skill-${skill}`} className="text-sm mr-2 select-none flex items-center gap-1">
                    {skill}
                    {checked && <FaCheckCircle className="text-indigo-500 text-xs" />}
                  </label>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FilterSection;
