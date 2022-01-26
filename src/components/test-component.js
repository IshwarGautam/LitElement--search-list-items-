import { LitElement, html, css } from 'lit';

export class TestComponent extends LitElement {
  static get properties(){
    return {
      PRODUCTS : {type:Array}
    }
  }

  static get styles(){
    return css`
      .wrapper{
        margin-left:20%;
        margin-top:15px;
        border: 2px solid black;
        width: 250px;
        padding: 10px;
        border-radius: 5px;
      }

      .sub-wrapper{
        width:140px;
      }
    `;
  }

  constructor(){
    super();

    this.product = [
      {category: "Sporting Goods", price: "", stocked: true, name: "Sporting Goods", heading: true},
      {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football", heading: false},
      {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball", heading: false},
      {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball", heading: false},
      {category: "Electronics",  price: "", stocked: true, name: "Electronics", heading: true},
      {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch", heading: false},
      {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5", heading: false},
      {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7", heading: false}
    ];

    this.getRequiredList = [];
    this.PRODUCTS = [...this.product];

  }

  render(){
    return html`
      <div class = "wrapper">
        <tool-component .filteredList=${this.filteredList}></tool-component>
        
        <div class = "sub-wrapper">
          <list-component
            name = ${'Name'}
            price = ${'Price'}
            Heading = ${true}
          ></list-component>
          
          ${this.PRODUCTS.map(item => html`
            <list-component
              .category=${item.category}
              .price=${item.price}
              .stocked=${item.stocked}
              .name=${item.name}
              .heading=${item.heading}
            ></list-component>
          `)}
        </div>
      </div>
    `;
  }

  filteredList = (searchInput, isChecked) => {

    const product_item = [...this.product];
    
    if (searchInput === ''){
      if (isChecked){
        this.getRequiredList = product_item.filter(item => item.stocked);
        this.PRODUCTS = [...this.getRequiredList];
        return;
      }
      else{
        this.PRODUCTS = [...product_item];
        return;
      }
      
    }
    
    if (isChecked){
      if ('sporting goods'.startsWith(searchInput)){
        this.getRequiredList = product_item.filter(item => (item.category === 'Sporting Goods' && item.stocked));
      }
      else if ('electronics'.startsWith(searchInput)){
        this.getRequiredList = product_item.filter(item => (item.category === 'Electronics' && item.stocked));
      }
      else{
        this.getRequiredList = product_item.filter(item => (item.name.toLowerCase().startsWith(searchInput) && item.stocked));
      }
    }
    else{
      if ('sporting goods'.startsWith(searchInput)){
        this.getRequiredList = product_item.filter(item => (item.category === 'Sporting Goods'));
      }
      else if ('electronics'.startsWith(searchInput)){
        this.getRequiredList = product_item.filter(item => (item.category === 'Electronics'));
      }
      else{
        this.getRequiredList = product_item.filter(item => (item.name.toLowerCase().startsWith(searchInput)));
      }
    }
      
    this.PRODUCTS = [...this.getRequiredList];
  }
}  


customElements.define("test-component", TestComponent);