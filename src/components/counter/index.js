import { createStore, combineReducers } from 'redux';

let state = {show: true, count: 0}
function isShow (state={}, action) {
    switch (action.type) {
        case 'toshow':
            return Object.assign({}, state, {show: !state.show})
        default:
            return state;
    }
}

function todos (state={}, action) {
    switch (action.type) {
        case 'add':
            return Object.assign({}, state, {count: state.count + action.count})
        case 'del': 
            return Object.assign({}, state, {count: state.count - action.count})       
        default:
            return state;
    }
}


let store = createStore(combineReducers({todos, isShow}), state);

console.log(store.getState());
export default store;