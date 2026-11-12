import React from 'react'
import './CandidateDashboard.css'
import SideMenu from '../SideMenu/SideMenu'
import AiRecommendedJobs from '../AiRecommendedJobs/AiRecommendedJobs'

const CandidateDashboard = () => {
  return (
    <div className="Prp-Candidate-Dashboard-Container">
      <div className="Prp-Candidate-Dashboard-Sidebar">
        <SideMenu />
      </div>

      <div className="Prp-Candidate-Dashboard-Content">
        <AiRecommendedJobs />
      </div>
    </div>
  )
}

export default CandidateDashboard