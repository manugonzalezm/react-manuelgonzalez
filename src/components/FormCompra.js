import React, { useState } from 'react';
import { useCartContext } from '../context/CartContext'
import { Typography, Button, TextField, Grid, Container, Divider } from '@material-ui/core'
import { Payment, Person, Phone, AlternateEmail, Home, ArrowBack } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import { getFirestore } from '../firebase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    respuesta: {
        marginBottom: "120px"
    },
});

function FormCompra() {
    const classes = useStyles();

    const { cartItems, clearCart, cartPrecio } = useCartContext();

    const [mostrarOrden, setMostrarOrden] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [montoOrden, setMontoOrden] = useState(null);

    const [comprador, setComprador] = useState({
        nombre: '',
        telefono: '',
        email: ''
    });

    const productos = cartItems.map(({ id, nombre , precio, cant }) => ({ id, nombre, precio, cant }));

    let hoy = new Date();
    const date = `${hoy.getDate()}/${hoy.getMonth()+1}/${hoy.getFullYear()}`;
    const hora = `${hoy.getHours()}:${hoy.getMinutes()}`;
    const fecha = `${date} ${hora}`;

    const handleInputChange = (e) => {
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })
    }

    const montoTotal = cartPrecio;
    const db = getFirestore();
    const ordenes = db.collection("ordenes");
    const nuevaOrden = {
        comprador,
        productos,
        fecha,
        montoTotal
    };

    const enviarDatos = (e) => {
        e.preventDefault();
        ordenes.add(nuevaOrden).then(({id}) => {
            setOrderId(id);
            setMontoOrden(cartPrecio);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setMostrarOrden(true);
            clearCart();
        });
    }
    
    return(
        <>
            {!mostrarOrden &&
                <Container id="contenedorForm">
                    <Typography 
                        id="formTitle" 
                        variant="h5">
                            Completa los siguientes datos para finalizar tu compra:
                    </Typography>
                    <form onSubmit={enviarDatos}>
                    <Grid container spacing={3}>
                        <Grid item xs={1}>
                            <Person 
                                fontSize="large"
                                style={{margin: "10px 0 0 0"}}
                            />
                        </Grid>
                        <Grid item xs={11}>
                            <TextField 
                                name="nombre"
                                fullWidth 
                                type="text" 
                                variant="outlined" 
                                label="Nombre y apellido" 
                                required
                                color="secondary"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Phone 
                                fontSize="large"
                                style={{margin: "10px 0 0 0"}}
                            />
                        </Grid>
                        <Grid item xs={11}>
                            <TextField 
                                name="telefono"
                                fullWidth type="tel" 
                                variant="outlined" 
                                label="Teléfono" 
                                required
                                onChange={handleInputChange}
                                color="secondary"
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <AlternateEmail 
                                fontSize="large"
                                style={{margin: "10px 0 0 0"}}
                            />
                        </Grid>
                        <Grid item xs={11}>
                            <TextField 
                                name="email"
                                fullWidth 
                                type="email"
                                variant="outlined" 
                                label="E-mail" 
                                required
                                color="secondary"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Link to="/cart">
                                <Button 
                                    color="secondary"
                                    variant="contained" 
                                    size="large"
                                    style={{margin: "10px 0 0 5%"}}
                                    startIcon={<ArrowBack />}
                                >
                                        Volver al carrito
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={6}>
                                <Button 
                                    type="submit"
                                    id="comprar" 
                                    variant="contained" 
                                    size="large"
                                    style={{margin: "10px 0 0 50%"}}
                                    startIcon={<Payment />}
                                >
                                    Comprar
                                </Button>
                        </Grid>
                    </Grid>
                    </form>
                </Container>
            }
            {mostrarOrden &&
                <div>
                    <Container className={classes.respuesta}>
                        <Typography id="mensajeOrden" variant="body1">
                            Su compra ha sido realizada. Su orden de compra es: #{orderId}
                        </Typography>
                        <Divider />
                        <Typography id="margenV" variant="h5">
                            Detalle de la compra:
                        </Typography>
                        <Grid container>
                            <Grid item xs={4}>
                                <TextField 
                                    label="Nombre"
                                    value={comprador.nombre}
                                    inputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField 
                                    label="Teléfono"
                                    value={comprador.telefono}
                                    inputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField 
                                    label="E-mail"
                                    value={comprador.email}
                                    inputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography id="monto" variant="body1">
                                    Monto Total: ${montoOrden}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Link to="/">
                                    <Button color="secondary" variant="contained" startIcon={<Home />}>
                                        Volver al Home
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            }
        </>
    );
}

export default FormCompra;