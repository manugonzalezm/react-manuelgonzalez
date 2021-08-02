import React, { createContext, useContext, useState } from 'react';

export const contexto = createContext([]);

export const useCartContext = () => useContext(contexto);

const CartProvider = ( {children} ) => {
    const [cartContador, setCartContador] = useState(0);
    const [cartItems, setCartItems] = useState([]);

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
    }

    const clearCart = () => {
        setCartItems([]);
        setCartContador(0);
    }

    return(
        <contexto.Provider value={{ cartContador, cartItems, addItem, clearCart }}>
            { children }
        </contexto.Provider>
    );
}

export default CartProvider;

//import React, { useContext, useState } from 'react';
//import { Provider } from '../context/CartContext';
//
//const CartProvider = ( {children} ) => {
//    const useCartContext = useContext(contexto);
//
//    const [cart, setCart] = useState([]);
//
//    const addItem = () => {
//        setCart([AGREGAR]);
//    }
//    
//    const removeItem = () => {
//        
//    }
//    
//    const clear = () => {
//        setCart([]);
//    }
//   
//    const isInCart = () => {
//   
//    }

//    return(
//        <Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
//            { children }
//        </Provider>
//    );
//}
//
//export default CartProvider;
