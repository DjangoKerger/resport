import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
           <Nav>
               <NavbarContainer>
                   <NavLogo to='/'>
                       Django
                   </NavLogo>
                   <MobileIcon onClick={toggle}>
                       <FaBars />
                   </MobileIcon>
                   <NavMenu>
                       <NavItem>
                           <NavLinks to="about">About</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="discover">Projects</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="services" onClick={() => window.location = 'mailto:kerger06@aol.com'}>Contact Me</NavLinks>
                       </NavItem>
                       {/* <NavItem>
                           <NavLinks to="signup">Sign Up</NavLinks>
                       </NavItem> */}
                   </NavMenu>
                   {/* <NavBtn>
                       <NavBtnLink to="/signin">Sign In</NavBtnLink>
                   </NavBtn> */}
               </NavbarContainer>
           </Nav> 
        </>
    )
}

export default Navbar;
