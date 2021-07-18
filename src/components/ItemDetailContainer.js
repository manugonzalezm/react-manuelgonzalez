import React from 'react';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
    
    const [detalle, setDetalle] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const task = new Promise((resolve, reject) => {

            const data = [{
                id: 1,
                titulo:"Taza mágica Fisica y Química",
                foto:"taza-fisica.png",
                descripcion: "Taza mágica. A temperatura ambiente es totalmente negra y cuando añadimos agua caliente se puede ver el dibujo que se observa en la foto",
                precio: 800,
                stock: 99
            }];

            setLoading(true);

            setTimeout(() => {
                resolve(data);
            }, 2000);
        });
    
        task.then(
            res => {
                setDetalle(res);
                setLoading(false);
            },
            rej => {
                console.log(rej);
            }
        );
    }, []);
    
    return(
        <div>
            {loading ? <h2>Loading...</h2> :
                <div className="containerCards">
                {detalle.map(producto => {
                    return(
                        <ItemDetail
                            key = { producto.id }
                            id = { producto.id }
                            titulo = { producto.titulo }
                            descripcion = { producto.descripcion }
                            precio = { producto.precio }
                            foto = { producto.foto }
                            stock = { producto.stock }
                        />
                    )
                })}
                </div>
            };
        </div>
    );
}