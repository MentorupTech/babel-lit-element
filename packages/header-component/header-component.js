import { LitElement, html, css } from 'lit';

export class HeaderComponent extends LitElement {

  static get properties() {
    return {
      menuItems: { type: Array },
    }
  }

  constructor() {
    super();
    this.menuItems = [];
  }

  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
      }

      header {
        display: flex;
        align-items: center;
        height: 40px;
        padding: 8px;
      }

      .container-logo {
       margin-right: 16px;
      }

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
      }
      
      ul li {
        margin-right: 16px;
        cursor: pointer;
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

  _handleClickMenu(type) {
    this.dispatchEvent(new CustomEvent('on-click-menu', {
      bubbles: true,
      detail: type,
    }))
  }

  render() {
    return html`
      <header>
        <section class="container-logo">
          LOGO
        </section>
        <nav class="container-menu">
          <ul>
            ${this.menuItems.map((item) => {
              return html`
                <li @click="${() => this._handleClickMenu(item.name)}">${item.name}</li>
              `;
            })}
          </ul>
        </nav>
        <section class="container-search">
          <form @submit="${this._handleSubmit}">
            <input name="search" type="text">
            <button type="submit">Buscar</button>
            <button>Limpiar</button>
          </form>
        </section>
      </header>
    `
  }
}

window.customElements.define('header-component', HeaderComponent);
