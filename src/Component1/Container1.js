import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
export default function Container1() {
    const [state,setState] = useState({name:"",email:"",contact:"",password:"",confpassword:"",})

    
    const nameChange = (event) =>{
        setState({name:event.target.value})
    }
    const emailChange = (event) =>{
        setState({email:event.target.value})
    }

    const passChange = (event) =>{
        setState({password:event.target.value})
    }
    const confpasswordChange = (event) =>{
        setState({confpassword:event.target.value})
    }
    const contactChange = (event) =>{
        if((event.target.value).length<=10)
            setState({contact:event.target.value})
    }
    const ClickingSubmit = (event) =>{}

    return (
        <div>
            <div className="signup-container">
                <header>
                    <h1>SIGN UP</h1>
                </header>
                <main>
                    <form onSubmit = {ClickingSubmit}>
                        <div className="label"><label htmlFor="signup-first-name">Name</label></div>
                        <div className="input"><input type="text" id = "signup-name" name = "signup-First-Name" value = {state.name} onChange = {nameChange} required/></div><br/>
                        <div className="label"><label htmlFor="signup-email">Email</label></div>
                        <div className="input"><input type="email" id="signup-email" name="signup-Email" value = {state.email} onChange = {emailChange} required/></div><br/>
                        <div className="label"><label htmlFor="signup-contact">Contact</label></div>
                        <div className="input"><input type="text" id = "signup-contact" name = "signup-Contact" value = {state.contact} onChange = {contactChange} required/></div><br/> 
                        <div className="label"><label htmlFor="signup-pass">Password</label></div>
                        <div className="input"><input type="password" id = "signup-pass" name="signup-Pass" value = {state.password} onChange = {passChange} required/></div><br/>
                        <div className="label"><label htmlFor="signup-pass-confirm">Confirm Password</label></div>
                        <div className="input"><input type="password" id="signup-pass-confirm" name = "signup-pass-Confirm" value = {state.confpassword} onChange = {confpasswordChange} required/></div><br/>
                        <div className="button"><Link to="/Signup_2"><input type="submit" value = "Next"/></Link></div>
                    </form>
                    <div className="msg">Already have account? <span><Link to="/signin">Sign in</Link></span></div>
                </main>
            </div>
        </div>
    )
}
