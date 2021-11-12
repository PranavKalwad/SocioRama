import React from 'react'
// import Container1 from '../Container1'
import SocioRama from '../SocioRama.png'

export default function Heading() {
    return (
        <div>
            <div className="big_header">
            <h1>hey,</h1>
            <h1>Welcome to SocioRama</h1>
            <img src={SocioRama} alt="Logo"/>
            </div>
        </div>
    )
}
