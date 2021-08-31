import React from 'react'
import { SocialIcon } from 'react-social-icons';
import './Stylings/Footer.css'

function FooterFile() {
    return (
        <footer className="social_icons">
            
                <SocialIcon url="https://www.linkedin.com/in/khushboo-solanki-2000/" className="icons" style={{ height: 35, width: 35 }}/>
                <SocialIcon url="https://github.com/Khushboo-09" className="icons" style={{ height: 35, width: 35 }} />
                <div className="copyright">&#169; 2021</div>
            
        </footer>
    )
}

export default FooterFile
