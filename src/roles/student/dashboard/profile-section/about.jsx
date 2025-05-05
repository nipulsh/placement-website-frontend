import ProfileExplaination from "./profile-explain";

const DashboardProfileAbout = (props) => {
  const headings = ["Experience", "Projects", "Education", "Skills"];

  const profiles = [
    [
      {
        jobTitle: "Software Engineer",
        company: "Google",
        startingDate: "2022-01-01",
        endingDate: "2023-01-01",
        jobDiscription: "Worked on full-stack development.",
        skillsUsed: ["React", "Node.js", "MongoDB"],
      },
      {
        jobTitle: "Data Scientist",
        company: "Microsoft",
        startingDate: "2023-01-01",
        endingDate: "2024-01-01",
        jobDiscription: "Worked on data analysis and machine learning.",
        skillsUsed: ["Python", "TensorFlow", "PyTorch"],
      },
    ],
    [
      {
        projectName: "AI Assistant",
        company: "Google",
        startingDate: "2022-01-01",
        endingDate: "2023-01-01",
        ProjectDiscription: "Developed an AI-powered chatbot.",
        skillsUsed: ["Python", "TensorFlow", "Flask"],
      },
    ],
    [
      {
        institution: "MIT",
        course: "Computer Science",
        startingDate: "2018-08-01",
        endingDate: "2022-05-01",
        courseDiscription: "Studied software engineering.",
        lernings: ["Algorithms", "Data Structures", "AI"],
      },
    ],
    [
      {
        skillName: "React",
        skillLevel: "Advanced",
        skillDiscription: "Experience in building scalable React apps.",
      },
    ],
  ];

  return (
    <div className="h-full w-full flex flex-col mt-3">
      <div className=" flex h-auto justify-between">
        {headings.map((heading, index) => (
          <button
            key={index}
            className={`cursor-pointer text-[1.1rem] pt-1 pb-2 pr-3 pl-3 text-center rounded-[20px] ${
              props.section === index ? "bg-[#6635D9]" : "bg-[#979EB0]"
            }`}
            onClick={() => props.handleSetSection(index)}
          >
            {heading}
          </button>
        ))}
      </div>
      <div className="flex-9/10 flex flex-col gap-3 mt-2 overflow-y-auto overflow-x-hidden">
        {profiles[props.section]?.map((entry, index) => (
          <ProfileExplaination
            key={index}
            profile={entry}
            heading={headings[props.section]}
            section={props.section}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardProfileAbout;
