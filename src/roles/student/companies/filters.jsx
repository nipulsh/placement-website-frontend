import React, { useState } from "react";

const StudentsFilters = () => {
  const [status, setStatus] = useState("");

  function handleStatusFilter(e) {
    setStatus(e.target.value);
  }

  return (
    <>
      <div className="bg-amber-200 flex h-full p-5">
        <select
          name="dropdownName"
          value={status}
          onChange={handleStatusFilter}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </>
  );
};

export default StudentsFilters;
