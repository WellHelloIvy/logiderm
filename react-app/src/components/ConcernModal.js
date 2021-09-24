import React, { useState } from 'react';
import { Modal } from '../context/Modal';

const ConcernModal = ({ showModal, setShowModal, sessionUser }) => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = await dispatch(addConcern(userId, concernId))
    }

    return (
        <>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditConcernForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
}

export default ConcernModal;
