import React from 'react'
import './services.css'
import { TfiBrushAlt, TfiShine } from 'react-icons/tfi'
import { MdOutlineWaterDrop, MdOutlineCleaningServices } from 'react-icons/md'
import foam from '../assets/foam.jpg'

const Services = () => {
    return (
        <div className='marine_services' id='services'>
            <div className='marine_services-card_container'>
                <div className='marine_services-card'>
                    <div className='logo_container'><MdOutlineWaterDrop className='logo' /></div>
                    <div className='card_text'>
                        <h2>High Pressure Cleaning</h2>
                        <ul>
                            <li>Detail 1</li>
                            <li>Detail 2</li>
                            <li>Detail 3</li>
                        </ul>
                        <button type='btn'>Enquire now!</button>
                    </div>
                </div>
                <div className='marine_services-card'>
                    <div className='logo_container'><TfiBrushAlt className='logo' /></div>
                    <div className='card_text'>
                        <h2>Detailing</h2>
                        <ul>
                            <li>Detail 1</li>
                            <li>Detail 2</li>
                            <li>Detail 3</li>
                        </ul>
                        <button type='btn'>Enquire now!</button>
                    </div>
                </div>
                <div className='marine_services-card'>
                    <div className='logo_container'><TfiShine className='logo' /></div>
                    <div className='card_text'>
                        <h2>Polishing</h2>
                        <ul>
                            <li>Detail 1</li>
                            <li>Detail 2</li>
                            <li>Detail 3</li>
                        </ul>
                        <button type='btn'>Enquire now!</button>
                    </div>
                </div>
                <div className='marine_services-card'>
                    <div className='logo_container'><MdOutlineCleaningServices className='logo' /></div>
                    <div className='card_text'>
                        <h2>Lift Cleaning</h2>
                        <ul>
                            <li>Detail 1</li>
                            <li>Detail 2</li>
                            <li>Detail 3</li>
                        </ul>
                        <button type='btn'>Enquire now!</button>
                    </div>
                </div>

            </div>
            <img src={foam} className='foam'></img>
        </div>
    )
}

export default Services
