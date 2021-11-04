import React from 'react'
import "../../signup.css"   

export default function Container() {
    return (
        <div>
            <div className="signup-container">
                <main>
                    <form action="" method="post">
                           <div className="label"><label htmlFor="your-hobbies">Your Hobbies</label></div> 
                            <div className="input"><input type="text"/></div><br/>
                            <div className="label"><label htmlFor="your-Intrests">Your Intrests</label></div> 
                            <div className="input"><input type="text"/></div><br/>
                            <div className="label"><label htmlFor="your-dob">Your Hobbies</label></div> 
                            <div className="input"><input type="date"required/></div><br/>
                            <div><input type="checkbox" name="check-box" id="checkbox" required/>I accept all the terms and conditions</div>
                            <div className="button"><button type="submit">Submit</button></div>
                    </form>
                </main>
            </div>
        </div>
    )
}
