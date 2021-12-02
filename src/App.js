import React from "react";
import Hero from "./components/Hero";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner"
import GlobalStyle from "./globalStyle";
import Products from "./components/Products";
import Brand from "./components/Brand";
import { productData } from "./components/ProductsItem/data";
import ProductsItem from "./components/ProductsItem";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Banner />
      <Products />
      <ProductsItem data={productData} />
      <Brand />
    </Router>
  );
}

export default App;
