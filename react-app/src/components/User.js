import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserConcerns from './UserConcerns';
import ConcernModal from './ConcernModal';
import Routine from './Routine'

function User({ sessionUser }) {
    const [user, setUser] = useState({});
    const { userId } = useParams();
    const [showConcernModal, setShowConcernModal] = useState(false);

    const renderConcernModal = (e) => {
        setShowConcernModal(true)
    }

    useEffect(() => {
        if (!userId) {
            return;
        }
        (async () => {
            const response = await fetch(`/api/users/${userId}`);
            const user = await response.json();
            setUser(user);
        })();
    }, [userId]);

    if (!user) {
        return null;
    }

    return (sessionUser &&
        <>
            <div>
                <h1>{`${sessionUser.firstName}'s profile`}</h1>
                <img src={sessionUser.imgUrl}></img>
            </div>
            <ul>
                <li>{`${sessionUser.firstName} ${sessionUser.lastName}`}</li>
                <li>{sessionUser.email}</li>
                <li>{sessionUser.concerns}</li>
            </ul>
            <div>
                <UserConcerns sessionUser={sessionUser} />
                <ConcernModal sessionUser={sessionUser} setShowModal={setShowConcernModal} showModal={setShowConcernModal} />
            </div>
            <div>
                <Routine sessionUser={sessionUser} />
            </div>

        </>

    );
}
export default User;
