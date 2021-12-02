import styled from 'styled-components'
import { AiFillHeart } from 'react-icons/ai';

export const ProductItemCotainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    background-color: #fff;
`;
export const ProductItemWrapper = styled.div`
    padding: 5rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(230px, 1fr));
    grid-gap: 20px;
`;

export const ProductCard = styled.div`
    min-width: 250px;
    max-width: 100%;
    overflow: hidden;
`;

export const ProductImage = styled.img`
    height: 70%;
    width: 100%;
    cursor: pointer;
`;

export const ProductInfo = styled.div`
    display: grid;

`;

export const ProductTitle = styled.span`
    font-size: 18px;
    font-weight: 600; 
    line-height: 1.94; 
    color: #222222;
    margin: 20px 0;
    cursor: pointer;
`;

export const ProductBox = styled.div`
    min-width: 200px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ProductPrice = styled.span`
    width: 240px;
    font-size: 16px;
    color: #222222;
    line-height: 2.19;
    cursor: pointer;
`;

export const ProductIcon = styled(AiFillHeart)`
    color: #fa7b26;
    width: 19px;
    width: 16px;
    cursor: pointer;

    &:hover {
        color: gray;
    }
`;
export const ProductLike = styled.span`
    font-size: 16px;
    width: 30px;
    color: #222222;
    cursor: pointer;
`;
export const ProductButton = styled.button`
    position: relative;
    margin-left: 50%;
    transform: translateX(-50%);
    text-transform: uppercase;
    color: #222222;
    font-size: 23px;
    border: 3px solid #222222;
    background-color: #ffffff;
    padding: 21px 36px 21px 37px;
    margin-bottom: 5rem;
`;

