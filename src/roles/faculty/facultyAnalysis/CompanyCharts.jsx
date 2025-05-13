import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { FaBuilding, FaMoneyBillWave, FaBriefcase, FaStar, FaFilter, FaEye, FaArrowsAltH, FaTrophy } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale, BarElement);

const CompanyCharts = () => {
  const [activeTab, setActiveTab] = useState('placement-count');
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [chartVisible, setChartVisible] = useState(true);

  // Company data with additional metadata
  const companyData = [
    { name: "Google", placed: 18, package: 40, color: "#6366f1", logo: "G", tier: "Tier 1", hq: "Mountain View, USA" },
    { name: "Microsoft", placed: 15, package: 38, color: "#818cf8", logo: "M", tier: "Tier 1", hq: "Redmond, USA" },
    { name: "Amazon", placed: 20, package: 36, color: "#f59e42", logo: "A", tier: "Tier 1", hq: "Seattle, USA" },
    { name: "Apple", placed: 12, package: 35, color: "#f87171", logo: "A", tier: "Tier 1", hq: "Cupertino, USA" },
    { name: "Meta", placed: 10, package: 34, color: "#3b82f6", logo: "M", tier: "Tier 1", hq: "Menlo Park, USA" },
    { name: "IBM", placed: 8, package: 22, color: "#2563eb", logo: "I", tier: "Tier 2", hq: "Armonk, USA" },
    { name: "Infosys", placed: 25, package: 12, color: "#0ea5e9", logo: "I", tier: "Tier 2", hq: "Bangalore, India" },
    { name: "TCS", placed: 20, package: 10, color: "#14b8a6", logo: "T", tier: "Tier 2", hq: "Mumbai, India" },
    { name: "Wipro", placed: 15, package: 9, color: "#22d3ee", logo: "W", tier: "Tier 2", hq: "Bangalore, India" },
    { name: "Goldman Sachs", placed: 6, package: 32, color: "#a3e635", logo: "GS", tier: "Tier 1", hq: "New York, USA" },
    { name: "Morgan Stanley", placed: 5, package: 30, color: "#34d399", logo: "MS", tier: "Tier 1", hq: "New York, USA" },
    { name: "Uber", placed: 7, package: 28, color: "#fbbf24", logo: "U", tier: "Tier 1", hq: "San Francisco, USA" },
    { name: "Netflix", placed: 4, package: 27, color: "#fb7185", logo: "N", tier: "Tier 1", hq: "Los Gatos, USA" },
    { name: "Adobe", placed: 9, package: 25, color: "#f43f5e", logo: "A", tier: "Tier 1", hq: "San Jose, USA" },
  ];

  // Animation to reset chart visibility
  const resetChartVisibility = () => {
    setChartVisible(false);
    setTimeout(() => setChartVisible(true), 50);
  };

  // Switch tabs with animation
  const handleTabChange = (tab) => {
    resetChartVisibility();
    setActiveTab(tab);
    setSelectedCompany(null);
  };

  // Handle company selection from charts
  const handleCompanySelect = (companyName) => {
    setSelectedCompany(selectedCompany === companyName ? null : companyName);
  };

  // Company-wise Placement Count data
  const companyPlacementData = {
    labels: companyData.slice(0, 10).map(c => c.name),
    datasets: [
      {
        label: "Students Placed",
        data: companyData.slice(0, 10).map(c => c.placed),
        backgroundColor: companyData.slice(0, 10).map(c => c.color),
        borderWidth: 1,
        borderRadius: 4,
        hoverOffset: 10,
      },
    ],
  };

  // Top Companies by Package data
  const topCompaniesByPackageData = {
    labels: companyData.sort((a, b) => b.package - a.package).slice(0, 10).map(c => c.name),
    datasets: [
      {
        label: "CTC (Lakhs per annum)",
        data: companyData.sort((a, b) => b.package - a.package).slice(0, 10).map(c => c.package),
        backgroundColor: companyData.sort((a, b) => b.package - a.package).slice(0, 10).map(c => c.color),
        borderWidth: 0,
        borderRadius: 4,
        barThickness: 12,
      },
    ],
  };

  // On-campus vs Off-campus data
  const campusVsOffcampusData = {
    labels: ["On-campus", "Off-campus"],
    datasets: [
      {
        label: "Placement Count",
        data: [135, 38],
        backgroundColor: ["#6366f1", "#f87171"],
        borderColor: ["#4f46e5", "#ef4444"],
        borderWidth: 2,
        hoverOffset: 15,
      },
    ],
  };

  // Company by Tier data
  const companyTierData = {
    labels: ["Tier 1", "Tier 2", "Tier 3"],
    datasets: [
      {
        label: "Companies",
        data: [10, 4, 0],
        backgroundColor: ["#6366f1", "#22d3ee", "#34d399"],
        borderWidth: 0,
        hoverOffset: 15,
      },
    ],
  };

  // Options for horizontal bar chart (packages)
  const horizontalBarOptions = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(17, 24, 39, 0.8)",
        padding: 12,
        bodyFont: { size: 13 },
        titleFont: { size: 14, weight: "bold" },
        callbacks: {
          label: (context) => {
            return `₹ ${context.raw} LPA`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { color: "rgba(243, 244, 246, 0.6)" },
        ticks: { font: { weight: "bold" } },
      },
      y: {
        grid: { display: false },
      },
    },
    onClick: (_, elements) => {
      if (elements && elements.length > 0) {
        const index = elements[0].index;
        const sortedCompanies = companyData.sort((a, b) => b.package - a.package).slice(0, 10);
        handleCompanySelect(sortedCompanies[index].name);
      }
    },
  };

  // Options for vertical bar chart (placement count)
  const verticalBarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(17, 24, 39, 0.8)",
        padding: 12,
        bodyFont: { size: 13 },
        titleFont: { size: 14, weight: "bold" },
      },
    },
    scales: {
      y: {
        grid: { color: "rgba(243, 244, 246, 0.6)" },
        beginAtZero: true,
        ticks: { font: { weight: "bold" } },
      },
      x: {
        grid: { display: false },
        ticks: { font: { weight: "bold" } },
      },
    },
    onClick: (_, elements) => {
      if (elements && elements.length > 0) {
        const index = elements[0].index;
        handleCompanySelect(companyData.slice(0, 10)[index].name);
      }
    },
  };

  // Options for pie chart
  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 15,
          usePointStyle: true,
          font: { weight: "bold", size: 12 },
        },
      },
      tooltip: {
        backgroundColor: "rgba(17, 24, 39, 0.8)",
        padding: 12,
        bodyFont: { size: 13 },
        titleFont: { size: 14, weight: "bold" },
        callbacks: {
          label: (context) => {
            return `${context.label}: ${context.raw} students (${((context.raw / (135 + 38)) * 100).toFixed(1)}%)`;
          },
        },
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 2000,
    },
  };

  return (
    <motion.div 
      className="space-y-8"
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        }
      }}
      initial="hidden"
      animate="visible"
    >
      {/* Main Analytics Dashboard */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg p-6"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        whileHover={{
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <motion.div 
              whileHover={{ scale: 1.2, rotate: 15 }}
              transition={{ type: "spring", stiffness: 500 }}
              className="mr-3"
            >
              <FaBuilding className="text-indigo-500 text-2xl" />
            </motion.div>
            <h2 className="text-xl font-bold text-gray-800">Company Analytics</h2>
          </div>
          
          {selectedCompany && (
            <motion.button
              className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1"
              onClick={() => setSelectedCompany(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowsAltH className="text-xs" /> View All Companies
            </motion.button>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
          <motion.button
            className={`pb-2 mr-6 text-sm font-medium transition-colors ${activeTab === 'placement-count' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-800'}`}
            onClick={() => handleTabChange('placement-count')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center">
              <FaUserGraduate className="mr-2" /> Placement Count
            </span>
          </motion.button>
          
          <motion.button
            className={`pb-2 mr-6 text-sm font-medium transition-colors ${activeTab === 'packages' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-800'}`}
            onClick={() => handleTabChange('packages')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center">
              <FaMoneyBillWave className="mr-2" /> Package Analysis
            </span>
          </motion.button>
          
          <motion.button
            className={`pb-2 mr-6 text-sm font-medium transition-colors ${activeTab === 'placement-stats' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-800'}`}
            onClick={() => handleTabChange('placement-stats')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center">
              <FaChartPie className="mr-2" /> Placement Stats
            </span>
          </motion.button>
        </div>

        {/* Dynamic Content based on selected Company and Tab */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className={`${selectedCompany ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
            <AnimatePresence mode="wait">
              {chartVisible && (
                <motion.div
                  className="h-80"
                  key={activeTab}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === 'placement-count' && (
                    <Bar data={companyPlacementData} options={verticalBarOptions} />
                  )}
                  
                  {activeTab === 'packages' && (
                    <Bar data={topCompaniesByPackageData} options={horizontalBarOptions} />
                  )}
                  
                  {activeTab === 'placement-stats' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 mb-3 text-center">Placement Source</h3>
                        <div className="h-64">
                          <Pie data={campusVsOffcampusData} options={pieOptions} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 mb-3 text-center">Company Tiers</h3>
                        <div className="h-64">
                          <Pie data={companyTierData} options={pieOptions} />
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Company Details Panel */}
          {selectedCompany && (
            <motion.div
              className="lg:col-span-1 bg-gray-50 rounded-xl p-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {(() => {
                const company = companyData.find(c => c.name === selectedCompany);
                return (
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-16 h-16 rounded-full mb-3 flex items-center justify-center text-white text-xl font-bold"
                      style={{ backgroundColor: company.color }}
                    >
                      {company.logo}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1">{company.name}</h3>
                    <div className="mb-4">
                      <span 
                        className="text-xs px-2 py-1 rounded-full font-medium"
                        style={{ backgroundColor: `${company.color}20`, color: company.color }}
                      >
                        {company.tier}
                      </span>
                    </div>
                    
                    <div className="text-sm text-gray-500 mb-4">{company.hq}</div>
                    
                    <div className="grid grid-cols-2 gap-4 w-full mb-4">
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold">{company.placed}</div>
                        <div className="text-xs text-gray-500">Students Placed</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold">₹ {company.package}L</div>
                        <div className="text-xs text-gray-500">Avg. Package</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <FaTrophy className="text-yellow-500 mr-2" />
                      <span>
                        {company.package > 30 ? 'Premium Package Offered' : 
                         company.package > 20 ? 'Competitive Package' : 'Standard Package'}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <FaStar className="text-indigo-500 mr-2" />
                      <span>
                        {company.placed > 20 ? 'Top Recruiter' : 
                         company.placed > 10 ? 'Major Recruiter' : 'Regular Recruiter'}
                      </span>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </div>

        {/* Stats Cards Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <motion.div 
            className="bg-indigo-50 p-4 rounded-lg"
            whileHover={{ y: -5, backgroundColor: "#eef2ff" }}
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Total Companies</div>
                <div className="text-2xl font-bold text-indigo-600">{companyData.length}</div>
              </div>
              <div className="bg-indigo-100 p-2 rounded-full">
                <FaBuilding className="text-indigo-500" />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-cyan-50 p-4 rounded-lg"
            whileHover={{ y: -5, backgroundColor: "#ecfeff" }}
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Students Placed</div>
                <div className="text-2xl font-bold text-cyan-600">{companyData.reduce((acc, curr) => acc + curr.placed, 0)}</div>
              </div>
              <div className="bg-cyan-100 p-2 rounded-full">
                <FaUserGraduate className="text-cyan-500" />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-emerald-50 p-4 rounded-lg"
            whileHover={{ y: -5, backgroundColor: "#ecfdf5" }}
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Avg. Package</div>
                <div className="text-2xl font-bold text-emerald-600">₹ {Math.round(companyData.reduce((acc, curr) => acc + curr.package, 0) / companyData.length)}L</div>
              </div>
              <div className="bg-emerald-100 p-2 rounded-full">
                <FaMoneyBillWave className="text-emerald-500" />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-amber-50 p-4 rounded-lg"
            whileHover={{ y: -5, backgroundColor: "#fffbeb" }}
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Top Package</div>
                <div className="text-2xl font-bold text-amber-600">₹ {Math.max(...companyData.map(c => c.package))}L</div>
              </div>
              <div className="bg-amber-100 p-2 rounded-full">
                <FaTrophy className="text-amber-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CompanyCharts;
