import React from 'react'
import { Switch } from 'react-router'
import Home from './Home'

const App = () => {
    return (
        <div>
            <Switch>
                <Home />
            </Switch>    
        </div>
    )
}

export default App
