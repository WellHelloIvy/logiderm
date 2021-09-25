import { useSelector } from "react-redux";

function UserRoutine({ sessionUser }){
    const routineIdArr = sessionUser?.routines;
    const allProducts = useSelector(state => state.products)

    return(
        <div>
            {routineIdArr.map((id) =>
            <>
                <p>{allProducts[id].brand}</p>
                <p>{allProducts[id].name}</p>
            </>

            )}
        </div>
    )
}

export default UserRoutine;
