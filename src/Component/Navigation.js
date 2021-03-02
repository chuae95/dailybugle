import React, {useEffect, useState} from 'react'
import {Navbar, NavDropdown, Badge} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import firebase, {auth, provider} from "../Lib/Firebase"

import "../CSS/Navigation.css"


function Navigation({cart, user, online}) {

    const [scrolled, setScrolled] = useState(false)
    let x = ["navbar"]

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
            <Navbar  expand="lg" id="MainNav" className={`Navigation ${x.join(" ")}`}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavLink style={{color: "white", fontFamily: "Shippori Mincho B1"}} className="pl-5" to="/">Home
                        <img style={{height: "3VH"}} src = "https://www.flaticon.com/svg/vstatic/svg/16/16239.svg?token=exp=1614668190~hmac=1787190a422d8a37e58be29d64ce10e2"/>
                    </NavLink>
                    <NavLink style={{color: "white", fontFamily: "Shippori Mincho B1"}} className="pl-5" to="/characters">Characters
                        <img style={{height: "3VH"}} src = "https://www.flaticon.com/svg/vstatic/svg/875/875166.svg?token=exp=1614666529~hmac=35efe4e88702dd631d8b1ee71bafad98"/>
                    </NavLink>
                    <NavLink style={{color: "white", fontFamily: "Shippori Mincho B1"}}className="pl-5" to="/comics">Comics
                        <img style={{height: "3VH"}} src = "https://www.flaticon.com/svg/vstatic/svg/171/171322.svg?token=exp=1614666671~hmac=5204d982343defa79567a2529a7b507b"/>
                    </NavLink>
                </Navbar.Collapse>
                <div style={{width: "300px"}} className="d-flex justify-content-between">
                    <NavLink to="/Cart" style={{float: "right", color: "#D4AF37"}}>
                        Cart
                        <Badge variant="light">{cart.length}</Badge>
                        <img style={{height: "3VH"}} src = "https://www.flaticon.com/premium-icon/icons/svg/3002/3002254.svg"/>
                    </NavLink>
                    {user ?
                        <div className="d-flex">
                            <button onClick={logout}>Logout</button>
                            <h6 style={{color: "white"}}>{user.displayName}</h6>
                        </div>
                        :
                        <button onClick={login}>Login</button>
                    }
                </div>
            </Navbar>
        );
     }

export default Navigation


