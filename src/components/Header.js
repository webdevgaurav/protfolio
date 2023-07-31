import '../css/Header.css';
import resume from "../assets/brand/resume.pdf";

export default function Header() {
  window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
  };

  return (
    <header className="header">
      <a className="logo" href="#">Gaurav.</a>

      <div className="bx bx-menu" id="menu-icon"></div>

      <nav className="navbar">
        <a className="navbar-item active" href="#home">Home</a>
        <a className="navbar-item" href="#about">About</a>
        <a className="navbar-item" href="#project">Project</a>
        <a className="navbar-item" href="#skill">Skill</a>
        <a className="navbar-item" href="#contact">Contact</a>  
      </nav>

      <div className="resume"><a className="resume-link" href={resume} download="resume.pdf">Download CV</a></div>
    
    </header>
   
  )
};
