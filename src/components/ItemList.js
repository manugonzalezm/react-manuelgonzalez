import React from 'react';
import Item from './Item';
import { useState, useEffect } from 'react';

function ItemList() {
    const[catalogo, setCatalogo] = useState([]);

    const obtenerDatos = async () => {
        const data = await fetch('https://my-json-server.typicode.com/manugonzalezm/react-manuelgonzalez/catalogo');
        const productos = await data.json();
        setCatalogo(productos);
    }

    useEffect(() => {
        obtenerDatos();
    }, [])

    return(
        <div className="containerCards">
            {catalogo.map(producto => {
                return(
                    <Item
                        key = { producto.id }
                        id = { producto.id }
                        nombre = { producto.nombre }
                        precio = { producto.precio }
                        foto = { producto.foto }
                    />
                )
            })}
        </div>
    )
}

export default ItemList;

