import React from "react";
import "./style.scss";
import UserSettingLancher from "components/UserSettingLancher";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <span>My Blog Editor For Markdown</span>
        <UserSettingLancher></UserSettingLancher>
      </h1>
    </header>
  );
};

export default Header;
