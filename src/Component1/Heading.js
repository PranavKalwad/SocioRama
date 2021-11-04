import React from 'react'
import SocioRama from './SocioRama.png'

export default function Heading(props) {
    return (
        <div>
            <div className="image">
                <img src={SocioRama} alt="Logo" width="100px" height="100px"/>
                <h1 className ="big_header">{props.title}</h1>
            </div>
        </div>
    )
}
