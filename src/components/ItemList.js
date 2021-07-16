import React from 'react';
import Item from './Item';
import {
    taza,
    escritorio,
    remera,
    teclado
} from '../img/images';

var dataProductos = [
    {
        id: 1,
        nombre: "Escritorio nórdico",
        precio: 12000,
        foto: escritorio
    },
    {
        id: 2,
        nombre: "Remera Einstein",
        precio: 1500,
        foto: remera
    },
    {
        id: 3,
        nombre: "Taza mágica Física y Química",
        precio: 800,
        foto: taza
    },
    {
        id: 4,
        nombre: "Teclado Gamer",
        precio: 6000,
        foto: teclado
    }
];

function ItemList(producto) {
    
    return(
        <div className="containerCards">
            {dataProductos.map(producto => {
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

