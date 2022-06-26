import React from "react";
// import { NavLink } from "react-router-dom";
import {Nav, NavLink, NavBtn, NavMenu, NavBtnLink, Bars} from "./NavbarElements";
import Logo from '../images/guiLogo.png';

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={Logo} alt="g"></img>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            Sobre
          </NavLink>
          <NavLink to="/services" activeStyle>
            Stacks
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contato
          </NavLink>
          {/* <NavLink to="/signup" activeStyle>
            Sign Up
          </NavLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Siga-me</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBar;
