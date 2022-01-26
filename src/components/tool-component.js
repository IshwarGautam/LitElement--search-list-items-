// Tool components includes search bar and checklist

import { LitElement, html, css } from 'lit';

export class ToolComponent extends LitElement {
  static get properties(){
    return {
      filteredList: { type: Function }
    }
  }

  static get styles() {
    return css`
      .tool > input{
        width:200px;
        outline:none;
      }
    `;
  }

  constructor(){
    super();

    this.filteredList;

    this.searchInput = "";
    this.isTicked = false;
  }

  render(){
    return html`
      <div class = "tool">
        <input type = "text" placeholder = "search your item" @keyup = ${this.keyTyped} .value = ${this.searchInput}>
        <div>
          <input type = "checkbox" ?checked=${this.isTicked} @change=${this.updateChecklist}>
          Only show product in stock
        </div>
      </div>
    `;
  }

  keyTyped = e =>{
    this.searchInput = e.target.value.toLowerCase().trim();
    this.filteredList(this.searchInput, this.isTicked);
  }

  updateChecklist = e => {
    this.isTicked = e.target.checked;
    this.filteredList(this.searchInput, this.isTicked);
  }
  
}

customElements.define("tool-component", ToolComponent);