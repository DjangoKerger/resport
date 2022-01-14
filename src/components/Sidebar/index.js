import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute } from './SidebarElements';

const index = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={() => window.location = 'mailto:kerger06@aol.com'}>
                        Contact Me
                    </SidebarLink>
                </SidebarMenu>
                {/* <SidebarBtnWrap>
                    <SidebarRoute to="/">Sign In</SidebarRoute>
                </SidebarBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default index
