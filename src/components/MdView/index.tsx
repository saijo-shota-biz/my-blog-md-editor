import React from "react";
import "./style.scss";

type MdViewProps = {
  html: string
};

const MdView: React.FC<MdViewProps> = ({ html }: MdViewProps) => {
  return (
    <div className="md-view" dangerouslySetInnerHTML={{ __html: html }}></div>
  );
}

export default MdView;