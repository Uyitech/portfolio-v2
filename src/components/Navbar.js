import React from 'react'
import { useState, useEffect } from "react"

function Navbar(props) {

    const [bgChange, setBgChange] = useState(false);

    useEffect(() => {
        const changeNavbarBg = () => {
            if (window.scrollY >= 30) {
                setBgChange(true);
            }
            else {
                setBgChange(false);
            }
        };
        window.addEventListener('scroll', changeNavbarBg);
    }, [])

    // useEffect(() => {
    //     const switchElement = document.getElementById("theme-mode")

    //     switchElement.addEventListener('click', () => {
    //         document.body.classList.toggle('light')
    //     })
    // }, [])

    return (
        <nav id="navBar" className={bgChange ? 'navbar navbar-default navbar-expand-lg bgChange' : 'navbar navbar-default navbar-expand-lg'}>
            <div className="container">
                <a id="logo" className="navbar-brand title" href="#home">Uyi<span className="tech">Tech</span></a>
                <div className="form-check form-switch order-lg-2 me-2 me-lg-4 ms-auto" id="switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="theme-mode" onChange={props.toggle} checked={props.checked} />
                    <label className="form-check-label" htmlFor="theme-mode"><i className="bi bi-moon"></i></label>
                    <label className="form-check-label" htmlFor="theme-mode"><i className="bi bi-sun"></i></label>
                </div>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarDefault">
                    <ul className="navbar-nav m-auto mb-lg-0">
                        <li className="nav-item active"><a className="nav-link scrollTo" href="#home">Home</a></li>
                        <li className="nav-item"><a className="nav-link scrollTo" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link scrollTo" href="#skills">Skills</a></li>
                        <li className="nav-item"><a className="nav-link scrollTo" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link scrollTo" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link scrollTo" href="#contact">Contact Me</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;