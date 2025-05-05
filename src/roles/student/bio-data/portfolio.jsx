import React, { useState } from "react";
import DashboardProfile from "../dashboard/profile-section/profile";
import ProfileForm from "./form";

const StudentPortfolio = () => {
  const [section, setSection] = useState(0);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [isDraftSaved, setIsDraftSaved] = useState(false);
  const [formData, setFormData] = useState({
    experiences: [
      {
        title: "",
        employmentType: "",
        company: "",
        location: "",
        locationType: "",
        startDate: "",
        endDate: "",
        description: "",
        skills: [""],
      },
    ],
  });

  function handleSetSection(index) {
    setSection(index);
  }

  const handlePreview = () => {
    setIsPreviewMode(true);
    // Scroll to top when entering preview mode
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSaveDraft = () => {
    // Save form data to localStorage
    localStorage.setItem("portfolioDraft", JSON.stringify(formData));
    setIsDraftSaved(true);

    // Show success message
    const successMessage = document.createElement("div");
    successMessage.className =
      "fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50";
    successMessage.textContent = "Draft saved successfully!";
    document.body.appendChild(successMessage);

    // Remove success message after 3 seconds
    setTimeout(() => {
      successMessage.remove();
      setIsDraftSaved(false);
    }, 3000);
  };

  const handleReset = () => {
    // Clear form data
    setFormData({
      experiences: [
        {
          title: "",
          employmentType: "",
          company: "",
          location: "",
          locationType: "",
          startDate: "",
          endDate: "",
          description: "",
          skills: [""],
        },
      ],
    });

    // Show reset message
    const resetMessage = document.createElement("div");
    resetMessage.className =
      "fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg z-50";
    resetMessage.textContent = "Form reset successfully!";
    document.body.appendChild(resetMessage);

    // Remove reset message after 3 seconds
    setTimeout(() => {
      resetMessage.remove();
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Header Section */}
      <div className="bg-white shadow-sm w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Portfolio</h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage your professional profile and experiences
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handlePreview}
                className="px-4 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors flex items-center"
              >
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Preview
              </button>
              <button
                onClick={handleSaveDraft}
                className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors flex items-center"
              >
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
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
                Save Draft
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Profile Preview */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-800">
                  Profile Preview
                </h2>
              </div>
              <div className="p-4">
                <DashboardProfile
                  section={section}
                  handleSetSection={handleSetSection}
                  isPreviewMode={isPreviewMode}
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Profile Completion
                    </p>
                    <p className="text-2xl font-bold text-purple-600 mt-1">
                      85%
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600">📊</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Skills Added
                    </p>
                    <p className="text-2xl font-bold text-green-600 mt-1">12</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600">🎯</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Edit Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Edit Profile
                  </h2>
                  <div className="flex space-x-2">
                    <button
                      onClick={handleReset}
                      className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      Reset
                    </button>
                    <button
                      onClick={handleSaveDraft}
                      className="px-3 py-1 text-sm font-medium text-purple-600 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                        />
                      </svg>
                      Save Draft
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="overflow-y-auto max-h-[calc(100vh-16rem)]">
                  <ProfileForm
                    section={section}
                    formData={formData}
                    setFormData={setFormData}
                    isPreviewMode={isPreviewMode}
                  />
                </div>
              </div>
            </div>

            {/* Tips Section */}
            <div className="mt-6 bg-blue-50 rounded-xl p-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600">💡</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-blue-800">Pro Tip</h3>
                  <p className="mt-1 text-sm text-blue-600">
                    Keep your profile up to date with your latest skills and
                    experiences to increase your chances of getting noticed by
                    recruiters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortfolio;
