// Header.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from './LanguageContext'; // Adjust the path based on your project structure
import{ Dropdown }from 'react-bootstrap'; // Adjust based on the actual library you are using
import './header.css';

const Header = () => {
  const favoritesCount = useSelector(state => state.favorites.movies.length || 0);
  const { language, toggleLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    toggleLanguage(newLanguage);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className='title'> <h5> PopularMovies</h5></div>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" >
          Movies
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/favorites">
                <FontAwesomeIcon icon={faHeart} />
                <span className="favorites-count">{favoritesCount}</span>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {language.toUpperCase()}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleLanguageChange('en')}>English</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLanguageChange('ar')}>Arabic</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
