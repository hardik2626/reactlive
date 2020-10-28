import React from 'react'
import { Route, Switch } from 'react-router'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Service from './Service'

const App = () => {
    return (
        <div>
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/service" component={Service} />
                <Route path="/contact" component={Contact} />
                
            </Switch>    
        </div>
    )
}

export default App
