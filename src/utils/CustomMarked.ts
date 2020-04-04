import marked from "marked";
import highlightjs from "highlight.js";

class CustomMarked {
  static parse(mdString: string): string {
    marked.setOptions({
      highlight: function(code, lang) {
        return highlightjs.highlightAuto(code, [lang]).value;
      },
      pedantic: false,
      gfm: true,
      breaks: true,
      sanitize: true,
      silent: false
    });

    return marked(mdString);
  }
}

export default CustomMarked;