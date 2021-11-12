import React from 'react'
import {Link} from 'react-router-dom'
import SocioRama from './SocioRama.png'
export default function Container1(props) {

    const Clicked = (event)=>{
        event.preventDefault();
        props.state(false)
    }

    return (
        <div className = "flexSignup">
            <img src={SocioRama} alt="Logo" width="150px" height="150px"/>
            <div className="signup-container">
                <header>
                    <h1>SIGN UP</h1>
                </header>
                <main>
                    <form>
                        <input type="text" placeholder = "Name" id = "signup-name" name = "signupFirstName" /><br/>
                        <input type="email" placeholder = "Email" id="signup-email" name="signupEmail" /><br/>
                        <input type="text" placeholder = "Contact" id = "signup-contact" name = "signupContact"  /><br/> 
                        <input type="password" placeholder = "Password" id = "signup-pass" name="signupPass"  /><br/>
                        <input type="password" placeholder = "Confirm Password" id="signup-pass-confirm" name = "signuppassConfirm" /><br/>
                        {/* <div className="button"><input type="submit" value = "Next"/></div> */}
                        <button onClick = {Clicked}>Next</button>
                    </form>
                    <div className="msg">Already have account? <span><Link to="/signin">Sign in</Link></span></div>
                </main>
            </div>
        </div>
    )
}
