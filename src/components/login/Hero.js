import React from 'react';
import MarketHome from '../MarketHome';
import Cart from '../Cart/Cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Hero = ({handleLogout}) => {

    return(
        <section >
            <nav>
            <button class="buttonLogout" onClick={handleLogout}>Logout</button>
                <Router >
                    <Switch>
                    <Route path="/" exact component={MarketHome} />
                    <Route path="/cart" component={Cart} />
                    </Switch>
                </Router>


            </nav>
        </section>
    )
}

export default Hero;