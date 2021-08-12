import React, { useState } from 'react';
import { TextField, Grid, Container, Typography, Divider, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Person, Phone, AlternateEmail, Send, Refresh, Home } from '@material-ui/icons'
import { getFirestore } from '../firebase';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    contenedor: {
        padding: "40px",
        border: "1px solid black",
        borderRadius: "1rem",
        margin: "35px",
    },
});

function Contacto() {
    const classes = useStyles();
    
    const [mostrarConsulta, setMostrarConsulta] = useState(false);
    const [consultaId, setConsultaId] = useState(null);

    let hoy = new Date();
    const date = `${hoy.getDate()}/${hoy.getMonth()+1}/${hoy.getFullYear()}`;
    const hora = `${hoy.getHours()}:${hoy.getMinutes()}`;
    const fecha = `${date} ${hora}`;

    const [consulta, setConsulta] = useState({
        nombre: '',
        telefono: '',
        mail: '',
        consulta: '',
        fecha
    });

    const limpiarForm = () => {
        setConsulta({
            nombre: '',
            telefono: '',
            mail: '',
            consulta: '',
            fecha
        })
    }

    const handleInputChange = (e) => {
        setConsulta({
            ...consulta,
            [e.target.name]: e.target.value
        })
    }

    const db = getFirestore();
    const consultas = db.collection("consultas");

    const enviarConsulta = (e) => {
        e.preventDefault();
        consultas.add(consulta).then(({id}) => {
            setConsultaId(id);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setMostrarConsulta(true);
        });
    }

    return(
        <>
        {!mostrarConsulta &&
            <Container className={classes.contenedor}>
                <Typography variant="h5">
                    Envianos tu consulta
                </Typography>
                <form onSubmit={enviarConsulta} id="formContacto">
                    <Grid container spacing={8}>
                        <Grid item xs={6}>
                            <Grid container>
                                <Grid item xs={1}>
                                    <Person 
                                        fontSize="large"
                                        style={{margin: "10px -5px 0 0"}}
                                    />
                                </Grid>
                                <Grid item xs={11}>
                                    <TextField 
                                        onChange={handleInputChange}
                                        name="nombre"
                                        label="Nombre"
                                        variant="outlined"
                                        color="secondary"
                                        type="text"
                                        value={consulta.nombre}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        
                        <Grid item xs={6}>
                            <Grid container>
                                <Grid item xs={1}>
                                    <Phone 
                                        fontSize="large"
                                        style={{margin: "10px -5px 0 0"}}
                                    />
                                </Grid>
                                <Grid item xs={11}>
                                    <TextField 
                                        onChange={handleInputChange}
                                        name="telefono"
                                        label="Teléfono"
                                        variant="outlined"
                                        color="secondary"
                                        type="number"
                                        value={consulta.telefono}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        
                        <Grid item xs={6}>
                            <Grid container>
                                <Grid item xs={1}>
                                    <AlternateEmail 
                                        fontSize="large"
                                        style={{margin: "10px -5px 0 0"}}
                                    />
                                </Grid>
                                <Grid item xs={11}>
                                    <TextField 
                                        onChange={handleInputChange}
                                        name="mail"
                                        label="E-mail"
                                        variant="outlined"
                                        color="secondary"
                                        type="mail"
                                        value={consulta.mail}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                            </Grid>
                            
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                                onChange={handleInputChange}
                                name="consulta"
                                label="Consulta"
                                variant="outlined"
                                color="secondary"
                                type="text"
                                value={consulta.consulta}
                                fullWidth
                                multiline
                                required
                            />
                        </Grid>
                        <Grid item xs={7}>

                        </Grid>
                        <Grid item xs={3}>
                            <Button 
                                onClick={limpiarForm}
                                variant="contained" 
                                color="secondary"
                                startIcon={<Refresh/>}
                            >
                                Limpiar todo
                            </Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button 
                                variant="contained" 
                                type="submit"
                                startIcon={<Send/>}
                                id="comprar" 
                            >
                                Enviar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        }
        {mostrarConsulta &&
                <div>
                    <Container>
                        <Typography id="margenV" variant="h5">
                            {consulta.nombre} ¡Muchas gracias por comunicarte con nosotros! Te contactaremos a la brevedad.
                        </Typography>
                        <Divider />
                        <Typography id="mensajeOrden" variant="body1">
                            Su consulta ha sido realizada. Su código es: #{consultaId}
                        </Typography>
                        <Grid container>
                            <Grid item xs={12}>
                                <Link to="/">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<Home />}
                                    >
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

export default Contacto;