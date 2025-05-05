import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CompaniesList = ({ companies = [] }) => {
  if (!companies || companies.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 text-center text-slate-600">
        <p>No companies available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="divide-y divide-slate-100">
        {companies.map((company) => (
          <Link
            key={company.id}
            to={`/companies/${company.id}`}
            className="block hover:bg-slate-50 transition-colors"
          >
            <div className="p-4 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium text-slate-800 mb-1 truncate">
                    {company.name}
                  </h3>
                  <p className="text-sm text-slate-600 mb-2 line-clamp-2">
                    {company.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {company.industries?.map((industry, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs break-words"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                    {company.status}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

CompaniesList.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      logo: PropTypes.string,
      description: PropTypes.string,
      industries: PropTypes.arrayOf(PropTypes.string),
      status: PropTypes.string,
    })
  ),
};

export default CompaniesList;
