import React, {useState} from "react";
import { useSelector } from "react-redux";
import DeleteFromRoutineModal from "./DeleteFromRoutineModal";

const EditRoutineForm = ({ sessionUser}) => {
    const [productToDeleteId, setProductToDeleteId ] = useState("")
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const routineIdArr = sessionUser.routines;
    const allProducts = useSelector(state => state.products)

    const renderDeleteModal = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setProductToDeleteId(e.target.id);
        setShowDeleteModal(true);
    }

    return(
        <>
            {routineIdArr.map((id) =>
                <div key={`${allProducts[id].id}`}>
                    <p>{`${allProducts[id].brand} ${allProducts[id].name}`}</p>
                    <button id={allProducts[id].id} onClick={renderDeleteModal}>Delete</button>
                    <DeleteFromRoutineModal productId={productToDeleteId} setShowModal={setShowDeleteModal} showModal={showDeleteModal} sessionUser={sessionUser}/>
                </div>
            )}
        </>
    )
}

export default EditRoutineForm;
