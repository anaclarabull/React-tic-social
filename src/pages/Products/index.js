import { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

function Products() {
    const [product, setProduct] = useState();

    var parametros = useRouteMatch();

    useEffect(() => {
        async function fetchData() {
            var response = await fetch(`http://ecommerce-residencia.herokuapp.com/produto/${parametros.params.id}`);
            var responseJson = await response.json();

            setProduct(responseJson);
        }

        fetchData()
    }, [])

    return (
        <>
            <img style={{ width: '200px' }} src={product?.fotoLink} alt={product?.nome} />
            <h3>{product?.nome}</h3>
            <p>R${product?.valor},00</p>
        </>
    )
}

export default Products;