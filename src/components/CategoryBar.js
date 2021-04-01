import React, { useState } from 'react'
import { BoldFont, CategoryDiv } from './StyledComponents'
import styled from 'styled-components'
import { setCategory } from '../redux'
import { connect } from 'react-redux'

const Tab = styled.button`
    border:none;
    outline:none;
    font-family:'GoogleSansBold';
    background:${props => props.background ? props.background : "#f9c907"};
    padding:18px 32px;
    border-radius:50px;
    &:hover{
        cursor: pointer;
    }
`;
function CategoryBar(props) {
    const [state, setstate] = useState({ veg: true, fru: false, gro: false, dai: false, sna: false })

    const updateCategory = (item) => {
        switch (item) {
            case 'footwear': setstate({ veg: true, fru: false, gro: false, dai: false, sna: false })
                props.setCategory({ category: item })
                break
            case 'clothes': setstate({ veg: false, fru: true, gro: false, dai: false, sna: false })
                props.setCategory({ category: item })
                break
            case 'cosmetics': setstate({ veg: false, fru: false, gro: false, dai: true, sna: false })
                props.setCategory({ category: item })
                break
            case 'fan-shop': setstate({ veg: false, fru: false, gro: false, dai: false, sna: true })
                props.setCategory({ category: item })
                break
            default: return
        }
    }
    return (
        <CategoryDiv className="category-bar">
            <Tab onClick={() => updateCategory('footwear')}
                background={state.veg ? "#f9c907" : "none"}>
                <BoldFont className="category-name" color={state.veg ? "#fff" : "#5B6064"}>Footwear</BoldFont>
            </Tab>
            <Tab onClick={() => updateCategory('clothes')}
                background={state.fru ? "#f9c907" : "none"}>
                <BoldFont className="category-name" color={state.fru ? "#fff" : "#5B6064"}>Clothing and Accessories</BoldFont>
            </Tab>
            <Tab onClick={() => updateCategory('cosmetics')}
                background={state.dai ? "#f9c907" : "none"}>
                <BoldFont className="category-name" color={state.dai ? "#fff" : "#5B6064"}>Cosmetics</BoldFont>
            </Tab>
            <Tab onClick={() => updateCategory('fan-shop')}
                background={state.sna ? "#f9c907" : "none"}>
                <BoldFont className="category-name" color={state.sna ? "#fff" : "#5B6064"}>Fan-Shop</BoldFont>
            </Tab>

        </CategoryDiv>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setCategory: (state) => dispatch(setCategory(state)),
    }
}
export default connect(null, mapDispatchToProps)(CategoryBar)
