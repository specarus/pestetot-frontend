"use client";

import axios from "axios";

import { createContext, useEffect, useState } from "react";

interface CartContextProps {
  cart: [{ product: any; amount: number }];
  setCart: ([]: []) => void;
  addToCart: (product: any, _id: string, option: any) => void;
  increaseAmount: (_id: string, option: any) => void;
  decreaseAmount: (_id: string, option: any) => void;
  removeFromCart: (_id: string, option: any) => void;
  clearCart: () => void;
  totalPrice: number;
  totalAmount: number;
}

export const CartContext = createContext<CartContextProps>(null!);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

  const [cart, setCart] = useState(cartFromLocalStorage);

  // clear cart
  function clearCart() {
    setCart([]);
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  async function addToCart(product: any, _id: string, option: any) {
    const newItem = {
      _id: product._id,
      title: product.title,
      coverImg: product.coverImg,
      amount: 1,
      option: option,
    };

    // check if the item is already in the cart
    const cartItem = cart.find(
      (item: any) => item._id === _id && item.option.code === option.code
    );

    if (cartItem) {
      // increase amount
      const newCart = [...cart].map((item) => {
        if (item._id === _id && item.option.code === option.code) {
          return {
            ...item,
            amount: cartItem.amount + 1,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);

      // push to db
      await axios.put("http://localhost:3001/api/cart", newCart, {
        withCredentials: true,
      });
    } else {
      // add new item
      setCart([...cart, newItem]);
      // push to db
      await axios.put("http://localhost:3001/api/cart", [...cart, newItem], {
        withCredentials: true,
      });
    }
  }

  // remove from cart
  async function removeFromCart(_id: string, option: any) {
    const newCart = cart.filter((item: any) => {
      return item.option.code !== option.code;
    });
    setCart(newCart);

    // push to db
    await axios.put("http://localhost:3001/api/cart", newCart, {
      withCredentials: true,
    });
  }

  // increase amount
  function increaseAmount(_id: string, option: any) {
    const cartItem = cart.find(
      (item: any) => item._id === _id && item.option.code === option.code
    );
    addToCart(cartItem, _id, option);
  }

  // decrease amount
  async function decreaseAmount(_id: string, option: any) {
    const cartItem = cart.find(
      (item: any) => item._id === _id && item.option.code === option.code
    );

    if (cartItem) {
      const newCart = cart.map((item: any) => {
        if (item._id === _id && item.option.code === option.code) {
          return {
            ...item,
            amount: cartItem.amount - 1,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);

      // push to db
      await axios.put("http://localhost:3001/api/cart", newCart, {
        withCredentials: true,
      });
    }
    if (cartItem.amount < 2) {
      removeFromCart(_id, option);
    }
  }

  const amounts = cart.map((item: any) => {
    return item.amount;
  });

  const totalAmount = amounts.reduce((accumulator: any, value: any) => {
    return accumulator + value;
  }, 0);

  const prices = cart.map((item: any) => {
    return Number(item.option.price.split(" ")[0]) * item.amount;
  });

  const totalPrice = prices.reduce((accumulator: any, value: any) => {
    return accumulator + value;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPrice,
        totalAmount,
        setCart,
        addToCart,
        increaseAmount,
        decreaseAmount,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
