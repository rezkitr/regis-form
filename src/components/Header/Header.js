import React from "react";
import "./Header.css";
import logoImg from "../../images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="left"></div>

      <div className="logo">
        <img src={logoImg} alt="L'Occitane" />
      </div>

      <div className="lang pr-5">
        <form>
          <label htmlFor="lang">Language: </label>
          <select name="lang" id="lang">
            <option value="eng">English</option>
            <option value="chn">Chinesse</option>
          </select>

          <i className="fas fa-cog ml-3"></i>
        </form>
      </div>
    </div>
  );
};

export default Header;
