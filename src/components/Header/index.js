// Write your JS code here

import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="header-container">
    <div className="title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="title">Wave</h1>
    </div>

    <ul className="nav-item-link">
      <li className="link-item">
        <Link to="/" className="route-link">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link to="/about" className="route-link">
          About
        </Link>
      </li>
      <li className="link-item">
        <Link to="/contact" className="route-link">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
