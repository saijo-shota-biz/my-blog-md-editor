(this["webpackJsonpmy-blog-md-editor"]=this["webpackJsonpmy-blog-md-editor"]||[]).push([[0],{227:function(e,t,n){},228:function(e,t,n){},229:function(e,t,n){},235:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),o=n.n(c),l=(n(35),n(27)),i=n(6),s=n(5),u=(n(36),n(37),function(e){var t=e.value,n=e.setValue;return r.a.createElement(r.a.Fragment,null,r.a.createElement("textarea",{className:"md-textarea",placeholder:"input markdown text",value:t,onChange:n}))}),m=(n(38),function(e){var t=e.html;return r.a.createElement("div",{className:"md-view",dangerouslySetInnerHTML:{__html:t}})}),d=n(25),h=n(13),g=n.n(h),p=n(26),f=n.n(p),b=function e(t,n){var a=this;Object(d.a)(this,e),this.renderer=void 0,this.parse=function(e){return g.a.setOptions({headerIds:!1,pedantic:!1,gfm:!0,breaks:!0,sanitize:!1,silent:!1,renderer:a.renderer}),g()(e)},this.renderer=new h.Renderer,this.renderer.heading=function(e,t){var n=new Date,a="".concat(n.getFullYear(),"\u5e74").concat(n.getMonth()+1,"\u6708").concat(n.getDate(),"\u65e5"),r=1===t?'<div class="datetime">\u66f4\u65b0\u65e5: '.concat(a,"</div>"):"";return"\n        <h".concat(t,">\n          <div>").concat(e,"</div>\n          ").concat(r,"\n        </h").concat(t,">\n        ").concat(1===t?"<hr>":"","\n      ")},this.renderer.strong=function(e){return"\n        <strong>".concat(e,"</strong>\n      ")},this.renderer.codespan=function(e){return"\n        <code>".concat(e,"</code>\n      ")},this.renderer.code=function(e,t){var n=(t||"plaintext").split(":"),a=n[0],l=n[1]||"",i=l?'<code class="filename">'.concat(l,"</code>"):"";if("table"===a)return"\n          ".concat(i,"\n          ").concat(r(e),"\n        ");if("comment"===a){var s=e.split("\n").join("<br>");return"\n          ".concat(o(s,l||"left"),"\n        ")}return"\n        ".concat(i,"\n        ").concat(c(e,a),"\n      ")};var r=function(e){var t=e.split("\n").map((function(e){return e.split(",")}));return"\n        <table>\n          <thead>\n            <tr>".concat((t.shift()||[]).map((function(e){return"<th>".concat(e,"</th>")})).join(""),"</tr>\n          </thead>\n          <tbody>\n            ").concat(t.map((function(e){return"<tr>".concat(e.map((function(e){return"<td>".concat(e,"</td>")})).join(""),"</tr>")})).join(""),"\n          </tbody>\n        </table>\n      ")},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"left";return'\n        <pre class="lang-'.concat(t,'">').concat(f.a.highlightAuto(e,[t]).value,"</pre>\n      ")},o=function(e,a){return'\n        <div class="container '.concat(a,'">\n          <img src="').concat("left"===a?t:n,'">\n          <div class="comment">\n            <p>').concat(e,"</p>\n          </div>\n        </div>\n      ")};this.renderer.paragraph=function(e){return"\n        <p>".concat(e,"</p>\n      ")},this.renderer.text=function(e){return"\n        <span>".concat(e,"</span>\n      ")},this.renderer.list=function(e){return"\n        <ul>".concat(e,"</ul>\n      ")},this.renderer.listitem=function(e){var t=e.split("<br>"),n=(t.shift()||"").replace(/\n/g,""),a=(n.match(/<[^span]*>.*/)||[""])[0];return"\n        <li>\n          ".concat(n.replace(a,""),"\n        </li>\n        ").concat(0===t.length?"":"<p>".concat(t.join("<br>"),"</p>"),"\n        ").concat(a,"\n      ")},this.renderer.blockquote=function(e){return"\n        <blockquote>".concat(e,"</blockquote>\n      ")},this.renderer.table=function(e,t){return"\n        <table>\n          <thead>\n            ".concat(e,"\n          </thead>\n          <tbody>\n            ").concat(t,"\n          </tbody>\n        </table>\n      ")},this.renderer.tablerow=function(e){return"\n        <tr>".concat(e,"</tr>\n      ")},this.renderer.tablecell=function(e,t){return"\n        ".concat(t.header?"<th>".concat(e,"</th>"):"<td>".concat(e,"</td>"),"\n      ")}},v=(n(227),function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useContext)(S),l=Object(a.useState)(o.userSetting.theme),i=Object(s.a)(l,2),u=i[0],m=i[1],d=Object(a.useState)(o.userSetting.leftIconUrl),h=Object(s.a)(d,2),g=h[0],p=h[1],f=Object(a.useState)(o.userSetting.rightIconUrl),b=Object(s.a)(f,2),v=b[0],_=b[1];return r.a.createElement("span",{className:"user-setting"},r.a.createElement("span",{className:"user-setting__activator",onClick:function(){return c(!0)}},r.a.createElement("i",{className:"fas fa-user-cog"})),n?r.a.createElement("div",{className:"user-setting__content"},r.a.createElement("button",{className:"content__close-btn",onClick:function(){return c(!1)}},"close"),r.a.createElement("div",{className:"content__form"},r.a.createElement("div",{className:"theme-select"},r.a.createElement("label",{className:"theme-select__label",htmlFor:"theme-design-select"},"theme"),r.a.createElement("select",{className:"theme-select__input",id:"theme-design-select",value:u,onChange:function(e){m(e.target.value)}},r.a.createElement("option",{value:"cyan-bluegray"},"cyan-bluegray"),r.a.createElement("option",{value:"teal-amber"},"teal-amber"),r.a.createElement("option",{value:"pink-indigo"},"pink-indigo"))),r.a.createElement("div",{className:"icon-url"},r.a.createElement("label",{className:"icon-url__label",htmlFor:"left-icon-url"},"icon image url for comment:left"),r.a.createElement("input",{className:"icon-url__input",id:"left-icon-url",placeholder:"http://pictogram2.com/p/p0973/i/m.png",value:g,onChange:function(e){p(e.target.value)}})),r.a.createElement("div",{className:"icon-url"},r.a.createElement("label",{className:"icon-url__label",htmlFor:"right-icon-url"},"icon image url for comment:right"),r.a.createElement("input",{className:"icon-url__input",id:"right-icon-url",placeholder:"http://pictogram2.com/p/p0823/i/m.png",value:v,onChange:function(e){_(e.target.value)}})),r.a.createElement("button",{className:"setting-btn",onClick:function(){var e={theme:u,leftIconUrl:g,rightIconUrl:v};o.setUserSetting(e),localStorage.setItem(E,JSON.stringify(e)),c(!1)}},r.a.createElement("i",{className:"setting-btn__icon fas fa-check"}),r.a.createElement("span",{className:"setting-btn__label"},"setting")))):r.a.createElement(r.a.Fragment,null))}),E="my-blog-md-editor",_=JSON.parse(localStorage.getItem(E)||'{\n  "theme": "cyan-bluegray",\n  "leftIconUrl": "http://pictogram2.com/p/p0973/i/m.png",\n  "rightIconUrl": "http://pictogram2.com/p/p0823/i/m.png"\n}'),N={userSetting:_,setUserSetting:function(){}},S=r.a.createContext(N),j=function(){var e=Object(a.useState)(_),t=Object(s.a)(e,2),n=t[0],r=t[1];return{userSetting:n,setUserSetting:Object(a.useCallback)((function(e){r(e)}),[])}},y=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],o=j(),l=new b(o.userSetting.leftIconUrl,o.userSetting.rightIconUrl);return r.a.createElement("div",{className:"md-editor"},r.a.createElement("div",{className:"md-editor__block"},r.a.createElement(u,{value:n,setValue:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"md-editor__block"},r.a.createElement(m,{html:l.parse(n)})))},k=(n(228),function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__title"},r.a.createElement("span",null,"My Blog Editor For Markdown"),r.a.createElement(v,null)))}),O=(n(229),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer__text"},"Copyright \xa9 2020 saijo-shota-biz All Rights Reserved."))});var w=function(){var e=j();return r.a.createElement(S.Provider,{value:e},r.a.createElement("div",{className:"theme-".concat(e.userSetting.theme)},r.a.createElement("div",{className:"app"},r.a.createElement(l.a,{basename:"/my-blog-md-editor"},r.a.createElement(k,null),r.a.createElement("main",null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0,component:function(){return r.a.createElement(i.a,{to:"/editor"})}}),r.a.createElement(i.b,{path:"/editor",component:y}))),r.a.createElement(O,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},30:function(e,t,n){e.exports=n(235)},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){}},[[30,1,2]]]);
//# sourceMappingURL=main.3b438c60.chunk.js.map