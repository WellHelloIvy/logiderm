import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductDetails from './ProductsDetails'

function ProductPage ({ sessionUser }) {
    const { productId } = useParams()
    const product = useSelector(state => state.products[productId])


    return(
        <>
            <img src={`${product.img}`}></img>
            <ProductDetails sessionUser={sessionUser} productId={productId}/>
            <p>{product.ingredients}</p>
        </>
    )
}export default ProductPage;
