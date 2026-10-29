import React from "react";
import "./LandingPage.css";

import logoIcon from "../../assets/LandingPageAssets/logoIcon.png";
import heroIllustration from "../../assets/LandingPageAssets/heroIllustration.png";
import wideJobOpportunitiesIcon from "../../assets/LandingPageAssets/wideJobOpportunitiesIcon.png";
import aiResumeMatchingIcon from "../../assets/LandingPageAssets/aiResumeMatchingIcon.png";
import trainingSkillReadinessIcon from "../../assets/LandingPageAssets/trainingSkillReadinessIcon.png";
import placementAnalyticsIcon from "../../assets/LandingPageAssets/placementAnalyticsIcon.png";
import forEveryUserIcon from "../../assets/LandingPageAssets/forEveryUserIcon.png";
import userAvatarIcon from "../../assets/LandingPageAssets/userAvatarIcon.png";
import starIcon from "../../assets/LandingPageAssets/starRatingIcon.png";
import quoteMarkIcon from "../../assets/LandingPageAssets/quoteMarkIcon.png";
import grokLogo from "../../assets/LandingPageAssets/grokLogo.png";
import wiproLogo from "../../assets/LandingPageAssets/wiproLogo.png";
import qwenLogo from "../../assets/LandingPageAssets/qwenLogo.png";
import deepseekLogo from "../../assets/LandingPageAssets/deepseekLogo.png";
import infosysLogo from "../../assets/LandingPageAssets/infosysLogo.png";
import claudeLogo from "../../assets/LandingPageAssets/claudeLogo.png";
import openAiLogo from "../../assets/LandingPageAssets/openAiLogo.png";
import facebookIcon from "../../assets/LandingPageAssets/facebookIcon.png";
import xIcon from "../../assets/LandingPageAssets/xIcon.png";
import instagramIcon from "../../assets/LandingPageAssets/instagramIcon.png";

const starCountList = [1, 2, 3, 4, 5];

const navLinks = [
  { id: "home", label: "Home", isActive: true },
  { id: "features", label: "Features", isActive: false },
  { id: "recruiters", label: "For Recruiters/Employers", isActive: false },
  { id: "institutions", label: "For Training Institutions", isActive: false },
  { id: "successStories", label: "Success Stories", isActive: false },
];

const featureCards = [
  {
    id: "wideJobOpportunities",
    icon: wideJobOpportunitiesIcon,
    title: "Wide Job Opportunities",
    description: "Access to thousands of job openings from top companies",
  },
  {
    id: "aiResumeMatching",
    icon: aiResumeMatchingIcon,
    title: "AI Resume Matching",
    description: "Get matched with the right jobs using AI technology",
  },
  {
    id: "trainingSkillReadiness",
    icon: trainingSkillReadinessIcon,
    title: "Training & Skill Readiness",
    description: "Build in-demand skills with industry-relevant training programs.",
  },
  {
    id: "placementAnalytics",
    icon: placementAnalyticsIcon,
    title: "Placement Analytics",
    description: "Track performance and make data-driven decisions",
  },
  {
    id: "forEveryUser",
    icon: forEveryUserIcon,
    title: "For Every User",
    description:
      "Tailored benefits for job seekers, recruiters and training institutions",
  },
];

const testimonials = [
  {
    id: "sarahChen",
    name: "Sarah Chen",
    role: "Product Designer @ Aura Systems",
    review:
      "ConnectHire transformed my job search. The AI matching felt intuitive, and within two weeks, I was interviewed and hired by my dream company in fintech. The process was seamless.",
  },
  {
    id: "jhonFrancis",
    name: "Jhon Francis",
    role: "Recruitment Manager @ Vertex Solutions",
    review:
      "The community gave me the confidence to showcase my work and connect with amazing people. I got my first full-time offer within 6 months. The support and guidance here are unmatched.",
  },
  {
    id: "davidMiller",
    name: "David Miller",
    role: "Talent Director @ Zenith Capital",
    review:
      "The quality of candidates on ConnectHire is unmatched. We reduced our time-to-hire by 40% and have found some of our most productive team members through their automated screening.",
  },
];

