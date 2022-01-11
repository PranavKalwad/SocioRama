import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';
import '../Styles/sports_feeds.css'
import Cookies from 'universal-cookie'
import LikeButton from './LikeButton'


export default function GamePostContainer(props) {
    const [posts, setposts] = useState()
    const [state,setState] = useState(false)
    
    const [liked,setLiked] = useState([]);
    const token = new Cookies();

    useEffect(()=>{
        const data = {token:token.get('token')}
        axios.post("http://localhost:4000/app/check",data).then((res)=>{
            setLiked(res.data.user);
            axios.get("http://localhost:4000/app/g1").then((res)=>{
                setposts(res.data.user);
                setState(true);
            }).catch((res)=>{console.log(res)})
        })
        
        
    },[posts])

    

    return (
        <div>

            <ul style = {{margin:"2vh 1vw",display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
                {state?posts.map((Item)=>(
            <div key = {Item._id} className="feeds" style = {{backgroundColor:"rgb(224, 220, 213)",borderRadius:"20px",display:"block",padding:"2vh 1vw",borderLeft:"7px",borderStyle:"solid",borderColor:"black",borderRight:"0",borderTop:"0",borderBottom:"0",margin:"1vh 1vw",width:"27vw",wordWrap:"break-word"}}>
                <div className="feeds-like">
                </div>
                <div className="main-feed">
                <h1 style = {{margin:"0 0 2vh 0"}}>{Item.name}</h1><br/>
                <p style = {{margin:"0 0 0 0"}}>{Item.messagePost}</p>
                </div>
                <div className="icons">
                    <LikeButton Item = {Item} liked = {liked}/>
                    
                    {/* <Link to="#" style={{textDecoration:"none"}}><i className="fas fa-comment"style={{color:"black"}}></i></Link> */}
                </div>
                </div>)):<p>No posts</p>}
            </ul>
        </div>
    )
}
