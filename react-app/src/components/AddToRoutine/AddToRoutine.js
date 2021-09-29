import { useDispatch } from 'react-redux'
import { addToRoutine, deleteFromRoutine, updateRoutine } from '../../store/session'
import './AddToRoutine.css'

function AddToRoutine({ sessionUser, productId, setShowModal=false}) {
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
                dispatch(addToRoutine(productId, userId, time))
                break;
            case 1:
                dispatch(deleteFromRoutine(routine.id))
                break;
            default:
                dispatch(updateRoutine(routine.id, time))
                break;
        }
    }

    const addToPmRoutine = (e) => {
        e.stopPropagation()
        const userId = sessionUser.id;
        const time = 2;

        switch (isInRoutine()){
            case 0:
                dispatch(addToRoutine(productId, userId, time))
                break;
            case 2:
                dispatch(deleteFromRoutine(routine.id))
                break;
            default:
                dispatch(updateRoutine(routine.id, time))
                break;
        }
    }

    const addToBothRoutines = (e) => {
        e.stopPropagation()
        const userId = sessionUser.id;
        const time = 3;

        switch (isInRoutine()){
            case 0:
                dispatch(addToRoutine(productId, userId, time))
                break;
            case 3:
                dispatch(deleteFromRoutine(routine.id))
                break;
            default:
                dispatch(updateRoutine(routine.id, time))
                break;
        }
    }

    return (sessionUser &&
        <>
            { routine ?
                <>
                    <p>This product is already in your routine.</p>
                    <p>Update when you're using it, or unselect to remove it completely:</p>
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
