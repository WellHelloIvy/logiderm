import React, { useState } from 'react';
import EditRoutineForm from './EditRoutineForm';
import { Modal } from '../context/Modal';

const RoutineModal = ({ sessionUser }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit your routine</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditRoutineForm setShowModal={setShowModal} sessionUser={sessionUser} />
                </Modal>
            )

            }
        </>
    )
}

export default RoutineModal;
