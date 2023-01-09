import React from 'react'
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";
import "./flickity.css";
import './gallery.css'
import gallery1 from '../assets/gallery1.jpg'
import gallery2 from '../assets/gallery2.jpg'
import gallery3 from '../assets/gallery3.jpg'
import gallery4 from '../assets/gallery4.jpg'

function Carousel() {
    return (
        <Flickity>
            <img src={gallery1} className='gallery-image' />

            <img src={gallery2} className='gallery-image' />

            <img src={gallery3} className='gallery-image' />

            <img src={gallery4} className='gallery-image' />

        </Flickity>
    );
}



const Gallery = () => {
    return (
        <div className='marine_gallery-container' id='gallery'><Carousel /></div>
    )
}

export default Gallery