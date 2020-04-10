import React from "react";
import "./style.scss";
import UserSettingLancher from "components/UserSettingLancher";
import ExportButton from "components/ExportButton";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <span>My Blog Editor For Markdown</span>
        <UserSettingLancher></UserSettingLancher>
        <ExportButton></ExportButton>
      </h1>
    </header>
  );
};

export default Header;
