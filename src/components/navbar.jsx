import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useAuth } from "../store/auth-context";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const getRoleSpecificLinks = () => {
    // Helper to determine if link is active
    const isActive = (to) => location.pathname === to;
    const baseClass = "px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors";
    const activeClass = "bg-indigo-100 text-indigo-700 font-bold shadow";
    const inactiveClass = "text-slate-700 hover:text-indigo-600";
    switch (user?.role) {
      case "student":
        return (
          <>
            <Link
              to="/dashboard"
              className={`${baseClass} ${isActive("/announcements") ? activeClass : inactiveClass}`}
            >
              Dashboard
            </Link>
            <Link
              to="/companies"
              className={`${baseClass} ${isActive("/companies") ? activeClass : inactiveClass}`}
            >
              Companies
            </Link>
            <Link
              to="/portfolio"
              className={`${baseClass} ${isActive("/portfolio") ? activeClass : inactiveClass}`}
            >
              Portfolio
            </Link>
            <Link
              to="/messages"
              className={`${baseClass} ${isActive("/messages") ? activeClass : inactiveClass}`}
            >
              Messages
            </Link>
            <Link
              to="/announcements"
              className={`${baseClass} ${isActive("/announcements") ? activeClass : inactiveClass}`}
            >
              Announcements
            </Link>
            <Link
              to="/cv"
              className={`${baseClass} ${isActive("/cv") ? activeClass : inactiveClass}`}
            >
              CV Manager
            </Link>
          </>
        );
      case "company":
        return (
          <>
            <Link
              to="/dashboard"
              className={`${baseClass} ${isActive("/announcements") ? activeClass : inactiveClass}`}
            >
              Dashboard
            </Link>
            <Link
              to="/applications"
              className={`${baseClass} ${isActive("/applications") ? activeClass : inactiveClass}`}
            >
              Applications
            </Link>
            <Link
              to="/announcements"
              className={`${baseClass} ${isActive("/announcements") ? activeClass : inactiveClass}`}
            >
              Announcements
            </Link>
          </>
        );
      case "faculty":
        return (
          <>
            <Link
              to="/faculty/dashboard"
              className={`${baseClass} ${isActive("/faculty/dashboard") ? activeClass : inactiveClass}`}
            >
              Dashboard
            </Link>
            <Link
              to="/faculty/analysis"
              className={`${baseClass} ${isActive("/faculty/analysis") ? activeClass : inactiveClass}`}
            >
              Analysis
            </Link>
            <Link
              to="/faculty/company"
              className={`${baseClass} ${isActive("/faculty/company") ? activeClass : inactiveClass}`}
            >
              Companies
            </Link>
            <Link
              to="/faculty/announcements"
              className={`${baseClass} ${isActive("/faculty/announcements") ? activeClass : inactiveClass}`}
            >
              Announcements
            </Link>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-lg fixed w-full top-0 z-50 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 flex items-center"
            >
              <Link
                to="/dashboard"
                className="text-2xl font-bold text-indigo-600 whitespace-nowrap"
              >
                TPO Portal
              </Link>
            </motion.div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 overflow-x-auto"
            >
              {getRoleSpecificLinks()}
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <span className="text-slate-700 mr-4 whitespace-nowrap">
                {user?.name}
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors whitespace-nowrap"
              >
                Logout
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-x-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {getRoleSpecificLinks()}
              <div className="pt-4 pb-3 border-t border-slate-100">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-indigo-600 font-medium">
                        {user?.name?.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-slate-800 truncate">
                      {user?.name}
                    </div>
                  </div>
                </div>
                <div className="mt-3 px-2">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
