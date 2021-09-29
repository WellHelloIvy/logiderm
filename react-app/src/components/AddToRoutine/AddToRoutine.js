import { useDispatch } from 'react-redux'
import { addToRoutine, deleteFromRoutine, updateRoutine } from '../../store/session'
import './AddToRoutine.css'

function AddToRoutine({ sessionUser, productId}) {
    const dispatch = useDispatch()
    const routineArray = Object?.values(sessionUser?.routines)
    const routine = routineArray.find(routine => routine.productId === +productId);

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

    return (sessionUser &&
        <>
            { routine ?
                <>
                    <p>This product is already in your routine.</p>
                    <p>Update when you're using it, or remove it completely:</p>
                </>
                :
                    <p>Add this product your routine:</p>

            }
            <div className='routine-button-div'>
                <button className={`${isInRoutine() === 1 ? 'isClicked' : 'no'}`} onClick={addToAmRoutine}>AM</button>
                <button className={`${isInRoutine() === 2 ? 'isClicked' : 'no'}`} onClick={addToPmRoutine}>PM</button>
                <button className={`${isInRoutine() === 3 ? 'isClicked' : 'no'}`} onClick={addToBothRoutines}>AM + PM</button>
            </div>
        </>
    )
}

export default AddToRoutine;
