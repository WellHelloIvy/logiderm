import { useSelector } from "react-redux";

function UserRoutine({ sessionUser }) {
    const routineIdArr = sessionUser?.routines;
    const allProducts = useSelector(state => state.products)

    return (
        <div>
            <h3>Your Routine</h3>
            <div>
                {routineIdArr.map((id) =>
                    <div key={`${allProducts[id].id}`}>
                        <p>{`${allProducts[id].brand} ${allProducts[id].name}`}</p>
                        <p></p>
                    </div>
                )}
            </div>
        </div>

    )
}

export default UserRoutine;
