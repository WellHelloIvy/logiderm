import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addConcern, deleteConcern } from '../store/session';

const EditConcernForm = ({ setShowModal, sessionUser }) => {
    const allConcerns = Object.entries(useSelector(state => state.labels.concerns))
    const dispatch = useDispatch();

    const onSubmit = async(e) => {
        setShowModal(false)
    }



    const handleClick = async(e) => {
        const clicked = e.target.classList.contains('isClicked')
        const concernId = e.target.id;
        const userId = sessionUser.id;
        if(!clicked) {
            dispatch(addConcern(userId, concernId))
            e.target.classList.add('isClicked')
        } else {
            dispatch(deleteConcern(userId, concernId))
            e.target.classList.remove('isClicked')
        }
    }

    return (
        <>
            {allConcerns.map(concern =>
            <button id={`${concern[0]}`} className={`${sessionUser.concerns.includes(+concern[0]) ? 'isClicked' : 'no'}`} onClick={handleClick}>{concern[1]}</button>)}
        </>
    )
}

export default EditConcernForm;