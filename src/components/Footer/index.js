import React from 'react';
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems,FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, WebsiteRights  } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        {/* <FooterLinkItems> */}
                            {/* <FooterLinkTitle> Contact Me</FooterLinkTitle>
                                <FooterLink to="/signin"> How it works </FooterLink>
                                <FooterLink to="/signin"> testimonials </FooterLink>
                                <FooterLink to="/signin"> Careers </FooterLink>
                                <FooterLink to="/signin"> Investors </FooterLink>
                                <FooterLink to="/signin"> Terms of service </FooterLink>
                            
                        </FooterLinkItems> */}
                        {/* <FooterLinkItems>
                            <FooterLinkTitle> About Us</FooterLinkTitle>
                                <FooterLink to="/signin"> How it works </FooterLink>
                                <FooterLink to="/signin"> testimonials </FooterLink>
                                <FooterLink to="/signin"> Careers </FooterLink>
                                <FooterLink to="/signin"> Investors </FooterLink>
                                <FooterLink to="/signin"> Terms of service </FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us</FooterLinkTitle>
                                <FooterLink to="/signin"> How it works </FooterLink>
                                <FooterLink to="/signin"> testimonials </FooterLink>
                                <FooterLink to="/signin"> Careers </FooterLink>
                                <FooterLink to="/signin"> Investors </FooterLink>
                                <FooterLink to="/signin"> Terms of service </FooterLink>
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us</FooterLinkTitle>
                                <FooterLink to="/signin"> How it works </FooterLink>
                                <FooterLink to="/signin"> testimonials </FooterLink>
                                <FooterLink to="/signin"> Careers </FooterLink>
                                <FooterLink to="/signin"> Investors </FooterLink>
                                <FooterLink to="/signin"> Terms of service </FooterLink>
                            
                        </FooterLinkItems> */}
                    </FooterLinksWrapper>
                    <SocialMedia>
                        <SocialMedia>
                            <SocialMediaWrap>
                                <SocialLogo to='/'>
                                    
                                </SocialLogo>
                                
                                <SocialIcons>
                                    <SocialIconLink href="//https://www.facebook.com/django.kerger/" target="_blank" aria-label="Facebook">
                                        <FaFacebook />
                                    </SocialIconLink>
                                    <SocialIconLink href="//https://www.linkedin.com/in/django-kerger-5a1a081a8/" target="_blank" aria-label="Linkedin">
                                        <FaLinkedin />
                                    </SocialIconLink>
                                    <SocialIconLink href="//https://github.com/DjangoKerger" target="_blank" aria-label="Github">
                                        <FaGithub />
                                    </SocialIconLink>
                                </SocialIcons>
                            </SocialMediaWrap>
                        </SocialMedia>
                    </SocialMedia>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;