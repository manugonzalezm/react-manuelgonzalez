import React, { createContext, useContext, useState, useEffect } from 'react';

export const contexto = createContext([]);

export const useCartContext = () => useContext(contexto);

const cartItemsFromLS = JSON.parse(localStorage.getItem('cartItems'))
const cartPriceFromLS = JSON.parse(localStorage.getItem('cartPrecio'))
const cartContadorFromLS = JSON.parse(localStorage.getItem('cartCant'))


const CartProvider = ( {children} ) => {
    const [cartContador, setCartContador] = useState(cartContadorFromLS !== null ? cartContadorFromLS : 0);
    const [cartItems, setCartItems] = useState(cartItemsFromLS !== null ? cartItemsFromLS : []);
    const [cartPrecio, setCartPrecio] = useState(cartPriceFromLS <0 ? cartPriceFromLS : 0);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        localStorage.setItem('cartPrice', JSON.stringify(cartPrecio))
        localStorage.setItem('cartCant', JSON.stringify(cartContador))
    }, [cartContador, cartItems, cartPrecio])

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
        setCartPrecio(a => a - (item.precio*cant))
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