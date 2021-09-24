import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserConcerns from './UserConcerns';

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
                <button onClick={renderConcernModal}>Add/Edit your skin concerns</button>
            </div>

            <ConcernModal setShowModal={setShowConcernModal} showModal={setShowConcernModal} />
        </>

    );
}
export default User;
