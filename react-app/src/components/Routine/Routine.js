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

    const routineExists = (arr) => {
        if (arr.length) {
            return true;
        }
        return false;
    }

    const hasRoutines = (arrAm, arrPm, arrBoth) => {
        if (routineExists(arrAm)) {
            return true;
        }

        if (routineExists(arrPm)) {
            return true;
        }

        if (routineExists(arrBoth)) {
            return true;
        }

        return false;
    }

    return (hasRoutines(amRoutineArray, pmRoutineArray, inBothRoutines) ?
        <>
            <div className='routine-profile-div'>
                <div>
                    <b>Your Routines:</b>
                    <p>Click on a product to update or delete it.</p>
                </div>
                <div className='routine-div am'>
                    {routineExists(amRoutineArray) &&
                        <>
                            <b>AM</b>
                            {amRoutineArray.map(routine =>
                                <Link key={routine.id} id={allProducts[routine.productId].id} to='nowhere' onClick={clickHandler}>{`${allProducts[routine.productId].brand} ${allProducts[routine.productId].name}`}</Link>
                            )}
                        </>
                    }
                </div>
                <div className='routine-div pm'>
                    {routineExists(pmRoutineArray) &&
                        <>
                            <b>PM</b>
                            {pmRoutineArray.map(routine =>
                                <Link key={routine.id} id={allProducts[routine.productId].id} to='nowhere' onClick={clickHandler}>{`${allProducts[routine.productId].brand} ${allProducts[routine.productId].name}`}</Link>
                            )}
                        </>
                    }
                </div>
                <div className='routine-div am-and-pm'>
                    {(routineExists(inBothRoutines)) &&
                        <>
                            <b>AM + PM</b>
                            {inBothRoutines.map(routine =>
                                <Link key={routine.id} id={allProducts[routine.productId].id} to='nowhere' onClick={clickHandler}>{`${allProducts[routine.productId].brand} ${allProducts[routine.productId].name}`}</Link>
                            )}
                        </>
                    }

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
                            <img alt='fake product' src={`${product?.img}`}></img>
                        </div>
                        <div className='add-to-routine'>
                            <AddToRoutine setShowModal={setShowModal} sessionUser={sessionUser} productId={product.id} />
                        </div>
                    </div>

                </Modal>
            )}

        </>
        :
        <>
            <div className='routine-profile-div'>
                <b>Your Routine:</b>
                <p>Looks like you haven't added any products to your routine.</p>
                <p>Feel free to browse categories for products to add.</p>
            </div>
        </>

    )
}

export default UserRoutine;
