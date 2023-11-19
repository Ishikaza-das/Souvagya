import "./App.css";
import Header from "./BUYER/HEADER/Header";
import Nabar from "./BUYER/NAVBAR/Navbar";
import Footer from "./BUYER/FOOTER/Footer";
import { useState } from "react";
import Cart from "./BUYER/HEADER/Cart/Cart";

function App() {
  const [isCartOpen, setCartOpen] = useState(false);

  const handleCartClick = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <div>
      <Header onCartClick={handleCartClick} />
      {isCartOpen ? (
        <Cart />
      ) : (
        <>
          <Nabar />

          <Footer />
        </>
      )}

      {/* <App1/>   */}
    </div>
  );
}

export default App;
