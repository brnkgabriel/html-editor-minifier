export class Util {
  protected el: (query: string, parent?: HTMLElement) => HTMLElement | null
  protected all: (query: string, parent?: HTMLElement) => NodeListOf<HTMLElement>

  constructor() {
    this.el = (query: string, parent?: HTMLElement) => parent ? parent.querySelector(query) : document.querySelector(query)
    this.all = (query: string, parent?: HTMLElement) => parent ? parent.querySelectorAll(query) : document.querySelectorAll(query)
  }
}