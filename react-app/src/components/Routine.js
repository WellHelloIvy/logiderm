import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RoutineModal from "./RoutineModal";

function UserRoutine({ sessionUser }) {
    const routineIdArr = sessionUser?.routines;
    const allProducts = useSelector(state => state.products)

    return (
        <div>
            <h3>Your Routine</h3>
            {/* <img className='routine-img' src='https://i.imgur.com/RQMw5FN.png'></img> */}
            <div className='routine-div'>
                {routineIdArr.map((id) =>
                    <div key={`${allProducts[id].id}`}>
                        <Link to={`/products/${allProducts[id].id}`}>{`${allProducts[id].brand} ${allProducts[id].name}`}</Link>
                        <p></p>
                    </div>
                )}
            </div>
            <RoutineModal sessionUser={sessionUser}/>
        </div>

    )
}

export default UserRoutine;
