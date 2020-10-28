import React from 'react'
import { NavLink } from 'react-router-dom'
import Banner from '../images/mainBanner.svg'
import Common from './Common'

const About = () => {
    return (
        <div>
            <Common name=" Welcome to About " imgsrc={Banner} />
        </div>
    )
}

export default About
