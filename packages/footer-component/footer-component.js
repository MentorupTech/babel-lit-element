import { LitElement, html } from "lit";
import sheet from './styles.css' assert { type: 'css' };
class FooterComponent extends LitElement {
    connectedCallback() {
        super.connectedCallback();
        document.adoptedStyleSheets = [sheet];
        this.shadowRoot.adoptedStyleSheets = [sheet];
    }

    render() {
        return html`
            <footer>
                soy footer
            </footer>
        `
    }
}

window.customElements.define('footer-component', FooterComponent);