import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = ({ setShowModal }) => {
    const [errors, setErrors] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const onSignUp = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            const data = await dispatch(signUp(firstName, lastName, email, password));
            if (data) {
                setErrors(data)
            } else {
                setShowModal(false)
            }
        } else {
            setErrors(['Passwords must match'])
        }
    };

    const updateFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const updateLastName = (e) => {
        setLastName(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    if (user) {
        return <Redirect to='/' />;
    }

    return (
        <form onSubmit={onSignUp}>
            <div>
                <h1>Welcome</h1>
            </div>

            <div>
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>
            <div>
                <input
                    type='text'
                    name='firstName'
                    placeholder='First Name'
                    onChange={updateFirstName}
                    value={firstName}
                ></input>
            </div>
            <div>
                <input
                    type='text'
                    name='Last Name'
                    placeholder='Last Name'
                    onChange={updateLastName}
                    value={lastName}
                ></input>
            </div>
            <div>
                <input
                    type='text'
                    name='email'
                    placeholder='Email'
                    onChange={updateEmail}
                    value={email}
                ></input>
            </div>
            <div>
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={updatePassword}
                    value={password}
                ></input>
            </div>
            <div>
                <input
                    type='password'
                    name='repeat_password'
                    placeholder='Repeat Password'
                    onChange={updateRepeatPassword}
                    value={repeatPassword}
                    required={true}
                ></input>
            </div>
            <button type='submit'>Sign Up</button>
        </form>
    );
};

export default SignUpForm;
