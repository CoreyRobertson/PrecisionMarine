import React from 'react'
import './navbar.css'
import { RiMenu3Fill } from 'react-icons/ri'
import { useState } from "react";

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <nav className="navigation">
            <a href="/" className="brand-name">
                Precision Marine Maintenance
            </a>
            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}
            >
                <RiMenu3Fill className='hamburger' />
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                    <li>
                        <a href="#home" className='link_home' onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>Home</a>
                    </li>
                    <li>
                        <a href="#about" onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>About Us</a>
                    </li>
                    <li>
                        <a href="#services" onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>Our Services</a>
                    </li>
                    <li>
                        <a href="#why" onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>Why Us?</a>
                    </li>
                    <li>
                        <a href="#gallery" onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>Gallery</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}>Contact</a>
                    </li>
                    <button type='button' className='btn'>Get a Quote!</button>
                </ul>
            </div>
        </nav>
    );
}