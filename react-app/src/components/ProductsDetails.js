import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToRoutine } from '../store/session'

function ProductDetails({ sessionUser }) {
    let { productId } = useParams()
    const product = useSelector(state => state.products[productId])

    const userRoutineIds = useSelector(state => state.session.user.routines)
    const alreadyInRoutine = userRoutineIds.find(id => id === product.id)

    const addProductToRoutine = (e) => {
        e.stopPropagation()
        dispatchEvent(addToRoutine(e.currentTarget.id, sessionUser))
    }

    return (
        <>
            <div>
                <h1>{`${product.brand} ${product.name}`}</h1>
                <p>{`${product.ingredients}`}</p>
            </div>
            <div>
                {!alreadyInRoutine &&
                    <button onClick={addProductToRoutine}> Add to Routine</button>
                }
            </div>
        </>

    )
}

export default ProductDetails;
