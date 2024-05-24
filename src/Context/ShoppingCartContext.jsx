import React, { createContext, useContext } from "react";
import { useLocalStorage } from '../Hooks/useLocalStorage'

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
    const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []);

    const totalCartCount = cartItems.reduce(
        (totalCount, item) => totalCount + item.quantity,
        0
    );

    function getItemQuantity(id) {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    }

    function increaseCartQuantity(id) {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }];
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function decreaseCartQuantity(id) {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
                return currItems.filter((item) => item.id !== id);
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function removeFromCart(id) {
        setCartItems((currItems) => currItems.filter((item) => item.id !== id));
    }

    function setItemQuantity(id, quantity, price) {
        setCartItems((currItems) => {

            if (quantity === 0) {
                return currItems.filter((item) => item.id !== id);
            }
            if (currItems.find((item) => item.id === id) == null) {
                return [...currItems, { id, quantity, price }];
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity, price };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <ShoppingCartContext.Provider
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                cartItems,
                cartQuantity: totalCartCount,
                setItemQuantity,
                clearCart
            }}
        >
            {children}

        </ShoppingCartContext.Provider>
    );
}