const companyLogos = [
  { id: "grok", src: grokLogo, alt: "Grok" },
  { id: "wipro", src: wiproLogo, alt: "Wipro" },
  { id: "qwen", src: qwenLogo, alt: "Qwen" },
  { id: "deepseek", src: deepseekLogo, alt: "DeepSeek" },
  { id: "infosys", src: infosysLogo, alt: "Infosys" },
  { id: "claude", src: claudeLogo, alt: "Claude" },
  { id: "openAi", src: openAiLogo, alt: "OpenAI" },
];

const footerColumns = [
  {
    id: "company",
    title: "COMPANY",
    links: ["About Us", "Careers", "Contact"],
  },
  {
    id: "platform",
    title: "PLATFORM",
    links: [
      "Job Postings",
      "AI Resume Matching",
      "Training & Skill Readiness",
      "Placement Analytics",
    ],
  },
  {
    id: "support",
    title: "SUPPORT",
    links: ["Help Center", "FAQ", "Raise Issue", "Contact Support"],
  },
  {
    id: "legal",
    title: "LEGAL",
    links: ["Privacy Policy", "Terms & Conditions", "Cookie Policy"],
  },
];

const socialIcons = [
  { id: "facebook", src: facebookIcon, alt: "Facebook" },
  { id: "x", src: xIcon, alt: "X" },
  { id: "instagram", src: instagramIcon, alt: "Instagram" },
];

