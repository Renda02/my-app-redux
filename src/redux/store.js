import { createStore } from 'redux';

const initialState = {
    count: 0,
};

function reducer (state = initialState, action)  {
    switch (action.type) {
        case "INCREMENT":
           return {
             ...state, // return old state
             count: state.count + 1, // cahnge the count property to count +1
           };
        case "DECREMENT":
           return {
              ...state, 
              count: state.count - 1,
           };
           case "ADD_VALUE":
            return {
               ...state, 
               count: state.count + action.payload,
            };
            case "MINUS_VALUE":
              return {
                 ...state, 
                 count: state.count - action.payload,
              };
          
         default: return state;
    }
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;