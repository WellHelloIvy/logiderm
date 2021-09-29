import React, {useState} from "react";
import AddToRoutine from "../AddToRoutine/AddToRoutine";
import { Modal } from "../../context/Modal";
import { Link } from "react-router-dom";

const EditRoutineModal = ({ sessionUser, productId, link }) => {
    const [showModal, setShowModal] = useState(false);

    const clickHandler = (e) => {
        e.preventDefault();

        setShowModal(true)
    }
    return (
        <>
            <Link onClick={clickHandler}>{link}</Link>
            {showModal &&(
                <Modal onClose={() => setShowModal(false)}>
                    <AddToRoutine setShowModal={setShowModal} sessionUser={sessionUser} productId={productId}/>
                </Modal>
            )}

        </>
    )
}

export default EditRoutineModal;
