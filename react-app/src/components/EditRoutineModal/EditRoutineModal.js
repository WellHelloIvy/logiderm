import React, { useState } from "react";
import AddToRoutine from "../AddToRoutine/AddToRoutine";
import { Modal } from "../../context/Modal";
import { Link } from "react-router-dom";
import './EditRoutineModal.css'

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
                    <div className='edit-routine-modal'>
                        <div className='edit-product-name'>
                            <b>{`${product?.brand}`}</b>
                            <b>{`${product?.name}`}</b>
                        </div>
                        <div className="edit-product-image">
                            <img src={`${product?.img}`}></img>
                        </div>
                        <div className='add-to-routine'>
                            <AddToRoutine setShowModal={setShowModal} sessionUser={sessionUser} productId={product.id} />
                        </div>

                    </div>

                </Modal>
            )}

        </>
    )
}

export default EditRoutineModal;
