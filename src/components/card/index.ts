customElements.define(
  "custom-card",
  class extends HTMLElement {
    shadow: ShadowRoot;

    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });

      this.render();
      const style = document.createElement("style");
      style.innerHTML = `
      .root{
          border-radius: 4px;
          padiing: 22px 13px;
          background-color: #FFF599;
      }
      `;
      this.shadow.appendChild(style);
    }
    render() {
      this.shadow.innerHTML = this.innerHTML;
    }
  }
);
