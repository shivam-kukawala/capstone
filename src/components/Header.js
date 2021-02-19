import React from 'react'
import { BoldFont } from './UiComponents'
import styled from 'styled-components';

const Div = styled.div`
    display:grid;
    grid-template-columns:repeat(2,auto);
    padding:30px 0;
    width:inherit;
    box-sizing:border-box;
`;

const User = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
`;

const Avatar = styled.img`
    height:40px;
    width:40px;
    border-radius:20px;
    margin-right:15px;
    border:2px solid #000;
`;

function Header({ items }) {
    return (
        <Div>
            <User>
            <Avatar src={require("../images/avatar.png")} alt="dp" />
                <BoldFont>Shivam Kukawala</BoldFont>
            </User>
        </Div>
    )
}

export default Header
