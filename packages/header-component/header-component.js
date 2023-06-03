import { LitElement, html, css } from 'lit';

export class HeaderComponent extends LitElement {


  static get styles() {
    return css`
      ::slotted(h1) {
        color: red;
      }

      .container-slot {
        width: 100%;
        height: 100%;
        background-color: orange;
      }
    `;
  }
  _handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    this.dispatchEvent(new CustomEvent('on-search', {
      bubbles: true,
      detail: form.get('search'),
    }));
  }
  render() {
    return html`
      <header>
        <slot class="container-slot"></slot>
        <form @submit="${this._handleSubmit}">
          <input name="search" type="text">
          <button type="submit">Buscar</button>
        </form>
      </header>
    `
  }
}

window.customElements.define('header-component', HeaderComponent);
