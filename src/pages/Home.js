import '../css/Home.css';
import About from '../pages/About';
import Project from '../pages/Project';
import Skill from '../pages/Skill';
import Contact from '../pages/Contact';

import homeProfileImage from "../assets/brand/bg-about-profile-image.jpg"

export default function Home() {
  const linkedIn = "https://www.linkedin.com/in/gaurav-sharma-ab95aa1a9/";
  
  return (
    <>
      <section className="home" id='home'>
        
        <div className="home-content">
          <div className="about-image home-background">
            <img src={homeProfileImage} alt="" />
          </div>
          <h1>Hi,&nbsp;I'm <span className='dev-name'>Gaurav Sharma</span></h1>
          <div className="job-text-animate" id='job-text-animate'><h3>Software Engineer</h3></div>
          <p>Aspiring to work with an organization where I can utilize my skills and capabilities to carve a niche for myself and effectively deliver towards contributing to the organization's objectives and also enhance my personal growth through continual upgrading of knowledge.</p>

          <div className="btn-box">
            <a href={linkedIn} target='__blank' className="btn">Hire Me</a>
            <a href="#contact" className="btn">Let's Talk</a>
          </div>

          {/* <div className="home-social">
            <a href="" className="socials"><i className='bx bx-briefcase'></i></a>
            <a href={linkedIn} target='__blank'  className="socials"><i className='bx bxl-linkedin'></i></a>
          </div> */}

        </div>

        <div className="profile-imageHover"></div>
        
      </section>

      <About />
      <Project />
      <Skill />
      <Contact />
    </>
  )
}
