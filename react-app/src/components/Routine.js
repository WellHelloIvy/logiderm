import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RoutineModal from "./RoutineModal";

function UserRoutine({ sessionUser }) {
    const routinesArray = Object.values(sessionUser.routines)
    const allProducts = useSelector(state => state.products)

    const inBothRoutines = routinesArray.filter(routine => routine.time === 3);

    const amRoutineArray = routinesArray.filter(routine => routine.time === 1).concat(inBothRoutines);
    const pmRoutineArray = routinesArray.filter(routine => routine.time === 2).concat(inBothRoutines);



    return (

        <>
            <div className='test'>
               <p>Your Routines</p>
            </div>
            <div className='routine-div am'>
                <p>AM</p>
                {amRoutineArray.map(routine =>
                    <Link to={`/products/${allProducts[routine.productId].id}`}>{`${allProducts[routine.productId].brand} ${allProducts[routine.productId].name}`}</Link>
                )}
            </div>
            <div className='routine-div pm'>
                <p>PM</p>
                {pmRoutineArray.map(routine =>
                    <Link to={`/products/${allProducts[routine.productId].id}`}>{`${allProducts[routine.productId].brand} ${allProducts[routine.productId].name}`}</Link>
                )}
            </div>
            <RoutineModal sessionUser={sessionUser} />
        </>


    )
}

export default UserRoutine;
