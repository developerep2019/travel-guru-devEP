import React, { createContext, useState } from 'react';
import Header from '../Header/Header';
import './Home.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import Contact from '../Contact/Contact';
import News from '../News/News';
import Destination from '../Destination/Destination';
import Blog from '../Blog/Blog';
import HomeDisplay from '../HomeDisplay/HomeDisplay';
import NotFound from '../NotFound/NotFound';
import Booking from '../Booking/Booking';
import Hotels from '../Hotels/Hotels';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const UserContext = createContext();

const Home = () => {
    const [user, setUser] = useState({});
    return (
        <UserContext.Provider value={[user, setUser]}>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <HomeDisplay />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>

                    <Route path="/news">
                        <News />
                    </Route>

                    <Route path='/destination'>
                        <Destination />
                    </Route>

                    <Route path='/blog'>
                        <Blog />
                    </Route>
                    <PrivateRoute path="/hotels">
                        <Hotels />
                    </PrivateRoute>
                    <Route path="/tour/:dynamicLocation">
                        <Booking />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
};

export default Home;