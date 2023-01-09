import React from 'react'
import './contact2.css'
import { AiOutlinePhone, AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'

const Contact2 = () => {
    return (
        <div className='marine_contact2-container' id='contact'>
            <div className='heading'>
                <h1>Precision Marine Maintenance</h1>
            </div>
            <div className='marine_contact2'>
                <div className='marine_contact2-links'>
                    <a href='#about'>About Us</a>
                    <a href='#services'>Our Services</a>
                    <a href='#gallery'>Gallery</a>
                    <a>Legal</a>
                </div>
                <div className='marine_contact2-contact'>
                    <ul>
                        <li className='name'>Adrian</li>
                        <li className='phone'><AiOutlinePhone className='phone' />04** *** ***</li>
                        <li className='name'>Corey</li>
                        <li className='phone'><AiOutlinePhone className='phone' />0432 *** ***</li>
                    </ul>
                    <div className='button-div'>
                        <button type='btn' className='button'>Get A Free Quote !</button>
                    </div>
                </div>
                <div className='marine_contact2-media'>
                    <a><AiOutlineFacebook className='icon_media' /></a>
                    <a><AiOutlineInstagram className='icon_media' /></a>
                    <a><AiOutlineMail className='icon_media' /></a>
                </div>
            </div>
        </div>
    )
}

export default Contact2