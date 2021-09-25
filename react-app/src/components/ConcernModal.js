import React, { useState } from 'react';
import EditConcernForm from './EditConcernForm';
import { Modal } from '../context/Modal';

const ConcernModal = ({ showModal, setShowModal, sessionUser }) => {

    return (
        <>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditConcernForm setShowModal={setShowModal} sessionUser={sessionUser} />
                </Modal>
            )}
        </>
    )
}

export default ConcernModal;
