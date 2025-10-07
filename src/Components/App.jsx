import '../styles/App.css';
import Banner from './Banner';
import ShoppingList from './ShoppingList';
import Cart from './Cart'; // IMPORT: retrieves the Cart component
import { useState, useEffect } from 'react'; // IMPORT: allows state management in functional components



function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  }); // Initializes cart state with an empty array
useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]); // Saves cart state to localStorage whenever it changes
  const clearCart = () => {
    setCart([])
  }
  const onRemoveFromCart = (sneaker) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === sneaker.id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          // Décrémente la quantité
          return prevCart.map(item =>
            item.id === sneaker.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          // Supprime l'article du panier
          return prevCart.filter(item => item.id !== sneaker.id);
        }
      }
      // Si l'article n'existe pas, ne rien faire
      return prevCart;
    });
  };
  const addToCart = (sneaker) => {
    setCart(prevCart => {
      // Check if the product already exists
      const existingItem = prevCart.find(item => item.id === sneaker.id);

      if (existingItem) {
        // Increase the quantity
        return prevCart.map(item =>
          item.id === sneaker.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new product with quantity 1
        return [...prevCart, { ...sneaker, quantity: 1 }];
      }
    });
  };
   return (
    <div className="App">
      <Banner />
      <ShoppingList 
      onAddToCart={addToCart} />
      <Cart 
      cartItems={cart}
      onClearCart={clearCart} 
      onRemoveFromCart={onRemoveFromCart}
      />
    </div>
  );

}

export default App;
