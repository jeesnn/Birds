import {
    RECEIVE_ALL_SHOES,
    RECEIVE_SHOE
} from '../actions/shoes_actions';

const shoesReducer = (oldState={}, action) => {
    Object.freeze(oldState);

    let shoe;

    switch(action.type) {
        case RECEIVE_ALL_SHOES:
            return Object.assign({}, oldState, action.shoes);
        case RECEIVE_SHOE:
            shoe = action.payload.shoes;

            const newShoe = { [action.shoe.id]: action.shoe };

            return Object.assign({}, oldState, newShoe);
        default:
            return oldState;
    }
};

export default shoesReducer;