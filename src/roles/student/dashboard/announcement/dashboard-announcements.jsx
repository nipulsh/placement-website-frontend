import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardAnnouncements = ({ data }) => {
  const navigate = useNavigate();
  function handleRedirectAnnouncementPage(id) {
    navigate("/announcements", { state: { selectedAnnouncementId: id } });
  }
  return (
    <>
      <div className="h-full">
        <div className="p-4 h-full">
          <h2 className="text-black text-xl font-semibold mb-4">
            Announcements
          </h2>
          <div className="space-y-3 overflow-y-auto h-[calc(100%-3rem)]">
            {data.map((announcement) => (
              <div
                key={announcement.id}
                onClick={handleRedirectAnnouncementPage}
                className="bg-white rounded-lg p-3 cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-800">
                    {announcement.title}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {announcement.date}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {announcement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAnnouncements;
