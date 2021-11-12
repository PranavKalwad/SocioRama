import '../signin.css';
import React from 'react'
import Heading from '../Component1/Heading';
import Container from '../Component1/Container';
import Footer from '../Component1/Footer';

function SignIn() {
    return (
        <div>
            <div className="flexContainer">
                <Heading title="SOCIORAMA" />
                <Container />
            </div>  
            <Footer site="SocioRama.com" />
        </div>
    )
}

export default SignIn;