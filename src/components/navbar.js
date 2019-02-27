  import React from 'react';
  import { Link } from 'gatsby'
  import './navbar.css';

  const Navbar = () => (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/about">About</Link></li>
        <li className="nav-item"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )

  export default Navbar;


