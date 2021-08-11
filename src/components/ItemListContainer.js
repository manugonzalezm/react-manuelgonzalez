import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { CircularProgress, Grid, Container, Box } from '@material-ui/core'
import { getFirestore } from '../firebase';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    gridContainer: {
        padding: "20px",
    },
});

function ItemListContainer() {

    const classes = useStyles();

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {       
        setLoading(true);
        const db = getFirestore();
        const collection = db.collection("productos");
        const query = collection.get();

        query.then((result) => {
            result.forEach(documento => {
                setProducts(documento.data())
            })
        })

        collection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log("No se encontraron resultados");
            }
            setProducts(querySnapshot.docs.map(doc => doc.data()));
        }).catch((error) => {
            console.log("Error buscando los productos", error);
        }).finally(() => {
            setLoading(false);
        });
        
    }, []);

    return(
        <>
            <Container 
                fixed
                className={classes.gridContainer}
            >
            { loading
                ? <CircularProgress color="secondary" id="preloaderInicio" />
                : 
                    <Grid 
                        container
                    >
                        <ItemList products={ products } />
                    </Grid>
            }
            </Container>
        </>
    )
}

export default ItemListContainer;