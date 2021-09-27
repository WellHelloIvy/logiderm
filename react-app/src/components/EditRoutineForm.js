import React from "react";
import { useSelector } from "react-redux";
import ProductDetails from "./ProductsDetails";

const EditRoutineForm = ({ sessionUser, productId}) => {
    const allProducts = useSelector(state => state.products)
    const routineArray = Object.values(sessionUser?.routines)

    return(
        <>
            {routineArray.map((routine) =>
                <div id='edit-routine-modal' key={`${allProducts[routine.productId].id}`}>
                    <p>{allProducts[routine.productId].brand}</p>
                    <p>{allProducts[routine.productId].name}</p>
                    <ProductDetails sessionUser={sessionUser} productId={allProducts[routine.productId].id}/>
                </div>
            )}
        </>
    )
}

export default EditRoutineForm;
