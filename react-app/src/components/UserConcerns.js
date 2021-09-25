import { useSelector } from "react-redux"

function UserConcerns({ sessionUser }) {
    const concernIdArr = sessionUser?.concerns;
    const allConcerns = useSelector(state => state.labels.concerns)

    return (
        <div>
            <h2>Your Concerns</h2>
            {concernIdArr.map((id) => <p key={allConcerns[id]}>{allConcerns[id]}</p>)}
        </div>
    )
}

export default UserConcerns;
