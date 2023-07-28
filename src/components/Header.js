import '../css/Header.css';
import { Link } from 'react-router-dom';

import '../css/Header.css';

export default function Header() {
  return (
    <nav className="navbar">
      <div className="container">

        <div className="navbar-brand">
         <Link className="navbar-brand-item" to="/">Gaurav Sharma</Link>
        </div>

        <div className="navbar-items">
          <ul className="navbar-list">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
};
