import { html, css, LitElement } from 'lit';

export class RequestUpdateComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--requestUpdate-component-text-color, #000);
    }
  `;

  static properties = {

  };

  constructor() {
    super();
  }

  firstUpdated() {
    setInterval(() => this.requestUpdate(), 1000);
  }

  _tplGetClock() {
    let date = new Date();
    return `${date.getHours().toString().padStart(2,0)}: ${date.getMinutes().toString().padStart(2,0)}: ${date.getSeconds().toString().padStart(2,0)}`;
  }

  _tplBtnClock() {
    return html`
      <div class="clock">
        <span>Mi hora actual: ${this._tplGetClock()}</span>
      </div>
    `;
  }

  render() {
    return html`
      <h1>Realizamos una actualizacion usando RequestUpdate de forma explicita</h1>
      ${this._tplBtnClock()}
    `;
  }
}
