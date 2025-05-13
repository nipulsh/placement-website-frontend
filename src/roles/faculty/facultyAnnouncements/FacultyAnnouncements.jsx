import React, { useState } from "react";
import { FaBullhorn, FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import AnnouncementForm from "./AnnouncementForm";
import AnnouncementList from "./AnnouncementList";

const FacultyAnnouncements = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Placement Drive",
      content: "Google recruitment drive on campus next week",
      publishDate: "2023-11-15",
      expiryDate: "2023-12-15",
      target: ["CS", "EC", "EE"],
      createdAt: "2023-11-10T10:30:00",
      active: true,
    },
    {
      id: 2,
      title: "Internship Opportunity",
      content: "Microsoft offering summer internships for 3rd year students",
      publishDate: "2023-11-20",
      expiryDate: "2023-12-20",
      target: ["All"],
      createdAt: "2023-11-18T14:45:00",
      active: true,
    },
    {
      id: 3,
      title: "Workshop on AI",
      content:
        "Two-day workshop on artificial intelligence and machine learning",
      publishDate: "2023-11-25",
      expiryDate: "2023-12-25",
      target: ["CS", "EC"],
      createdAt: "2023-11-22T09:15:00",
      active: true,
    },
  ]);

  // Filter announcements based on search term
  const filteredAnnouncements = announcements.filter(
    (announcement) =>
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle creating a new announcement
  const handleCreateAnnouncement = (formData) => {
    const newAnnouncement = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toISOString(),
      active: true,
    };
    setAnnouncements([newAnnouncement, ...announcements]);
    setShowForm(false);
  };

  // Handle deleting an announcement
  const handleDeleteAnnouncement = (id) => {
    setAnnouncements(
      announcements.filter((announcement) => announcement.id !== id)
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center">
          <FaBullhorn className="mr-3 text-indigo-600" />
          Faculty Announcements
        </h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition-colors"
        >
          <FaPlus /> {showForm ? "Cancel" : "New Announcement"}
        </button>
      </div>

      {showForm && (
        <div className="mb-8">
          <AnnouncementForm
            onSubmit={handleCreateAnnouncement}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search announcements..."
            className="w-full p-3 pl-10 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3.5 text-gray-400" />
        </div>
      </div>

      <AnnouncementList
        announcements={filteredAnnouncements}
        onDelete={handleDeleteAnnouncement}
      />
    </div>
  );
};

export default FacultyAnnouncements;
