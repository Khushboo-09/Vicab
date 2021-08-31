import React from 'react'
import './Stylings/Head.css'
import logo from './logo.png'

function HeaderFile() {
    return (

        <nav className="navBar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="heading">Search for words on Vocab...</div>
        </nav>


    )
}

export default HeaderFile
