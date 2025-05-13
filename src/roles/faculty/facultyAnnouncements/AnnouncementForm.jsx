import React, { useState } from "react";
import { FaPaperPlane, FaTimes } from "react-icons/fa";

const AnnouncementForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    publishDate: new Date().toISOString().split("T")[0],
    expiryDate: "",
    target: ["All"],
  });

  const departments = ["All", "CS", "EC", "EE", "ME", "CE", "IE", "BT"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTargetChange = (e) => {
    const options = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData({
      ...formData,
      target: options,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Calculate minimum expiry date (today)
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          New Announcement
        </h2>
        <button
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700"
          title="Cancel"
        >
          <FaTimes />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Announcement title"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Content *
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Announcement details"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="publishDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Publish Date *
            </label>
            <input
              type="date"
              id="publishDate"
              name="publishDate"
              value={formData.publishDate}
              onChange={handleChange}
              required
              className="w-full p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="expiryDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Expiry Date *
            </label>
            <input
              type="date"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              min={today}
              required
              className="w-full p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="target"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Target Departments *
          </label>
          <select
            id="target"
            name="target"
            multiple
            value={formData.target}
            onChange={handleTargetChange}
            required
            className="w-full p-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
          >
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          <p className="mt-1 text-sm text-gray-500">
            Hold Ctrl/Cmd to select multiple departments
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg mr-2 hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition-colors"
          >
            <FaPaperPlane /> Post Announcement
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnnouncementForm;
