import { LitElement, html } from "lit";

import '../../../packages/header-component/header-component.js';
import '../../../packages/card-component/card-component.js'
class DashboardPage extends LitElement {

  static get properties() {
    return {
      data: { type: Array },
      loading: { type: Boolean },
    }
  }

  constructor() {
    super();
    this.data = [];
    this.loading = false;
    //this.loading = false;
  }

  set loading(param) {
    debugger;
    this._loading = param;
  }

  get loading() {
    debugger;
   return this._loading;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    debugger;
  }

  update(_changedProperties) {
    super.update(_changedProperties);
    if(_changedProperties.has('loading')) {
      debugger;
    }
  }


  updated(_changedProperties) {
    super.update(_changedProperties)
    if(_changedProperties.has('loading')) {
      debugger;
    }
  }

  async connectedCallback() {
    super.connectedCallback();
    debugger;
    //todo
    await this._fetchData();
    this.addEventListener('on-delete', (event) => {
      const indexItemDelete = parseInt(event.detail);
      this.data = this.data.filter((data, index) => index !== indexItemDelete);
    });
  }


  async _fetchData() {
    try {
      this.loading = true;
      const response = await fetch('https://api.covidtracking.com/v1/us/daily.json');
      this.data = (await response.json());
    } catch (error) {

    } finally {
      this._loading = false
    }
  }

  handleOnSearch(event) {
    console.log(event.detail)
  }

  //todo id api for delete
  _renderCardComponent() {
    return this.data.map((data, index) => {
      return html `
        <card-component data-order="${index}" date="${data.dateChecked}"></card-component>
      `
    })
  }
  render() {
    return html`
      <header>
        <header-component @on-search="${this.handleOnSearch}">
          <h1>title</h1>
        </header-component>
      </header>
      <main>
        ${this.loading ? 'cargando....' : this._renderCardComponent()}
      </main>
    `;
  }
}


window.customElements.define('dashboard-page', DashboardPage);
