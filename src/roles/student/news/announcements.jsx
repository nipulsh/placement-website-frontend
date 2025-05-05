import React, { useState } from "react";
import Announcement from "./announcement";
import AnnouncementDetails from "./announcement-details";

const StudentNews = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const announcements = [
    {
      day: "Today",
      time: "10:00 AM",
      heading: "Campus Recruitment Drive",
      shortDiscription:
        "Google is coming to campus for recruitment on March 25th. All final year students are eligible.",
      longDiscription:
        "Google is organizing a campus recruitment drive on March 25th, 2024. The event will take place in the main auditorium from 9:00 AM to 5:00 PM. All final year students from Computer Science, Electronics, and related branches are eligible to participate. Please bring your updated resume, academic certificates, and a government-issued ID. The selection process will include an aptitude test, technical interview, and HR round. Dress code: Business formal.",
    },
    {
      day: "Yesterday",
      time: "02:30 PM",
      heading: "Internship Opportunity",
      shortDiscription:
        "Microsoft is offering summer internships for 3rd year students. Apply by March 20th.",
      longDiscription:
        "Microsoft is offering summer internship opportunities for 3rd year students. The internship duration is 8 weeks, starting from June 1st, 2024. Selected candidates will work on real-world projects under the guidance of experienced mentors. The stipend is ₹50,000 per month. Eligibility criteria: Minimum 8.0 CGPA, strong programming skills, and knowledge of data structures and algorithms. The application deadline is March 20th, 2024. Shortlisted candidates will be notified by March 25th.",
    },
    {
      day: "Mar 15",
      time: "11:00 AM",
      heading: "Workshop Announcement",
      shortDiscription:
        "Free workshop on Machine Learning basics this weekend. Limited seats available.",
      longDiscription:
        "The Computer Science department is organizing a free workshop on Machine Learning basics this weekend (March 23rd-24th). The workshop will cover topics like supervised learning, unsupervised learning, neural networks, and practical implementation using Python. The sessions will be conducted by industry experts from AI Research Labs. Limited seats are available. Registration is mandatory. Please bring your laptops with Python and necessary libraries installed. The workshop will be held in Lab 3, Computer Science Department.",
    },
    {
      day: "Mar 14",
      time: "04:00 PM",
      heading: "Project Submission Deadline",
      shortDiscription:
        "Final year project submission deadline extended to March 30th.",
      longDiscription:
        "The deadline for final year project submission has been extended to March 30th, 2024. All project groups must submit their final reports, code, and documentation by this date. The submission should include: 1. Project report (hard copy and soft copy) 2. Source code with proper documentation 3. Presentation slides 4. Demo video (if applicable) Please ensure all submissions are properly formatted and meet the department's guidelines. Late submissions will not be accepted.",
    },
    {
      day: "Mar 13",
      time: "09:00 AM",
      heading: "Placement Training Session",
      shortDiscription:
        "Mock interview sessions scheduled for next week. Sign up at the placement cell.",
      longDiscription:
        "The placement cell is organizing mock interview sessions next week (March 18th-22nd). These sessions will help students prepare for upcoming placement drives. The mock interviews will be conducted by industry professionals and alumni. Each session will include: 1. Technical interview 2. HR interview 3. Feedback and improvement suggestions Students can sign up at the placement cell office. Slots are available from 9:00 AM to 5:00 PM. Please bring your updated resume and be prepared with your technical subjects.",
    },
    {
      day: "Mar 12",
      time: "03:00 PM",
      heading: "Internship Opportunity",
      shortDiscription:
        "Microsoft is offering summer internships for 3rd year students. Apply by March 20th.",
      longDiscription: "",
    },
  ];

  const handleAnnouncementClick = (announcement) => {
    setSelectedAnnouncement(announcement);
  };

  return (
    <>
      <div className="flex h-full w-full gap-4">
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto">
          {announcements.map((announcement, index) => (
            <div
              key={index}
              onClick={() => handleAnnouncementClick(announcement)}
              className="cursor-pointer"
            >
              <Announcement
                day={announcement.day}
                time={announcement.time}
                heading={announcement.heading}
                shortDiscription={announcement.shortDiscription}
                longDiscription={announcement.longDiscription}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-1">
          <AnnouncementDetails announcement={selectedAnnouncement} />
        </div>
      </div>
    </>
  );
};

export default StudentNews;
