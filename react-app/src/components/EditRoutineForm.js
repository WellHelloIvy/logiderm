import React from "react";
import { useSelector } from "react-redux";
import ProductDetails from "./ProductsDetails";

const EditRoutineForm = ({ sessionUser, productId }) => {
    const allProducts = useSelector(state => state.products)
    const routinesArray = Object.values(sessionUser?.routines)

    const inBothRoutines = routinesArray.filter(routine => routine.time === 3);

    const amRoutineArray = routinesArray.filter(routine => routine.time === 1)
    const pmRoutineArray = routinesArray.filter(routine => routine.time === 2)

    return (
        <div className='edit-routine-modal'>
            <div id="edit-am">
            <b>AM</b>
                {amRoutineArray.map((routine) =>
                    <div className='edit-routine-div' key={`${allProducts[routine.productId].id}`}>
                        <p>{allProducts[routine.productId].brand}</p>
                        <p>{allProducts[routine.productId].name}</p>
                        <ProductDetails sessionUser={sessionUser} productId={allProducts[routine.productId].id} />
                    </div>
                )}
            </div >
            <div id="edit-pm">
            <b>PM</b>
                {pmRoutineArray.map((routine) =>
                    <div className='edit-routine-div' key={`${allProducts[routine.productId].id}`}>
                        <p>{allProducts[routine.productId].brand}</p>
                        <p>{allProducts[routine.productId].name}</p>
                        <ProductDetails sessionUser={sessionUser} productId={allProducts[routine.productId].id} />
                    </div>
                )}
            </div>
            <div id="edit-both">
            <b>AM + PM</b>
                {inBothRoutines.map((routine) =>
                    <div className='edit-routine-div' key={`${allProducts[routine.productId].id}`}>
                        <p>{allProducts[routine.productId].brand}</p>
                        <p>{allProducts[routine.productId].name}</p>
                        <ProductDetails sessionUser={sessionUser} productId={allProducts[routine.productId].id} />
                    </div>
                )}
            </div>

        </div>
    )
}

export default EditRoutineForm;
