import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Profile from './components/Profile';
import { authenticate } from './store/session';
import { getLabels } from './store/labels';
import Category from './components/CategoryPage';
import { getProducts } from './store/products';
import ProductPage from './components/ProductPage/ProductPage';
import SplashPage from './components/SplashPage'
import SearchResults from './components/SearchResults';


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
                        <SplashPage />
                    </Route>
                    <Route path='/search'>
                        <SearchResults />
                    </Route>
                    <Route path='/categories/:categoryId'>
                        <Category />
                    </Route>
                    <Route path='/products/:productId'>
                        <ProductPage sessionUser={sessionUser} />
                    </Route>
                    <ProtectedRoute path='/profile' >
                        <Profile sessionUser={sessionUser} />
                    </ProtectedRoute>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
