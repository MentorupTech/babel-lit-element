import { LitElement, html, css } from 'lit';

class CardComponent extends LitElement {

  static get properties() {
    return {
      img: { type: String },
      name: { type: String },
      types: { type: Array },
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
      }
      
      article {
        border: 1px solid;
        border-radius: 4px;
        padding: 8px;
      }
      
      img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 33%;
      }
    `;
  }

  constructor() {
    super();
    this.img = '';
    this.name = '';
    this.types = [];
  }


  render() {
    return html`
      <article>
        <header>
          ${this.name}
        </header>
        <main>
          <img src="${this.img}" alt="">
        </main>
        <footer>
         
        </footer>
      </article>
    `;
  }
}

window.customElements.define('card-component', CardComponent);
