import React from "react";
import { Link } from "react-router";
import ScoreCircle from "./ScoreCard";

const ResumeCard = ({
  resume: { id, companyName, jobTitle, feedback , imagePath},
}: {
  resume: Resume;
}) => {
  return (
    <Link
      to={`/resume/${id}`}
      className="resume-card animate-in fade-in duration-1000 "
    >
      <div className="resume-card-header">
        <div className="flex flex-col gap-2">
          <h2 className="text-black font-bold wrap-break-word">
            {companyName}
          </h2>
          <h3 className="text-lg wrap-break-word text-gray-500">{jobTitle}</h3>
        </div>
        <div className="shrink-0">
          <ScoreCircle score={feedback.overallScore} />
        </div>
      </div>
      <div className="gradient-border animate-in fade-in duration-1000">
        <div className="w-full h-full">
          <img src={imagePath} alt="" className="w-full h-[350px] max-sm:h-[200px] object-cover object-top  " />
        </div>
      </div>
    </Link>
  );
};

export default ResumeCard;
