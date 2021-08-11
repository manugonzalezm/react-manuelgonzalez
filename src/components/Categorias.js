import React from 'react';
import CategoriasList from './CategoriasList';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    gridContainer: {
        padding: "20px",
    },
});

function Categorias() {

    const classes = useStyles();

    return(
        <div>
            <Container fixed>
                <Grid 
                    className={classes.gridContainer}
                >
                    <CategoriasList/>
                </Grid>
            </Container>
        </div>
    )
}

export default Categorias;