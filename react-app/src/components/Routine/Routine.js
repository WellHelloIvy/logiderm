import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Routine.css'
import EditRoutineModal from "../EditRoutineModal/EditRoutineModal";

function UserRoutine({ sessionUser }) {
    const routinesArray = Object.values(sessionUser.routines)
    const allProducts = useSelector(state => state.products)

    const amRoutineArray = routinesArray.filter(routine => routine.time === 1);
    const pmRoutineArray = routinesArray.filter(routine => routine.time === 2);
    const inBothRoutines = routinesArray.filter(routine => routine.time === 3);

    return (

        <div className='routine-profile-div'>
               <b>Your Routines</b>
            <div className='routine-div am'>
                <b>AM</b>
                {amRoutineArray.map(routine =>
                    <EditRoutineModal sessionUser={sessionUser} product={allProducts[routine.productId]} />
                )}
            </div>
            <div className='routine-div pm'>
                <b>PM</b>
                {pmRoutineArray.map(routine =>
                    // <Link to={`/products/${allProducts[routine.productId].id}`}>{`${allProducts[routine.productId].brand} ${allProducts[routine.productId].name}`}</Link>
                    <EditRoutineModal sessionUser={sessionUser} productId={allProducts[routine.productId].id} link={`${allProducts[routine.productId].brand} ${allProducts[routine.productId].name}`}/>
                )}
            </div>
            <div className='routine-div am-and-pm'>
                <b>AM + PM</b>
                {inBothRoutines.map(routine =>
                    // <Link to={`/products/${allProducts[routine.productId].id}`}>{`${allProducts[routine.productId].brand} ${allProducts[routine.productId].name}`}</Link>
                    <EditRoutineModal sessionUser={sessionUser} productId={allProducts[routine.productId].id} link={`${allProducts[routine.productId].brand} ${allProducts[routine.productId].name}`}/>
                )}
            </div>
            {/* <RoutineModal sessionUser={sessionUser} /> */}

        </div>


    )
}

export default UserRoutine;
