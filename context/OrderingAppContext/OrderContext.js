"use client";

import { data } from "@/data/OrderingAppData/data";
import { createContext, useState, useEffect } from "react";

export const OrderContext = createContext();
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < data.length + 1; i++) {
    cart[i] = 0;
  }

  return cart;
};

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(getDefaultCart());
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in orders){
      if (orders[item] > 0) {
        let itemInfo = data.find(product => product.id === Number(item));
        totalAmount += orders[item] * itemInfo.price
      }
    }

    return totalAmount
  }

  const addCartCount = () => {
    setCartCount(prevCartCount => prevCartCount + 1)
  }

  const addToCart = (itemId) => {
    setOrders((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setOrders((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setOrders((prev) => ({ ...prev, [itemId]: newAmount }));
  }

  return (
    <OrderContext.Provider value={{ orders, addToCart, removeFromCart, updateCartItemCount, cartCount, addCartCount, setCartCount, getTotalCartAmount }}>
      {children}
    </OrderContext.Provider>
  );
};

// "use client";

// import { data } from "@/data/OrderingAppData/data";
// import { createContext, useState, useEffect, ReactNode } from "react";

// type OrderContextType = {
//   orders: { [key: number]: number };
//   addToCart: (itemId: number) => void;
//   removeFromCart: (itemId: number) => void;
//   updateCartItemCount: (newAmount: number, itemId: number) => void;
//   cartCount: number;
//   addCartCount: () => void;
//   setCartCount: React.Dispatch<React.SetStateAction<number>>;
//   getTotalCartAmount: () => number;
// };

// export const OrderContext = createContext<OrderContextType | undefined>(
//   undefined
// );

// const getDefaultCart = (): { [key: number]: number } => {
//   let cart: { [key: number]: number } = {};
//   for (let i = 1; i < data.length + 1; i++) {
//     cart[i] = 0;
//   }

//   return cart;
// };

// export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
//   const [orders, setOrders] = useState<{ [key: number]: number }>(
//     getDefaultCart()
//   );
//   const [cartCount, setCartCount] = useState<number>(0);

//   useEffect(() => {
//     const savedOrders = localStorage.getItem("orders");
//     if (savedOrders) {
//       setOrders(JSON.parse(savedOrders));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("orders", JSON.stringify(orders));
//   }, [orders]);

//   const getTotalCartAmount = (): number => {
//     let totalAmount = 0;
//     for (const item in orders) {
//       if (orders[item] > 0) {
//         let itemInfo = data.find((product) => product.id === Number(item));
//         if (itemInfo) {
//           totalAmount += orders[item] * itemInfo.price;
//         }
//       }
//     }

//     return totalAmount;
//   };

//   const addCartCount = (): void => {
//     setCartCount((prevCartCount) => prevCartCount + 1);
//   };

//   const addToCart = (itemId: number): void => {
//     setOrders((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//   };

//   const removeFromCart = (itemId: number): void => {
//     setOrders((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };

//   const updateCartItemCount = (newAmount: number, itemId: number): void => {
//     setOrders((prev) => ({ ...prev, [itemId]: newAmount }));
//   };

//   return (
//     <OrderContext.Provider
//       value={{
//         orders,
//         addToCart,
//         removeFromCart,
//         updateCartItemCount,
//         cartCount,
//         addCartCount,
//         setCartCount,
//         getTotalCartAmount,
//       }}
//     >
//       {children}
//     </OrderContext.Provider>
//   );
// };