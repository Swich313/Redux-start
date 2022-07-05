import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';


const initialState = {value: 0};

const reducer = (state = initialState, action) => {   //reducer должен быть чистой функцией
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                value: state.value + 1
            };
        case 'DEC':
            return {
                ...state,
                value: state.value - 1
            };
        case 'RND':
            return {
                ...state,
                value: state.value * action.payload
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

const update = () => {
    document.getElementById('counter').textContent = store.getState().value;
    console.log(store.getState());
}

store.subscribe(update);

const inc = () => {
    return {
        type: 'INC'
    }
}                                           //ф-ция Action Creator

const dec = () => ({type: 'DEC'});          //ф-ция Action Creator
//const rnd = (value) => ({type: 'RND', payload: value});

document.getElementById('inc').addEventListener('click', ()=> {
    store.dispatch(inc());
})

document.getElementById('dec').addEventListener('click', ()=> {
    store.dispatch(dec());
})

document.getElementById('rnd').addEventListener('click', ()=> {
    const value  = Math.floor(Math.random() * 10);
    store.dispatch({type: 'RND', payload: value});
})





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <>

   </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
