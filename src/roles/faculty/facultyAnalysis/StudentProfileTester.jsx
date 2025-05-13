import React, { useState } from "react";
import StudentProfileCard from "./StudentProfileCard";

const StudentProfileTester = () => {
  const [selectedId, setSelectedId] = useState("CS001");

  // Dummy student IDs for testing
  const dummyStudentIds = [
    { id: "CS001", name: "John Doe (Computer Science)" },
    { id: "EC002", name: "Jane Smith (Electronics)" },
    { id: "ME003", name: "Raj Patel (Mechanical)" },
    { id: "CV004", name: "Priya Sharma (Civil)" },
    { id: "BT005", name: "Alex Johnson (Biotechnology)" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 min-h-[60svh] bg-gradient-to-br from-indigo-50 via-white to-blue-50 rounded-2xl shadow-2xl transition-all duration-500">
      <div className="bg-white rounded-xl shadow-xl p-6 mb-8 transition-all duration-300 ease-in-out">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Student Profile Tester
        </h2>
        <p className="text-gray-600 mb-4">
          Select a student ID to test the profile card component
        </p>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select a Student ID:
          </label>
          <select
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 hover:border-indigo-400"
          >
            {dummyStudentIds.map((student) => (
              <option key={student.id} value={student.id}>
                {student.id} - {student.name}
              </option>
            ))}
          </select>
        </div>

        <div className="p-2 bg-gray-50 rounded-md mb-4">
          <p className="font-mono">
            Current Student ID:{" "}
            <span className="text-indigo-600 font-bold">{selectedId}</span>
          </p>
        </div>
      </div>

      {/* Display the profile card with selected ID */}
      <StudentProfileCard studentId={selectedId} />
    </div>
  );
};

export default StudentProfileTester;
