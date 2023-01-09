import React from 'react'
import './about.css'
import boatwater from '../assets/boatwater.jpg'
import boat3 from '../assets/boat3.jpg'

const About = () => {
    return (
        <div className='marine_about' id='about'>
            <div className='marine_about-container'>
                <div className='marine_about-text'>
                    <h1>
                        About Us
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className='marine_about-image_container'>
                    <img src={boat3}></img>
                </div>

            </div>
        </div>
    )
}

export default About