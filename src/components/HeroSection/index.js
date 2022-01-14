import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer , HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElements';

const HeroSection = () => {
    
    const [hover, setHover] = useState(false);

        const onHover = () => {
            setHover(!hover)
        }
    
    
    return (
        

        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1> Djangos portfolio </HeroH1>
                <HeroP>
                    Hello, I'm Django. I am Web Developer looking for an entry level opportunity. 
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        onClick={() => window.location = 'mailto:yourmail@gmail.com'}
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        >
                        Contact me {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;