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

export const UserContext = createContext();
const Home = () => {

const [loggedInUser, setLoggedInUser] = useState();
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
                    <Route path="/hotels">
                        <Hotels />
                    </Route>
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