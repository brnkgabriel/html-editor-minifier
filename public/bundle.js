(()=>{"use strict";const e=".ql-editor";new Quill("#editor",{modules:{toolbar:"#toolbar"},theme:"snow"}),(new class extends class{constructor(){this.el=(e,t)=>t?t.querySelector(e):document.querySelector(e),this.all=(e,t)=>t?t.querySelectorAll(e):document.querySelectorAll(e)}}{constructor(){super(),this.editorElement=this.el(e),this.copyBtnElement=this.el("#copyBtn")}begin(){this.copyBtnElement.addEventListener("click",this.handleClick.bind(this))}handleClick(e){const t=this.all(".ql-editor>*",this.editorElement),o=Array.from(t).filter((e=>"<br>"!==e.innerHTML.toLowerCase())).map((e=>e.outerHTML)).join("");this.handleCopy(this.copyBtnElement,o)}handleCopy(e,t){return navigator.clipboard.writeText(t).then((()=>this.copyReaction(e,"Copied!"))).catch((()=>this.copyReaction(e,"Copy Error :(")))}copyReaction(e,t){const o=e.innerHTML;e.innerHTML=t,setTimeout((()=>e.innerHTML=o),1e3)}}).begin()})();
//# sourceMappingURL=bundle.js.map