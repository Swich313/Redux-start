import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';

import reducer from "./reducer";
import {inc, dec, rnd} from "./actions";

const store = createStore(reducer);

const {dispatch, subscribe, getState} = store;

const update = () => {
    document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

const incDispatch = () => dispatch(inc());
const decDispatch = () => dispatch(dec());
const rndDispatch = (value) => dispatch(rnd(value));


document.getElementById('inc').addEventListener('click', incDispatch)

document.getElementById('dec').addEventListener('click', decDispatch)

document.getElementById('rnd').addEventListener('click', ()=> {
    const value  = Math.floor(Math.random() * 10);
    rndDispatch(value)
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
