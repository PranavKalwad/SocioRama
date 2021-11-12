import React from 'react'
import '../signup.css'
import axios from 'axios'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup1 from './Signup1'
import Signup2 from './Signup2'
// import SignIn from './SignIn'
import { useState } from 'react'
export default function Signup() {
    const [state1,setState1] = useState(true);
    const stateChange = (val) =>{
        setState1(val)
    }
    const ClickingSubmit = (event) =>{
        
        event.preventDefault();
        const registered = {
            name:event.target.signupFirstName.value,
            email:event.target.signupEmail.value,
            contact:event.target.signupContact.value,
            password:event.target.signupPass.value,
            confpassword:event.target.signuppassConfirm.value,
            hobby:event.target.Hobby.value,
            interest:event.target.Interest.value,
            dob:event.target.DOB.value
        }
        console.log(event.target.signupFirstName.value);
        axios.post('http://localhost:4000/app/',registered).then(res=>console.log(res.data))
        window.location = '/signin';
    }
    return (
        <div>
            {state1?<Signup1 state = {stateChange}/>:<Signup2 ClickingSubmit = {ClickingSubmit}/>}
        </div>
        // <Router>
        //     <Switch>
        //         <Route exact path="/" component = {Signup1}/>
        //         <Route exact path="/Signup2" component = {Signup2}/>
        //         <Route exact path ="/signin" component = {SignIn}/>
        //     </Switch>
        // </Router>
    )
}
