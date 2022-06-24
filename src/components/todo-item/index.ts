customElements.define(
  "todo-item",
  class extends HTMLElement {
    shadow: ShadowRoot;
    // defino unas propiedades internas:
    title: any;
    checked: boolean;

    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.title = this.getAttribute("title") || "";
      this.checked = JSON.parse(this.getAttribute("checked"));

      const style = document.createElement("style");
      style.innerHTML = `
        .root{
            font-size: 18px;
        }
        `;
      this.shadow.appendChild(style);
      this.render();
    }
    render() {
      this.shadow.innerHTML = this.innerHTML;
    }
  }
);
