import React, { useState } from "react";
import "./style.scss";
import MdTextarea from "components/MdTextarea";
import MdView from "components/MdView";
import CustomMarked from "utils/CustomMarked";

const MdEditor: React.FC = () => {

  const [md, setMd] = useState("");
  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>): void => setMd(event.target.value);

  return (
    <div className="md-editor">
      <div className="md-editor__block">
        <MdTextarea value={md} setValue={onChangeHandler}></MdTextarea>
      </div>
      <div className="md-editor__block">
        <MdView html={CustomMarked.parse(md)}></MdView>
      </div>
    </div>
  );
};

export default MdEditor;
