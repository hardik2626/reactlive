import React from 'react'
import { NavLink } from 'react-router-dom'
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
