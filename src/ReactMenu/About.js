import React from 'react'
import main from '../images/main.svg'
import Common from './Common'

const About = () => {
    return (
        <>
            <Common name=" Welcome to About " 
            imgsrc={main} 
            visit='/contact' 
            btname='Contact Now' />
        </>
    )
}

export default About
