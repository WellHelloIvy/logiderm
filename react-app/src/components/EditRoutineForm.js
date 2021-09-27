import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteFromRoutineModal from "./DeleteFromRoutineModal";
import { addToRoutine, deleteFromRoutine, updateRoutine } from '../store/session'
import ProductDetails from "./ProductsDetails";

const EditRoutineForm = ({ sessionUser, productId}) => {
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

    const isInRoutine = (routine) => {
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
        // const what = e.target.value;
        // console.log(what)

        switch (isInRoutine()){
            case 0:
                return dispatch(addToRoutine(productId, userId, time))
            // case 1:
            //     return dispatch(deleteFromRoutine(routine.id))
            // default:
            //     return dispatch(updateRoutine(routine.id, time))
        }

    }

    // const addToPmRoutine = (e) => {
    //     e.stopPropagation()
    //     const userId = sessionUser.id;
    //     const time = 2;

    //     switch (isInRoutine()){
    //         case 0:
    //             return dispatch(addToRoutine(productId, userId, time))
    //         case 2:
    //             return dispatch(deleteFromRoutine(routine.id))
    //         default:
    //             return dispatch(updateRoutine(routine.id, time))
    //     }
    // }

    // const addToBothRoutines = (e) => {
    //     e.stopPropagation()
    //     const userId = sessionUser.id;
    //     const time = 3;

    //     switch (isInRoutine()){
    //         case 0:
    //             return dispatch(addToRoutine(productId, userId, time))
    //         case 3:
    //             return dispatch(deleteFromRoutine(routine.id))
    //         default:
    //             return dispatch(updateRoutine(routine.id, time))
    //     }
    // }

    return(
        <>
            {routineArray.map((routine) =>
                <div id='edit-routine-modal' key={`${allProducts[routine.productId].id}`}>
                    <ProductDetails sessionUser={sessionUser} productId={allProducts[routine.productId].id}/>
                </div>
            )}
        </>
    )
}

export default EditRoutineForm;
