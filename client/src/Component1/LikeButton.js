import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Cookies from 'universal-cookie' 

export default function LikeButton({Item:Item,liked:liked},...props) {
    const [buttonStyle,setStyle] = useState({color:"black",fontSize:"x-large"})
    const [like,setLike] = useState(false)
    const token = new Cookies()
    useEffect(()=>{
        for (const key in liked) {
            // console.log(liked[key])
            if(liked[key].id === Item._id){
                setStyle({color:"red",fontSize:"x-large"})
                setLike(true)
                break;
            }    
        }
    },[])
    const Liked = (id,token) =>{
        
        const data = {
            id:id,
            token:token
        }
        
        if(!like){
            axios.post("http://localhost:4000/app/like",data).then((res)=>{
                setStyle({color:"red",fontSize:"x-large"}) 
                setLike(true)
            })
        }
        else{
            axios.post("http://localhost:4000/app/unlike",data).then((res)=>{
                setStyle({color:"black",fontSize:"x-large"})
                setLike(false)
            })
        }
    }
    return (
        <div>
            <button onClick = {(e)=>{e.preventDefault();
             Liked(Item._id,token.get('token'))}} id="like-icon" style = {{margin:"0 2vw",border:"0",backgroundColor:"rgb(228, 213, 192)"}}><i className="fas fa-thumbs-up" style={buttonStyle}></i></button>
        </div>
    )
}
