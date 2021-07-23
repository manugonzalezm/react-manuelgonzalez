import React from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
    
    const [productDetail, setProductDetail] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            const data = await fetch(`https://my-json-server.typicode.com/manugonzalezm/react-manuelgonzalez/catalogo/${idActual}`)
            const responseData = await data.json()
            setProductDetail(responseData)
        }
        setTimeout(() => getProduct(), 2000);
    }, [idActual])

    const {idActual} = useParams();

    return(
        <div id="itemListContainer">
            { productDetail.length === 0
                ? <h1>Hola</h1>
                : <ItemDetail productDetail={ productDetail } />
            }
        </div>
    )
}