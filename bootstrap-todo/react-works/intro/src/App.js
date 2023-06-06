import React, { Component } from "react";
import alertify from "alertifyjs";
import CategoryList from "./CategoryList";
import Navigasyon from "./Navigasyon";
import ProductList from "./ProductList";
import { Col, Container, Row } from "reactstrap";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FromDemo1 from "./FromDemo1";
import FromDemo2 from "./FromDemo2";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };
  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    const addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
      this.setState({ cart: newCart });
      alertify.success(product.productName + "Added to Cart");
    }
  };
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + "Removed from Cart");
  };

  render({
    removeFromCart,
    cart,
    currentCategory,
    changeCategory,
    addToCart,
    products,
  }) {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };
    return (
      <div>
        <Container>
          <Navigasyon removeFromCart={removeFromCart} cart={cart}></Navigasyon>

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={currentCategory}
                changeCategory={changeCategory}
                info={categoryInfo}
              ></CategoryList>
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <ProductList
                      addToCart={addToCart}
                      products={products}
                      currentCategory={currentCategory}
                      info={productInfo}
                    ></ProductList>
                  }
                ></Route>
                <Route
                  exact
                  path="/cart"
                  element={
                    <CartList
                      removeFromCart={removeFromCart}
                      cart={cart}
                    ></CartList>
                  }
                ></Route>
                <Route path="/form1" element={<FromDemo1></FromDemo1>}></Route>
                <Route path="/form2" element={<FromDemo2></FromDemo2>}></Route>
                <Route element={<NotFound></NotFound>}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
