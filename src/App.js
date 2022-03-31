import React from "react";
import ProductGrid from "./Components/ProductGrid";
import Search from "./Components/Search";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Desi Myntra</h1>
        <Search />
        <ProductGrid />
      </>
    );
  }
}
export default App;
