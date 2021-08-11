import React from 'react';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import ItemCount from './ItemCount';
import { Link, useParams } from 'react-router-dom';
import { Button, CircularProgress, Snackbar, Container, Grid, Box } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import { ShoppingBasket, ShopTwo } from '@material-ui/icons'
import { useCartContext } from '../context/CartContext'
import { getFirestore } from '../firebase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    contenedor: {
        padding: "30px",
    },
    cardCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 0 35px 0",
    },
});

export default function ItemDetailContainer() {

        const classes = useStyles();

        const [item, setItem] = useState([]);
        const [cant,setCant] = useState(1);
        const [showCart, setShowCart] = useState(true)
        const [open, setOpen] = useState(false)
        const [loading, setLoading] = useState(true)

        const { addItem } = useCartContext();

        const handleClose = () => {
            setOpen(false);
        }

        const finishCompra = () => {
            setShowCart(false);
            setOpen(true);
            addItem(item, cant)
        }
    
        const {id} = useParams();
    
        useEffect(() => {
            setLoading(true);
            const db = getFirestore();
            const collection = db.collection("productos");
            const item = collection.doc(id);
    
            item.get().then((doc) => {
                if (!doc.exists) {
                    console.log("El item no existe en la base de datos");
                    return;
                }
                console.log("Item encontrado");
                setItem({ id: doc.id, ...doc.data() });
            }).catch((error) => {
                console.log("Error buscando el item", error);
            }).finally(() => {
                setLoading(false);
            });
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
                <Container 
                    fixed
                    className={classes.contenedor}
                >
                { loading
                        ? <CircularProgress color="secondary" className="Preloader"/>
                        :  
                    <>
                    <Grid 
                        container
                    >
                        <Grid
                            item
                            xs={6}
                            className={classes.cardCenter}
                        >
                            <ItemDetail
                                nombre={item.nombre}
                                precio={item.precio}
                                descripcion={item.descripcion}
                                foto={item.foto}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            className={classes.cardCenter}
                        >
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
                                <Link to={`/productos`}>
                                    <Button
                                    id="continue"
                                    variant="contained" 
                                    size="large"
                                    startIcon={<ShopTwo />}>
                                        Seguir comprando
                                    </Button>
                                </Link>
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
                        </Grid>
                    </Grid>
                    <Snackbar
                        open={open} 
                        autoHideDuration={5000} 
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}>
                        <MuiAlert elevation={6} variant="filled" severity="success" onClose={handleClose}>
                        Agregaste {cant} productos al carrito
                        </MuiAlert>
                    </Snackbar>
                    </>
                }
                </Container>
            </>
        );
};
