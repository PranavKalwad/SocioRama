import React from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie';
export default function AskToPost(props) {

    const SubmitPost = (event) =>{
        event.preventDefault();
        const token = new Cookies();
        
        const postMessage = {
            token: token.get('token'),
            messagePost:event.target.msg.value
        }
        axios.post("http://localhost:4000/app/game",postMessage).then(()=>{
            alert("Success");
            props.setPost(false);
            props.setButton(true);
        })
    }
        
    return (
        <div id = "post" style = {{textAlign:"center",backgroundColor:"#ccccff",margin:"5vh 15vw",borderRadius:"5px",padding:"2%"}}>
            <h1 style = {{margin:"2vh 0"}}>Post Your Message Here</h1>
            <form onSubmit = {SubmitPost}>
                <textarea rows = "20" cols = "90" placeholder = "Enter your Post" name = "msg" style = {{padding:"2vh 1vw"}}/> <br/>
                <button type = "submit" className = "button">POST</button><button onClick = {props.back} className = "button">Back</button>
            </form>
        </div>
    )
}
