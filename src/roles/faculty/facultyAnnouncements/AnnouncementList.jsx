import React from "react";
import { FaTrash, FaCalendarAlt, FaUsers } from "react-icons/fa";

const AnnouncementList = ({ announcements, onDelete }) => {
  // Format date to a more readable format
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // If no announcements, show a message
  if (announcements.length === 0) {
    return (
      <div className="bg-white p-8 rounded-lg shadow text-center">
        <p className="text-gray-500">No announcements found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {announcements.map((announcement) => (
        <div
          key={announcement.id}
          className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {announcement.title}
            </h3>
            <button
              onClick={() => onDelete(announcement.id)}
              className="text-red-500 hover:text-red-700 p-1"
              title="Delete announcement"
            >
              <FaTrash />
            </button>
          </div>

          <p className="text-gray-600 mb-4">{announcement.content}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <FaCalendarAlt className="text-indigo-500" />
              <span>Published: {formatDate(announcement.publishDate)}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaCalendarAlt className="text-indigo-500" />
              <span>Expires: {formatDate(announcement.expiryDate)}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaUsers className="text-indigo-500" />
              <span>For: {announcement.target.join(", ")}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnnouncementList;
