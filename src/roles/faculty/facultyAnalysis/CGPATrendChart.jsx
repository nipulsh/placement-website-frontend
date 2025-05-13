import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { FaChartLine, FaInfoCircle, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CGPATrendChart = () => {
  const [hoveredDept, setHoveredDept] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  
  // Mock data for CGPA trends
  const cgpaData = {
    labels: [
      "Semester 1",
      "Semester 2",
      "Semester 3",
      "Semester 4",
      "Semester 5",
      "Semester 6",
      "Semester 7",
      "Semester 8",
    ],
    datasets: [
      {
        label: "CS Department",
        data: [7.8, 8.1, 8.3, 8.5, 8.7, 8.9, 9.1, 9.2],
        borderColor: "#6366f1", // Indigo-500 from dashboard
        backgroundColor: "rgba(99, 102, 241, 0.1)",
        borderWidth: 3,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: "EC Department",
        data: [7.5, 7.7, 7.9, 8.1, 8.2, 8.3, 8.4, 8.5],
        borderColor: "#22d3ee", // Cyan-400 from dashboard
        backgroundColor: "rgba(34, 211, 238, 0.1)",
        borderWidth: 3,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: "ME Department",
        data: [7.2, 7.4, 7.5, 7.6, 7.8, 7.9, 8.0, 8.1],
        borderColor: "#34d399", // Emerald-400 from dashboard
        backgroundColor: "rgba(52, 211, 153, 0.1)",
        borderWidth: 3,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          font: {
            weight: 'bold',
          },
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: "rgba(17, 24, 39, 0.8)",
        titleFont: {
          size: 14,
          weight: "bold",
        },
        bodyFont: {
          size: 13,
        },
        padding: 12,
        cornerRadius: 8,
        caretSize: 6,
      },
      title: {
        display: true,
        text: "CGPA Progression by Department",
        font: {
          size: 16,
          weight: "bold",
        },
        padding: 20,
        color: "#374151", // Gray-700
      },
    },
    scales: {
      y: {
        min: 6,
        max: 10,
        title: {
          display: true,
          text: "CGPA",
          font: {
            weight: "bold",
          },
        },
        grid: {
          color: "rgba(209, 213, 219, 0.4)", // Gray-300 with opacity
        },
      },
      x: {
        title: {
          display: true,
          text: "Semester",
          font: {
            weight: "bold",
          },
        },
        grid: {
          display: false,
        },
      },
    },
    animation: {
      duration: 2000,
      easing: "easeInOutQuart",
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };

  const departments = [
    { name: "CS Department", color: "#6366f1", trend: "Consistently rising CGPA trend with excellent performance" },
    { name: "EC Department", color: "#22d3ee", trend: "Steady improvement with good performance" },
    { name: "ME Department", color: "#34d399", trend: "Gradual improvement with solid performance" },
  ];

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-6 mb-8 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <motion.div 
            whileHover={{ scale: 1.2, rotate: 15 }}
            transition={{ type: "spring", stiffness: 500 }}
            className="mr-3"
          >
            <FaChartLine className="text-indigo-500 text-2xl" />
          </motion.div>
          <h2 className="text-xl font-bold text-gray-800">CGPA Trends Over Time</h2>
        </div>

        <motion.button
          onClick={() => setShowInfo(!showInfo)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-indigo-500 hover:text-indigo-700"
        >
          <FaInfoCircle className="text-xl" />
        </motion.button>
      </div>

      {showInfo && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-4 p-3 bg-indigo-50 rounded-lg border-l-4 border-indigo-500"
        >
          <div className="flex items-start">
            <FaGraduationCap className="text-indigo-500 mt-1 mr-2" />
            <p className="text-sm text-gray-700">
              This chart displays the semester-wise CGPA progression for different departments. 
              Higher values indicate better academic performance. Notice the trends across different semesters 
              for comparative analysis between departments.
            </p>
          </div>
        </motion.div>
      )}
      
      <div className="flex flex-wrap gap-3 mb-4">
        {departments.map((dept, index) => (
          <motion.div
            key={index} 
            className="flex items-center py-1 px-3 rounded-full text-sm font-medium"
            style={{ 
              backgroundColor: `${dept.color}15`, // 15% opacity
              color: dept.color,
              borderLeft: `4px solid ${dept.color}`
            }}
            whileHover={{ scale: 1.05, x: 5 }}
            onHoverStart={() => setHoveredDept(dept.name)}
            onHoverEnd={() => setHoveredDept(null)}
          >
            <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: dept.color }}></span>
            {dept.name}
          </motion.div>
        ))}
      </div>
      
      {hoveredDept && (
        <motion.div 
          className="mb-4 text-sm text-gray-600 italic pl-3 border-l-2 border-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {departments.find(d => d.name === hoveredDept)?.trend}
        </motion.div>
      )}
      
      <motion.div 
        className="h-80"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Line data={cgpaData} options={options} />
      </motion.div>
    </motion.div>
  );
}

export default CGPATrendChart;
