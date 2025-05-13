import React, { useState } from "react";
import {
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaFileAlt,
  FaUsers,
  FaStar,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

// Mock database of student profiles
const STUDENT_PROFILES = {
  CS001: {
    id: "CS001",
    name: "John Doe",
    department: "Computer Science",
    graduationYear: 2024,
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    gender: "Male",

    // Academic details
    academics: {
      cgpa: [
        { semester: 1, cgpa: 8.2 },
        { semester: 2, cgpa: 8.4 },
        { semester: 3, cgpa: 8.6 },
        { semester: 4, cgpa: 8.8 },
        { semester: 5, cgpa: 9.0 },
        { semester: 6, cgpa: 9.2 },
      ],
      backlogs: 0,
      awards: ["Dean's List 2022", "Best Project Award 2023"],
    },

    // Internships
    internships: [
      {
        company: "Tech Solutions Inc.",
        role: "Software Engineering Intern",
        duration: "May 2022 - July 2022",
        description: "Worked on front-end development using React",
      },
      {
        company: "InnovateTech",
        role: "Data Analysis Intern",
        duration: "Dec 2022 - Feb 2023",
        description:
          "Built data visualization dashboards using Python and Tableau",
      },
    ],

    // Projects
    projects: [
      {
        title: "E-Learning Platform",
        technologies: ["React", "Node.js", "MongoDB"],
        description:
          "A complete platform for online education with video streaming",
        link: "https://github.com/johndoe/elearning",
      },
      {
        title: "Smart Home Automation",
        technologies: ["IoT", "Python", "Raspberry Pi"],
        description: "IoT-based home automation system with mobile app control",
        link: "https://github.com/johndoe/smarthome",
      },
      {
        title: "AI Image Recognition",
        technologies: ["Python", "TensorFlow", "OpenCV"],
        description:
          "Deep learning model for image classification and object detection",
        link: "https://github.com/johndoe/aiimagerecog",
      },
    ],

    // Patents/Publications
    publications: [
      {
        title: "Novel Approach to Neural Network Optimization",
        venue: "International Journal of Machine Learning",
        year: 2023,
        coAuthors: "Dr. Smith, Jane Brown",
      },
    ],

    // Club Activities
    clubs: [
      {
        name: "Coding Club",
        role: "President",
        duration: "2022-2024",
        contributions: "Organized 5 hackathons and weekly coding workshops",
      },
      {
        name: "AI Research Group",
        role: "Member",
        duration: "2021-Present",
        contributions: "Published 2 papers and participated in 3 competitions",
      },
    ],

    // Skills
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Machine Learning", level: 75 },
      { name: "Data Analysis", level: 85 },
      { name: "SQL", level: 70 },
    ],
  },

  EC002: {
    id: "EC002",
    name: "Jane Smith",
    department: "Electronics & Communication",
    graduationYear: 2023,
    email: "jane.smith@example.com",
    phoneNumber: "234-567-8901",
    gender: "Female",

    academics: {
      cgpa: [
        { semester: 1, cgpa: 8.0 },
        { semester: 2, cgpa: 8.3 },
        { semester: 3, cgpa: 8.7 },
        { semester: 4, cgpa: 9.1 },
        { semester: 5, cgpa: 9.4 },
        { semester: 6, cgpa: 9.5 },
      ],
      backlogs: 0,
      awards: ["Outstanding Student Award 2022", "IEEE Paper Award"],
    },

    internships: [
      {
        company: "Microchip Technologies",
        role: "Hardware Design Intern",
        duration: "June 2022 - August 2022",
        description: "Worked on PCB design for IoT devices",
      },
      {
        company: "Signal Systems",
        role: "Embedded Systems Intern",
        duration: "Dec 2022 - March 2023",
        description: "Developed firmware for medical devices using C and ARM",
      },
    ],

    projects: [
      {
        title: "Smart Agriculture System",
        technologies: ["Arduino", "IoT", "Sensors"],
        description: "Automated irrigation system with soil moisture detection",
        link: "https://github.com/janesmith/smartagri",
      },
      {
        title: "Health Monitoring Wearable",
        technologies: ["ESP32", "C++", "Bluetooth"],
        description:
          "Wearable device that monitors heart rate and body temperature",
        link: "https://github.com/janesmith/healthmonitor",
      },
    ],

    publications: [
      {
        title: "Low-Power Design Techniques for IoT Devices",
        venue: "IEEE Journal of Embedded Systems",
        year: 2023,
        coAuthors: "Prof. Johnson, David Chen",
      },
    ],

    clubs: [
      {
        name: "Robotics Club",
        role: "Vice President",
        duration: "2021-2023",
        contributions:
          "Led team to national robotics competition, secured 2nd place",
      },
      {
        name: "IEEE Student Branch",
        role: "Executive Member",
        duration: "2020-2023",
        contributions: "Organized technical workshops and seminars",
      },
    ],

    skills: [
      { name: "Circuit Design", level: 92 },
      { name: "C/C++", level: 88 },
      { name: "PCB Design", level: 85 },
      { name: "VHDL", level: 80 },
      { name: "Arduino", level: 90 },
      { name: "Embedded Systems", level: 87 },
    ],
  },

  ME003: {
    id: "ME003",
    name: "Raj Patel",
    department: "Mechanical Engineering",
    graduationYear: 2024,
    email: "raj.patel@example.com",
    phoneNumber: "345-678-9012",
    gender: "Male",

    academics: {
      cgpa: [
        { semester: 1, cgpa: 7.8 },
        { semester: 2, cgpa: 8.0 },
        { semester: 3, cgpa: 8.2 },
        { semester: 4, cgpa: 8.5 },
        { semester: 5, cgpa: 8.7 },
        { semester: 6, cgpa: 8.9 },
      ],
      backlogs: 1,
      awards: ["Best Design Project 2023"],
    },

    internships: [
      {
        company: "AutoTech Industries",
        role: "Design Engineer Intern",
        duration: "May 2023 - July 2023",
        description: "Worked on CAD design for automotive components",
      },
    ],

    projects: [
      {
        title: "Automated Waste Segregator",
        technologies: ["Arduino", "Motors", "Sensors", "CAD"],
        description:
          "Machine that automatically sorts different types of waste",
        link: "https://github.com/rajpatel/wasteseg",
      },
      {
        title: "Energy Efficient HVAC System",
        technologies: ["Thermal Analysis", "SolidWorks", "CFD"],
        description: "Redesigned HVAC system with 25% improved efficiency",
        link: "https://github.com/rajpatel/eehvac",
      },
    ],

    publications: [],

    clubs: [
      {
        name: "SAE Club",
        role: "Team Lead",
        duration: "2022-2024",
        contributions:
          "Led team in designing and fabricating a formula student car",
      },
    ],

    skills: [
      { name: "SolidWorks", level: 92 },
      { name: "AutoCAD", level: 88 },
      { name: "ANSYS", level: 78 },
      { name: "3D Printing", level: 85 },
      { name: "CNC Programming", level: 75 },
      { name: "Thermodynamics", level: 82 },
    ],
  },
};

