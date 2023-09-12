import '../css/About.css';
import aboutProfileImage from "../assets/brand/bg-about-profile-image.jpg"

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="heading">About<span>&nbsp;Me</span></h2>

      <div className="about-image">
        <img src={aboutProfileImage} alt="" />
        <span className="circle-spin"></span>
      </div>

      <div className="about-content">
       <h3>Software Engineer!</h3>
        <p>Aspiring to work with an organization where I can utilize my skills and capabilities to carve a niche for myself and effectively deliver towards contributing to the organization's objectives and also enhance my personal growth through continual upgrading of knowledge. 
        </p>

        <div className="btn-box btns">
          <a href="#project" className='btn'>Read More</a>
        </div>

      </div>
    </section>
  )
}
