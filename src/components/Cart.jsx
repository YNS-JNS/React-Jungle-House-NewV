import { useEffect, useState } from 'react';
import '../styles/Cart.css';

// Définir le composant Cart qui gère l'affichage du panier
const Cart = ({cart, updateCart}) => {

  // _____________________________________________________________________________
  // État local : isOpen contrôle l'affichage du panier, total calcule le total du panier
  const [isOpen, setIsOpen] = useState(false);
  // _____________________________________________________________________________

  // _____________________________________________________________________________
  // Calculer le Prix total du panier
  const total = cart.reduce(
    // Utilisation de reduce() pour calculer le total en multipliant le prix par la quantité de chaque article 
    (accumilateur, plantType)=> accumilateur + plantType.price * plantType.amount , 0
    );
  // _____________________________________________________________________________

  // _____________________________________________________________________________
  // Modifiez le titre de votre onglet:
  useEffect(() => {
      document.title = `LMJ: ${total}$ d'achats`;
  }, [total]);
  // _____________________________________________________________________________

  return (
    isOpen ? 
    ( 
      // Si le panier est ouvert
      <div className="lmj-cart" >
        {/* // Fermer Button */}
        <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)} >
          Fermer
        </button>

        {  // Si le panier contient des articles, les afficher
          cart.length > 0? (
            <div>
              <h2>Panier</h2>
              <ul>
                { 
                // Mapper à travers le panier et afficher chaque article avec nom, prix et quantité */}
                  cart.map(({ name, price, amount }, index) => (
                    <div key={`${name}-${index}`} >
                      {name} : {price}$ X {amount}
                    </div>
                  ))
                }
              </ul>
             
              <h3>  Total : {total} $ </h3>
              {/* Bouton pour vider le panier */}
              <button onClick={()=> updateCart([])} >Vider le panier</button>
            </div>
          ):(
            // Si le panier est vide, afficher un message
            <div>Votre panier est vide</div>
          )
        }       

      </div>
    )
      :
    ( 
      // Si le panier est fermé, afficher un bouton pour l'ouvrir
      // Ouvrir Button
      <div className='lmj-cart-closed' >
        <button
          className='lmj-cart-toggle-button'
          onClick={() => setIsOpen(true)}
        >
          Ouvrir le Panier
        </button>
      </div>
    )
  );
};

export default Cart;