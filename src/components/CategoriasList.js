import React from 'react';
import Item from './Item';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core'


function CategoriasList() {
    const [productsCateg, setProductsCateg] = useState([]);
    const {categoria} = useParams();

    useEffect(() => {
        const getProductsByCateg = async () => {
            const data = await fetch('https://my-json-server.typicode.com/manugonzalezm/react-manuelgonzalez/catalogo/')
            const responseData = await data.json()
            console.log(responseData)
            setProductsCateg(responseData)
        }

        setTimeout(() => getProductsByCateg(), 2000);
    }, [categoria])
    return(
        <div>
            { productsCateg.length === 0
                ? <CircularProgress color="secondary" id="preloaderInicio" />
                : 
                <div className="containerCards">
                {productsCateg.filter(p => p.categoria === `${categoria}`).map(producto => {
                    return(
                        <Item
                            key = { producto.id }
                            id = { producto.id }
                            nombre = { producto.nombre }
                            precio = { producto.precio }
                            foto = { producto.foto }
                            stock = { producto.stock }
                        />
                    )
                })}
                </div>
            }
        </div>
    )
}

export default CategoriasList;