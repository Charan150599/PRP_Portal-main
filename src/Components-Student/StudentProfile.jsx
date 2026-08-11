import React, { useState } from 'react'
import './StudentProfile.css'
import ProfileBellIcon from '../assets/StudentsAssets/ProfileBellIcon.png'
import ProfileChatIcon from '../assets/StudentsAssets/ProfileChatIcon.png'
import ProfileSearchIcon from '../assets/StudentsAssets/ProfileSearchIcon.png'
import ProfileEditIcon from '../assets/StudentsAssets/ProfileEditIcon.png'
import ProfileMailIcon from '../assets/StudentsAssets/ProfileMailIcon.png'
import ProfilePhoneIcon from '../assets/StudentsAssets/ProfilePhoneIcon.png'
import ProfileLocationIcon from '../assets/StudentsAssets/ProfileLocationIcon.png'
import ProfilePersonalInfoIcon from '../assets/StudentsAssets/ProfilePersonalInfoIcon.png'
import ProfileAcademicInfoIcon from '../assets/StudentsAssets/ProfileAcademicInfoIcon.png'
import ProfileAboutMeIcon from '../assets/StudentsAssets/ProfileAboutMeIcon.png'
import ProfileSkillsIcon from '../assets/StudentsAssets/ProfileSkillsIcon.png'
import ProfileAvatarLarge from '../assets/StudentsAssets/ProfileAvatarLarge.png'
import ProfileAvatarSmall from '../assets/StudentsAssets/ProfileAvatarSmall.png'

