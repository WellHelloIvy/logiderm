import React, { useState } from "react";
import AddToRoutine from "../AddToRoutine/AddToRoutine";
import { Modal } from "../../context/Modal";
import { Link } from "react-router-dom";

const EditRoutineModal = ({ sessionUser, product }) => {
    const [showModal, setShowModal] = useState(false);

    const clickHandler = (e) => {
        e.preventDefault();

        setShowModal(true)
    }
    return (
        <>
            <Link onClick={clickHandler}>{`${product?.brand} ${product?.name}`}</Link>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div>
                        <b>{`${product?.brand}`}</b>
                        <b>{`${product?.name}`}</b>
                    </div>
                    <div>
                        <img src={`${product?.img}`}></img>
                    </div>
                    <AddToRoutine setShowModal={setShowModal} sessionUser={sessionUser} productId={product.id} />
                </Modal>
            )}

        </>
    )
}

export default EditRoutineModal;
