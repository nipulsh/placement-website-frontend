import React, { useState, useEffect } from "react";
import {
  FaDownload,
  FaSearch,
  FaUserGraduate,
  FaFlask,
  FaFileExcel,
  FaCog,
} from "react-icons/fa";
import { exportAnalysisData } from "./exportAnalysisData";
import FilterSection from "./FilterSection";
import StudentTable from "./StudentTable";
import StudentCharts from "./StudentCharts";
import StudentInterestsChart from "./StudentInterestsChart";
import CGPATrendChart from "./CGPATrendChart";
import StudentProfileCard from "./StudentProfileCard";
import StudentProfileTester from "./StudentProfileTester";

const FacultyAnalysis = () => {
  // Add useEffect to log when component mounts
  useEffect(() => {
    console.log("Faculty Analysis component mounted");
  }, []);

  // State for filters
  const [filters, setFilters] = useState({
    graduationYear: "All",
    department: "All",
    cgpaMin: 0,
    cgpaMax: 10,
    company: "All",
    placementStatus: "All",
    offerType: "All",
    packageMin: 0,
    packageMax: 5000000,
    employmentType: "All",
    gender: "All",
    skills: [],
  });

  // State for the selected student ID for detailed view
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [showStudentDetails, setShowStudentDetails] = useState(false);
  const [showProfileTester, setShowProfileTester] = useState(false);
  const [showExportOptions, setShowExportOptions] = useState(false);
  const [exportOptions, setExportOptions] = useState({
    studentInfo: true,
    placementStats: true,
    departmentWisePlacement: true,
    companyWisePlacement: true,
    cgpaAnalysis: true,
    skillsData: true,
    includeCharts: true,
    companyDetails: true,
    offerDetails: true,
    roleDistribution: true,
  });

  // Mock student data that would normally come from an API or database
  const studentData = [
    {
      id: 1,
      name: "John Doe",
      rollNumber: "CS001",
      department: "Computer Science",
      graduationYear: 2024,
      gender: "Male",
      cgpa: 8.5,
      placementStatus: "Placed",
      company: "Google",
      package: "40 LPA",
    },
    {
      id: 2,
      name: "Jane Smith",
      rollNumber: "CS002",
      department: "Computer Science",
      graduationYear: 2024,
      gender: "Female",
      cgpa: 9.2,
      placementStatus: "Placed",
      company: "Microsoft",
      package: "38 LPA",
    },
    {
      id: 3,
      name: "Amit Kumar",
      rollNumber: "EC001",
      department: "Electronics",
      graduationYear: 2024,
      gender: "Male",
      cgpa: 7.8,
      placementStatus: "Placed",
      company: "Amazon",
      package: "36 LPA",
    },
    // More student data would be here in a real app
  ];

  // Sample chart data
  const chartData = {
    departmentWisePlacement: {
      labels: [
        "Computer Science",
        "Electronics",
        "Mechanical",
        "Civil",
        "Chemical",
        "Electrical",
      ],
      datasets: [
        {
          label: "Placement Percentage",
          data: [85, 70, 60, 55, 50, 65],
        },
      ],
    },
    studentInterests: {
      labels: [
        "Web Development",
        "Machine Learning",
        "Mobile Apps",
        "Data Science",
        "Cybersecurity",
        "Game Development",
      ],
      datasets: [
        {
          data: [35, 25, 15, 10, 8, 7],
        },
      ],
    },
    cgpaTrends: {
      labels: [
        "Semester 1",
        "Semester 2",
        "Semester 3",
        "Semester 4",
        "Semester 5",
        "Semester 6",
        "Semester 7",
        "Semester 8",
      ],
      datasets: [
        {
          label: "CS Department",
          data: [7.8, 8.1, 8.3, 8.5, 8.7, 8.9, 9.1, 9.2],
        },
        {
          label: "EC Department",
          data: [7.5, 7.7, 7.9, 8.1, 8.2, 8.3, 8.4, 8.5],
        },
      ],
    },
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSkillsChange = (selectedSkills) => {
    setFilters((prev) => ({
      ...prev,
      skills: selectedSkills,
    }));
  };

  // Handle export option changes
  const handleExportOptionChange = (e) => {
    const { name, checked } = e.target;
    setExportOptions((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // Export data handler
  const handleExportData = () => {
    // Prepare the export data object based on selected options
    const exportData = {
      filters: filters, // Always include filters
    };

    // Conditionally add data based on export options
    if (exportOptions.studentInfo) {
      exportData.studentInfo = studentData.filter((student) => {
        // Apply filters to student data
        if (
          filters.department !== "All" &&
          student.department !== filters.department
        )
          return false;
        if (
          filters.graduationYear !== "All" &&
          student.graduationYear !== parseInt(filters.graduationYear)
        )
          return false;
        if (
          filters.placementStatus !== "All" &&
          student.placementStatus !== filters.placementStatus
        )
          return false;
        if (filters.gender !== "All" && student.gender !== filters.gender)
          return false;
        if (filters.company !== "All" && student.company !== filters.company)
          return false;
        return true;
      });
    }

    // Add detailed company information
    if (exportOptions.companyDetails) {
      exportData.companyDetails = [
        {
          CompanyName: "Google",
          Industry: "Technology",
          HeadquartersLocation: "Mountain View, CA",
          CompanySize: "Large (>100K employees)",
          YearOfEstablishment: 1998,
          Website: "www.google.com",
          RecruitingSince: 2005,
          OfferedRoles: "SDE, Data Scientist, Product Manager",
          TotalHires: 42,
          AveragePackage: "45 LPA",
          MaxPackage: "75 LPA",
          WorkModes: "Hybrid, Remote",
          InternshipOpportunities: "Yes",
          PrePlacementTalks: "Yes",
          RecruitmentProcess: "Online Test, Technical Interviews, HR Round",
          RequiredCGPA: 8.0,
          PreferredDepartments: "CS, EC, EE",
          ContactPerson: "John Smith, HR Manager",
          ContactEmail: "recruiting@google.com",
          Notes:
            "Primarily recruits in Fall semester, offers PPO after internships",
        },
        {
          CompanyName: "Microsoft",
          Industry: "Technology",
          HeadquartersLocation: "Redmond, WA",
          CompanySize: "Large (>100K employees)",
          YearOfEstablishment: 1975,
          Website: "www.microsoft.com",
          RecruitingSince: 2004,
          OfferedRoles: "SDE, UX Designer, Program Manager",
          TotalHires: 38,
          AveragePackage: "42 LPA",
          MaxPackage: "65 LPA",
          WorkModes: "Hybrid, In-office",
          InternshipOpportunities: "Yes",
          PrePlacementTalks: "Yes",
          RecruitmentProcess:
            "Coding Challenge, Multiple Technical Rounds, System Design, HR",
          RequiredCGPA: 7.5,
          PreferredDepartments: "CS, EC, EE, ME",
          ContactPerson: "Sarah Johnson, University Recruiter",
          ContactEmail: "campus@microsoft.com",
          Notes: "Strong focus on systems design and problem-solving skills",
        },
        {
          CompanyName: "Amazon",
          Industry: "Technology/E-commerce",
          HeadquartersLocation: "Seattle, WA",
          CompanySize: "Large (>1M employees)",
          YearOfEstablishment: 1994,
          Website: "www.amazon.com",
          RecruitingSince: 2008,
          OfferedRoles: "SDE, Business Analyst, Operations Manager",
          TotalHires: 35,
          AveragePackage: "38 LPA",
          MaxPackage: "58 LPA",
          WorkModes: "In-office, Hybrid",
          InternshipOpportunities: "Yes",
          PrePlacementTalks: "Yes",
          RecruitmentProcess:
            "Online Assessment, Leadership Principles Interview, Technical Rounds",
          RequiredCGPA: 7.5,
          PreferredDepartments: "CS, EC, ME, IE",
          ContactPerson: "Robert Chen, Technical Recruiter",
          ContactEmail: "university@amazon.com",
          Notes: "Focuses on leadership principles and behavioral questions",
        },
        {
          CompanyName: "Infosys",
          Industry: "IT Services",
          HeadquartersLocation: "Bangalore, India",
          CompanySize: "Large (>200K employees)",
          YearOfEstablishment: 1981,
          Website: "www.infosys.com",
          RecruitingSince: 2000,
          OfferedRoles:
            "Systems Engineer, Business Analyst, Technical Specialist",
          TotalHires: 65,
          AveragePackage: "8 LPA",
          MaxPackage: "12 LPA",
          WorkModes: "In-office, Hybrid",
          InternshipOpportunities: "Yes",
          PrePlacementTalks: "Yes",
          RecruitmentProcess: "Aptitude Test, Technical Interview, HR Round",
          RequiredCGPA: 6.5,
          PreferredDepartments: "All Engineering",
          ContactPerson: "Deepa Sharma, Campus Relations",
          ContactEmail: "campus.relations@infosys.com",
          Notes:
            "Mass recruiter, provides extensive training before project assignment",
        },
        {
          CompanyName: "TCS",
          Industry: "IT Services",
          HeadquartersLocation: "Mumbai, India",
          CompanySize: "Large (>500K employees)",
          YearOfEstablishment: 1968,
          Website: "www.tcs.com",
          RecruitingSince: 1998,
          OfferedRoles: "Assistant System Engineer, Digital Specialist",
          TotalHires: 78,
          AveragePackage: "7 LPA",
          MaxPackage: "10 LPA",
          WorkModes: "In-office, Hybrid",
          InternshipOpportunities: "Limited",
          PrePlacementTalks: "Yes",
          RecruitmentProcess: "NQT, Technical Interview, HR",
          RequiredCGPA: 6.0,
          PreferredDepartments: "All Engineering, MCA",
          ContactPerson: "Rajiv Kumar, Campus Initiative",
          ContactEmail: "campus.connect@tcs.com",
          Notes: "Volume recruiter with digital upskilling programs",
        },
        {
          CompanyName: "Meta (Facebook)",
          Industry: "Technology/Social Media",
          HeadquartersLocation: "Menlo Park, CA",
          CompanySize: "Large (>60K employees)",
          YearOfEstablishment: 2004,
          Website: "www.meta.com",
          RecruitingSince: 2010,
          OfferedRoles: "Software Engineer, Product Designer, Data Scientist",
          TotalHires: 15,
          AveragePackage: "48 LPA",
          MaxPackage: "68 LPA",
          WorkModes: "Remote, Hybrid",
          InternshipOpportunities: "Yes",
          PrePlacementTalks: "Yes",
          RecruitmentProcess: "Coding Interview, System Design, Behavioral",
          RequiredCGPA: 8.5,
          PreferredDepartments: "CS, EC",
          ContactPerson: "Emily Wong, University Relations",
          ContactEmail: "university@meta.com",
          Notes: "Highly competitive selection process",
        },
        {
          CompanyName: "IBM",
          Industry: "Technology/Consulting",
          HeadquartersLocation: "Armonk, NY",
          CompanySize: "Large (>300K employees)",
          YearOfEstablishment: 1911,
          Website: "www.ibm.com",
          RecruitingSince: 1995,
          OfferedRoles: "Associate Developer, Consultant, Research Engineer",
          TotalHires: 45,
          AveragePackage: "12 LPA",
          MaxPackage: "24 LPA",
          WorkModes: "Hybrid, In-office",
          InternshipOpportunities: "Yes",
          PrePlacementTalks: "Yes",
          RecruitmentProcess:
            "Cognitive Assessment, Technical Interview, Manager Round",
          RequiredCGPA: 7.0,
          PreferredDepartments: "CS, EC, EE, ME",
          ContactPerson: "David Miller, Talent Acquisition",
          ContactEmail: "campus@ibm.com",
          Notes: "Focus on AI, cloud, and quantum computing roles",
        },
        {
          CompanyName: "Apple",
          Industry: "Technology/Consumer Electronics",
          HeadquartersLocation: "Cupertino, CA",
          CompanySize: "Large (>150K employees)",
          YearOfEstablishment: 1976,
          Website: "www.apple.com",
          RecruitingSince: 2012,
          OfferedRoles: "Software Engineer, Hardware Engineer, Design Engineer",
          TotalHires: 8,
          AveragePackage: "50 LPA",
          MaxPackage: "80 LPA",
          WorkModes: "In-office, Limited Hybrid",
          InternshipOpportunities: "Limited",
          PrePlacementTalks: "Rare",
          RecruitmentProcess:
            "Multiple Technical Rounds, Design Review, Team Fit",
          RequiredCGPA: 8.5,
          PreferredDepartments: "CS, EC, ME, Design",
          ContactPerson: "Jennifer Lee, University Program",
          ContactEmail: "university@apple.com",
          Notes:
            "Very selective hiring process, focus on innovation and creativity",
        },
      ];
    }

    // Add detailed offer information by company
    if (exportOptions.offerDetails) {
      exportData.offerDetails = [
        {
          Company: "Google",
          Role: "Software Development Engineer",
          PackageBreakup: {
            Base: "25 LPA",
            Stocks: "15 LPA (vested over 4 years)",
            Bonus: "5 LPA (performance-based)",
            Total: "45 LPA",
          },
          Benefits:
            "Health Insurance, Retirement Plan, Meal Benefits, Transportation",
          WorkMode: "Hybrid (3 days in office)",
          LocationOptions: "Bangalore, Hyderabad, Gurugram",
          JobDescription:
            "Develop and maintain Google's core products and services",
          RequiredSkills:
            "Data Structures, Algorithms, System Design, Java/Python/C++",
          BondPeriod: "None",
          TrainingPeriod: "1 month",
          ContingentOffers: 6,
          FinalOffers: 5,
          JoiningDate: "July 2024",
        },
        {
          Company: "Microsoft",
          Role: "Software Engineer",
          PackageBreakup: {
            Base: "24 LPA",
            Stocks: "12 LPA (vested over 4 years)",
            Bonus: "6 LPA (joining + performance)",
            Total: "42 LPA",
          },
          Benefits:
            "Health Insurance, Retirement Benefits, Work From Home Allowance",
          WorkMode: "Hybrid (2 days in office)",
          LocationOptions: "Bangalore, Hyderabad, Noida",
          JobDescription:
            "Build and improve Microsoft's cloud and enterprise solutions",
          RequiredSkills:
            "C#/.NET, Cloud Technologies, Data Structures, Problem Solving",
          BondPeriod: "None",
          TrainingPeriod: "2 months",
          ContingentOffers: 5,
          FinalOffers: 5,
          JoiningDate: "August 2024",
        },
        {
          Company: "Amazon",
          Role: "SDE-1",
          PackageBreakup: {
            Base: "20 LPA",
            Stocks: "12 LPA (backloaded vesting)",
            Bonus: "6 LPA (signing bonus over 2 years)",
            Total: "38 LPA",
          },
          Benefits: "Health Benefits, Relocation Assistance, Amazon Discount",
          WorkMode: "In-office",
          LocationOptions: "Bangalore, Chennai, Hyderabad",
          JobDescription:
            "Develop and maintain Amazon's e-commerce and AWS systems",
          RequiredSkills:
            "Java, Distributed Systems, Database Design, Problem Solving",
          BondPeriod: "None",
          TrainingPeriod: "1 month",
          ContingentOffers: 7,
          FinalOffers: 6,
          JoiningDate: "July 2024",
        },
        {
          Company: "Infosys",
          Role: "Systems Engineer",
          PackageBreakup: {
            Base: "7 LPA",
            Variable: "1 LPA",
            Total: "8 LPA",
          },
          Benefits: "Health Insurance, Gratuity, Leave Benefits",
          WorkMode: "In-office (with some hybrid flexibility)",
          LocationOptions: "Bangalore, Pune, Chennai, Hyderabad, Mysore",
          JobDescription:
            "Support and develop enterprise applications for clients",
          RequiredSkills: "Programming Fundamentals, Basic Database Knowledge",
          BondPeriod: "1 year",
          TrainingPeriod: "3-6 months at Mysore campus",
          ContingentOffers: 70,
          FinalOffers: 65,
          JoiningDate: "Staggered (June-December 2024)",
        },
        {
          Company: "TCS",
          Role: "Assistant System Engineer",
          PackageBreakup: {
            Base: "6 LPA",
            Variable: "1 LPA",
            Total: "7 LPA",
          },
          Benefits: "Medical Insurance, Learning Portal Access",
          WorkMode: "In-office (transitioning to hybrid)",
          LocationOptions: "Pan-India (based on business needs)",
          JobDescription: "IT services and support across various domains",
          RequiredSkills: "Basic Programming, Communication Skills",
          BondPeriod: "1 year",
          TrainingPeriod: "3 months",
          ContingentOffers: 85,
          FinalOffers: 78,
          JoiningDate: "Staggered (June-December 2024)",
        },
      ];
    }

    // Add role and department distribution
    if (exportOptions.roleDistribution) {
      exportData.roleDistribution = [
        {
          Role: "Software Development Engineer",
          Count: 120,
          AveragePackage: "32 LPA",
          TopRecruiters: "Google, Microsoft, Amazon, Meta",
          DepartmentDistribution: "CS (80%), EC (15%), Other (5%)",
          GenderRatio: "Male (65%), Female (35%)",
          SkillsRequired: "DSA, Programming, System Design",
          GrowthTrend: "Increasing (15% YoY)",
        },
        {
          Role: "Data Scientist",
          Count: 45,
          AveragePackage: "28 LPA",
          TopRecruiters: "Amazon, Microsoft, Walmart Labs",
          DepartmentDistribution: "CS (70%), EC (10%), Mathematics (20%)",
          GenderRatio: "Male (60%), Female (40%)",
          SkillsRequired: "ML, Statistics, Programming, Visualization",
          GrowthTrend: "Rapidly Increasing (25% YoY)",
        },
        {
          Role: "Product Manager",
          Count: 25,
          AveragePackage: "30 LPA",
          TopRecruiters: "Google, Microsoft, Flipkart",
          DepartmentDistribution: "CS (50%), Business (30%), Other Eng (20%)",
          GenderRatio: "Male (55%), Female (45%)",
          SkillsRequired: "Technical Knowledge, Business Acumen, Leadership",
          GrowthTrend: "Stable (5% YoY)",
        },
        {
          Role: "System Engineer",
          Count: 150,
          AveragePackage: "8 LPA",
          TopRecruiters: "TCS, Infosys, Wipro, Cognizant",
          DepartmentDistribution: "CS (40%), EC (30%), EE (15%), Other (15%)",
          GenderRatio: "Male (60%), Female (40%)",
          SkillsRequired: "Basic Programming, Communication, Adaptability",
          GrowthTrend: "Stable",
        },
        {
          Role: "Hardware Engineer",
          Count: 30,
          AveragePackage: "18 LPA",
          TopRecruiters: "Intel, Samsung, Qualcomm",
          DepartmentDistribution: "EC (60%), EE (35%), CS (5%)",
          GenderRatio: "Male (75%), Female (25%)",
          SkillsRequired: "VLSI, Circuit Design, Embedded Systems",
          GrowthTrend: "Moderate Growth (8% YoY)",
        },
        {
          Role: "Business Analyst",
          Count: 35,
          AveragePackage: "15 LPA",
          TopRecruiters: "Deloitte, EY, KPMG",
          DepartmentDistribution: "Business (45%), CS (30%), Other (25%)",
          GenderRatio: "Male (50%), Female (50%)",
          SkillsRequired: "Data Analysis, Business Knowledge, Communication",
          GrowthTrend: "Increasing (12% YoY)",
        },
        {
          Role: "UX Designer",
          Count: 15,
          AveragePackage: "22 LPA",
          TopRecruiters: "Microsoft, Google, Startups",
          DepartmentDistribution: "Design (60%), CS (30%), Other (10%)",
          GenderRatio: "Male (45%), Female (55%)",
          SkillsRequired: "UI/UX Principles, Prototyping, User Research",
          GrowthTrend: "Rapidly Increasing (20% YoY)",
        },
        {
          Role: "Research Engineer",
          Count: 10,
          AveragePackage: "24 LPA",
          TopRecruiters: "IBM, Google, Academic Institutions",
          DepartmentDistribution: "CS (60%), EC (20%), Mathematics (20%)",
          GenderRatio: "Male (70%), Female (30%)",
          SkillsRequired:
            "Advanced Mathematics, Research Methodology, Programming",
          GrowthTrend: "Stable with Specialization Focus",
        },
      ];
    }

    // Add chart data based on options
    if (exportOptions.departmentWisePlacement) {
      exportData.departmentWisePlacement = chartData.departmentWisePlacement;
    }

    if (exportOptions.skillsData) {
      exportData.skillsInDemand = {
        labels: [
          "JavaScript",
          "Python",
          "Java",
          "React",
          "SQL",
          "Machine Learning",
          "Cloud",
          "DevOps",
        ],
        datasets: [
          {
            data: [80, 75, 65, 60, 55, 50, 45, 40],
          },
        ],
      };
    }

    if (exportOptions.cgpaAnalysis) {
      exportData.cgpaPlacement = {
        labels: ["6.0-7.0", "7.0-8.0", "8.0-9.0", "9.0-10.0"],
        datasets: [
          {
            data: [30, 60, 85, 95],
          },
        ],
      };

      exportData.cgpaTrends = chartData.cgpaTrends;
    }

    // Add employment types data
    if (exportOptions.placementStats) {
      exportData.employmentTypes = {
        Internship: 35,
        "Full-Time": 65,
      };

      // Add offer type data
      exportData.offerTypes = {
        "On-campus": 70,
        "Off-campus": 30,
      };

      // Add gender distribution data
      exportData.genderDistribution = {
        Male: 55,
        Female: 43,
        Other: 2,
      };

      // Add package distribution data
      exportData.packageDistribution = {
        labels: [
          "<5 LPA",
          "5-10 LPA",
          "10-15 LPA",
          "15-20 LPA",
          "20-30 LPA",
          ">30 LPA",
        ],
        datasets: [
          {
            data: [10, 25, 30, 20, 10, 5],
          },
        ],
      };
    }

    // Add company data if selected
    if (exportOptions.companyWisePlacement) {
      exportData.companyWisePlacement = {
        labels: [
          "Google",
          "Microsoft",
          "Amazon",
          "Meta",
          "Apple",
          "IBM",
          "Infosys",
          "TCS",
        ],
        datasets: [
          {
            data: [12, 10, 8, 5, 4, 7, 15, 18],
          },
        ],
      };
    }

    // Call the export function with the prepared data
    const filename = exportAnalysisData(exportData);
    console.log(`Excel file exported successfully: ${filename}`);

    // Close the export options modal if it's open
    setShowExportOptions(false);
  };

  // Student lookup handler
  const handleStudentLookup = () => {
    // In a real app, this would fetch the student data
    // For now, we just toggle the view
    setShowStudentDetails(true);
    setShowProfileTester(false);
  };

  // Toggle profile tester view
  const toggleProfileTester = () => {
    setShowProfileTester(!showProfileTester);
    if (!showProfileTester) {
      setShowStudentDetails(false);
    }
  };

  // Return to main dashboard
  const returnToDashboard = () => {
    setShowStudentDetails(false);
    setShowProfileTester(false);
  };

  // Toggle export options modal
  const toggleExportOptions = () => {
    setShowExportOptions(!showExportOptions);
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-[80svh] bg-gradient-to-br from-indigo-50 via-white to-blue-50 rounded-2xl shadow-2xl transition-all duration-500">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Faculty Analysis Dashboard
        </h1>
        <div className="flex gap-4">
          <button
            onClick={toggleProfileTester}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-700"
            title="Test the student profile component with different IDs"
          >
            <FaFlask /> Test Profiles
          </button>
          <button
            onClick={() => {
              // Quick export for company information only
              const companyExportData = {
                filters: filters,
                companyDetails: [
                  // Sample company data for quick export
                  {
                    CompanyName: "Google",
                    Industry: "Technology",
                    HeadquartersLocation: "Mountain View, CA",
                    CompanySize: "Large (>100K employees)",
                    YearOfEstablishment: 1998,
                    Website: "www.google.com",
                    RecruitingSince: 2005,
                    OfferedRoles: "SDE, Data Scientist, Product Manager",
                    TotalHires: 42,
                    AveragePackage: "45 LPA",
                    MaxPackage: "75 LPA",
                    WorkModes: "Hybrid, Remote",
                    InternshipOpportunities: "Yes",
                    PrePlacementTalks: "Yes",
                    RequiredCGPA: 8.0,
                    PreferredDepartments: "CS, EC, EE",
                  },
                  {
                    CompanyName: "Microsoft",
                    Industry: "Technology",
                    HeadquartersLocation: "Redmond, WA",
                    CompanySize: "Large (>100K employees)",
                    YearOfEstablishment: 1975,
                    Website: "www.microsoft.com",
                    RecruitingSince: 2004,
                    OfferedRoles: "SDE, UX Designer, Program Manager",
                    TotalHires: 38,
                    AveragePackage: "42 LPA",
                    MaxPackage: "65 LPA",
                    WorkModes: "Hybrid, In-office",
                  },
                  {
                    CompanyName: "Amazon",
                    Industry: "Technology/E-commerce",
                    HeadquartersLocation: "Seattle, WA",
                    CompanySize: "Large (>1M employees)",
                    YearOfEstablishment: 1994,
                    Website: "www.amazon.com",
                    RecruitingSince: 2008,
                    OfferedRoles: "SDE, Business Analyst, Operations Manager",
                    TotalHires: 35,
                    AveragePackage: "38 LPA",
                    MaxPackage: "58 LPA",
                    WorkModes: "In-office, Hybrid",
                  },
                ],
                offerDetails: [
                  // Sample offer data for quick export
                  {
                    Company: "Google",
                    Role: "Software Development Engineer",
                    PackageBreakup: {
                      Base: "25 LPA",
                      Stocks: "15 LPA (vested over 4 years)",
                      Bonus: "5 LPA (performance-based)",
                      Total: "45 LPA",
                    },
                    Benefits:
                      "Health Insurance, Retirement Plan, Meal Benefits",
                    WorkMode: "Hybrid (3 days in office)",
                    LocationOptions: "Bangalore, Hyderabad, Gurugram",
                  },
                  {
                    Company: "Microsoft",
                    Role: "Software Engineer",
                    PackageBreakup: {
                      Base: "24 LPA",
                      Stocks: "12 LPA (vested over 4 years)",
                      Bonus: "6 LPA (joining + performance)",
                      Total: "42 LPA",
                    },
                    Benefits: "Health Insurance, Retirement Benefits",
                    WorkMode: "Hybrid (2 days in office)",
                  },
                  {
                    Company: "Amazon",
                    Role: "SDE-1",
                    PackageBreakup: {
                      Base: "20 LPA",
                      Stocks: "12 LPA (backloaded vesting)",
                      Bonus: "6 LPA (signing bonus over 2 years)",
                      Total: "38 LPA",
                    },
                    Benefits: "Health Benefits, Relocation Assistance",
                    WorkMode: "In-office",
                  },
                ],
                roleDistribution: [
                  {
                    Role: "Software Development Engineer",
                    Count: 120,
                    AveragePackage: "32 LPA",
                    TopRecruiters: "Google, Microsoft, Amazon, Meta",
                    DepartmentDistribution: "CS (80%), EC (15%), Other (5%)",
                  },
                  {
                    Role: "Data Scientist",
                    Count: 45,
                    AveragePackage: "28 LPA",
                    TopRecruiters: "Amazon, Microsoft, Walmart Labs",
                    DepartmentDistribution:
                      "CS (70%), EC (10%), Mathematics (20%)",
                  },
                  {
                    Role: "Product Manager",
                    Count: 25,
                    AveragePackage: "30 LPA",
                    TopRecruiters: "Google, Microsoft, Flipkart",
                    DepartmentDistribution:
                      "CS (50%), Business (30%), Other Eng (20%)",
                  },
                ],
              };

              const filename = exportAnalysisData(companyExportData);
              console.log(`Quick company Excel export: ${filename}`);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 mr-2"
          >
            <FaFileExcel /> Quick Company Export
          </button>
          <div className="relative">
            <button
              onClick={toggleExportOptions}
              className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700"
              title="Export analysis data to Excel"
            >
              <FaFileExcel /> Export Data
            </button>

            {/* Export Options Modal */}
            {showExportOptions && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg z-50 p-4 border border-gray-200">
                <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-800">
                  <FaCog className="mr-2 text-gray-600" /> Export Options
                </h3>
                <div className="space-y-3 text-gray-800">
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="studentInfo"
                        checked={exportOptions.studentInfo}
                        onChange={handleExportOptionChange}
                        className="rounded border-gray-300 text-indigo-600 mr-2"
                      />
                      Student Information
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="placementStats"
                        checked={exportOptions.placementStats}
                        onChange={handleExportOptionChange}
                        className="rounded border-gray-300 text-indigo-600 mr-2"
                      />
                      Placement Statistics
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="departmentWisePlacement"
                        checked={exportOptions.departmentWisePlacement}
                        onChange={handleExportOptionChange}
                        className="rounded border-gray-300 text-indigo-600 mr-2"
                      />
                      Department-wise Placement
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="companyWisePlacement"
                        checked={exportOptions.companyWisePlacement}
                        onChange={handleExportOptionChange}
                        className="rounded border-gray-300 text-indigo-600 mr-2"
                      />
                      Company-wise Placement
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="companyDetails"
                        checked={exportOptions.companyDetails}
                        onChange={handleExportOptionChange}
                        className="rounded border-gray-300 text-indigo-600 mr-2"
                      />
                      Detailed Company Information
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="offerDetails"
                        checked={exportOptions.offerDetails}
                        onChange={handleExportOptionChange}
                        className="rounded border-gray-300 text-indigo-600 mr-2"
                      />
                      Offer Details by Company
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="roleDistribution"
                        checked={exportOptions.roleDistribution}
                        onChange={handleExportOptionChange}
                        className="rounded border-gray-300 text-indigo-600 mr-2"
                      />
                      Role Distribution
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="cgpaAnalysis"
                        checked={exportOptions.cgpaAnalysis}
                        onChange={handleExportOptionChange}
                        className="rounded border-gray-300 text-indigo-600 mr-2"
                      />
                      CGPA Analysis
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="skillsData"
                        checked={exportOptions.skillsData}
                        onChange={handleExportOptionChange}
                        className="rounded border-gray-300 text-indigo-600 mr-2"
                      />
                      Skills Data
                    </label>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => setShowExportOptions(false)}
                    className="px-3 py-1 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleExportData}
                    className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Export
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Profile Tester View */}
      {showProfileTester ? (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Student Profile Tester
            </h2>
            <button
              onClick={returnToDashboard}
              className="text-indigo-600 hover:underline"
            >
              Back to Dashboard
            </button>
          </div>
          <StudentProfileTester />
        </>
      ) : showStudentDetails ? (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Student Profile
            </h2>
            <button
              onClick={returnToDashboard}
              className="text-indigo-600 hover:underline"
            >
              Back to Analysis
            </button>
          </div>
          <StudentProfileCard studentId={selectedStudentId} />
        </>
      ) : (
        <>
          {/* Filters Section */}
          <FilterSection
            filters={filters}
            onFilterChange={handleFilterChange}
            onSkillsChange={handleSkillsChange}
          />

          {/* Student Search for detailed profile */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex items-center mb-4">
              <FaUserGraduate className="text-indigo-500 mr-2 text-xl" />
              <h2 className="text-xl font-semibold">Student Profile Lookup</h2>
            </div>
            <div className="flex items-end gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Student ID or Name
                </label>
                <input
                  type="text"
                  placeholder="Enter student ID or name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onChange={(e) => setSelectedStudentId(e.target.value)}
                />
              </div>
              <button
                onClick={handleStudentLookup}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-700"
              >
                <FaSearch /> Lookup
              </button>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <StudentCharts />
            <StudentInterestsChart />
          </div>

          <CGPATrendChart />

          {/* Student Data Table */}
          <StudentTable />
        </>
      )}
    </div>
  );
};

export default FacultyAnalysis;
