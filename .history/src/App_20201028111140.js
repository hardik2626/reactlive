import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Home from './ReactMenu/Home';
import About from './ReactMenu/About';
import Service from './ReactMenu/Service';
import Contact from './ReactMenu/Contact';
import Navbar from './ReactMenu/Navbar';
import { Redirect, Route, Switch } from 'react-router-dom'
import Footer from './ReactMenu/Footer';
import Gallery from './ReactMenu/Gallery';
const App = () => {
    return (
        <>
        <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/gallery" component={Gallery} />
                
                <Redirect to="/" />
                
            </Switch>  
            <Footer />
             
        </>
    )
}

export default App
