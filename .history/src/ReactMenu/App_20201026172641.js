import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Redirect, Route, Switch } from 'react-router'

const App = () => {
    return (
        <div>
            {/* <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/" />
            </Switch>   */}
<Home />

             
        </div>
    )
}

export default App
