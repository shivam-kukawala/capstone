import React from 'react'
import { BoldFont } from './UiComponents'
import styled from 'styled-components';
import { ExtraBoldFont } from './StyledComponents';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import avatar from "../images/avatar.png"
import basket from "../images/basket.svg";
import login from './login/Login';

console.log(login.props);


const Div = styled.div`
    display:grid;
    grid-template-columns:repeat(2,auto);
    padding:30px 0;
    width:inherit;
    box-sizing:border-box;
`;

const Avatar = styled.img`
    height:40px;
    width:40px;
    border-radius:20px;
    margin-right:15px;
    border:2px solid #000;
`;

const Basket = styled.button`
    background:none;
    border:none;
    outline:none;
    justify-self:end;
    grid-column:2/3;
    z-index:1;
    img{
        height:40px;
        width:40px;
    }
    &:hover{
        cursor: pointer;
        transition: transform 100ms ease-in;
        transform: translateY(-5px);
    }
`;
const CartItem = styled.div`
    padding:5px;
    border-radius:20px;
    background:#f9c907;
    grid-column:2/3;
    z-index:3;
    width:20px;
    height:20px;
    text-align:center;
    position: relative;
    transform:translate(-50%,-50%);
    top:0;
    right:0;
`;

const User = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
`;

const LandingArea = styled.div`
    display:grid;
    grid-template-columns:repeat(5,1fr);
`;

function Header({ items }) {
    return (
        <Div>
            <User>
            <Avatar src={avatar} alt="dp" />
                <BoldFont>Shivam Kukawala</BoldFont>
            </User>
            <Basket>
                <Link to="/cart" className="link">
                    <img src={basket} alt="basket" />
                    <CartItem>
                        <ExtraBoldFont size="18px"></ExtraBoldFont>
                    </CartItem>
                </Link>
            </Basket>
        </Div>
    )
}

export default Header
export { LandingArea }

