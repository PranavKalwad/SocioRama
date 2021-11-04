import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'

export default function Container() {
    const [state,setState] = useState({username:"",password:""})
    const nameChange = (event) =>{
        setState({username:event.target.value})
    }
    const passChange =(event) =>{
        setState({password:event.target.value})
    }
    const clickingSubmit = (event) =>{

    }
    return (
        
            <div className="div1">
                <h2 className="head">SIGN IN</h2>

                <main>
                    <form onSubmit = {clickingSubmit}>
                    <input  placeholder="Username" type ="text" value = {state.username} onChange = {nameChange}/><br/>
                    <input placeholder="Password" type ="password" value = {state.password} onChange = {passChange}/><br/>
                    <button  type ="submit" className ="button">Submit</button>
                    </form>
                    <div className ="do">Don't have account? <span><Link to="/">Sign Up</Link></span></div>
                </main>
            </div>
    )
}
