import React, {useEffect, useState} from "react"
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import Characters from "./Component/Characters";
import SingleHero from "./Component/singleHero";
import Navigation from "./Component/Navigation";
import Home from "./Component/Home"
import ComicsLib from "./Component/ComicsLib";
import Cart from "./Component/Cart";

function App() {

    const [cart, setCart] = useState([])

    return (
    <Router>
        <Navigation cart={cart} />
        <Switch>
            <Route exact path = "/">
                <div style={{width: "100%", height:"100%", backgroundImage: "url('http://bsnscb.com/data/out/123/39809045-marvel-wallpapers.jpg')"}} >
                   <Home />
                </div>
            </Route>
            <Route exact path = "/characters">
                <Characters />
            </Route>
            <Route path = "/characters/:id">
                <SingleHero addToCart={setCart} cart={cart} />
            </Route>
            <Route path = "/comics">
                <ComicsLib addToCart={setCart} cart={cart} />
            </Route>
            <Route path = "/cart">
                <Cart cart={cart} removeFromCart={setCart}/>
            </Route>
        </Switch>

    </Router>
  );
}

export default App;
