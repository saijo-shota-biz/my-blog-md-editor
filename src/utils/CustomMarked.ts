import marked, { Renderer } from "marked";
import highlightjs from "highlight.js";

const renderer = new Renderer();

// # text renderer
renderer.heading = (text: string, level: number): string => {

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
renderer.strong = (text: string): string => {
  return `
    <strong>${text}</strong>
  `;
}

// `text` renderer
renderer.codespan = (code: string): string => {
  return `
    <code>${code}</code>
  `;
}

// ```lang
// code block
// ```
renderer.code = (code: string, lang: string) => {
  const body = highlightjs.highlightAuto(code, [lang]).value;
  
  return `
    <pre class="lang-${lang || "plaintext"}">${body}</pre>
  `;
}

// p
renderer.paragraph = (text: string): string => {
  return `
    <p>${text}</p>
  `;
}

renderer.text = (text: string) => {
  return `
    <span>${text}</span>
  `;
}

// list
renderer.list = (body: string): string => {
  return `
    <ul>${body}</ul>
  `;
}

renderer.listitem = (text: string): string => {
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
renderer.blockquote = (quote: string): string => {
  return `
    <blockquote>${quote}</blockquote>
  `;
}

// table
renderer.table = (header: string, body: string) => {
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

renderer.tablerow = (content: string) => {
  return `
    <tr>${content}</tr>
  `;
}

renderer.tablecell = (content: string, flags: { header: boolean, align: string | null }): string => {
  return `
    ${ flags.header ? `<th>${content}</th>` : `<td>${content}</td>` }
  `;
}

const parse = (mdString: string): string => {

  marked.setOptions({
    langPrefix: 'lang-',
    headerIds: false,
    pedantic: false,
    gfm: true,
    breaks: true,
    sanitize: false,
    silent: false,
    renderer: renderer
  });

  return marked(mdString);
}

export default parse;