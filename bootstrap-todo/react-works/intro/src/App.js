import React from "react";
import CategoryList from "./CategoryList";
import Navigasyon from "./Navigasyon";
import ProductList from "./ProductList";

function App() {
  return (
    <div>
      <Navigasyon></Navigasyon>
      <CategoryList></CategoryList>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
