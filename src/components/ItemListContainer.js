import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { CircularProgress } from '@material-ui/core'
import { getFirestore } from '../firebase';

function ItemListContainer() {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {       
        setLoading(true);
        const db = getFirestore();
        const collection = db.collection("productos");
        const query = collection.get();

        query.then((result) => {
            result.forEach(documento => {
                setProducts(documento.data())
            })
        })

        collection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log("No se encontraron resultados");
            }
            setProducts(querySnapshot.docs.map(doc => doc.data()));
        }).catch((error) => {
            console.log("Error buscando los productos", error);
        }).finally(() => {
            setLoading(false);
        });
        
    }, []);

    return(
        <div id="itemListContainer">
            { loading
                ? <CircularProgress color="secondary" id="preloaderInicio" />
                : <ItemList products={ products } />
            }
        </div>
    )
}

export default ItemListContainer;