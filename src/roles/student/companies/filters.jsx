import React, { useState } from "react";

const StudentsFilters = () => {
  const [filters, setFilters] = useState({
    jobType: "",
    workPlace: "",
    duration: "",
    stipend: "",
    postedTime: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-black">
        {/* Job Type Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Job Type
          </label>
          <select
            name="jobType"
            value={filters.jobType}
            onChange={handleFilterChange}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">All Types</option>
            <option value="internship">Internship</option>
            <option value="fulltime">Full Time</option>
            <option value="parttime">Part Time</option>
            <option value="contract">Contract</option>
          </select>
        </div>

        {/* Work Place Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Work Place
          </label>
          <select
            name="workPlace"
            value={filters.workPlace}
            onChange={handleFilterChange}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">All Locations</option>
            <option value="remote">Remote</option>
            <option value="onsite">On-site</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>

        {/* Duration Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Duration
          </label>
          <select
            name="duration"
            value={filters.duration}
            onChange={handleFilterChange}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Any Duration</option>
            <option value="1week">1 Week</option>
            <option value="1month">1 Month</option>
            <option value="3months">3 Months</option>
            <option value="6months">6 Months</option>
          </select>
        </div>

        {/* Stipend Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Min. Stipend
          </label>
          <select
            name="stipend"
            value={filters.stipend}
            onChange={handleFilterChange}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Any Amount</option>
            <option value="5000">₹5,000+</option>
            <option value="10000">₹10,000+</option>
            <option value="15000">₹15,000+</option>
            <option value="20000">₹20,000+</option>
          </select>
        </div>

        {/* Posted Time Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Posted Time
          </label>
          <select
            name="postedTime"
            value={filters.postedTime}
            onChange={handleFilterChange}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Any Time</option>
            <option value="1day">Last 24 Hours</option>
            <option value="3days">Last 3 Days</option>
            <option value="1week">Last Week</option>
            <option value="1month">Last Month</option>
          </select>
        </div>
      </div>

      {/* Reset Filters Button */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={() =>
            setFilters({
              jobType: "",
              workPlace: "",
              duration: "",
              stipend: "",
              postedTime: "",
            })
          }
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default StudentsFilters;
