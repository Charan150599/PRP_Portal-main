import React, { useState } from 'react'
import './SideMenu.css'
import chevronDown from '../../Assets/SideMenuAssets/chevronArrowDown.png'

const SideMenu = () => {
  const [isApplicationsOpen, setIsApplicationsOpen] = useState(false)

  const menuList = [
    'Dashboard',
    'Job Search',
    'Interview Schedule',
    'Assessments',
    'Applications',
    'offers',
    'Training & Courses',
    'Resume Manager',
    'Profile',
    'Notification',
    'Settings',
  ]

  const handleMenuClick = (menuName) => {
    if (menuName === 'Applications') {
      setIsApplicationsOpen(!isApplicationsOpen)
    }
  }

  return (
    <div className="Prp-Side-Menu-Container">
      {menuList.map((menuName) => (
        <div
          key={menuName}
          className="Prp-Side-Menu-Item"
          onClick={() => handleMenuClick(menuName)}
        >
          <span className="Prp-Side-Menu-Item-Text">{menuName}</span>

          {menuName === 'Applications' && (
            <img
              className={
                isApplicationsOpen
                  ? 'Prp-Side-Menu-Arrow Prp-Side-Menu-Arrow-Open'
                  : 'Prp-Side-Menu-Arrow'
              }
              src={chevronDown}
              alt="chevronDown"
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default SideMenu