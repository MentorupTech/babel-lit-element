import { LitElement, html, css } from 'lit';

class CardComponent extends LitElement {

  static get properties() {
    return {
      date: { type: String },
    }
  }

  constructor() {
    super();
    this.date = '';
  }

  _handleClickDelete(event) {
    debugger;
    //todo
    this.dispatchEvent(new CustomEvent('on-delete', {
      bubbles: true,
      composed: true,
      detail: this.getAttribute('data-order'),
    }));
  }
  render() {
    return html `
      <article>
        <header>

        </header>
        <main>

        </main>
        <footer>
          <button @click="${this._handleClickDelete}"> Eliminar</button>
        </footer>
      </article>
    `;
  }
}

window.customElements.define('card-component', CardComponent);
