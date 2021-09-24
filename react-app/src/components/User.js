import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserConcerns from './UserConcerns';

function User({ sessionUser }) {
    const [user, setUser] = useState({});
    const { userId } = useParams();

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
            </div>
        </>

    );
}
export default User;
