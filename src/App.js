import "./App.css";
import Header from "./BUYER/Header/Header";
import Nabar from "./BUYER/Navbar/Nabar";
import Footer from "./BUYER/Footer/Footer";
import { useState } from "react";
import Cart from "./BUYER/Header/Cart/Cart";


function App() {
  const [isCartOpen, setCartOpen] = useState(false);

  const handleCartClick = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <div>
      <Header onCartClick={handleCartClick}/>
      {isCartOpen ? (
        <Cart />
      ) :(
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
