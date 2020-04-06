import React from "react";
import "./style.scss";

type MdTextareaProps = {
  value: string,
  setValue: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const MdTextarea: React.FC<MdTextareaProps> = ({ value, setValue }: MdTextareaProps) => {

  return (
    <>
      <textarea
        className="md-textarea"
        placeholder="input markdown text"
        value={value} onChange={setValue}
      ></textarea>
    </>
  );
}

export default MdTextarea;