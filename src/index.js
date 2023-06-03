import { LitElement, html, css } from 'lit';
//import { ScopedElementsMixin } from '@open-wc/scoped-elements';

import '../src/pages/dashboard-page/dashboard-page.js';
//import '../packages/header-component/header-component';
import { HeaderComponent } from '../packages/header-component/header-component.js';
class AppLit extends LitElement {
  render() {
    return html`
      <dashboard-page></dashboard-page>
    `;
  }
};

window.customElements.define('app-lit', AppLit);
