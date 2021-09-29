import { useSelector } from "react-redux"

function UserConcerns({ sessionUser }) {
    const concernIdArr = sessionUser?.concerns;
    const allConcerns = useSelector(state => state.labels.concerns)

    return (
        <>
            <div className='top'>
                <b>Your Concerns</b>
            </div>
            <div className='user-concerns'>
                    {concernIdArr.map((id) =>
                        <p key={allConcerns[id]}>{allConcerns[id].split('_').join(' ')}</p>)
                    }
            </div>
        </>
    )
}

export default UserConcerns;
