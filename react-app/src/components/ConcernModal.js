import React, { useState } from 'react';
import EditConcernForm from './EditConcernForm';
import { Modal } from '../context/Modal';

const ConcernModal = ({ sessionUser }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit your skin concerns</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditConcernForm setShowModal={setShowModal} sessionUser={sessionUser} />
                </Modal>
            )}
        </>
    )
}

export default ConcernModal;
