import React from 'react'
import '../signup.css'
import Container1 from '../Component1/Container1'
import Footer from '../Component1/Footer'
import Heading from '../Component1/Heading'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup_1 from './Signup_1'
import Signup_2 from './Signup_2'
export default function Signup() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Signup_1 />
                </Route>
                <Route exact path="/Signup_2">
                    <Signup_2/>
                </Route>
            </Switch>
        </Router>
    )
}
