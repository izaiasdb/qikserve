import { combineReducers } from 'redux';

const rootReducer = combineReducers({  
    product: require('../pages/product/redux').reducer,
    song: require('../pages/song/redux').reducer,
});

export default rootReducer;