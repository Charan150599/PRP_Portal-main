import React from "react";
import "./AiRecommendedJobs.css";
import sparkles from "../../assets/AiRecommendedJobsAssets/Sparkles.png";
import arrowRight from "../../assets/AiRecommendedJobsAssets/arrowRight.png";
import locationPin from "../../assets/AiRecommendedJobsAssets/locationPin.png";

const AiRecommendedJobs = () => {
  const jobs = [
    { id: 1, initial: "T", title: "Software Engineer", company: "TechNova Solutions", location: "Bangalore", match: "92%", readiness: "80%" },
    { id: 2, initial: "A", title: "UI/UX Designer", company: "Aura Labs", location: "Bangalore", match: "82%", readiness: "76%" },
    { id: 3, initial: "A", title: "Frontend Developer", company: "GoNext Technologies", location: "Bangalore", match: "80%", readiness: "69" },
  ];

  return (
    <div className="Prp-Ai-Recommended-Jobs-Container">
      <div className="Prp-Ai-Recommended-Jobs-Header">
        <div className="Prp-Ai-Recommended-Jobs-Heading">
          <img className="Prp-Ai-Recommended-Jobs-Sparkle" src={sparkles} alt="sparkles" />
          <h2 className="Prp-Ai-Recommended-Jobs-Title">AI Recommended Jobs</h2>
        </div>
        <button className="Prp-Ai-Recommended-Jobs-View-All">
          View All
          <img className="Prp-Ai-Recommended-Jobs-Arrow" src={arrowRight} alt="arrowRight" />
        </button>
      </div>

      <p className="Prp-Ai-Recommended-Jobs-Subtitle">
        Based on your profile, skills and career goals, Improve React and
        communication skills to increase your placement readiness.
      </p>

      <div className="Prp-Ai-Recommended-Jobs-List">
        {jobs.map((job) => (
          <div key={job.id} className="Prp-Ai-Recommended-Jobs-Card">
            <div className="Prp-Ai-Recommended-Jobs-Initial">{job.initial}</div>

            <div className="Prp-Ai-Recommended-Jobs-Details">
              <h3 className="Prp-Ai-Recommended-Jobs-Job-Title">{job.title}</h3>
              <p className="Prp-Ai-Recommended-Jobs-Company">{job.company}</p>
              <div className="Prp-Ai-Recommended-Jobs-Location-Row">
                <img className="Prp-Ai-Recommended-Jobs-Pin" src={locationPin} alt="locationPin" />
                <span>{job.location}</span>
              </div>
            </div>

            <div className="Prp-Ai-Recommended-Jobs-Stat">
              <span className="Prp-Ai-Recommended-Jobs-Badge">{job.match}</span>
              <span className="Prp-Ai-Recommended-Jobs-Stat-Label">Job Match</span>
            </div>

            <div className="Prp-Ai-Recommended-Jobs-Stat">
              <span className="Prp-Ai-Recommended-Jobs-Badge">{job.readiness}</span>
              <span className="Prp-Ai-Recommended-Jobs-Stat-Label">Readiness</span>
            </div>

            <button className="Prp-Ai-Recommended-Jobs-View-Job">
              View Job
              <img className="Prp-Ai-Recommended-Jobs-Arrow" src={arrowRight} alt="arrowRight" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiRecommendedJobs;