import React from 'react'
import styled from 'styled-components'
import PrdImg from '../assets/bes-bg.png'
import item1 from '../assets/best-image-01.png'
import item2 from '../assets/best-image-02.png'
import item3 from '../assets/best-image-03.png'
import prd1 from '../assets/producticon-01.png'
import prd2 from '../assets/producticon-02.png'
import prd3 from '../assets/producticon-03.png'
import go from '../assets/go-icon.png'


const Section = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
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
    margin-top: 5%;
    text-align: center;
    
`;

const Title = styled.span`
    font-size: 4vw;
    font-weight: bold;
    line-height: 1.2;
    letter-spacing: 5px;
    text-align: center;
    color: #f96400;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Desc = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const DescContent = styled.span`
    width: 100%;
    font-size: 1.2vw;
    line-height: 1.6;
    text-align: center;
    color: #f96400;
    display: flex;
    justify-content: center;
`;
const Product = styled.div`
    position: absolute;
    width: 80%;
    height: 47%;
    background-color: red;
    transform: translateY(72%);
    display: flex;
    justify-content: center;
`;
const ProductItem = styled.div`
    position: relative;
    width: calc(100% / 3);
    height: 100%;
    display: flex;
    justify-content: center;
    transform-origin: left top;
`;
const Item = styled.img`

    width: 100%;
    height: 100%;
    
`;
const Stick = styled.img`
    position: absolute;
    width: 5vw;
    height: 5vw;
    top: 0;
    left: 0;
    transform: translateY(-50%);
`;
const ItemContent = styled.div`
    position: absolute;
    width: 80%;
    height: 20%;
    background-color: #ffffff;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: solid 3px #020001;
    padding: 3%;
    transform: translateY(50%);
`;
const ItemContentTitle = styled.div`
    width: 70%;
    height: auto;
    font-size: 1vw;
    font-weight: 800;
`;
const ItemContentIcon = styled.img`
    width: 3vw;
    height: 3vw;

    /* @media screen and (max-width: 1200px) {
        width: 28px;
        height: 28px;
    }

    @media screen and (max-width: 960px) {
        width: 24px;
        height: 24px;
    }

    @media screen and (max-width: 600px) {
        width: 16px;
        height: 16px;
    } */
`;


const Products = () => {
    return (
        <Section>
            <Img src={PrdImg} />
            <Content>
                <Title>
                    Best Product
                </Title>
                <Desc>
                    <DescContent>
                        How to create mobile-optimized videos in minutes. Not a designer,<br></br>
                        every team makes a lot of videos Can be trimmed. Take the first
                    </DescContent>
                </Desc>
            </Content>
            <Product>
                <ProductItem>
                    <Item src={item1}></Item>
                    <Stick src={prd1}></Stick>
                    <ItemContent>
                        <ItemContentTitle>
                            How to create mobile-optimized
                        </ItemContentTitle>
                        <ItemContentIcon src={go}></ItemContentIcon>
                    </ItemContent>
                </ProductItem>
                <ProductItem>
                    <Item src={item2}></Item>
                    <Stick src={prd2}></Stick>
                    <ItemContent>
                        <ItemContentTitle>
                            How to create mobile-optimized
                        </ItemContentTitle>
                        <ItemContentIcon src={go}></ItemContentIcon>
                    </ItemContent>
                </ProductItem>
                <ProductItem>
                    <Item src={item3}></Item>
                    <Stick src={prd3}></Stick>
                    <ItemContent>
                        <ItemContentTitle>
                            How to create mobile-optimized
                        </ItemContentTitle>
                        <ItemContentIcon src={go}></ItemContentIcon>
                    </ItemContent>
                </ProductItem>

            </Product>
        </Section>
    )
}

export default Products