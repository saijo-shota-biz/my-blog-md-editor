import React, { useContext, useState } from "react";
import "./style.scss";
import { UserSettingContext } from "store/context";

const ExportButton = () => {

  const context = useContext(UserSettingContext);

  const [filename, setFilename] = useState("");

  const exportHtml = (): void => {
    const body = document.getElementsByClassName("md-editor__block")[1].innerHTML;
    // const style = document.getElementsByTagName("style")[4].outerHTML;
    const href = document.getElementsByTagName("link")[4].href;
    const style = `<link href="${href}" rel="stylesheet">`

    const content = `
      <!DOCTYPE html>
      <html lang="ja">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>${filename}</title>
          <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
          <link href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css" rel="stylesheet">
          ${style}
        </head>
        <body>
          <div class="theme-${context.userSetting.theme}">
            ${body}
          </div>
        </body>
      </html>
    `;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.download = `${filename || "index"}.html`;
    a.href = url;
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <span className="export">
      <input className="export__filename" value={filename} onChange={val => setFilename(val.target.value)} placeholder="input file name" />
      <span className="export__btn" onClick={exportHtml}>
        <i className="fas fa-file-download"></i>
      </span>
    </span>
  );
}

export default ExportButton;