import React from 'react'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Redirect, Route, Switch } from 'react-router'
import Home from './ReactMenu/Home'
import About from './ReactMenu/About'
import Service from './ReactMenu/Service'
import Contact from './ReactMenu/Contact'
import Navbar from './ReactMenu/Navbar'
const App = () => {
    return (
        <div>
        <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/" />
                
            </Switch>  
             
        </div>
    )
}

export default App
