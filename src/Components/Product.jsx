import React from "react";

class Product extends React.Component {
  render() {
    return (
      <>
        <div className="product">
          <img src={this.props.product["product-image-url"]} />
        </div>
      </>
    );
  }
}
export default Product;
