import React from 'react'
import { Route, Switch } from 'react-router'
import Home from './Home'

const App = () => {
    return (
        <div>
            <Switch>
                <Route path="/" component={Home} />
                <Home />
            </Switch>    
        </div>
    )
}

export default App
