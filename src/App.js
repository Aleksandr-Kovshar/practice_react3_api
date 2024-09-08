import React, { Component } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import ProductReviewForm from "./components/ProductReviewForm";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <LoginForm />
        <br />
        <br />
        <br />
        <ProductReviewForm />
      </div>
    );
  }
}

export default App;
