import { VIEW, SET } from './viewTypes'

const initialState = {
    name: 'Clarks Women Raisie Arlie Loafer',
    oldPrice: '35.11',
    newPrice: '32.21',
    qty: 'KG',
    image: "https://img.shop.com/Image/280000/283500/283519/products/1857182879__200x200__.jpg"
}

const viewReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIEW: return {
            ...state,
        }
        case SET: return {
            ...state,
            name: action.payload.name,
            oldPrice: action.payload.oldPrice,
            newPrice: action.payload.newPrice,
            qty: action.payload.qty,
            image: action.payload.image
        }
        default: return state
    }
}

export default viewReducer