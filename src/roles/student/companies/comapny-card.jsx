const CompanyCard = ({ id, data, set, background }) => {
  return (
    <div
      onClick={() => {
        if (!background) {
          return;
        } else {
          set(id);
        }
      }}
      className={`w-full  p-5 rounded-lg shadow-md ${
        background ? `cursor-pointer` : null
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#0075FF] text-[#0075FF] rounded-xl">
          <img
            src="/grow-up.png"
            alt="Hiring"
            className="w-5 h-5 object-contain"
          />
          <span className="text-sm">Actively Hiring</span>
        </div>
        <img
          src="/google-logo.png"
          alt="Company Logo"
          className="w-10 h-10 object-contain"
        />
      </div>

      <div className="mb-4 text-black">
        <h1 className="text-[#0075FF] text-xl font-bold capitalize mb-1">
          {data.jobTitle}
        </h1>
        <h4 className="text-black text-sm ">{data.companyName}</h4>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
        <span className="flex items-center gap-2">
          <img
            src="/location.png"
            alt="Location"
            className="w-5 h-5 object-contain"
          />
          {data.workPlace}
        </span>
        <span className="flex items-center gap-2 text-black">
          <img
            src="/calendar.png"
            alt="Duration"
            className="w-5 h-5 object-contain"
          />
          {data.duration}
        </span>
        <span className="flex items-center gap-2 text-black">
          <img
            src="/money.png"
            alt="Salary"
            className="w-5 h-5 object-contain"
          />
          {data.stipend}/month
        </span>
      </div>

      <div className="mb-4">
        <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
          Updated on: {data.postedTime}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <span className="bg-[#D9D9D9] px-2 py-1 text-xs text-gray-600 rounded">
          {data.jobType}
        </span>
        <button className="text-lg font-bold text-[#0075FF] hover:underline">
          Apply
        </button>
      </div>
    </div>
  );
};

export default CompanyCard;
