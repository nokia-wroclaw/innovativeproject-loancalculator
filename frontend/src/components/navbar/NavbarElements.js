import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: linear-gradient(88.54deg, #271F7F -0.21%, #5E60CE 60.5%, #00FFD4 112.08%);
    height: 80px;
    display: flex;
    justify-content: space-around;
    padding: 0.5rem calc((100vw - 1000px) /2);
    z-index: 10000;

`;

export const NavLink = styled(Link)`
    color: #fff;
    align-items: center;
    text-decoration: none;
    padding:  1.5rem;
    height: 100%;
    cursor: pointer;
    display: flex;
    &.active {
    font-weight: 600;
    }
    
`;

export const HamburgerIcon = styled(FaBars)`
    color: #ffffff;
`

export const Icon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        background: transparent;
        font-size: 2rem;
        cursor: pointer;
        outline: none;
    }
`
export const NavMenu =  styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #ffffff;
    padding: 10px 22px;
    color: rgba(39, 31, 127, 1);
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2 ease-in-out;
        background: transparent;
        color: #fff;
    }
`;
