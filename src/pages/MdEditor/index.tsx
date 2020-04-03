import React from "react";
import "./style.scss";
import MdTextarea from "components/MdTextarea";
import MdView from "components/MdView";

const MdEditor: React.FC = () => {
  return (
    <div className="md-editor">
      <div className="md-editor__block">
        <MdTextarea></MdTextarea>
      </div>
      <div className="md-editor__block">
        <MdView></MdView>
      </div>
    </div>
  );
};

export default MdEditor;
