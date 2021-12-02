import React from 'react'
import styled from 'styled-components'
import BgImg from '../assets/main-banner.jpg'

const Section = styled.section`
background: black;
    width: 100%;
    height: auto;
`;

const Img = styled.img`
    width: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
`

const Hero = () => {
    return (
        <Section>
            <Img src={BgImg} />
        </Section>
    )
}

export default Hero
