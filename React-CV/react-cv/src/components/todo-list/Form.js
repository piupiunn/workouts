import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input } from "reactstrap";

export default class Form extends Component {
  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Todo giriniz"
          aria-describedby="button-addon2"
        ></input>
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Todo Ekle
        </button>
      </div>
    );
  }
}
