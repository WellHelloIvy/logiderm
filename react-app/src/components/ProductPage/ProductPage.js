import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductDetails from '../AddToRoutine/AddToRoutine'
import './ProductPage.css'

function ProductPage({ sessionUser }) {
    const { productId } = useParams()
    const product = useSelector(state => state.products[productId])


    return (
        <div className='product-page-container'>
            <img alt='fake product' src={`${product.img}`}></img>
            <div className='prod'>
                <h1>{product.brand}</h1>
                <h2>{product.name}</h2>
            </div>

            <div className='add-to-routine-div'>
                {sessionUser &&
                    <ProductDetails sessionUser={sessionUser} productId={productId} />
                }
            </div>
            <div className='ing'>
                <b>Ingredients:</b>
                <p>{product.ingredients}</p>
            </div>

        </div>
    )
}
export default ProductPage;
