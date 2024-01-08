// Write your JS code here
// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-bg-card">
    <div className="header-card">
      <div className="header-logo-card">
        <img
          className="logo-img"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
        />
        <h1 className="logo-heading">Wave</h1>
      </div>

      <ul className="links-card">
        <li>
          <Link className="home-text" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="about-text" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="contact-text" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
