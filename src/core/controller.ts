import { constants } from "./constants";
import { Util } from "./util";

export class Controller extends Util {
  private editorElement: HTMLElement;
  private copyBtnElement: HTMLElement;

  constructor() {
    super()

    this.editorElement = this.el(constants.EDITORQUERY) as HTMLElement
    this.copyBtnElement = this.el(constants.COPYBTNQUERY) as HTMLElement

  }

  begin() {
    this.copyBtnElement.addEventListener(constants.CLICKEVENT, this.handleClick.bind(this))
  }

  handleClick(evt: Event) {
    const directChildElements = this.all(`${constants.EDITORQUERY}>*`, this.editorElement)
    
    const contentElements = Array
    .from(directChildElements)
    .filter((el: HTMLElement) => el.innerHTML.toLowerCase() !== constants.BRTAG)
    .map((el: HTMLElement) => el.outerHTML)
    .join("")

    this.handleCopy(this.copyBtnElement, contentElements)
  }

  handleCopy (btn: HTMLElement, textToCopy: string) {
    return navigator.clipboard.writeText(textToCopy)
      .then(() => this.copyReaction(btn, "Copied!"))
      .catch(() => this.copyReaction(btn, "Copy Error :("));
  }

  copyReaction (btn: HTMLElement, msg: string) {
    const originalHTML = btn.innerHTML
    btn.innerHTML = msg
    setTimeout(() => btn.innerHTML = originalHTML, 1000);
  }
  
}