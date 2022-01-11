import axios from 'axios';
import React from 'react'
import img from '../Images/userimg.jpg'
import Cookies from 'universal-cookie';
import '../Styles/profile.css'
import { useState,useEffect } from 'react';
export default function ProfileContainer() {
    const [user,setUser] = useState({});
    useEffect(()=>{
        const token = new Cookies()
        const data1 = {
            token:token.get('token')
        }
        axios.post("http://localhost:4000/app/profile",data1).then((res)=>{
            setUser(res.data.user)
        })
    },[])
    return (
        <div id = "profile" style = {{display:"flex",justifyContent:"center",alignItems:"center",margin:"4vh 25vw",borderRadius:"7px",padding:"2vh",backgroundColor:"rgb(224, 220, 213)"}}>
            <img src={img} alt="User" style = {{width :"300px",height:"250px",borderRadius:"7px"}}/>
            <div>
                <p><div style = {{display:"inline-block",margin:"10px",fontFamily:"'Inconsolata', monospace"}}>Name:</div><div style = {{display:"inline-block",fontFamily:"'Bitter', serif"}}>{user.name}</div></p>
                <p><div style = {{display:"inline-block",margin:"10px",fontFamily:"'Inconsolata', monospace"}}>Email:</div><div style = {{display:"inline-block",fontFamily:"'Bitter', serif"}}>{user.email}</div></p>
                <p><div style = {{display:"inline-block",margin:"10px",fontFamily:"'Inconsolata', monospace"}}>Contact:</div><div style = {{display:"inline-block",fontFamily:"'Bitter', serif"}}>{user.contact}</div></p>
            </div>
        </div>
    )
}
