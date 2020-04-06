import React, { useState } from "react";
import "./style.scss";
import MdTextarea from "components/MdTextarea";
import MdView from "components/MdView";
import CustomMarked from "utils/CustomMarked";
import { useUserSetting } from "store/context";

const MdEditor: React.FC = () => {

  const [md, setMd] = useState("");
  const context = useUserSetting();
  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>): void => setMd(event.target.value);
  const customMarked = new CustomMarked(context.userSetting.leftIconUrl, context.userSetting.rightIconUrl);

  return (
    <div className="md-editor">
      <div className="md-editor__block">
        <MdTextarea value={md} setValue={onChangeHandler}></MdTextarea>
      </div>
      <div className="md-editor__block">
        <MdView html={customMarked.parse(md)}></MdView>
      </div>
    </div>
  );
};

export default MdEditor;
