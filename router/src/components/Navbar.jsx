import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css";


function Navbar() {
  return (
    <header>
        <div className='container'>
            <div id='branding'>
                <h1>
                    <span className='highlight'>Clarusway</span> Web Design
                </h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li className='current'>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                </ul>
            </nav>

        </div>

    </header>
  )
}

export default Navbar