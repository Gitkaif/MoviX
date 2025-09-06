// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query}`);
      setQuery("");
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <h2><Link to="/" className="navbar-title">MoviX</Link></h2>
      
      <div className={`nav-content ${isMenuOpen ? 'show' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Popular</Link></li>
          <li><Link to="/top-rated" onClick={() => setIsMenuOpen(false)}>Top Rated</Link></li>
          <li><Link to="/upcoming" onClick={() => setIsMenuOpen(false)}>Upcoming</Link></li>
        </ul>
        
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            value={query}
            placeholder="Search movies..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;
