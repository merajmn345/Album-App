import React from "react";
import {products} from "../constants";
import Product from "./Product";

class ProductGrid extends React.Component{

  constructor(){
    super();
    this.state = {
      productsList: products //<--  key=products && value=products
    }
  }
  render(){
    return(
      <>
        <h2>Products List</h2>
        <div style={{ display: "flex" }}>
          {this.state.productsList.map((product) =>{
            return <Product product={product} />;
          })}
        </div>
      </>
    )
  }
}
export default ProductGrid;