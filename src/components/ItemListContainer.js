import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { CircularProgress } from '@material-ui/core'

function ItemListContainer() {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const data = await fetch('https://my-json-server.typicode.com/manugonzalezm/react-manuelgonzalez/catalogo/')
        const responseData = await data.json()
        setProducts(responseData)
    }

    useEffect(() => {
        setTimeout(() => getProducts(), 2000);
    }, [])

    return(
        <div id="itemListContainer">
            { products.length === 0
                ? <CircularProgress color="secondary" id="preloaderInicio" />
                : <ItemList products={ products } />
            }
        </div>
    )
}

export default ItemListContainer;