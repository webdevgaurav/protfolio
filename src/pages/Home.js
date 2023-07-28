import '../css/Home.css';
import profileImage from "../assets/brand/profile-image-removebg.png";

export default function Home() {
  return (
    <div className="content">
        <div className="profile">
          <h3>
            Hello, I'm <br/>
            Gaurav Sharma A <br/>
            Software Engineer
          </h3>
          <p>A highly motivated and competent Software Engineer with experience in developing
web applications. Proficient in coding, debugging, testing, and deploying web
applications using modern frameworks and libraries. Skilled in developing user-friendly
interfaces and mobile-responsive web designs. Dedicated to absorbing and leveraging
new techniques and skills. Ready to positively impact all new and ongoing projects through diligent pursuit of exceptional final products.</p>
        </div>
        <div className="profile">
          <img src={profileImage} alt="Profile Image" className="profile-image" />
        </div>
    </div>
  )
}
