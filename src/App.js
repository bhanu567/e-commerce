import React, { useState } from "react";
import Store from "./components/Store/Store";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [showCartIcons, setShowCartIcons] = useState(false);

  const closeCartHandler=()=>{
    setShowCartIcons(false);
  }
  const openCartHandler=()=>{
    setShowCartIcons(true);
  }

  return (
    <>
      <MyNavbar openCart={openCartHandler}></MyNavbar>
      {!showCartIcons && (
        <h1
          className="text-center"
          style={{
            fontSize: "100px",
            backgroundColor: "#777",
            color: "white",
            paddingBottom: "60px",
            margin: "0",
          }}
        >
          The Generics
        </h1>
      )}
      {showCartIcons && <Cart closeCart={closeCartHandler}></Cart>}
      {/* <Home></Home> */}
      {/* <Store></Store> */}
      {/* <About></About> */}
      <Footer></Footer>
    </>
  );
};

export default App;
