import React, { useState } from "react";
import { Pie, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import {
  FaUserGraduate,
  FaBuilding,
  FaChartPie,
  FaMoneyBillWave,
  FaUserFriends,
  FaDownload,
  FaTrophy,
  FaVenusMars,
  FaBriefcase,
  FaHistory,
} from "react-icons/fa";
import { exportDashboardData } from "./exportData";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const years = [2022, 2023, 2024];
const domains = [
  "Cyber Security",
  "AI",
  "Web Dev",
  "Data Science",
  "IoT",
  "Blockchain",
];
const companies = ["Google", "Amazon", "Microsoft", "Tesla", "Apple", "Meta"];

const stats = [
  {
    label: "Students Applied",
    value: 150,
    icon: <FaUserGraduate className="text-indigo-500 text-2xl" />,
  },
  {
    label: "Students Selected",
    value: 100,
    icon: <FaTrophy className="text-emerald-500 text-2xl" />,
  },
  {
    label: "Students Accepted",
    value: 90,
    icon: <FaUserFriends className="text-cyan-500 text-2xl" />,
  },
  {
    label: "Accepted but Not Taken",
    value: 10,
    icon: <FaBriefcase className="text-yellow-500 text-2xl" />,
  },
  {
    label: "Companies Visited",
    value: 25,
    icon: <FaBuilding className="text-pink-500 text-2xl" />,
  },
  {
    label: "Avg. Internship Stipend",
    value: "₹ 15,000",
    icon: <FaMoneyBillWave className="text-green-500 text-2xl" />,
  },
];

const placementRate = 60; // percent
const stipendStats = { highest: 40000, lowest: 5000, median: 15000 };
const topCompanies = [
  { name: "Google", offers: 12 },
  { name: "Amazon", offers: 10 },
  { name: "Microsoft", offers: 8 },
  { name: "Tesla", offers: 7 },
  { name: "Apple", offers: 6 },
];
const genderData = {
  labels: ["Male", "Female", "Other"],
  datasets: [
    {
      data: [60, 38, 2],
      backgroundColor: ["#6366f1", "#f472b6", "#fbbf24"],
    },
  ],
};
const offerSplitData = {
  labels: ["Internship", "Job"],
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ["#22d3ee", "#a3e635"],
    },
  ],
};
const appliedVsSelectedData = {
  labels: ["Applied", "Selected", "Accepted", "Accepted but Not Taken"],
  datasets: [
    {
      label: "Students",
      data: [150, 100, 90, 10],
      backgroundColor: ["#6366f1", "#22d3ee", "#34d399", "#fbbf24"],
    },
  ],
};
const companiesVisitedData = {
  labels: companies,
  datasets: [
    {
      label: "Companies Visited",
      data: [10, 8, 7, 6, 5, 4],
      backgroundColor: [
        "#6366f1",
        "#f59e42",
        "#f87171",
        "#a3e635",
        "#22d3ee",
        "#fbbf24",
      ],
    },
  ],
};
const domainsData = {
  labels: domains,
  datasets: [
    {
      label: "Students per Domain",
      data: [40, 30, 25, 20, 15, 10],
      backgroundColor: [
        "#6366f1",
        "#f59e42",
        "#f87171",
        "#a3e635",
        "#22d3ee",
        "#fbbf24",
      ],
    },
  ],
};
const avgStipendData = {
  labels: ["Avg. Stipend"],
  datasets: [
    {
      label: "Stipend",
      data: [15000],
      backgroundColor: ["#6366f1"],
    },
  ],
};
const activities = [
  { time: "2h ago", text: "Google visited campus." },
  { time: "5h ago", text: "AI Workshop conducted." },
  { time: "1d ago", text: "Hackathon registration open." },
  { time: "2d ago", text: "Semester exams announced." },
];

