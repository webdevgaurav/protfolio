import '../css/Header.css';
import { Link } from 'react-router-dom';

import '../css/Header.css';
import resume from "../assets/brand/resume.pdf";

export default function Header() {
  return (

    <header className="header">
      <Link className="logo">GS</Link>

      <nav className="navbar">
        <Link className="navbar-item" to="/">Home</Link>
        <Link className="navbar-item" to="/about">About</Link>
        <Link className="navbar-item" to="/contact">Contact</Link>  
      </nav>

      <div className="resume"><a className="resume-link" href={resume} download="resume.pdf">Download CV</a></div>
    
    </header>
   
  )
};
