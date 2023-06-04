import { LitElement, html, css } from "lit";

import '../../../packages/header-component/header-component.js';
import '../../../packages/card-component/card-component.js'
import '../../../packages/footer-component/footer-component.js';

const MENU_ITEMS = [
  {
    name: 'Dashboard',
    icon: ''
  },
  {
    name: 'About',
    icon: '',
  }
];

class DashboardPage extends LitElement {

  static get properties() {
    return {
      data: { type: Array },
      loading: { type: Boolean },
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
      }
      
      main {
        padding: 16px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 2%;
        row-gap: 2%;
      }
    `;
  }

  constructor() {
    super();
    this.data = [];
    this.loading = false;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.data = (await this._fetchListPokemon());

    this.addEventListener('on-delete', (event) => {
      const indexItemDelete = parseInt(event.detail);
      this.data = this.data.filter((data, index) => index !== indexItemDelete);
    });
  }

  async _fetchDetailPokemon(url) {
    const detailPokemon = await fetch(url);
    return detailPokemon.json();
  }

  async _fetchListPokemon() {
    let result;
    try {
      this.loading = true;

      const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
      const pokemonJson = await pokemon.json();

      result = await Promise.all(pokemonJson.results.map( async result => {
        return {
          name: result.name,
          data: await this._fetchDetailPokemon(result.url),
        }
      }));
    } catch (error) {

    } finally {
      this.loading = false
    }

    return result;
  }

  handleOnSearch(event) {
    console.log(event.detail)
  }

  //todo id api for delete
  get _renderCardComponent() {
    return this.data.map((data, index) => {
      debugger;
      return html `
        <card-component 
            name="${data.name}"
            img="${data.data.sprites.front_default}">
        </card-component>
      `
    })
  }
  render() {
    return html`
      <header-component 
          @on-search="${this.handleOnSearch}"
          .menuItems="${MENU_ITEMS}"
      >
      </header-component>
      <main>
        ${this.loading ? 'cargando....' : this._renderCardComponent}
      </main>
      <footer-component></footer-component>
    `;
  }
}


window.customElements.define('dashboard-page', DashboardPage);
