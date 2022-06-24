class CustomText extends HTMLElement {
  shadow: ShadowRoot;
  tags: string[] = ["h1", "p"];
  tag: string = "p";

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });

    // hago que me pasen un atributo tag. y lo que este definido en ese tag
    // va a hacer que elija h1, h2 etc. si no me pasan atributo tag, por defecto será "p"
    // quiero saber si el array tags incluye lo que me pasaron en el atributo.
    // si esta dentro de la lista el if sera true, y se asignara ese tag. sino sera el tag por defecto, osea p.
    if (this.tags.includes(this.getAttribute("tag") as any)) {
      this.tag = this.getAttribute("tag") || this.tag;
    }
    console.log(this.tag);

    this.render();
  }
  render() {
    const rootEl = document.createElement(this.tag);
    rootEl.textContent = this.textContent;
    this.shadow.appendChild(rootEl);
  }
}
customElements.define("custom-text", CustomText);
