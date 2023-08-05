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
        <p>A highly motivated and competent Software Engineer with experience in developing
          web applications. Proficient in coding, debugging, testing, and deploying web
          applications using modern frameworks and libraries. Skilled in developing user-friendly
          interfaces and mobile-responsive web designs. Dedicated to absorbing and leveraging
          new techniques and skills. Ready to positively impact all new and ongoing projects
          through diligent pursuit of exceptional final products.
        </p>

        <div className="btn-box btns">
          <a href="#" className='btn'>Read More</a>
        </div>

      </div>
    </section>
  )
}
