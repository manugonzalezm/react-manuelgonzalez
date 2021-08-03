import React, { createContext, useContext, useState } from 'react';

export const contexto = createContext([]);

export const useCartContext = () => useContext(contexto);

const CartProvider = ( {children} ) => {
    const [cartContador, setCartContador] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [cartPrecio, setCartPrecio] = useState(0);

    const addItem = (item, cant) => {
        if(cartItems.some(prod => prod.nombre === item.nombre)){
            const copy = [...cartItems];
            const repeatedIndex = cartItems.findIndex(prod => prod.nombre === item.nombre);
            copy[repeatedIndex] = {
                ...copy[repeatedIndex],
                cant: copy[repeatedIndex].cant + cant
            };
            setCartItems(copy)
        } else{
            setCartItems([...cartItems, { ...item, cant }]);
        }
        setCartContador(ant => ant + cant);
        let precio = cartPrecio + item.precio*cant
        setCartPrecio(precio);
    }

    const removeItem = (item, cant) => {
        setCartContador(prev => prev - cant)
        let newCart = cartItems.filter(i => i.id!==item.id)
        setCartItems(newCart);
    }

    const clearCart = () => {
        setCartItems([]);
        setCartContador(0);
        setCartPrecio(0);
    }

    return(
        <contexto.Provider value={{ cartContador, cartItems, cartPrecio, addItem, clearCart, removeItem }}>
            { children }
        </contexto.Provider>
    );
}

export default CartProvider;