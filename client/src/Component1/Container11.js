import React from 'react'
import "../signup.css" 
import SocioRama from './SocioRama.png'  

export default function Container(props) {
    return (
        <div className = "flexSignup">
            <img src={SocioRama} alt="Logo" width="150px" height="150px"/>
            <div className="signup-container">
                <main>
                    <form onSubmit = {props.ClickingSubmit}> 
                            <input type="text" placeholder = "Your Hobbies" name = "Hobby"/><br/>
                            <input type="text" placeholder = "Interest" name = "Interest"/><br/>
                            <input type="date" placeholder = "Date of Birth" name = "DOB" required/><br/>
                            <div><input type="checkbox" name="check-box" id="checkbox" required/>I accept all the T&C's</div>
                            <div className="button"><button type="submit">Submit</button></div>
                    </form>
                </main>
            </div>
        </div>
    )
}