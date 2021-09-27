import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteFromRoutineModal from "./DeleteFromRoutineModal";
import { addToRoutine, deleteFromRoutine, updateRoutine } from '../store/session'

const EditRoutineForm = ({ sessionUser}) => {
    const [productToDeleteId, setProductToDeleteId ] = useState("")
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const routineIdArr = sessionUser.routines;
    const allProducts = useSelector(state => state.products)
    const dispatch = useDispatch()

    const routineArray = Object.values(sessionUser?.routines)


    const renderDeleteModal = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setProductToDeleteId(e.target.id);
        setShowDeleteModal(true);
    }

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

    return(
        <>
            {routineArray.map((routine) =>
                <div key={`${allProducts[routine.productId].id}`}>
                    <p>{`${allProducts[routine.productId].brand} ${allProducts[routine.productId].name}`}</p>
                    {/* <button id={allProducts[productId].id} onClick={renderDeleteModal}>Delete</button>
                    <DeleteFromRoutineModal productId={productToDeleteId} setShowModal={setShowDeleteModal} showModal={showDeleteModal} sessionUser={sessionUser}/> */}

                    <button className={`${isInRoutine() === 1 ? 'isClicked' : 'no'}`} onClick={addToAmRoutine}>AM</button>
                    <button className={`${isInRoutine() === 2 ? 'isClicked' : 'no'}`} onClick={addToPmRoutine}>PM</button>
                    <button className={`${isInRoutine() === 3 ? 'isClicked' : 'no'}`} onClick={addToBothRoutines}>AM + PM</button>

                </div>
            )}
        </>
    )
}

export default EditRoutineForm;