const LandingPage = () => {
  return (
    <div className="Prp-Landing-Page-Container">
      {/* Header */}
      <header className="Prp-Landing-Page-Header">
        <div className="Prp-Landing-Page-Header-Brand">
          <img
            className="Prp-Landing-Page-Header-Logo"
            src={logoIcon}
            alt="Placement and Recruitment Platform logo"
          />
          <h1 className="Prp-Landing-Page-Header-Title">
            Placement &amp; <br /> Recruitment Platform
          </h1>
        </div>

        <nav className="Prp-Landing-Page-Header-Nav">
          {navLinks.map((navItem) => (
            <a
              key={navItem.id}
              href={`#${navItem.id}`}
              className={`Prp-Landing-Page-Header-Nav-Link ${
                navItem.isActive ? "Prp-Landing-Page-Header-Nav-Link-Active" : ""
              }`}
            >
              {navItem.label}
            </a>
          ))}
        </nav>

        <div className="Prp-Landing-Page-Header-Actions">
          <button className="Prp-Landing-Page-Header-Login-Button">Login</button>
          <button className="Prp-Landing-Page-Header-Register-Button">
            Register
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="Prp-Landing-Page-Hero" id="home">
        <div className="Prp-Landing-Page-Hero-Content">
          <p className="Prp-Landing-Page-Hero-Label">BUILD YOUR FUTURE</p>
          <h2 className="Prp-Landing-Page-Hero-Heading">
            Connect. Learn. <br /> Get Placed.
          </h2>
          <p className="Prp-Landing-Page-Hero-Description">
            The all-in-one platform that bridges the gap between talented
            individuals, top employers and training institutions.
          </p>
          <div className="Prp-Landing-Page-Hero-Buttons">
            <button className="Prp-Landing-Page-Hero-Primary-Button">
              Get Started
            </button>
            <button className="Prp-Landing-Page-Hero-Secondary-Button">
              Explore Jobs
            </button>
          </div>
        </div>
        <div className="Prp-Landing-Page-Hero-Image-Container">
          <img
            className="Prp-Landing-Page-Hero-Image"
            src={heroIllustration}
            alt="Person reviewing placement analytics"
          />
        </div>
      </section>

      {/* Why choose us */}
      <section className="Prp-Landing-Page-Features" id="features">
        <p className="Prp-Landing-Page-Features-Label">WHY CHOOSE US</p>
        <h3 className="Prp-Landing-Page-Features-Heading">
          Everything You Need for a Successful Career
        </h3>
        <div className="Prp-Landing-Page-Features-Grid">
          {featureCards.map((feature) => (
            <div key={feature.id} className="Prp-Landing-Page-Feature-Card">
              <div className="Prp-Landing-Page-Feature-Icon-Container">
                <img
                  className="Prp-Landing-Page-Feature-Icon"
                  src={feature.icon}
                  alt={feature.title}
                />
              </div>
              <h4 className="Prp-Landing-Page-Feature-Title">{feature.title}</h4>
              <p className="Prp-Landing-Page-Feature-Description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Success stories */}
      <section className="Prp-Landing-Page-Stories" id="successStories">
        <p className="Prp-Landing-Page-Stories-Label">SUCCESS STORIES</p>
        <h3 className="Prp-Landing-Page-Stories-Heading">WHAT OUR USERS SAY</h3>
        <div className="Prp-Landing-Page-Stories-Grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="Prp-Landing-Page-Story-Card">
              <img
                className="Prp-Landing-Page-Story-Quote-Mark"
                src={quoteMarkIcon}
                alt=""
              />
              <div className="Prp-Landing-Page-Story-Header">
                <div className="Prp-Landing-Page-Story-Avatar-Container">
                  <img
                    className="Prp-Landing-Page-Story-Avatar"
                    src={userAvatarIcon}
                    alt={testimonial.name}
                  />
                </div>
                <div className="Prp-Landing-Page-Story-Info">
                  <div
                    className="Prp-Landing-Page-Story-Stars"
                    aria-label="5 star rating"
                  >
                    {starCountList.map((starNumber) => (
                      <img
                        key={starNumber}
                        className="Prp-Landing-Page-Story-Star"
                        src={starIcon}
                        alt=""
                      />
                    ))}
                  </div>
                  <h4 className="Prp-Landing-Page-Story-Name">
                    {testimonial.name}
                  </h4>
                  <p className="Prp-Landing-Page-Story-Role">{testimonial.role}</p>
                </div>
              </div>
              <p className="Prp-Landing-Page-Story-Review">
                &ldquo;{testimonial.review}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted by */}
      <section className="Prp-Landing-Page-Companies">
        <p className="Prp-Landing-Page-Companies-Label">
          TRUSTED BY LEADING COMPANIES
        </p>
        <h3 className="Prp-Landing-Page-Companies-Heading">
          TOP COMPANIES HIRE HERE
        </h3>
        <div className="Prp-Landing-Page-Companies-Logos">
          {companyLogos.map((company) => (
            <img
              key={company.id}
              className="Prp-Landing-Page-Companies-Logo"
              src={company.src}
              alt={company.alt}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="Prp-Landing-Page-Footer">
        <div className="Prp-Landing-Page-Footer-Columns">
          {footerColumns.map((column) => (
            <div key={column.id} className="Prp-Landing-Page-Footer-Column">
              <h5 className="Prp-Landing-Page-Footer-Column-Title">
                {column.title}
              </h5>
              {column.links.map((linkText) => (
                <a
                  key={linkText}
                  href="#"
                  className="Prp-Landing-Page-Footer-Link"
                >
                  {linkText}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="Prp-Landing-Page-Footer-Divider" />

        <div className="Prp-Landing-Page-Footer-Bottom">
          <p className="Prp-Landing-Page-Footer-Copyright">
            &copy; 2026 Placement and Recruitment Platform.
          </p>
          <div className="Prp-Landing-Page-Footer-Socials">
            {socialIcons.map((social) => (
              <img
                key={social.id}
                className="Prp-Landing-Page-Footer-Social-Icon"
                src={social.src}
                alt={social.alt}
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;