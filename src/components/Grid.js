import React from 'react'
import styled from 'styled-components'
import ItemContainer from './ItemContainer';
import Groceries from './GroceryStore.json'
import { viewCategory } from '../redux'
import { connect } from 'react-redux'
import Shoes from './shoes.json'
import Clothes from './clothes.json'
import Cosmetics from './cosmetics.json'
import FanShop from './fan-shop.json'

const Container = styled.div`
    padding:50px;
    box-sizing:border-box;
    overflow-y:scroll;
    
    margin-right:24px;
    background:#fff;

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #5B6064;
        border: 4px solid transparent;
        background-clip: content-box; 
    }
    ::-webkit-scrollbar-thumb {
        background: #6B7278;
        border: 1px solid #6B7278;
        border-radius:5px;
    }
`;

function Grid(props) {

    let GroceryItems = []
    switch (props.category) {
        case 'footwear': GroceryItems = Shoes['products']
            break;
        case 'clothes': GroceryItems = Clothes['products']
            break;
        case 'cosmetics': GroceryItems = Cosmetics['products']
            break;
        case 'fan-shop': GroceryItems = FanShop['products']
            break;
        default: return
    }

    return (
        <Container className="grid-container">
            {GroceryItems.map((footwear, key) => (
                <ItemContainer
                    key={key}
                    name={footwear.name}
                    image={footwear.image.sizes[0].url}
                    oldPrice={footwear.maximumPrice}
                    newPrice={footwear.minimumPrice}
                    // qty={vegetable.qty}
                />
            ))}
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        category: state.category.category
    }
}
const mapDispatchToProps = dispatch => {
    return {
        viewCategory: () => dispatch(viewCategory()),
    }
}
export default connect(mapStateToProps, null)(Grid)
