import React, { useState } from "react";

const Announcement = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg min-w-[100px]">
          <p className="text-sm font-semibold text-gray-600">{props.day}</p>
          <p className="text-xs text-gray-500">{props.time}</p>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {props.heading}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {isExpanded ? props.longDiscription : props.shortDiscription}
          </p>
          {props.longDiscription && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-blue-600 text-sm hover:text-blue-800 transition-colors duration-200"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
