import React from 'react';
import styled from 'styled-components';

const NavbarStyle = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    background-color: ${props => props.theme.theme.navbar_color};

    .logo {
        display: flex;
        align-items: center;
        gap: 20px;
    }   

    .logo span {
        font-size: 1.3em;
        font-weight: 700;
        font-family: sans-serif;
        color: #fff;
    }

    ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        gap: 12px;
    }

    ul a {
        text-decoration: none;
        color: #fff;
        font-family: sans-serif;
        font-weight: 600;
        transition: .4s;
    }

    ul a:hover {
        color: #f4bb35;

    }

    #switch {
        position: relative;

    }

    #input_slide {
        position: relative;
        cursor: pointer;
        width: 45px;
        height: 20px;
        appearance: none;
        background-color: #c6c6c6;
        outline: none;
        border-radius: 20px;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        transition: .4s;
    }

    #input_slide:checked {
        background: #c24627;
    }

    #input_slide::before {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        top: 0;
        left: 0;
        background: #fff;
        transform: scale(1.2);
        box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
        transition: .4s;
    }

    #input_slide:checked::before {
        left: 25px;
    }
`

export default NavbarStyle;