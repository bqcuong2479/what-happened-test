import React from 'react'
import styled from 'styled-components'
import Intro from '../assets/introduction-bg.png'

const Section = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
`;

const Img = styled.img`
    width: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    z-index: -1;
`;

const Content = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    width: 40%;
    height: auto;

    @media screen and (max-width: 960px) {
        width: 70%;
    }
`;

const Title = styled.span`
    width: 100%;
    font-size: 50px;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: 5px;
    color: #ffffff;

    @media screen and (max-width: 960px) {
        font-size: 30px;
    }

    @media screen and (max-width: 600px) {
        font-size: 20px;
    }

`;

const Desc = styled.span`
    width: 100%;
    font-family: Montserrat;
    font-size: 20px;
    line-height: 1.75;
    color: #ffffff;

    @media screen and (max-width: 960px) {
        font-size: 16px;
    }

    @media screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const Banner = () => {
    return (
        <Section>
            <Img src={Intro} />
            <Content>
                <Title>
                    What Happened!
                </Title>
                <Desc>
                    How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first
                    step to your brand's success. How to create
                    mobile-optimized videos in minutes.
                </Desc>
            </Content>
        </Section>
    )
}

export default Banner
