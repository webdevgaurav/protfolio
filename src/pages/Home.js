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
          <p>A highly motivated and competent Software Engineer with experience in developing web applications. Proficient in coding, debugging, testing, and deploying web applications using modern frameworks and libraries. Skilled in developing user-friendly
          interfaces and mobile-responsive web designs. Dedicated to absorbing and leveraging new techniques and skills. Ready to positively impact all new and ongoing projects through diligent pursuit of exceptional final products.
          </p>

          <div className="btn-box">
            <a href={linkedIn} target='__blank' className="btn">Hire Me</a>
            <a href="#" className="btn">Let's Talk</a>
          </div>

          <div className="home-social">
            <a href="" className="socials"><i className='bx bx-briefcase'></i></a>
            <a href={linkedIn} target='__blank'  className="socials"><i className='bx bxl-linkedin'></i></a>
          </div>

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
