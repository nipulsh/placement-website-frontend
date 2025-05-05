import DashboardProfileAbout from "./about";
import "./profile-explain.css";

const DashboardProfile = (props) => {
  const studentName = "John Doe";
  return (
    <div className="flex flex-col h-full bg-white rounded-lg">
      {/* Profile Header */}
      <div className="p-6 border-b border-slate-100">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold text-slate-800">My Profile</h1>
          <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            Edit Profile
          </button>
        </div>

        {/* Profile Info */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-100">
            <img
              src="/pngwing.com.png"
              alt="Profile"
              className="object-cover h-full w-full"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-800">
              {studentName}
            </h2>
            <p className="text-sm text-slate-600">Student</p>
          </div>
        </div>

        {/* Location and Contact */}
        <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>New York, USA</span>
          <span className="mx-2">•</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span>contact@example.com</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
            About
          </button>
          <button className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download CV
          </button>
        </div>
      </div>

      {/* Profile Content */}
      <div className="flex-1 p-6">
        <DashboardProfileAbout
          handleSetSection={props.handleSetSection}
          section={props.section}
        />
      </div>
    </div>
  );
};

export default DashboardProfile;
