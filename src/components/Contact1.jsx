import React from 'react'
import './contact1.css'

const Contact1 = () => {
    return (
        <div className='marine_contact1'>
            <div className='contact1_text'>
                <h1>Need a quote?</h1>
                <h2>Tell us about yourself</h2>
            </div>
            <div className='contact1_form-container'>
                <form action="https://formsubmit.co/coreystephenr@gmail.com" method="POST">
                    <input className='text' type="text" name='Name' placeholder='Your Name' required></input>
                    <input className='text' type="text" name='Phone Number' placeholder='Your Phone Number'></input>
                    <input className='text' type="text" name='Location' placeholder='Your Location'></input>
                    <input className='text' type="email" name="email" placeholder="Email Address" required></input>
                    <input className='project' type="text" name='Boat Specs' placeholder='Boat Specs.' required></input>
                    <input className='project' type="text" name='Desired Services' placeholder='Desired Services' required></input>
                    <input className='button1' type="submit"></input>
                    <input type="hidden" name="_captcha" value="false"></input>
                </form>
            </div>
        </div>
    )
}

export default Contact1