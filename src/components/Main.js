import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import './styles/Main.css'; // Importing the CSS file for additional styles

const Main = () => {
  return (
    <div className="main-container">
      <img src={logo} alt="HackHarvard Logo" className="logo-animate" />
      <div className="event-date">October 2024</div>
      <p className="description">
        As Harvard's largest undergraduate international hackathon, HackHarvard draws over 700 participants each year from around the globe. If you're a Harvard undergraduate passionate about technology and leadership, consider applying to lead and shape HackHarvard 2024.
      </p>
      <Link to="/board">
        <button className="btn btn-danger join-button">Join Our Team</button>
      </Link>
      <div className='mt-5' >
        <Link to="/wtf" className="hackathon-info-link" style={{ color: 'white' }}>wtf is a hackathon?</Link> {/* Link to the WTF is a hackathon page */}
      </div>
    </div>
  );
}

export default Main;
