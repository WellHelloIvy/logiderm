import { useSelector } from "react-redux"

function UserConcerns({ sessionUser }) {
    const concernIdArr = sessionUser?.concerns;
    const allConcerns = useSelector(state => state.labels.concerns)

    return (
        <>
            <p>Your Concerns</p>
            <ul className='user-concerns'>
                {concernIdArr.map((id) =>
                    <li key={allConcerns[id]}>{allConcerns[id].split('_').join(' ')}</li>)
                }
            </ul>
        </>
    )
}

export default UserConcerns;
