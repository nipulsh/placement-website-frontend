import React from "react";

const ProfileExplaination = ({ profile, section }) => {
  if (!profile) return <p>No data available.</p>;

  return (
    <div className="h-full overflow-y-auto flex flex-col text-[#0C0C0C99]">
      {section === 0 && (
        <>
          <h1 className="capalitalize font-bold">{profile.jobTitle}</h1>
          <h4>{profile.company}</h4>
          <h5 className="text-[10px] text-black">
            <span>{profile.startingDate}</span> -{" "}
            <span>{profile.endingDate}</span>
          </h5>
          <p>
            <span className="text-black">description: </span>
            {profile.jobDiscription}
          </p>
          <ul className="flex gap-2">
            <span className="text-black">skills:</span>{" "}
            {profile.skillsUsed.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </>
      )}

      {section === 1 && (
        <>
          <h1 className="capalitalize font-bold">{profile.projectName}</h1>
          <h4>{profile.company}</h4>
          <h5>
            <span>{profile.startingDate}</span> -{" "}
            <span>{profile.endingDate}</span>
          </h5>
          <p>{profile.ProjectDiscription}</p>
          <ul>
            {profile.skillsUsed.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </>
      )}

      {section === 2 && (
        <>
          <h1 className="capalitalize font-bold">{profile.institution}</h1>
          <h4>{profile.course}</h4>
          <h5>
            <span>{profile.startingDate}</span> -{" "}
            <span>{profile.endingDate}</span>
          </h5>
          <p>{profile.courseDiscription}</p>
          <ul>
            {profile.lernings.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </>
      )}

      {section === 3 && (
        <>
          <h1 className="capalitalize font-bold">{profile.skillName}</h1>
          <h4>Level: {profile.skillLevel}</h4>
          <p>{profile.skillDiscription}</p>
        </>
      )}
    </div>
  );
};

export default ProfileExplaination;
