import React from "react";

const AnnouncementDetails = ({ announcement }) => {
  if (!announcement) {
    return (
      <div className="w-full h-full p-6 bg-white">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Announcement Details
          </h2>
          <div className="text-gray-600">
            <p>Select an announcement to view its details here.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full p-6 bg-white overflow-y-auto">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>{announcement.day}</span>
          <span>•</span>
          <span>{announcement.time}</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
          {announcement.heading}
        </h2>
        <div className="prose prose-sm max-w-none">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {announcement.longDiscription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementDetails;
