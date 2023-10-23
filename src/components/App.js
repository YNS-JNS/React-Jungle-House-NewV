// ___ Components ___________________
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
// import QuestionForm from "./QuestionForm";

// ___ Logo _________________________
import logo from '../assets/logo.png';

// ___ CSS __________________________
import '../styles/Layout.css'

// ___ Hooks ________________________
import { useEffect, useState } from "react";
// _____________________________________________________________________________

function App() {

  // _____________________________________________________________________________
  // Récupérez le panier depuis localStorage:
  const savedCart = localStorage.getItem('cart');

  // Initialisez l'état du panier en utilisant les données de localStorage s'il existe,
  // sinon, initialisez le panier comme un tableau vide.
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  // Utilisez useEffect pour surveiller les changements dans le panier (cart).
  // À chaque modification du panier, mettez à jour les données dans localStorage.
  useEffect(() => {
    // Convertissez le panier (cart) en une chaîne JSON et stockez-le dans localStorage.
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  // _____________________________________________________________________________

  // useEffect(() => {
  //  localStorage.clear();
  // }, [])

  return (
    <div className="App">

      <Banner>
        <img src={logo} alt="la maison jungle" className='lmj-logo' />
        <h1 className='lmj-title' > la maison jungle </h1>
      </Banner>

      <div className='lmj-layout-inner' >
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>

      {/* <QuestionForm /> */}
      <Footer />

    </div>
  );
}

export default App;
