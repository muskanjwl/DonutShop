import React, { createContext, useState } from "react";

export const cartContext = createContext();
const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  function incrementQty(item) {
    setCart([
      ...cart?.map((dessert) => {
        if (dessert.id === item.id) return { ...dessert, qty: dessert.qty + 1 };
        return dessert;
      }),
    ]);
  }

  function decrementQty(item) {
    setCart((curr) => {
      if (curr.find((i) => i.id === item.id).qty === 1)
        return curr.filter((i) => i.id !== item.id);
      else {
        return curr.map((i) => {
          if (i.id === item.id) return { ...i, qty: i.qty - 1 };
          return i;
        });
      }
    });
  }
  function addToCart(item) {
    const selectedDessert = {
      ...item,
      qty: 1,
    };
    setCart([...cart, selectedDessert]);
  }
  function removeFromCart(item) {
    setCart(cart?.filter((dessert) => dessert.id !== item.id));
  }
  function getCartQty() {
    return cart?.reduce((acc, curr) => acc + Number(curr.qty), 0);
  }
  function getCartTotal() {
    return cart?.reduce(
      (acc, curr) => acc + Number(curr.price) * Number(curr.qty),
      0
    );
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        incrementQty,
        decrementQty,
        removeFromCart,
        getCartQty,
        getCartTotal,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default Context;
