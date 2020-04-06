import marked, { Renderer } from "marked";
import highlightjs from "highlight.js";

class CustomMarked {

  private renderer: Renderer;

  constructor(leftIconUrl: string, rightIconUrl: string) {
    this.renderer = new Renderer();

    // # text renderer
    this.renderer.heading = (text: string, level: number): string => {

      const date = new Date();
      const dateString = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
      const datetimeDiv = level === 1 ? `<div class="datetime">更新日: ${dateString}</div>` : "";

      return `
        <h${level}>
          <div>${text}</div>
          ${datetimeDiv}
        </h${level}>
        ${ level === 1 ? "<hr>" : "" }
      `;
    }

    // **text** renderer
    this.renderer.strong = (text: string): string => {
      return `
        <strong>${text}</strong>
      `;
    }

    // `text` renderer
    this.renderer.codespan = (code: string): string => {
      return `
        <code>${code}</code>
      `;
    }

    // ```lang
    // code block
    // ```
    this.renderer.code = (code: string, languages: string) => {

      const langFileName = (languages || "plaintext").split(":");
      const lang = langFileName[0];
      const fileName = langFileName[1] || "";

      const fileNameBlock = fileName ? `<code class="filename">${fileName}</code>` : "";

      if (lang === "table") {
        return `
          ${fileNameBlock}
          ${renderTable(code)}
        `;
      } else if (lang === "comment") {
        const rows = code.split("\n").join("<br>");  
        return `
          ${renderComment(rows, fileName || "left")}
        `;
      } else {
        return `
        ${fileNameBlock}
        ${renderCode(code, lang)}
      `;
      }
    }

    const renderTable = (code: string): string => {
      const rows = code.split("\n").map(row => row.split(","));
      return `
        <table>
          <thead>
            <tr>${(rows.shift() || []).map(cell => (`<th>${cell}</th>`)).join("")}</tr>
          </thead>
          <tbody>
            ${rows.map(row => (`<tr>${row.map(cell => (`<td>${cell}</td>`)).join("")}</tr>`)).join("")}
          </tbody>
        </table>
      `;
    }

    const renderCode = (code: string, lang: string = "left"): string => {
      return `
        <pre class="lang-${lang}">${
          highlightjs.highlightAuto(code, [lang]).value
        }</pre>
      `;
    }

    const renderComment = (message: string, rightOrLeft: string) => {
      return `
        <div class="container ${rightOrLeft}">
          <img src="${rightOrLeft === "left" ? leftIconUrl : rightIconUrl}">
          <div class="comment">
            <p>${message}</p>
          </div>
        </div>
      `;
    }

    // p
    this.renderer.paragraph = (text: string): string => {
      return `
        <p>${text}</p>
      `;
    }

    this.renderer.text = (text: string) => {
      return `
        <span>${text}</span>
      `;
    }

    // list
    this.renderer.list = (body: string): string => {
      return `
        <ul>${body}</ul>
      `;
    }

    this.renderer.listitem = (text: string): string => {
      const listItems = text.split('<br>');
      const listItem = (listItems.shift() || "").replace(/\n/g, "");
      const subItem = (listItem.match(/<[^span]*>.*/) || [""])[0];
      return `
        <li>
          ${listItem.replace(subItem, "")}
        </li>
        ${listItems.length === 0 ? "" : `<p>${listItems.join("<br>")}</p>`}
        ${subItem}
      `;
    }

    // > blockquote
    this.renderer.blockquote = (quote: string): string => {
      return `
        <blockquote>${quote}</blockquote>
      `;
    }

    // table
    this.renderer.table = (header: string, body: string) => {
      return `
        <table>
          <thead>
            ${header}
          </thead>
          <tbody>
            ${body}
          </tbody>
        </table>
      `;
    }

    this.renderer.tablerow = (content: string) => {
      return `
        <tr>${content}</tr>
      `;
    }

    this.renderer.tablecell = (content: string, flags: { header: boolean, align: string | null }): string => {
      return `
        ${ flags.header ? `<th>${content}</th>` : `<td>${content}</td>` }
      `;
    }
  }

  parse = (mdString: string): string => {

    marked.setOptions({
      headerIds: false,
      pedantic: false,
      gfm: true,
      breaks: true,
      sanitize: false,
      silent: false,
      renderer: this.renderer
    });
  
    return marked(mdString);
  }
}

export default CustomMarked;
