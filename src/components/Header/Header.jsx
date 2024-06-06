import React, { useState, useContext } from "react";
import { Global } from "../../App";
import Switch from "react-switch";
import { FiSun, FiMoon } from "react-icons/fi";

import "./Header.css";

const Header = () => {
  const [checked, setChecked] = useState(false);
  const dados = useContext(Global);

  const toggleTheme = () => {
    setChecked(!checked);
    dados.setTheme((curr) => (curr === "light" ? "dark" : "light"));
    console.log(dados.theme);
  };

  return (
    <header className="header">
      <div className="topbar"></div>
      <div className="container d-flex">
        <div className="logo"></div>
        <div className="switch">
          <Switch
            onChange={toggleTheme}
            checked={checked}
            width={45}
            height={20}
            onColor="#afafaf"
            offColor="#141414"
            checkedIcon={false}
            uncheckedIcon={false}
          />
          {checked ? <span className="switch-info"> Light <FiSun /></span> : <span className="switch-info"> Dark <FiMoon /></span> }
        </div>
      </div>
    </header>
  );
};

export default Header;
