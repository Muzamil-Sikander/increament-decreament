import React from 'react'
import '../assest/component.css';

function Header() {
    return (

        <div>
            <nav className='nav-links'>
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
                <button className='btn'>Login</button>
            </nav>
        </div>
       
        

    )
};

export default Header;