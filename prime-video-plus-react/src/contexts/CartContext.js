import { createContext, useState } from "react";

// Step 1: create the context for the feature by using createContext()
export const CartContext = createContext(undefined);

// Step 2: Let's create a new component CartProvider
export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  // console.log(cartItems); // needed for Header comp
  // console.log(setCartItems); // needed for ProductsPage comp
  // Let's supply the above stuff to the whole app in the form of Object

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        addToCart: setCartItems,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
// Step 3: Refer App.js -- this comp is used there
