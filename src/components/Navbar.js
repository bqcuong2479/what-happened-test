import React from 'react';
import styled from 'styled-components/macro';
import Img from '../assets/logo.png';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.div`
    width: 100%;
    height: 80px;
    z-index: 20;
    background: #111111;
`;

const NavbarWrap = styled.div`
    width: 100%;
    height: 100%;
    z-index: 20;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 120px 0 97px;
`;

const Logo = styled.div`
    width: 226px;
    height: 26px;
    background: url(${Img}) 0 45% no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
`;

const Nav = styled.nav`
    flex: 1;
    position: relative;
    display: flex;
    justify-content: flex-end;
`;

const NavLink = styled(Link)`
    color: #ffffff;
    padding: 0 15px;
    font-size: 14px;
    line-height: 80px;
    text-decoration: none;
    font-weight: 700;
    text-transform: uppercase;
`;


const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarWrap>
                <Logo />
                <Nav>
                    <NavLink to="/">Introduction</NavLink>
                    <NavLink to="/">solution</NavLink>
                    <NavLink to="/">|</NavLink>
                    <NavLink to="/">login</NavLink>
                    <NavLink to="/">Apply for free use</NavLink>
                </Nav>
            </NavbarWrap>
        </NavbarContainer>
    )
}

export default Navbar
