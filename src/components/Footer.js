import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <Box bgcolor="primary.main">
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} p={0.5}>
                                TiendaCiencia
                            </Box>
                            <Box p={0.5}>
                                <Link to='/' color="inherit">
                                    Home
                                </Link>
                            </Box>
                            <Box p={0.5}>
                                <Link to='/contacto' color="inherit">
                                    Contacto
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} p={0.5}>
                                Catálogo
                            </Box>
                            <Box p={0.5}>
                                <Link to='/productos' color="inherit">
                                    Productos
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} p={0.5}>
                            Categorías
                            </Box>
                            <Box p={0.5}>
                                <Link to='/categorias/muebles' color="inherit">
                                    Muebles
                                </Link>
                            </Box>
                            <Box p={0.5}>
                                <Link to='/categorias/indumentaria' color="inherit">
                                    Indumentaria
                                </Link>
                            </Box>
                            <Box p={0.5}>
                                <Link to='/categorias/accesorios' color="inherit">
                                    Accesorios
                                </Link>
                            </Box>
                            <Box p={0.5}>
                                <Link to='/categorias/tazas' color="inherit">
                                    Tazas
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}
