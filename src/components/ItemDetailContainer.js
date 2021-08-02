import React from 'react';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import ItemCount from './ItemCount';
import { Link, useParams } from 'react-router-dom';
import { Button, CircularProgress } from '@material-ui/core'
import { ShoppingBasket } from '@material-ui/icons'
import { useCartContext } from '../context/CartContext'


export default function ItemDetailContainer() {
        const [item, setItem] = useState([]);
        const [cant,setCant] = useState(1);
        const [showCart, setShowCart] = useState(true)

        const { addItem } = useCartContext();

        const finishCompra = () => {
            setShowCart(false);
            addItem(item, cant)
        }
    
        const {id} = useParams();
    
        useEffect(() => {
            const getProductDetail = async () => {
                const data = await fetch(`https://my-json-server.typicode.com/manugonzalezm/react-manuelgonzalez/catalogo/${id}`)
                const responseData = await data.json()
                setItem(responseData)
            }
            setTimeout(() => getProductDetail(), 2000);
        }, [id])
    
    const sacarProducto = () => {
        if(cant>1){
            setCant(cant-1);
        }
    }

    const onAdd= () => {
        const stock= item.stock
        if(cant<stock){
            setCant(cant+1);
        }
    }

        return (
            <>
                { item.length === 0
                        ? <CircularProgress color="secondary" className="Preloader"/>
                        :  (
                <div>
                    <ItemDetail
                        nombre={item.nombre}
                        precio={item.precio}
                        descripcion={item.descripcion}
                        foto={item.foto}
                    />
                    {   showCart
                    ?
                    <ItemCount
                        showCart={showCart}
                        cant={cant}
                        sacarProducto={sacarProducto}
                        onAdd={onAdd}
                        finishCompra={finishCompra}
                        stock= {item.stock}
                    /> :
                    <div className="cart">
                    <Link to={`/cart`}>
                        <Button
                        variant="contained" 
                        color="primary"
                        size="large"
                        startIcon={<ShoppingBasket />}>
                            Terminar tu compra
                        </Button>
                    </Link>
                    </div>
                    }
                </div>
                )}
            </>
        );
};
