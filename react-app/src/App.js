import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import User from './components/User';
import { authenticate } from './store/session';

function App() {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const sessionUser =useSelector(state => state.session?.user)
    let authenticated = sessionUser !== null

    useEffect(() => {
        (async () => {
            await dispatch(authenticate());
            setLoaded(true);
        })();
    }, [dispatch]);

    if (!loaded) {
        return null;
    }

    return (
        <BrowserRouter>
            <NavBar sessionUser={sessionUser} authenticated={authenticated}/>
            <Switch>
                <Route exact path = '/' >
                    <h1>Home Page</h1>
                </Route>
                <Route path='/search'>
                    <h1>Search Results</h1>
                </Route>
                <Route path='/categories/:categoryId'>
                    <h1>Product of Specific Category</h1>
                </Route>
                <Route path='/products/:productId'>
                    <h1>Product Details Page</h1>
                </Route>
                <ProtectedRoute path='/profile' >
                    <User />
                </ProtectedRoute>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
