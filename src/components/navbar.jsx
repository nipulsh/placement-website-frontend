import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const studentImage = "/public/pngwing.com.png";
  const links = ["dashboard", "companies", "portfolio", "News", "messages"];
  return (
    <>
      <div className=" relative h-full ">
        <div className=" max-w-screen-xl mx-auto p-4 ">
          <div>
            <ul className="flex justify-center space-x-4 gap-10 text-[1.1rem] capitalize">
              {links.map((link, index) => (
                <li key={index} className="text-white">
                  <Link to={`/${link}`}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="absolute top-[30%] right-9">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-amber-50">
            <img src={studentImage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
