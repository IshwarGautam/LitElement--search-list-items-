import { LitElement, html, css } from 'lit';

export class ListComponent extends LitElement {
  static get properties(){
    return{
      category : {type: String},
      price : {type: String},
      stocked : {type: Boolean},
      name : {type: String},
      heading : {type: Boolean}
    }
  }

  static get styles(){
    return css`
    .color-red{
      color:red;
    }

    .bold-weight{
      font-weight:bold;
    }

    .list{
      display:flex;
      justify-content:space-between;
    }
  `;
  }

  constructor(){
    super();

    this.category = '';
    this.price = 0;
    this.stocked = true;
    this.name = '';
    this.heading = false;

  }

  render(){
    return html`
      <div class = "list">
        <span class = ${(this.stocked?"":"color-red")+ " " + (this.heading?"bold-weight":"")}>
          ${this.name}
        </span>
        <span class=${this.heading?"bold-weight": ""}>${this.price}</span>
      </div>
    `;
  }

}

customElements.define("list-component", ListComponent);