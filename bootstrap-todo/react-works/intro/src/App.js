import React, { Component } from "react";
import alertify from "alertifyjs";
import CategoryList from "./CategoryList";
import Navigasyon from "./Navigasyon";
import ProductList from "./ProductList";
import { Col, Container, Row } from "reactstrap";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";

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
  };

  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };
    return (
      <div>
        <Container>
          <Navigasyon
            removeFromCart={this.removeFromCart}
            cart={this.state.cart}
          ></Navigasyon>

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              ></CategoryList>
            </Col>
            <Col xs="9">
              <Routes>
                <Route exact path="/" component={NotFound}></Route>
                <Route exact path="/cart" component={CartList}></Route>
              </Routes>

              <ProductList
                addToCart={this.addToCart}
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              ></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
