import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function ProductDetails({ sessionUser }) {
    let { productId } = useParams()
    const product = useSelector(state => state.products[productId])
    // const allAttributes = Object.entries(useSelector(state => state.labels.attributes))
    // const product

    return (
        <div>
            <h1>{`${product.brand} ${product.name}`}</h1>
            {/* {

            }
            <p>{`${product.}`}</p> */}
            <p>{`${product.ingredients}`}</p>
        </div>
    )
}

export default ProductDetails;
