import '../css/Header.css';
import resume from "../assets/brand/resume.pdf";

import {useState} from 'react';

export default function Header() {
  window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
  };
  
  const [isActive, setIsActive] = useState(false);
  const [navActive, setNavActive] = useState(false);

  const handleNavbarClick = event => {
    setIsActive(current => !current);
    setNavActive(current => !current);
  };

  const handleNavbarItemClick = event => {
    setIsActive(current => current);
    setNavActive(current => current);
  };

  return (
    <header className="header">
      <a className="logo" href="#">Gaurav.</a>

      <nav className={navActive ? "navbar active": "navbar"} onClick={handleNavbarClick}>
        <a className="navbar-item active" onClick={handleNavbarItemClick} href="#home">Home</a>
        <a className="navbar-item" onClick={handleNavbarItemClick} href="#about">About</a>
        <a className="navbar-item" onClick={handleNavbarItemClick} href="#project">Project</a>
        <a className="navbar-item" onClick={handleNavbarItemClick} href="#skill">Skill</a>
        <a className="navbar-item" onClick={handleNavbarItemClick} href="#contact">Contact</a>  
      </nav>

      <div className="resume"><a className="resume-link" href={resume} download="resume.pdf">Download CV</a></div>
      <div className={isActive ? "bx bx-menu bx-x": "bx bx-menu"} onClick={handleNavbarClick} id="menu-icon"></div>
    </header>
   
  )
};
