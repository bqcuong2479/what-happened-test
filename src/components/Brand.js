import React from 'react'
import styled from 'styled-components'
import left from '../assets/window.png'
import right from '../assets/introduction-bg.png'

const BrandContainer = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0565bb;
    mix-blend-mode: multiply;
    padding-bottom: 7%;
`;

const BrandWrapper = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

const BrandWrapperItem = styled.div`
width: 100%;
    display: flex;
    flex-direction: column;
`;

const BrandTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    text-align: center;
    margin: 5% 0;
/* 
    @media screen and (max-width: 960px) {
        width: 70%;
    } */
`;

const Title = styled.span`
    width: 100%;
    font-size: 50px;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: 5px;
    color: #fcd32a;
    text-align: center;
    margin-bottom: 2.5%;

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
    color: #fcd32a;

    @media screen and (max-width: 960px) {
        font-size: 8px;
    }

    @media screen and (max-width: 600px) {
        font-size: 5px;
    }
`;



const BrandContent = styled.div`
    position: relative;
    width: 100%;
    height: auto;
`;


const BrandContentItem = styled.img`
    width: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    z-index: 1;
`;

const BrandContentWrapper = styled.div`
    position: absolute;
    margin: 7% 5% 0 52%;
    display: flex;
    flex-direction: column;

`;


const BrandContentTitle = styled.span`
    margin: 0 10% 3% 0;
    font-size: 1.8vw;
    font-weight: 800;
    color: #222222;

`;

const BrandContentDesc = styled.span`
    margin-bottom: 3%;
    font-size: 1.2vw;
    font-weight: 300;
`;

const BrandContentButton = styled.button`
    position: relative;
    width: 45%;
    text-transform: uppercase;
    color: #222222;
    font-size: 1.5vw;
    border: 3px solid #222222;
    background-color: #ffffff;
    padding: 3%;
    margin-bottom: 5rem;
    font-weight: 800;
`;

const Banner = () => {
    return (
        <BrandContainer>
            <BrandWrapper>
                <BrandWrapperItem>
                    <BrandTitle>
                        <Title>
                            Brand Story
                        </Title>
                        <Desc>
                            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서 <br></br>
                            다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                        </Desc>
                    </BrandTitle>
                    <BrandContent>
                        <BrandContentWrapper>
                            <BrandContentTitle>
                                What Happened’s Brand story
                            </BrandContentTitle>
                            <BrandContentDesc>
                                청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을
                                봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                                긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                                인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                                아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다.
                            </BrandContentDesc>
                            <BrandContentButton>
                                See more
                            </BrandContentButton>
                        </BrandContentWrapper>
                        <BrandContentItem src={left} />


                    </BrandContent>
                </BrandWrapperItem>
            </BrandWrapper>
        </BrandContainer>
    )
}

export default Banner
