import React from 'react';
import {
    ProductItemCotainer,
    ProductItemWrapper,
    ProductCard,
    ProductImage,
    ProductInfo,
    ProductTitle,
    ProductPrice,
    ProductIcon,
    ProductLike,
    ProductBox,
    ProductButton
} from './ProductsItemElement';


const ProductsItem = ({ data }) => {
    return (
        <ProductItemCotainer>
            <ProductItemWrapper>
                {data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImage src={product.img} />
                            <ProductInfo>
                                <ProductTitle>{product.title}</ProductTitle>
                                <ProductBox>
                                    <ProductPrice>{product.price}</ProductPrice>
                                    <ProductIcon></ProductIcon>
                                    <ProductLike>{product.icon}</ProductLike>
                                </ProductBox>
                            </ProductInfo>
                        </ProductCard>
                    );
                })}
            </ProductItemWrapper>
            <ProductButton>See More</ProductButton>
        </ProductItemCotainer>
    )
}

export default ProductsItem
