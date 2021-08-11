import React from 'react';
import Item from './Item';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { CircularProgress, Grid } from '@material-ui/core'
import { getFirestore } from '../firebase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    cardCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 0 35px 0",
    },
});

function CategoriasList() {

    const classes = useStyles();

    const [productsCateg, setProductsCateg] = useState([]);
    const [loading, setLoading] = useState(false);

    const {categoria} = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const collection = db.collection("productos");
        const condicion = collection.where("categoria","==",{categoria});
        const query = condicion.get();

        query.then((result) => {
            result.forEach(documento => {
                setProductsCateg(documento.data())
            })
        })

        collection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log("No se encontraron resultados");
            }
            setProductsCateg(querySnapshot.docs.map(doc => doc.data()));
        }).catch((error) => {
            console.log("Error buscando los productos", error);
        }).finally(() => {
            setLoading(false);
        });
    }, [categoria])
    return(
        <div>
            { loading
                ? <CircularProgress color="secondary" id="preloaderInicio" />
                :
                <div className="containerCards">
                    {productsCateg.filter(p => p.categoria === `${categoria}`).map(producto => {
                        return(
                        <Grid 
                            item 
                            xs={4}
                            className={classes.cardCenter}
                            justify="center"
                            alignItems="center"
                        >
                            <Item
                                key = { producto.id }
                                id = { producto.id }
                                nombre = { producto.nombre }
                                precio = { producto.precio }
                                foto = { producto.foto }
                                stock = { producto.stock }
                            />
                        </Grid>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default CategoriasList;