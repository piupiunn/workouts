import React from "react";

import CategoryList from "./CategoryList";
import Navigasyon from "./Navigasyon";
import ProductList from "./ProductList";
import { Col, Container, Row } from "reactstrap";

function App() {
  let categoryInfo = { title: "Category List" };
  let productInfo = { title: "Product List" };
  return (
    <div>
      <Container>
        <Row>
          <Navigasyon></Navigasyon>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info={categoryInfo}></CategoryList>
          </Col>
          <Col xs="9">
            <ProductList info={productInfo}></ProductList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
