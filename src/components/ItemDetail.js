import React from 'react';
import ItemCount from './ItemCount';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress, Typography } from '@material-ui/core'
import { FiberManualRecord } from '@material-ui/icons'

function ItemDetail() {
    const [productDetail, setProductDetail] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const getProductDetail = async () => {
            const data = await fetch(`https://my-json-server.typicode.com/manugonzalezm/react-manuelgonzalez/catalogo/${id}`)
            const responseData = await data.json()
            setProductDetail(responseData)
        }
        setTimeout(() => getProductDetail(), 2000);
    }, [id])

    return(
        <div>
            { productDetail.length === 0
                    ? <CircularProgress color="secondary" className="Preloader"/>
                    : 
                    <div className="cardProducto Detalle">
                        <Typography id="titleProducto" variant="h6"><FiberManualRecord /> { productDetail.nombre } </Typography>
                        <img 
                            src={productDetail.foto}
                        />
                        <Typography className="descripcion" variant="body1"> { productDetail.descripcion } </Typography>
                        <Typography className="precio" variant="subtitle1"> ${ productDetail.precio } </Typography>
                        <ItemCount
                            stock={ productDetail.stock }
                            initial="1"
                        />
                    </div>
                }
        </div>
    )
}

export default ItemDetail;