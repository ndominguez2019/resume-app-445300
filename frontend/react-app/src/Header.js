import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faUbuntu, faReact } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <div className="nav-icon-container">
              <FontAwesomeIcon icon={faHome} className="nav-icon" />
            </div>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <div className="nav-icon-container">
              <FontAwesomeIcon icon={faUser} className="nav-icon" />
            </div>
            <Link to="/profile" className="nav-link">Profile</Link>
          </li>
          <li className="nav-item">
            <div className="nav-icon-container">
              <FontAwesomeIcon icon={faBriefcase} className="nav-icon" />
            </div>
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
        </ul>
        <div className="search-container">
          <div className="logo-search-container">
            <input
              type="search"
              className="search-bar"
              placeholder="Search..."
            />
            <FontAwesomeIcon 
              icon={faMagnifyingGlass} 
              className="icon-search" 
            />
          </div>
        </div>
        <div className="tech-logos-wrapper">
          <div className="tech-logos">
            <img 
              src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/tensorflow.svg" 
              alt="Tensorflow" 
              width="24" 
              height="24" 
              style={{ fill: '#fff' }} 
            />
            <img 
              src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/django.svg" 
              alt="Django" 
              width="24" 
              height="24" 
              style={{ fill: '#fff' }} 
            />
            <img 
              src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/googlecloud.svg" 
              alt="Google Cloud" 
              width="24" 
              height="24" 
              style={{ fill: '#fff' }} 
            />
            <img 
              src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/ubuntu.svg" 
              alt="Ubuntu" 
              width="24" 
              height="24" 
              style={{ fill: '#fff' }} 
            />
            <img 
              src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/react.svg" 
              alt="React" 
              width="24" 
              height="24" 
              style={{ fill: '#fff' }} 
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;