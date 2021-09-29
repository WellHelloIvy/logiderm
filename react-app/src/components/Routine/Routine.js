import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Routine.css'
import { useState } from "react";
import { Modal } from "../../context/Modal";
import AddToRoutine from "../AddToRoutine/AddToRoutine";

function UserRoutine({ sessionUser }) {
    const routinesArray = Object.values(sessionUser.routines)
    const allProducts = useSelector(state => state.products)
    const [showModal, setShowModal] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState('')
    const product = selectedProductId ? allProducts[selectedProductId] : null;

    const amRoutineArray = routinesArray.filter(routine => routine.time === 1);
    const pmRoutineArray = routinesArray.filter(routine => routine.time === 2);
    const inBothRoutines = routinesArray.filter(routine => routine.time === 3);

    const clickHandler = (e) => {
        e.preventDefault();
        setSelectedProductId(+e.target.id);
        setShowModal(true)
        }

    return (
        <>
            <div className='routine-profile-div'>
                <b>Your Routines</b>
                <div className='routine-div am'>
                    <b>AM</b>
                    {amRoutineArray.map(routine =>
                        <Link id={allProducts[routine.productId].id} to='nowhere' onClick={clickHandler}>{`${allProducts[routine.productId].brand} ${allProducts[routine.productId].name}`}</Link>
                    )}
                </div>
                <div className='routine-div pm'>
                    <b>PM</b>
                    {pmRoutineArray.map(routine =>
                        <Link id={allProducts[routine.productId].id} to='nowhere' onClick={clickHandler}>{`${allProducts[routine.productId].brand} ${allProducts[routine.productId].name}`}</Link>
                    )}
                </div>
                <div className='routine-div am-and-pm'>
                    <b>AM + PM</b>
                    {inBothRoutines.map(routine =>
                        <Link id={allProducts[routine.productId].id} to='nowhere' onClick={clickHandler}>{`${allProducts[routine.productId].brand} ${allProducts[routine.productId].name}`}</Link>
                    )}
                </div>
            </div>
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

export default UserRoutine;
