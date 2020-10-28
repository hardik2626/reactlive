import React from 'react'
import { Route, Switch } from 'react-router'
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'

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