const StudentProfileCard = ({ studentId }) => {
  const [expandedSection, setExpandedSection] = useState("academics");

  // Log the studentId to show it's being used
  console.log(`Loading profile for student ID: ${studentId}`);

  // Get the student data based on ID, or use default if not found
  const studentData = STUDENT_PROFILES[studentId] || STUDENT_PROFILES.CS001;

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="flex flex-col md:flex-row items-start justify-between mb-6 pb-6 border-b border-gray-200">
        <div className="flex items-center">
          <div className="bg-indigo-100 text-indigo-800 p-4 rounded-full mr-4">
            <FaUser className="text-2xl" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{studentData.name}</h2>
            <p className="text-gray-600">
              {studentData.department} • {studentData.id}
            </p>
            <p className="text-gray-600">
              Batch of {studentData.graduationYear}
            </p>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="flex items-center text-gray-600 mb-1">
            <span className="font-medium mr-2">Email:</span> {studentData.email}
          </p>
          <p className="flex items-center text-gray-600">
            <span className="font-medium mr-2">Phone:</span>{" "}
            {studentData.phoneNumber}
          </p>
        </div>
      </div>

      {/* Academics Section */}
      <div className="mb-4">
        <div
          className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg cursor-pointer"
          onClick={() => toggleSection("academics")}
        >
          <div className="flex items-center">
            <FaGraduationCap className="text-indigo-600 mr-3" />
            <h3 className="font-semibold text-lg">Academic Performance</h3>
          </div>
          {expandedSection === "academics" ? (
            <FaChevronUp />
          ) : (
            <FaChevronDown />
          )}
        </div>

        {expandedSection === "academics" && (
          <div className="py-4 px-4">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
              {studentData.academics.cgpa.map((sem) => (
                <div
                  key={sem.semester}
                  className="bg-indigo-50 p-3 rounded-lg text-center"
                >
                  <p className="text-sm text-gray-600">
                    Semester {sem.semester}
                  </p>
                  <p className="text-xl font-bold text-indigo-700">
                    {sem.cgpa}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <p className="font-medium">
                Backlogs:{" "}
                <span className="font-normal text-gray-700">
                  {studentData.academics.backlogs}
                </span>
              </p>
              <p className="font-medium mt-2">Awards:</p>
              <ul className="list-disc list-inside text-gray-700 pl-4">
                {studentData.academics.awards.map((award, index) => (
                  <li key={index}>{award}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Internships Section */}
      <div className="mb-4">
        <div
          className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg cursor-pointer"
          onClick={() => toggleSection("internships")}
        >
          <div className="flex items-center">
            <FaBriefcase className="text-indigo-600 mr-3" />
            <h3 className="font-semibold text-lg">Internships</h3>
          </div>
          {expandedSection === "internships" ? (
            <FaChevronUp />
          ) : (
            <FaChevronDown />
          )}
        </div>

        {expandedSection === "internships" && (
          <div className="py-4 px-4">
            {studentData.internships.map((internship, index) => (
              <div
                key={index}
                className="mb-4 pb-4 border-b border-gray-100 last:border-0"
              >
                <h4 className="font-medium text-lg">{internship.company}</h4>
                <p className="text-indigo-600">{internship.role}</p>
                <p className="text-sm text-gray-600">{internship.duration}</p>
                <p className="mt-2 text-gray-700">{internship.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Projects Section */}
      <div className="mb-4">
        <div
          className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg cursor-pointer"
          onClick={() => toggleSection("projects")}
        >
          <div className="flex items-center">
            <FaCode className="text-indigo-600 mr-3" />
            <h3 className="font-semibold text-lg">Projects</h3>
          </div>
          {expandedSection === "projects" ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {expandedSection === "projects" && (
          <div className="py-4 px-4">
            {studentData.projects.map((project, index) => (
              <div
                key={index}
                className="mb-4 pb-4 border-b border-gray-100 last:border-0"
              >
                <h4 className="font-medium text-lg">{project.title}</h4>
                <div className="flex flex-wrap gap-2 my-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-indigo-100 text-indigo-800 px-2 py-1 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline text-sm mt-2 inline-block"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Publications Section */}
      <div className="mb-4">
        <div
          className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg cursor-pointer"
          onClick={() => toggleSection("publications")}
        >
          <div className="flex items-center">
            <FaFileAlt className="text-indigo-600 mr-3" />
            <h3 className="font-semibold text-lg">Publications & Patents</h3>
          </div>
          {expandedSection === "publications" ? (
            <FaChevronUp />
          ) : (
            <FaChevronDown />
          )}
        </div>

        {expandedSection === "publications" && (
          <div className="py-4 px-4">
            {studentData.publications.length > 0 ? (
              studentData.publications.map((pub, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-medium">{pub.title}</h4>
                  <p className="text-sm text-gray-600">
                    {pub.venue}, {pub.year}
                  </p>
                  <p className="text-sm text-gray-700">
                    Co-authors: {pub.coAuthors}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No publications or patents yet</p>
            )}
          </div>
        )}
      </div>

      {/* Club Activities Section */}
      <div className="mb-4">
        <div
          className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg cursor-pointer"
          onClick={() => toggleSection("clubs")}
        >
          <div className="flex items-center">
            <FaUsers className="text-indigo-600 mr-3" />
            <h3 className="font-semibold text-lg">Club Activities</h3>
          </div>
          {expandedSection === "clubs" ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {expandedSection === "clubs" && (
          <div className="py-4 px-4">
            {studentData.clubs.map((club, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h4 className="font-medium">
                  {club.name} -{" "}
                  <span className="text-indigo-600">{club.role}</span>
                </h4>
                <p className="text-sm text-gray-600">{club.duration}</p>
                <p className="mt-1 text-gray-700">{club.contributions}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Skills Section */}
      <div className="mb-4">
        <div
          className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg cursor-pointer"
          onClick={() => toggleSection("skills")}
        >
          <div className="flex items-center">
            <FaStar className="text-indigo-600 mr-3" />
            <h3 className="font-semibold text-lg">Skills</h3>
          </div>
          {expandedSection === "skills" ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {expandedSection === "skills" && (
          <div className="py-4 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {studentData.skills.map((skill, index) => (
                <div key={index} className="mb-2">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-600">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentProfileCard;
