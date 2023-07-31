import '../css/About.css';
import aboutProfileImage from "../assets/brand/bg-about-profile-image.jpg"

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about-image">
        <img src={aboutProfileImage} alt="about-image" />
      </div>
      <div className="about-content">
       <h1>Gaurav Sharma</h1>
        <div className="about-job"><h3>Software Engineer</h3></div>
        <p>A highly motivated and competent Software Engineer with experience in developing
          web applications. Proficient in coding, debugging, testing, and deploying web
          applications using modern frameworks and libraries. Skilled in developing user-friendly
          interfaces and mobile-responsive web designs. Dedicated to absorbing and leveraging
          new techniques and skills. Ready to positively impact all new and ongoing projects
          through diligent pursuit of exceptional final products.
        </p>
      </div>
    </div>
  )
}
