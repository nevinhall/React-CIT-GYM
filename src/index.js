import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'



//Action
const increment = () => {
  return{
    type: 'INCREMENT'
  }
}

//Action
const decrement = () => {
  return{
    type: 'DECREMENT'
  }
}

//Reducer
const counter = (state = 0, action) => {
  switch(action.type){
    case "INCREMENT":
      return state +1;
    case "DECREMENT":
      return state -1;

  }

}

let store = createStore(counter)

//Display
store.subscribe(() => console.log(store.getState()))

//Dispatch
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(decrement())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();