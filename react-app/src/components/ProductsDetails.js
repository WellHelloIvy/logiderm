import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToRoutine, deleteFromRoutine, updateRoutine } from '../store/session'

function ProductDetails({ sessionUser }) {
    const dispatch = useDispatch()
    let { productId } = useParams()
    const product = useSelector(state => state.products[productId])
    // const userRoutineIds = useSelector(state => state.session.user?.routines)
    const routineArray = Object.values(sessionUser?.routines)
    const routine = routineArray.find(routine => routine.productId === +productId);


    // const renderAddRoutine = () => {
    //     const alreadyInRoutine = userRoutineIds.find(id => id === product.id)
    //     return !alreadyInRoutine
    // }

    const isInRoutine = () => {
        if (routine) {
            return routine.time;
        }   else {
            return 0;
        }
    }

    const addToAmRoutine = (e) => {
        e.stopPropagation()
        const userId = sessionUser.id;
        const time = 1;

        switch (isInRoutine()){
            case 0:
                return dispatch(addToRoutine(productId, userId, time))
            case 1:
                return dispatch(deleteFromRoutine(routine.id))
            default:
                return dispatch(updateRoutine(routine.id, time))
        }

    }

    const addToPmRoutine = (e) => {
        e.stopPropagation()
        const userId = sessionUser.id;
        const time = 2;

        switch (isInRoutine()){
            case 0:
                return dispatch(addToRoutine(productId, userId, time))
            case 2:
                return dispatch(deleteFromRoutine(routine.id))
            default:
                return dispatch(updateRoutine(routine.id, time))
        }
    }

    const addToBothRoutines = (e) => {
        e.stopPropagation()
        const userId = sessionUser.id;
        const time = 3;

        switch (isInRoutine()){
            case 0:
                return dispatch(addToRoutine(productId, userId, time))
            case 3:
                return dispatch(deleteFromRoutine(routine.id))
            default:
                return dispatch(updateRoutine(routine.id, time))
        }
    }

    return (
        <>
            <div>
                <h1>{`${product.brand} ${product.name}`}</h1>
                <p>{`${product.ingredients}`}</p>
            </div>
            <div>
                {sessionUser &&
                <>
                    <button className={`${isInRoutine() === 1 ? 'isClicked' : 'no'}`} onClick={addToAmRoutine}>AM</button>
                    <button className={`${isInRoutine() === 2 ? 'isClicked' : 'no'}`} onClick={addToPmRoutine}>PM</button>
                    <button className={`${isInRoutine() === 3 ? 'isClicked' : 'no'}`} onClick={addToBothRoutines}>AM + PM</button>
                </>
                }
            </div>
        </>
    )
}

export default ProductDetails;
