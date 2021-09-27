import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RoutineModal from "./RoutineModal";

function UserRoutine({ sessionUser }) {
    const routinesArray = Object.values(sessionUser.routines)
    const allProducts = useSelector(state => state.products)

    return (
        <div>
            <h3>Your Routine</h3>
            <div className='routine-div'>
                {routinesArray.map((routineObj) =>
                    <div key={`${routineObj.productId}`}>
                        <Link to={`/products/${allProducts[routineObj.productId].id}`}>{`${allProducts[routineObj.productId].brand} ${allProducts[routineObj.productId].name}`}</Link>
                        <p></p>
                    </div>
                )}
            </div>
            <RoutineModal sessionUser={sessionUser}/>
        </div>

    )
}

export default UserRoutine;
