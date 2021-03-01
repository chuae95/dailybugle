import React, {useEffect} from 'react'
import {Navbar, NavDropdown} from "react-bootstrap"
import {NavLink} from "react-router-dom"

import "../CSS/Navigation.css"


function Navigation() {

        return (
            <Navbar style={{backgroundColor: "black"}} expand="lg" className="Navigation">
                <Navbar.Brand style={{color: "#D4AF37"}}>Daily Bugle</Navbar.Brand>
                <img style={{height: "30px", width: "50px"}}src ="https://c4.wallpaperflare.com/wallpaper/865/653/298/2012-the-avengers-avengers-logo-wallpaper-preview.jpg"/>
                <img src="https://img.icons8.com/pastel-glyph/64/000000/around-the-globe--v1.png"/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavLink style={{color: "#D4AF37"}} className="pl-5" to="/">Home</NavLink>
                    <NavLink style={{color: "#D4AF37"}} className="pl-5" to="/characters">Characters</NavLink>
                    <NavLink style={{color: "#D4AF37"}} className="pl-5" to="/comics">Comics</NavLink>
                </Navbar.Collapse>
            </Navbar>
        );
     }

export default Navigation


