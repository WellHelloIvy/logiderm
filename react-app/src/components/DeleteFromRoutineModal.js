import React from 'react'
import { useDispatch } from 'react-redux'
import { Modal } from '../context/Modal';
import { deleteFromRoutine } from "../store/session";

function DeleteFromRoutineModal({ sessionUser, productId, showModal, setShowModal}){
    const dispatch = useDispatch();

    const handleDelete = async(e) => {
        const userId = sessionUser.id;
        await dispatch(deleteFromRoutine(userId, productId));
        setShowModal(false);
    }

    const onClose = (e) => {
        setShowModal(false);
        e.stopPropagation();
    }

    return(
        <>
            {showModal && (
                <Modal onClose={onClose}>
                    <p>Remove from your Routine?</p>
                    <div>
                        <button onClick={handleDelete}>Delete</button>
                        <button onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </Modal>
            )}
        </>
    )

}

export default DeleteFromRoutineModal
