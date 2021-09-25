import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import User from './components/User';
import { authenticate } from './store/session';
import { getLabels } from './store/labels';
import Category from './components/Category';
import { getProducts } from './store/products';
import ProductDetails from './components/ProductsDetails';


function App() {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const sessionUser =useSelector(state => state.session?.user)
    let authenticated = sessionUser !== null

    useEffect(() => {
        (async () => {
            await dispatch(authenticate());
            await dispatch(getLabels());
            await dispatch(getProducts());
            setLoaded(true);
        })();
    }, [dispatch]);

    if (!loaded) {
        return null;
    }

    return (
        <BrowserRouter>
            <NavBar sessionUser={sessionUser} authenticated={authenticated}/>
            <div className='body'>
                <Switch>
                    <Route exact path = '/' >
                        <h1>Home Page</h1>
                    </Route>
                    <Route path='/search'>
                        <h1>Search Results</h1>
                    </Route>
                    <Route path='/categories/:categoryId'>
                        <Category />
                    </Route>
                    <Route path='/products/:productId'>
                        <ProductDetails sessionUser={sessionUser} />
                    </Route>
                    <ProtectedRoute path='/profile' >
                        <User sessionUser={sessionUser} />
                    </ProtectedRoute>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
