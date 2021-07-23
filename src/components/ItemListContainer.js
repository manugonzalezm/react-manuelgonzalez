import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
//axios
//spinner

function ItemListContainer(producto) {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const data = await fetch('https://my-json-server.typicode.com/manugonzalezm/react-manuelgonzalez/catalogo/1')
        const responseData = await data.json()
        setProducts(responseData)
    }

    useEffect(() => {
        setTimeout(() => getProducts(), 2000);
    }, [])

    return(
        <div id="itemListContainer">
            { products.length === 0
                ? <h1>Hola</h1>
                : <ItemList products={ products } />
            }
        </div>
    )
}

export default ItemListContainer;