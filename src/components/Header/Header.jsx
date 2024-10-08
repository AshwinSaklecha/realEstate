import React from 'react'
import "./Header.css"
function Header() {
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100} />
                <div className="flexCenter h-menu">
                    <a href="">Residencies</a>
                    <a href="">Our Value</a>
                    <a href="">Contact Us</a>
                    <a href="">Get Started</a>
                    <a href="">
                        <button className='button'>Contact</button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Header