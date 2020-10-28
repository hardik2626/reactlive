import React from 'react'
import { NavLink } from 'react-router-dom'
import Banner from '../images/mainBanner.svg'
import Common from './Common'

const Home = () => {
    return (
        <div>
            <Common name=" Welcome to About " 
            imgsrc={Banner} 
            visit='/contact' 
            btname='Contact Now' />
        </div>
    )
}

export default Home
