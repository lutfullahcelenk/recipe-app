import React, { useState } from 'react';
import {Nav, Logo, Hamburger, Menu, MenuLink} from "./Navbarstyle";


const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false);

    return (
        <Nav>
            <Logo to="/">
                <i>{"<LUTFULAH>"}</i> <span>recipe</span>
            </Logo>

            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>

            <Menu isOpen={isOpen}>
                <MenuLink to="/about">About</MenuLink>
                <MenuLink to="https://github.com/lutfullahcelenk">GitHub</MenuLink>
                <MenuLink to="login">Logout</MenuLink>
            </Menu>
        </Nav>
       
    );
    }

export default Navbar;