const FacultyDashboard = () => {
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [selectedCompany, setSelectedCompany] = useState("All");

  // Simulate filtering logic for dummy data
  // In a real app, you would fetch or filter real data here
  function filterData() {
    // For demonstration, just filter/slice the dummy data
    // You can replace this logic with real filtering as needed
    let filteredStats = [...stats];
    let filteredTopCompanies = [...topCompanies];
    let filteredStipendStats = { ...stipendStats };
    let filteredDomainsData = { ...domainsData };
    let filteredActivities = [...activities];
    let filteredGenderData = { ...genderData };
    let filteredOfferSplitData = { ...offerSplitData };

    // Example: If a specific domain is selected, filter domain data and stats
    if (selectedDomain !== "All") {
      // Filter domainsData
      const idx = domainsData.labels.indexOf(selectedDomain);
      filteredDomainsData = {
        labels: [selectedDomain],
        datasets: [
          {
            ...domainsData.datasets[0],
            data: [domainsData.datasets[0].data[idx]],
          },
        ],
      };
      // Filter stats (simulate)
      filteredStats = filteredStats.map((s) =>
        s.label === "Students Applied"
          ? { ...s, value: domainsData.datasets[0].data[idx] }
          : s
      );
    }

    // Example: If a specific company is selected, filter topCompanies and companiesVisitedData
    if (selectedCompany !== "All") {
      filteredTopCompanies = topCompanies.filter(
        (c) => c.name === selectedCompany
      );
      // Simulate stats update
      filteredStats = filteredStats.map((s) =>
        s.label === "Companies Visited"
          ? { ...s, value: filteredTopCompanies.length > 0 ? 1 : 0 }
          : s
      );
    }

    // Example: If a specific year is selected, simulate different data (here, just slice or adjust values)
    if (selectedYear !== years[0]) {
      // For demo, reduce all values by 10% per year away from 2022
      const yearDiff = selectedYear - years[0];
      filteredStats = filteredStats.map((s) =>
        typeof s.value === "number"
          ? { ...s, value: Math.round(s.value * Math.pow(0.9, yearDiff)) }
          : s
      );
      filteredTopCompanies = filteredTopCompanies.map((c) => ({
        ...c,
        offers: Math.round(c.offers * Math.pow(0.9, yearDiff)),
      }));
      filteredStipendStats = {
        highest: Math.round(stipendStats.highest * Math.pow(0.9, yearDiff)),
        median: Math.round(stipendStats.median * Math.pow(0.9, yearDiff)),
        lowest: Math.round(stipendStats.lowest * Math.pow(0.9, yearDiff)),
      };
      filteredDomainsData = {
        ...filteredDomainsData,
        datasets: [
          {
            ...filteredDomainsData.datasets[0],
            data: filteredDomainsData.datasets[0].data.map((v) =>
              Math.round(v * Math.pow(0.9, yearDiff))
            ),
          },
        ],
      };
    }

    return {
      filteredStats,
      filteredTopCompanies,
      filteredStipendStats,
      filteredDomainsData,
      filteredActivities,
      filteredGenderData,
      filteredOfferSplitData,
    };
  }

  const {
    filteredStats,
    filteredTopCompanies,
    filteredStipendStats,
    filteredDomainsData,
    filteredActivities,
    filteredGenderData,
    filteredOfferSplitData,
  } = filterData();

  return (
    <div className="bg-white pt-10 ">
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 pb-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between px-6 pt-8 pb-4">
          <div>
            <h1 className="text-3xl font-bold text-indigo-700 flex items-center gap-2">
              <FaChartPie className="text-indigo-500 text-4xl" /> Faculty
              Dashboard
            </h1>
            <p className="text-slate-500 mt-2">
              Welcome back! Here's an overview of student placement progress and
              campus activity.
            </p>
          </div>
          <button
            className="mt-4 md:mt-0 flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
            onClick={() =>
              exportDashboardData({
                stats: filteredStats,
                topCompanies: filteredTopCompanies,
                stipendStats: filteredStipendStats,
                domainsData: filteredDomainsData,
                activities: filteredActivities,
                genderData: filteredGenderData,
                offerSplitData: filteredOfferSplitData,
              })
            }
          >
            <FaDownload /> Export Data
          </button>
        </div>
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6 px-6 text-black">
          <div>
            <label className="block text-xs text-slate-500 mb-1">Year</label>
            <select
              className="border rounded px-2 py-1 focus:ring-2 focus:ring-indigo-300"
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1">Domain</label>
            <select
              className="border rounded px-2 py-1 focus:ring-2 focus:ring-indigo-300"
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
            >
              <option value="All">All</option>
              {domains.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1">Company</label>
            <select
              className="border rounded px-2 py-1 focus:ring-2 focus:ring-indigo-300"
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
            >
              <option value="All">All</option>
              {companies.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-xs text-slate-500">Placement Rate</span>
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold text-sm">
              {placementRate}%
            </span>
          </div>
        </div>
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6 px-6">
          {filteredStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center hover:shadow-xl transition group"
            >
              <div className="mb-2 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-xs font-semibold text-slate-500 mb-1">
                {stat.label}
              </div>
              <div className="text-xl font-bold text-indigo-700 group-hover:text-indigo-500 transition-colors">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
        {/* Graphs Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 px-6">
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <div className="w-full text-center font-semibold mb-2 flex items-center gap-2">
              <FaChartPie className="text-indigo-400" /> Applied vs Selected
            </div>
            <Bar
              data={appliedVsSelectedData}
              options={{
                responsive: true,
                plugins: { legend: { display: false } },
              }}
            />
            {/* Mobile value badges */}
            <div className="block md:hidden w-full mt-4 flex flex-wrap gap-2 justify-center">
              {appliedVsSelectedData.labels.map((label, idx) => (
                <div
                  key={label}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center gap-1"
                >
                  {label}:{" "}
                  <span className="ml-1">
                    {appliedVsSelectedData.datasets[0].data[idx]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <div className="w-full text-center font-semibold mb-2 flex items-center gap-2">
              <FaBuilding className="text-pink-400" /> Companies Visited
            </div>
            <Doughnut data={companiesVisitedData} />
            <div className="block md:hidden w-full mt-4 flex flex-wrap gap-2 justify-center">
              {companiesVisitedData.labels.map((label, idx) => (
                <div
                  key={label}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200 flex items-center gap-1"
                >
                  {label}:{" "}
                  <span className="ml-1">
                    {companiesVisitedData.datasets[0].data[idx]}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {filteredTopCompanies.map((c, i) => (
                <span
                  key={i}
                  className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
                >
                  <FaBuilding /> {c.name}{" "}
                  <span className="ml-1 text-slate-500">({c.offers})</span>
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <div className="w-full text-center font-semibold mb-2 flex items-center gap-2">
              <FaChartPie className="text-indigo-400" /> Domains Distribution
            </div>
            <Pie data={filteredDomainsData} />
            <div className="block md:hidden w-full mt-4 flex flex-wrap gap-2 justify-center">
              {filteredDomainsData.labels.map((label, idx) => (
                <div
                  key={label}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 text-cyan-700 border border-cyan-200 flex items-center gap-1"
                >
                  {label}:{" "}
                  <span className="ml-1">
                    {filteredDomainsData.datasets[0].data[idx]}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {domains.map((domain, idx) => (
                <span
                  key={idx}
                  className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* More Graphs Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 px-6">
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <div className="w-full text-center font-semibold mb-2 flex items-center gap-2">
              <FaMoneyBillWave className="text-green-400" /> Stipend Stats
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between items-center bg-emerald-50 rounded px-3 py-2">
                <span>Highest</span>
                <span className="font-bold text-emerald-700">
                  ₹ {filteredStipendStats.highest.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center bg-indigo-50 rounded px-3 py-2">
                <span>Median</span>
                <span className="font-bold text-indigo-700">
                  ₹ {filteredStipendStats.median.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center bg-pink-50 rounded px-3 py-2">
                <span>Lowest</span>
                <span className="font-bold text-pink-700">
                  ₹ {filteredStipendStats.lowest.toLocaleString()}
                </span>
              </div>
            </div>
            <div className="w-full mt-6">
              <Bar
                data={avgStipendData}
                options={{
                  responsive: true,
                  plugins: { legend: { display: false } },
                }}
              />
              <div className="block md:hidden w-full mt-4 flex flex-wrap gap-2 justify-center">
                {avgStipendData.labels.map((label, idx) => (
                  <div
                    key={label}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-200 flex items-center gap-1"
                  >
                    {label}:{" "}
                    <span className="ml-1">
                      ₹ {avgStipendData.datasets[0].data[idx].toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <div className="w-full text-center font-semibold mb-2 flex items-center gap-2">
              <FaVenusMars className="text-pink-400" /> Gender Distribution
            </div>
            <Doughnut data={filteredGenderData} />
            <div className="block md:hidden w-full mt-4 flex flex-wrap gap-2 justify-center">
              {filteredGenderData.labels.map((label, idx) => (
                <div
                  key={label}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200 flex items-center gap-1"
                >
                  {label}:{" "}
                  <span className="ml-1">
                    {filteredGenderData.datasets[0].data[idx]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <div className="w-full text-center font-semibold mb-2 flex items-center gap-2">
              <FaBriefcase className="text-yellow-400" /> Offer Split
            </div>
            <Pie data={filteredOfferSplitData} />
            <div className="block md:hidden w-full mt-4 flex flex-wrap gap-2 justify-center">
              {filteredOfferSplitData.labels.map((label, idx) => (
                <div
                  key={label}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-50 text-yellow-700 border border-yellow-200 flex items-center gap-1"
                >
                  {label}:{" "}
                  <span className="ml-1">
                    {filteredOfferSplitData.datasets[0].data[idx]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Recent Activities / Timeline */}
        <div className="bg-white rounded-2xl shadow p-6 mx-6">
          <div className="w-full text-center font-semibold mb-4 flex items-center gap-2 justify-center">
            <FaHistory className="text-indigo-400" /> Recent Activities
          </div>
          <ul className="divide-y divide-slate-100">
            {filteredActivities.map((a, idx) => (
              <li key={idx} className="flex justify-between items-center py-3">
                <span className="text-slate-700">{a.text}</span>
                <span className="text-xs text-slate-400">{a.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
