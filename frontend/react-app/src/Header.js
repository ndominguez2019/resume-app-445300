// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Add logic to handle search functionality
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">Profile</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
        </ul>
        <div className="logo-search-container" style={{ marginLeft: 'auto', marginRight: '20px' }}>
          <input
            type="search"
            value={searchTerm}
            onChange={handleSearch}
            className="search-bar"
            placeholder="Search..."
          />
          <FontAwesomeIcon 
            icon={faMagnifyingGlass} 
            className="icon-search" 
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;