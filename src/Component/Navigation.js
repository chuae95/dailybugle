import React, {useEffect, useState} from 'react'
import {Navbar, NavDropdown, Badge} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import firebase, {auth, provider} from "../Lib/Firebase"

import "../CSS/Navigation.css"


function Navigation({cart, user, online}) {

    const [scrolled, setScrolled] = useState(false)
    let x = ["navbar"]

    function selectNav(e) {
        e.target.style.color = "black";
        e.target.style.backgroundColor = "white";
    }

    function unselectNav(e) {
        e.target.style.color = "white";
        e.target.style.backgroundColor = "black";
    }

    function handleScroll() {
        const offset = window.scrollY
        let a = document.querySelector("#MainNav")

        if(offset > 200) {
            a.style.position = "fixed"
        } else {
            a.style.position = "relative"
        }
    }

    function login() {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                online(user)
            })

    }

    function logout() {
        auth.signOut()
            .then(() => {
                online(null)
            })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    if (scrolled) {
        x.push("scrolled")
    }


        return (
            <Navbar expand="lg" style={{height: "5VH"}} id="MainNav" className={`Navigation ${x.join(" ")}`}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div onMouseEnter={selectNav} onMouseLeave={unselectNav} className="d-flex justify-content-center">
                        <NavLink style={{color: "white", fontFamily: "Shippori Mincho B1"}} className="nav-link" to="/">Home</NavLink>
                    </div>
                    <div onMouseEnter={selectNav} onMouseLeave={unselectNav}>
                    <NavLink style={{color: "white", fontFamily: "Shippori Mincho B1"}} className="nav-link" to="/characters">Characters</NavLink>
                    </div>
                    <div onMouseEnter={selectNav} onMouseLeave={unselectNav}>
                    <NavLink style={{color: "white", fontFamily: "Shippori Mincho B1"}}className="nav-link" to="/comics">Comics</NavLink>
                    </div>
                </Navbar.Collapse>
                <div style={{width: "300px"}} className="d-flex justify-content-start align-items-center">
                    <div onMouseEnter={selectNav} onMouseLeave={unselectNav}  className="nav">
                        <NavLink className="nav-link" to="/Cart" style={{fontFamily: "Shippori Mincho B1", float: "right", color: "white"}}>
                            Cart
                            <Badge className="ml-3" variant="secondary">{cart.length}</Badge>
                        </NavLink>
                    </div>

                    {user ?
                        <div className="d-flex align-items-center">
                            <button className="mr-3" style={{height: "30px"}} onClick={logout}>Logout</button>
                            <h6 style={{color: "white"}}>Signed in as <br/> {user.displayName}</h6>
                        </div>
                        :
                        <button onClick={login}>Login</button>
                    }
                </div>
            </Navbar>
        );
     }

export default Navigation


