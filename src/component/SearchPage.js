import React from "react";
import "./SearchPage.css";
import { FaSearch } from "react-icons/fa";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function SearchPage(props) {
  const handleMouseOut = (e) => {
    e.target.value = "";
    e.target.blur();
  };

  // take data from parent or dasshboard to here and search in it by ID الباقي

  return (
    <div className="parent">
      <div className="header">
        <img src={logo} alt="Logo" />{" "}
        <div className="home-login">
          <p>login as admin</p>
          <Link className="Btn" to="/login" target="_blank">
            <div class="sign">
              <svg viewBox="0 0 512 512">
                <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
              </svg>
            </div>
            <div className="home-login-text">Login</div>
          </Link>
        </div>
      </div>
      <div className="search-container">
        <h1>استعلم عن شهادتك</h1>
        <div className="box">
          <form name="search">
            <input
              id="search-input"
              type="text"
              className="input"
              name="txt"
              onMouseOut={handleMouseOut}
            />
          </form>
          <FaSearch className="i" onClick={props.handleSearch} />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