const StudentProfile = () => {
  const [notificationCount, setNotificationCount] = useState(5)
  const [messageCount, setMessageCount] = useState(3)

  const personalInfo = [
    { label: 'Email', value: 'priya5@eduhire.com' },
    { label: 'Phone no', value: '+1 (555) 012-3456' },
    { label: 'Date of birth', value: 'October 14, 2001' },
    { label: 'Gender', value: 'Female' },
  ]

  const academicInfo = [
    { label: 'Registration Number', value: '21PY5055' },
    { label: 'Degree', value: "Bachelor's of Engineering" },
    { label: 'Graduation Year', value: '2022' },
    { label: 'CGPA', value: '7.9' },
  ]

  const skills = ['HTML', 'Figma', 'Adobe XD', 'Photoshop', 'CSS']

  return (
    <div className="StudentProfile-Page">
      <div className="StudentProfile-Topbar">
        <div className="StudentProfile-Search-Box">
          <img src={ProfileSearchIcon} alt="Search" className="StudentProfile-Search-Icon" />
          <input type="text" placeholder="Search companies, drives..." className="StudentProfile-Search-Input" />
        </div>

        <div className="StudentProfile-Topbar-Right">
          <div className="StudentProfile-Icon-Wrap">
            <img src={ProfileBellIcon} alt="Notifications" className="StudentProfile-Topbar-Icon" />
            {notificationCount > 0 && (
              <span className="StudentProfile-Badge">{notificationCount}</span>
            )}
          </div>
          <div className="StudentProfile-Icon-Wrap">
            <img src={ProfileChatIcon} alt="Messages" className="StudentProfile-Topbar-Icon" />
            {messageCount > 0 && (
              <span className="StudentProfile-Badge">{messageCount}</span>
            )}
          </div>
          <img src={ProfileAvatarSmall} alt="Priyanka avatar" className="StudentProfile-Avatar-Small" />
          <div className="StudentProfile-Topbar-User">
            <span className="StudentProfile-Topbar-Name">Priyanka</span>
            <span className="StudentProfile-Topbar-Role">Student</span>
          </div>
        </div>
      </div>

      <div className="StudentProfile-Hero-Card">
        <div className="StudentProfile-Hero-Left">
          <div className="StudentProfile-Avatar-Wrap">
            <img src={ProfileAvatarLarge} alt="Priyanka" className="StudentProfile-Avatar-Large" />
            <span className="StudentProfile-Status-Badge">Active</span>
          </div>

          <div className="StudentProfile-Hero-Details">
            <h2 className="StudentProfile-Hero-Name">Priyanka</h2>
            <p className="StudentProfile-Hero-Role">Student</p>

            <div className="StudentProfile-Hero-Meta">
              <span className="StudentProfile-Meta-Item">
                <img src={ProfileMailIcon} alt="Email" className="StudentProfile-Meta-Icon" />
                priya5@eduhire.com
              </span>
              <span className="StudentProfile-Meta-Item">
                <img src={ProfilePhoneIcon} alt="Phone" className="StudentProfile-Meta-Icon" />
                +91 9632417896
              </span>
              <span className="StudentProfile-Meta-Item">
                <img src={ProfileLocationIcon} alt="Location" className="StudentProfile-Meta-Icon" />
                Chennai, Tamil Nadu
              </span>
            </div>

            <p className="StudentProfile-Hero-Bio">
              Passionate about building user-friendly applications and continuously learning new technologies.
            </p>
          </div>
        </div>

        <button type="button" className="StudentProfile-Edit-Btn">
          <img src={ProfileEditIcon} alt="Edit" className="StudentProfile-Edit-Icon" />
          Edit Profile
        </button>
      </div>

      <div className="StudentProfile-Grid">
        <div className="StudentProfile-Card">
          <div className="StudentProfile-Card-Title">
            <img src={ProfilePersonalInfoIcon} alt="Personal Information" className="StudentProfile-Card-Icon" />
            <h3>Personal Information</h3>
          </div>
          <div className="StudentProfile-Info-Grid">
            {personalInfo.map((item) => (
              <div className="StudentProfile-Info-Item" key={item.label}>
                <span className="StudentProfile-Info-Label">{item.label}</span>
                <span className="StudentProfile-Info-Value">{item.value}</span>
              </div>
            ))}
            <div className="StudentProfile-Info-Item StudentProfile-Info-Full">
              <span className="StudentProfile-Info-Label">Address</span>
              <span className="StudentProfile-Info-Value">745 ECR road, Chennai - 100010</span>
            </div>
          </div>
        </div>

        <div className="StudentProfile-Card">
          <div className="StudentProfile-Card-Title">
            <img src={ProfileAcademicInfoIcon} alt="Academic Information" className="StudentProfile-Card-Icon" />
            <h3>Academic Information</h3>
          </div>
          <div className="StudentProfile-Info-Grid">
            {academicInfo.map((item) => (
              <div className="StudentProfile-Info-Item" key={item.label}>
                <span className="StudentProfile-Info-Label">{item.label}</span>
                <span className="StudentProfile-Info-Value">{item.value}</span>
              </div>
            ))}
            <div className="StudentProfile-Info-Item StudentProfile-Info-Full">
              <span className="StudentProfile-Info-Label">Department</span>
              <span className="StudentProfile-Info-Value">Computer Science and Engineering</span>
            </div>
          </div>
        </div>

        <div className="StudentProfile-Card">
          <div className="StudentProfile-Card-Title">
            <img src={ProfileAboutMeIcon} alt="About Me" className="StudentProfile-Card-Icon" />
            <h3>About Me</h3>
          </div>
          <p className="StudentProfile-About-Text">
            I am a passionate and detail-oriented software engineer. I am a quick learner, good team
            player, and always eager to improve my technical and problem solving skills.
          </p>
        </div>

        <div className="StudentProfile-Card">
          <div className="StudentProfile-Card-Title">
            <img src={ProfileSkillsIcon} alt="My Skills" className="StudentProfile-Card-Icon" />
            <h3>My Skills</h3>
          </div>
          <div className="StudentProfile-Skills-Wrap">
            {skills.map((skill) => (
              <span className="StudentProfile-Skill-Chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentProfile