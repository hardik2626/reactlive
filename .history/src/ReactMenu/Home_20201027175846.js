import React from 'react'
import { NavLink } from 'react-router-dom'
import Banner from '../images/website-clipart-technology.png'
import Common from './Common'

const Home = () => {
    return (
        <div>
            <Common name=" Grow your Business with " 
            imgsrc={Banner} 
            visit='/service' 
            btname='Get Started' />
        </div>
    )
}

export default Home
