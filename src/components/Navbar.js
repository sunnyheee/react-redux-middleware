import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSignOutAlt, faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, logoutUser }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const menuButtonRef = useRef();
  const menuList = [
    "여성",
    "Divied",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "지속가능성",
  ];
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (authenticate) {
      logoutUser();
    } else {
      navigate("/login");
    }
  };
  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <div className="login-btn-box">
        <div className="login-btn" onClick={handleAuthAction}>
          <FontAwesomeIcon icon={authenticate ? faSignOutAlt : faUser} />
          <div>{authenticate ? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div className="logo">
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
          alt="hm"
        />
      </div>
      <div className="menu-area">
        <button
          className="hamburger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          ref={menuButtonRef}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul className={`menu-list ${isMenuOpen ? "show" : ""}`} ref={menuRef}>
          {menuList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="검색"
            onKeyPress={(e) => search(e)}
          />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
