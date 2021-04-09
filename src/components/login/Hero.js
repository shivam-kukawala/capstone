import React from 'react';
import MarketHome from '../MarketHome';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Hero = ({handleLogout}) => {

    return(
        <section >
            <nav>
            <button class="buttonLogout" onClick={handleLogout}>Logout</button>
                <Router >
                    <Switch>
                    <MarketHome/>
                    </Switch>
                </Router>


            </nav>
        </section>
    )
}

export default Hero;