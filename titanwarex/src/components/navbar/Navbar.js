import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className="container">
                <h1 style={{ marginLeft: '1rem', color: '#027cfe'}} >TitanWareX</h1>
                <ul className={click ? 'nav active' : 'nav'}>
                <li className="nav-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="/support">Support</a>
                    </li>
                    <li className="nav-item">
                        <a href="/webide">Web IDE</a>
                    </li>
                    <li className="nav-item">
                        <a href="/lib">Community</a>
                    </li>
                    <li className="nav-item">
                        <a className='btn' href="/login">Login</a>
                    </li>
                </ul>
                <div onClick={handleClick} className="hamburger">
                    {click ? (<AiOutlineClose className='icon' />) : (<AiOutlineMenu className='icon' />)}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
